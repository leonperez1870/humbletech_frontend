import React, { createContext, useState, useEffect } from "react";
import Client from 'shopify-buy';

// Interfaces
interface LineItem {
  variantId: string;
  quantity: number;
}

interface Checkout {
  id: string;
  completedAt?: string;
  lineItems: LineItem[];
}

interface ClientType extends Client {
  checkout: {
    create: () => Promise<Checkout>;
    addLineItems: (id: string, items: LineItem[]) => Promise<Checkout>;
    removeLineItems: (id: string, items: string[]) => Promise<Checkout>;
    addDiscount: (id: string, coupon: string) => Promise<Checkout>;
    removeDiscount: (id: string, coupon: string) => Promise<Checkout>;
    fetch: (id: string) => Promise<Checkout>;
  };
}

interface ShopContextProps {
  quantity: number;
  checkout: Checkout;
  coupon: string;
  addProductToCart: (variantId: string, quantity: number) => void;
  removeProductFromCart: (id: string) => void;
  applyCoupon: (coupon: string) => void;
  removeCoupon: (coupon: string) => void;
}

interface ShopifyProviderProps {
  children: React.ReactNode;
}

// Client
const domain = process.env.GATSBY_SHOPIFY_SHOP_NAME as string;
const client: ClientType = Client.buildClient({
  storefrontAccessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN as string,
  domain,
});

// Default values
const defaultValues: ShopContextProps = {
  quantity: 0,
  checkout: {
    lineItems: [],
    id: '',
  },
  coupon: '',
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  applyCoupon: () => {},
  removeCoupon: () => {},
};

// Context
export const ShopContext = createContext<ShopContextProps>(defaultValues);

// Provider
export const ShopifyProvider: React.FC<ShopifyProviderProps> = ({ children }) => {
  const [checkout, setCheckout] = useState<Checkout>(defaultValues.checkout);
  const [coupon, setCoupon] = useState<string>('');

  const handleCheckout = async (callback: (checkoutId: string) => Promise<Checkout>) => {
    try {
      const newCheckout = await callback(checkout.id);
      setCheckout(newCheckout);
    } catch (e) {
      console.error(e);
    }
  };

  const addProductToCart = (variantId: string, quantity: number) => {
    handleCheckout((checkoutId) => client.checkout.addLineItems(checkoutId, [{ variantId, quantity }]));
  };

  const removeProductFromCart = (id: string) => {
    handleCheckout((checkoutId) => client.checkout.removeLineItems(checkoutId, [id]));
  };

  const applyCoupon = (coupon: string) => {
    handleCheckout((checkoutId) => client.checkout.addDiscount(checkoutId, coupon));
  };

  const removeCoupon = (coupon: string) => {
    handleCheckout((checkoutId) => client.checkout.removeDiscount(checkoutId, coupon));
  };

  const quantity = checkout.lineItems?.reduce((total, item) => total + item.quantity, 0) || 0;

  useEffect(() => {
    const initializeCheckout = async () => {
      if (typeof window !== 'undefined') {
        const checkoutId = localStorage.getItem('checkout_id');
        let newCheckout = null;
  
        if (checkoutId) {
          newCheckout = await client.checkout.fetch(checkoutId);
          if (newCheckout.completedAt) {
            newCheckout = await client.checkout.create();
          }
        } else {
          newCheckout = await client.checkout.create();
        }
        localStorage.setItem('checkout_id', newCheckout.id);
        setCheckout(newCheckout);
      }
    };
  
    initializeCheckout();
  }, []);  

  return (
    <ShopContext.Provider
      value={{
        quantity,
        checkout,
        coupon,
        addProductToCart,
        removeProductFromCart,
        applyCoupon,
        removeCoupon,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

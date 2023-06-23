import React, { createContext, useState, useEffect } from "react";
import Client from 'shopify-buy';

// Interfaces
interface PriceV2 {
  amount: string;
  currencyCode: string;
}

interface Variant {
  id: string;
  title: string;
  priceV2: PriceV2;
  immage?: {
    src: string;
  };
}

interface LineItem {
  id: string;
  title: string;
  quantity: number;
  variant: Variant;
}

interface Checkout {
  id: string;
  completedAt?: string;
  lineItems: LineItem[];
  totalPriceV2: PriceV2;
  webUrl: string;
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
  isLoading: boolean;
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
    totalPriceV2: {
      amount: '0',
      currencyCode: 'USD',
    },
    webUrl: '',
  },
  coupon: '',
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  applyCoupon: () => {},
  removeCoupon: () => {},
  isLoading: false,
};

// Context
export const ShopContext = createContext<ShopContextProps>(defaultValues);

// Provider
export const ShopifyProvider: React.FC<ShopifyProviderProps> = ({ children }) => {
  const [checkout, setCheckout] = useState<Checkout>(defaultValues.checkout);
  const [coupon, setCoupon] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleCheckout = async (callback: (checkoutId: string) => Promise<Checkout>) => {
    setLoading(true);
    try {
      const newCheckout = await callback(checkout.id);
      setCheckout(newCheckout);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
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
      setLoading(true);
      if (typeof window !== 'undefined') {
        let newCheckout: Checkout | null = null;
        const checkoutId = localStorage.getItem('checkout_id');
    
        if (checkoutId) {
          try {
            const fetchedCheckout = await client.checkout.fetch(checkoutId);
            if (!fetchedCheckout.completedAt) {
              newCheckout = {
                id: fetchedCheckout.id,
                completedAt: fetchedCheckout.completedAt,
                lineItems: fetchedCheckout.lineItems,
                totalPriceV2: fetchedCheckout.totalPriceV2,
                webUrl: fetchedCheckout.webUrl,
              };
            }
          } catch (error) {
            console.error(error);
          }
        }
    
        if (!newCheckout) {
          newCheckout = await client.checkout.create();
        }
    
        if (newCheckout) {
          localStorage.setItem('checkout_id', newCheckout.id);
          setCheckout(newCheckout);
        }
      }
      setLoading(false);
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
        isLoading: loading,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

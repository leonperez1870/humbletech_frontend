import React, { useContext } from 'react';
import { ShopContext } from '../../utils/shopify/shop';

interface ShoppingCartProps {
  toggleCart: () => void;
  isCartOpen: boolean;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ toggleCart, isCartOpen }) => {
  const { checkout, removeProductFromCart } = useContext(ShopContext);

  const handleRemove = (lineItemId: string) => {
    removeProductFromCart(lineItemId);
  };

  console.log(checkout)

  return (
    <div className={`Shopping-cart ${isCartOpen ? 'cart-open' : 'cart-close'} fixed right-0 h-full bg-white shadow-lg z-50 overflow-y-scroll`}>
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <p className="text-lg font-bold uppercase">Your Cart</p>
        <button
          onClick={() => toggleCart()}
          aria-label="close shopping cart button"
          className="icon icon-close"
        />
      </div>
      {checkout.lineItems.length < 1 ? (
        <p className="p-4">Your cart is empty</p>
      ) : (
        checkout.lineItems.map((item) => (
          <div key={item.id} className="Shopping-cart__items flex items-start justify-between p-4 border-b border-gray-200">
            <div className='mr-2'>
              <img className="w-16" src={item.variant.image.src} alt={item.title} />
            </div>
            <div className='mr-2'>
              <p className="font-bold text-base mb-1">{item.title}</p>
              <p className="text-sm my-1">{item.variant.title}</p>
              <p className="text-sm my-1">Quantity: {item.quantity}</p>
            </div>
            <div>
              <p className="font-bold text-base">${item.variant.priceV2?.amount}</p>
              <button onClick={() => handleRemove(item.id)} className="text-sm text-red-500">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="p-4">
        <p className="font-bold text-lg">Total: ${checkout.totalPriceV2?.amount}</p>
        <button 
          className="w-full bg-black text-white p-2 rounded"
          onClick={() => window.location.href = checkout.webUrl}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

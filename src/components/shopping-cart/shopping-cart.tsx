import React, { useContext } from 'react';
import { ShopContext } from '../../utils/shopify/shop';

const ShoppingCart: React.FC = () => {
  const { checkout, removeProductFromCart } = useContext(ShopContext);

  const handleRemove = (lineItemId: string) => {
    removeProductFromCart(lineItemId);
  };

  return (
    <div className="fixed right-0 top-20 h-full w-64 bg-white shadow-lg z-50 overflow-y-scroll">
      <h2 className="p-4 text-lg font-bold border-b border-gray-200">Your Cart</h2>
      {checkout.lineItems.length < 1 ? (
        <p className="p-4">Your cart is empty</p>
      ) : (
        checkout.lineItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4">
            <div>
              <p className="font-bold">{item.title}</p>
              <p className="text-sm">{item.variant.title}</p>
              <p className="text-sm">Quantity: {item.quantity}</p>
            </div>
            <div>
              <p className="font-bold">${item.variant.price.amount}</p>
              <button onClick={() => handleRemove(item.id)} className="text-sm text-red-500">
                Remove
              </button>
            </div>
          </div>
        ))
      )}
      <div className="p-4">
        <p className="font-bold text-lg">Total: ${checkout.totalPrice.amount}</p>
        <button 
          className="w-full bg-black text-white p-2 rounded"
          onClick={() => window.location.href = checkout.webUrl}>Checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;

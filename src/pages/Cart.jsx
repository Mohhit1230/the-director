import { useMemo, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { useToast } from '../components/ui/Toast';

export default function Cart() {
  const { user, getCart, updateCartItem, removeFromCart, clearCart, addOrder } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();
  const [cart, setCart] = useState(() => getCart());
  const [processing, setProcessing] = useState(false);
  const [couponCode, setCouponCode] = useState('');

  const subtotal = useMemo(() => cart.reduce((s, i) => s + (i.price || 0) * (i.qty || 1), 0), [cart]);
  const shipping = subtotal > 140 ? 0 : 15; // Free shipping over $140
  const total = useMemo(() => +(subtotal + shipping).toFixed(2), [subtotal, shipping]);

  function changeQty(id, qty) {
    const updated = updateCartItem(id, qty);
    setCart(updated);
  }

  function removeItem(id) {
    const updated = removeFromCart(id);
    setCart(updated);
  }

  async function checkout() {
    if (!user) return navigate('/login');
    setProcessing(true);
    try {
      const order = { items: cart, total, date: new Date().toLocaleDateString(), status: 'pending' };
      await addOrder(order);
      clearCart();
      setCart([]);
      toast.show('Order placed — thank you!', { type: 'success' });
      navigate('/checkout');
    } catch (err) {
      console.error(err);
      toast.show('Checkout failed: ' + (err.message || ''), { type: 'error' });
    } finally {
      setProcessing(false);
    }
  }

  function applyCoupon() {
    if (couponCode.trim()) {
      toast.show('Coupon applied successfully!', { type: 'success' });
    } else {
      toast.show('Please enter a coupon code', { type: 'error' });
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-28 min-h-screen">
      {/* Breadcrumb */}
      <div className="mb-14 text-sm flex gap-2 text-yellow-400/60">
        <Link to="/home" className="text-[#ffad33]/70 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#ffad33] ">Cart</span>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
          <p className="text-[#ffad33] text-3xl mb-4">Your cart is empty.</p>
          <p className="text-sm text-gray-600 mb-6">Browse the site and add items to start your order.</p>
          <Link
            to="/"
            className="inline-block bg-[#fd4444] text-white px-8 py-3 rounded hover:bg-[#c93e3e] transition-all"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Cart Table Header */}
          <div className=" shadow-md flex flex-col gap-8">
            <div className="grid grid-cols-12 gap-4 p-4 font-medium text-[#ffad33] bg-white rounded-md px-12">
              <div className="col-span-5">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-3 text-center">Quantity</div>
              <div className="col-span-2 text-right">Subtotal</div>
            </div>

            {/* Cart Items */}
            {cart.map(item => (
              <div key={item.id} className="grid grid-cols-12 gap-4 py-6 px-12 bg-white items-center  hover:bg-gray-100 rounded-md transition-colors">
                {/* Product Info */}
                <div className="col-span-5 flex items-center gap-4 relative">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute -top-2 -left-2 text-white bg-[#fd4444] hover:bg-[#c93e3e] rounded-full  transition-colors"
                  >
                    <IoCloseOutline size={20} />
                  </button>
                  <img
                    src={item.image || '/images/product-placeholder.svg'}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <span className="text-[#ffad33] font-medium">{item.name}</span>
                </div>

                {/* Price */}
                <div className="col-span-2 text-center text-gray-900">
                  ${(item.price || 0).toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="col-span-3 flex justify-center items-center">
                
                    
                    <input
                      type="number"
                      value={item.qty || 1}
                      onChange={(e) => changeQty(item.id, parseInt(e.target.value))}
                      className="w-16 text-center border border-gray-400 p-2  text-gray-900 font-medium rounded-md focus:outline-none focus:border-2 focus:border-gray-500"
                    />
                    
                  
                </div>

                {/* Subtotal */}
                <div className="col-span-2 text-right text-gray-900 font-medium">
                  ${((item.price || 0) * (item.qty || 1)).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="px-8 py-3 bg-[#fd4444] text-white rounded hover:bg-[#fd4444]/80 transition-all font-medium"
            >
              Return To Shop
            </Link>
            <button
              onClick={() => { clearCart(); setCart([]) }}
              className="px-8 py-3 bg-[#fd4444] text-white rounded hover:bg-[#fd4444]/80 transition-all font-medium"
            >
              Clear Cart
            </button>
          </div>

          {/* Coupon and Cart Total */}
          <div className="w-full flex justify-end mt-12">
            {/* Coupon Section */}
            

            {/* Cart Total */}
            <div className="w-1/2 border border-white/20  shadow-md rounded px-8 py-12 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-[#ffad33] mb-6">Cart Total</h3>

              <div className="space-y-4">
                <div className="flex justify-between pb-4 border-b border-white">
                  <span className="text-[#ffad33]">Subtotal:</span>
                  <span className="text-white font-medium">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between pb-4 border-b border-white">
                  <span className="text-[#ffad33]">Shipping:</span>
                  <span className="text-white font-medium">
                    {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>

                <div className="flex justify-between pt-2">
                  <span className="text-[#ffad33] font-semibold">Total:</span>
                  <span className="text-white font-bold text-lg">${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex gap-4 items-start mt-4">
              <input
                type="text"
                placeholder="Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-6 py-3 border border-white rounded text-white placeholder:text-gray-300 focus:outline-none focus:border-[#fd4444]"
              />
              <button
                onClick={applyCoupon}
                className="px-8 py-3 bg-[#ffad33] text-white rounded hover:bg-[#ffad33]/90 transition-all font-medium whitespace-nowrap"
              >
                Apply Coupon
              </button>
            </div>

              <button
                onClick={checkout}
                disabled={processing}
                className="w-full mt-6 px-8 py-3 bg-[#fd4444] text-white rounded hover:bg-[#c93e3e] transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? 'Processing…' : 'Proceed to checkout'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

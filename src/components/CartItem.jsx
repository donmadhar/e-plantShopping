import {ArrowLeft, Minus, Plus, ShoppingBag, Trash2} from 'lucide-react';
import {useDispatch,useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem,updateQuantity} from './CartSlice.jsx';
import Navbar from './Navbar.jsx';
const price=cost=>Number.parseFloat(String(cost).replace('$',''))||0;
const money=value=>`$${value.toFixed(2)}`;
export default function CartItem(){
  const dispatch=useDispatch();
  const items=useSelector(state=>state.cart.items);
  const totalCartQuantity=items.reduce((total,item)=>total+item.quantity,0);
  const total=items.reduce((sum,item)=>sum+price(item.cost)*item.quantity,0);
  const handleIncrement=item=>dispatch(updateQuantity({id:item.id,quantity:item.quantity+1}));
  const handleDecrement=item=>dispatch(updateQuantity({id:item.id,quantity:item.quantity-1}));
  const handleRemove=item=>dispatch(removeItem(item.id));
  return <><Navbar/><main className="shell cart-page cart-container"><div className="cart-heading"><div><p className="eyebrow">YOUR BASKET</p><h1>Your plant <em>selection.</em></h1><p>{totalCartQuantity} {totalCartQuantity===1?'item':'items'} in your cart</p></div><div className="total-card"><span>Cart total</span><strong>{money(total)}</strong></div></div>
    {!items.length?<section className="empty-cart"><span><ShoppingBag size={32}/></span><h2>Your cart is empty</h2><p>Choose a plant to get started.</p><Link className="get-started-button" to="/plants">Continue Shopping <ArrowLeft size={16}/></Link></section>:<div className="cart-layout"><section className="cart-list">{items.map(item=><article className="cart-item" key={item.id}><img src={item.image} alt={item.name}/><div className="item-details"><small>{item.category}</small><h2>{item.name}</h2><p>{money(price(item.cost))} <span>per plant</span></p><button className="delete-button" onClick={()=>handleRemove(item)}><Trash2 size={14}/> Delete</button></div><div className="qty-total"><div className="qty"><button aria-label="Decrease quantity" onClick={()=>handleDecrement(item)}><Minus size={14}/></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={()=>handleIncrement(item)}><Plus size={14}/></button></div><small>Subtotal</small><strong>{money(price(item.cost)*item.quantity)}</strong></div></article>)}</section><aside className="summary"><p className="eyebrow">ORDER SUMMARY</p><h2>Growing total</h2><div><span>Items ({totalCartQuantity})</span><span>{money(total)}</span></div><div><span>Shipping</span><span>Calculated later</span></div><div><span>Tax</span><span>Calculated later</span></div><hr/><div className="grand"><span>Total</span><strong>{money(total)}</strong></div><button className="get-started-button-1" onClick={()=>window.alert('Coming Soon!')}>Checkout →</button><Link className="get-started-button continue-shopping" to="/plants"><ArrowLeft size={15}/> Continue Shopping</Link></aside></div>}
  </main></>;
}

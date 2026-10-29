import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Check, ShoppingBag} from 'lucide-react';
import {addItem} from './CartSlice.jsx';
import {plantsArray} from '../data/plants.js';
import Navbar from './Navbar.jsx';

export default function ProductList(){
  const dispatch=useDispatch();
  const cart=useSelector(state=>state.cart.items);
  const [addToCart,setAddToCart]=useState({});
  const categories=Object.keys(plantsArray);
  const totalCartQuantity=cart.reduce((total,plant)=>total+plant.quantity,0);
  const handleAddToCart=(plant)=>{dispatch(addItem(plant));setAddToCart(previous=>({...previous,[plant.name]:true}));};
  return <><Navbar/><main className="shell">
    <section className="catalog-heading"><div><p className="eyebrow">FIND YOUR GREEN</p><h1>Make room for <em>nature.</em></h1><p>Easy-care favourites, fragrant herbs, and thoughtful greens for every corner.</p></div><div className="plant-count"><strong>{totalCartQuantity}</strong><span>items in cart</span></div></section>
    {categories.map(category=><section className="plant-section" key={category}><div className="section-title"><h2>{category}</h2><span>{plantsArray[category].length} plants</span></div><div className="product-grid">{plantsArray[category].map(plant=>{const alreadyAdded=Boolean(addToCart[plant.name])||cart.some(item=>item.id===plant.id);return <article className="product-card" key={plant.id}><div className="product-image"><img src={plant.image} alt={plant.name} loading="lazy"/><span>NURSERY PICK</span></div><div className="product-info"><small>{category}</small><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-bottom"><strong>{plant.cost}</strong><button className={alreadyAdded?'add added':'add'} disabled={alreadyAdded} onClick={()=>handleAddToCart(plant)}>{alreadyAdded?<><Check size={15}/> Added to Cart</>:<><ShoppingBag size={15}/> Add to Cart</>}</button></div></div></article>})}</div></section>)}
  </main></>;
}

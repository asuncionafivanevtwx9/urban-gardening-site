
function toggleMenu(){ const nav = document.getElementById('nav'); nav.classList.toggle('open'); }

// Simple cart using localStorage
const CART_KEY = 'ugh_cart';
function getCart(){ try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; } catch(e){ return []; } }
function setCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); renderCartBadge(); }
function addToCart(id, name, price){ const c = getCart(); c.push({id, name, price}); setCart(c); alert('Added to cart: ' + name); }
function cartTotal(){ return getCart().reduce((s,i)=>s+Number(i.price||0),0).toFixed(2); }
function renderCartBadge(){ const el = document.getElementById('cart-badge'); if(!el) return; el.textContent = getCart().length; }
document.addEventListener('DOMContentLoaded', renderCartBadge);

// Contact form handler (no backend)
function handleContact(e){
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  if(!data.name || !data.email || !data.message){ alert('Please fill out all fields.'); return; }
  localStorage.setItem('ugh_last_contact', JSON.stringify({...data, ts: new Date().toISOString()}));
  e.target.reset();
  alert('Thanks! We will get back to you soon.');
}

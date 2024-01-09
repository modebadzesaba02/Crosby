import React from 'react';
import { useCart } from './CartContext';
import { styled } from "styled-components";

const BTN=styled.button`
width:300px;
height:65px;
color:white;
background-color:grey;
border:none;
font-size:18px;`

function CartPage() {
  const { cart, setCart } = useCart();

  const updateQuantity = (itemId, amount) => {
    
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === itemId
          ? { ...item, quantity: item.quantity + amount }
          : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCart(prevCart =>
      prevCart.filter(item => item.id !== itemId)
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (cart.length === 0) {
    return (
      <div style={{backgroundColor:"rgb(56,56,59)",padding:"20px",color:"white",paddingLeft:"70px"}} className="cart-page">
        <h2 style={{paddingTop:"30px"}}> Shopping Cart</h2>
        <p style={{padding:"20px 0px"}}>You have nothing in your shopping cart</p>
        <a style={{ textDecoration: 'none' ,color:'white' }} href="/"><BTN>Continue Shopping</BTN></a>
      </div>
    );
  }

  return (
    
    <div style={{backgroundColor:"rgb(56,56,59)",padding:"20px 30px",color:"white"}} className="cart-page">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div  style={{display:"flex" ,justifyContent:"space-between",paddingTop:"30px"  ,borderBottom:"1px solid grey" ,paddingBottom:"20px"}}  key={item.id} className="cart-item">
         <div style={{display:"flex",width:"300px"}}> <img src={item.src} style={{width:"150px",height:"150px"}} /> <h3 style={{marginLeft:"15px",fontSize:"16px"}}>{item.name}</h3> </div>
          
            
            <div className="quantity">
              <button style={{backgroundColor:"rgb(56,56,59)",color:"white",border:"none",fontSize:"20px"}} onClick={() =>  updateQuantity(item.id, -1)}>-</button>
              <span style={{fontSize:"20px",padding:"5px"}} >{item.quantity}</span>
              <button style={{backgroundColor:"rgb(56,56,59)",color:"white",border:"none",fontSize:"20px"}}  onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
              <div style={{display:"flex",textAlign:"center"}}>
                <p style={{paddingRight:"10px"}}>${item.price*item.quantity}</p>
            <button style={{backgroundColor:"rgb(56,56,59)",color:"white",border:"none",fontSize:"20px",marginBottom:"95px"}} onClick={() => removeItem(item.id)}>X</button>
            </div>

         
          
        </div>
           

        
      ))}
      <div className="total">
           <p>Total Price: ${calculateTotal()}</p>
              </div>
      
    </div>
  );
}

export default CartPage;

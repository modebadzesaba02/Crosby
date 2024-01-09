import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { styled } from 'styled-components';
import { useCart } from './CartContext';





const DIV=styled.div`
background-color:rgb(56,56,59);
display:flex;
justify-content:space-between;
align-items:center;
padding-top:150px;`

const IMG=styled.img`
height:900px;
width:45%;
padding-left:90px;`

const BTN=styled.button`
width:300px;
height:65px;
color:white;
background-color:grey;
border:none;
font-size:18px;`

function PlantDetail() {
  const { id } = useParams();
  const {cart,setCart}=useCart();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/plants/${id}`)
      .then(response => {
        setPlant(response.data);
        
      })
      .catch(error => {
        console.error('Error fetching plant details:', error);
      });
  }, []);
  

  const addToCart = () => {
    setCart(prevCart => [...prevCart, { ...plant,quantity:1 }]);
  };

  if (!plant) {
    return <div>No info found</div>;
  }

  return (
    <DIV className="plant-detail">
      <IMG src={plant.src}></IMG>

      <div style={{textAlign:"center",color:"white",paddingRight:"60px"}}>
      <h1 style={{fontSize:"50px"}} >{plant.name}</h1>
      <p style={{fontSize:"20px",padding:"15px 0px"}}>Price: ${plant.price}</p>
      <p style={{fontSize:"18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p><p> eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      
      <BTN  style={{margin:"50px 0px"}} onClick={addToCart}>Add to Cart</BTN>
      </div>
    </DIV>
  );
}

export default PlantDetail;

import { styled } from "styled-components";

import axios from "axios";



import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const DIV=styled.div`
background-color :rgb(56,56,59);
padding-top:20px;
color:white;
text-align:center;`

const IMG=styled.img`
width:280px;
height: 380px;
padding:20px; 
padding-top:100px;` 
 

const Shop = () => {
    const[plants,setPlants]=useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:3000/plants')
        .then(response=>{
            setPlants(response.data);
        })
        .catch(error=>{
            console.error("error fetching plants " , error);
        });
        
    },[]);
    return (
       
        <DIV>
            <h1 style={{fontSize:"40px"}}>Our plants</h1>
            <p style={{fontSize:"18px",paddingTop:"40px"}}>Lorem ipsum dolor sit amet Nullam vel ultricies metus, at tincidunt arcu</p> <p style={{fontSize:"18px"}}> Morbi vestibulum, ligula ut efficitur mollis, mi massa accumsan justo.</p>
            <div  style={{display: 'flex', justifyContent:'center'}}>
               {plants.map(plant=>(<Link style={{ textDecoration: 'none' ,color:'white' }} to={`/shop/${plant.id}`}><div><IMG src={`${plant.src}`} ></IMG><h3>{plant.name}</h3><h3>from ${plant.price}</h3></div></Link>))}
               
            </div>
            
        </DIV>
      );
    };
    
    export default Shop;
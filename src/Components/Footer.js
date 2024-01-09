import { styled } from "styled-components";
import img from "../f.jpg"
import img1 from "../insta.png"
import img2 from "../kTMKop6zc.png"


const IMG=styled.img`
width:20px;
padding:10px;`
const Footer= () => {
  

    return (
      <div style={{height:"250px",backgroundColor:'rgb(56,56,59)',padding:'20px',color:'white',display:"flex",justifyContent:"space-between",paddingTop:"150px"}}>
        <div style={{paddingLeft:"30px"}}><h1>Crosby</h1> <p style={{paddingTop:"20px"}}>made with squarespace </p> 
        <div style={{paddingTop:"30px"}}>
        <IMG  src={img}></IMG>
          <IMG src={img1}></IMG>
          <IMG src={img2}></IMG>
          </div>  
        
         </div>
        <div style={{paddingRight:"70px",fontSize:"18px",color:"grey"}} > <div style={{display:"flex",gap:"60px"}}> <p>shop</p>  <p>Our Story</p></div><div style={{display:"flex",gap:"60px"}}> <p>Journal</p><p>Contact</p></div> </div>
      </div>
      
        
    );
  };
  
  export default Footer;
  
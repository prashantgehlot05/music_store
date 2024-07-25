import { useContext, useState } from "react";
import { CartContext } from "../cart/components/context/cart-context";


export const Song=({fn,song})=>{
// const Context  =useContext(CartContext)
  console.log(song);
  const [playerFlag,setPlayerFlag]=useState(false)
  const showPlayer=()=>{
      fn(true,song);
      // const addTocart=()=>{
      //  CartContext.cart.push({...product});
      // }
  }
  return(
   <>
   
     
<div className="row">
   
  <div className="col-8">
    <img src={song.artworkUrl100} height="300px"/>
  </div>

  <div className="col=8">
  {song.artistName}{song.trackName}
  </div>

  <div className="col-8">
  <button onClick={showPlayer}  className="btn btn-primary">Play</button>&nbsp;&nbsp;
  <button  className="btn btn-primary"> Add to Playlist</button>

  </div>

  
  
  </div>
  <br />
  
  

  <div className="col-4"class="position-absolute top-50 start-50" >  
    
     <h1 class="card" > playlist</h1>
 
</div>
</>
  

  )

}


  
  
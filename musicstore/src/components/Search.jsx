import { useRef } from "react";
export const Search = ({fn}) =>{
  const artist=useRef();
return(
  
 <>
<input  ref={artist} type ='text' className="form-control" placeholder="Type To Search Songs Here"/>;
<button className="btn btn-success" onClick={()=>{

  fn( artist.current.value);
} }    >Search</button>;
</>) 





}
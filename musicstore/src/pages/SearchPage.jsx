
import { useEffect , useState } from "react";
import { Search } from "../components/Search";
import { Songs } from "../components/Songs";
import { getSongs } from "../services/api-client";
import { Player } from "../components/player";
import { Logo } from "../components/logo";

export const SearchPage = ()=>{
    const [allSongs,setSongs]=useState([])

    const[flag,setFlag]=useState(false);
    const[song,setPlayerSong]=useState(null);
    
    const loadSongs=async()=>{
      setSongs( await getSongs('Latest Songs'));
    }

    useEffect(()=>{
      console.log('component mount');
        loadSongs();
    },[]);

   const togglePlayer=(flag,songarg)=>{
    console.log('Falg',flag,'Song Object',songarg)
    setPlayerSong(songarg);
     setFlag(flag);
   } 

    const getArtistName = async(artistName)=>{
   console.log(" Rac Artist name",artistName);
       setSongs( await getSongs(artistName));

 }
const jsx =<>

    <Search fn={getArtistName}/>
    <Songs fn={togglePlayer} allSongs={allSongs}/>;
    
</>
 return(<div className="container" >

 
  
  <div className="alert alert-success text-center" >
          <h1 ><Logo/>MUSIC STORE </h1>
    </div>;

    
    {flag?<Player fn={togglePlayer}song={song}/>:jsx}
    
 </div>)
  
     

}
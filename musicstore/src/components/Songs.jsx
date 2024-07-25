import { Song } from "./Song"

export const Songs= ({fn,allSongs}) =>{
return(
  // map(js)
  // allSongs(data) -->convert-->jsx
<>
      {allSongs.map((currentSong,index )=><Song fn={fn} key={index} song={currentSong} />)}
</>

)
  

}
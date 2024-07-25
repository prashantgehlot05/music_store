export const Player=({fn,song})=>{

  return(
  <div>
    <button onClick={()=>{
      fn(false,null)

    }} className="btn btn-warning">Back To Home</button>
    <p>
    <img src={song.artworkUrl100} height="300px"/>
    <br />
      {song.artistName} {song.trackName}
    </p>
    <br />
    <br />
  <audio  controls >

    <source src = {song?.previewUrl} type="audio/mp4"/>
  </audio>
  </div>
  )


}
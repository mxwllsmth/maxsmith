import loaderImg from "./images/loadingGif4Site.gif"

const Loader = () => {
    return (
        <div
        style={{
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh"
        }}
      >
        
        <center>
        <img src={loaderImg} height="200" alt=""/></center>
         </div>
    )
}

export default Loader;
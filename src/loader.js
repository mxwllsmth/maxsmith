import loaderImg from "./images/loader1.gif"

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
          <div
          style={{
          height: "400px",
          overflow: "hidden"
          }}
          >
            <img src={loaderImg} margin-bottom="-500px" overflow="hidden" height="450px" alt=""/>
          </div>
        </center>
         </div>
    )
}

export default Loader;
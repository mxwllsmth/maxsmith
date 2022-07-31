import loaderImg from "./images/loader1SLOW.gif"
import './loader.css';

const Loader = () => {
  return (
    <div id="loaderAll"
      style={{
        background: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        "margin-left": "-100px"

      }}
    >

      <center>
        <div className="loaderGifDiv reveal active fade-in-two"
          style={{
            height: "400px",
            overflow: "hidden",
            "margin-right": "50px"
          }}
        >
          <img src={loaderImg} className="loaderGif" margin-bottom="-500px" overflow="hidden" height="450px" alt="" />
        </div>
      </center>

      <div id="fadeOutWelcome" className="reveal active fade-out-two">

        <div id="mainContainer" className="reveal fade-in active">

          <div id="homeContainer">

            <h1 id="welcome" className="reveal active fade-in-two">W e l c o m e</h1>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Loader;
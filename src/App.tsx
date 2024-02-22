import "./App.css";
import VideoJS from "./VideoPlayer";

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    preferFullWindow: true,
    sources: [
      {
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  };

  return <VideoJS options={videoJsOptions} />;
}

export default App;

import VideoJS from "./VideoPlayer";

function App() {
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    playsinline: true,
    preferFullWindow: true,
    nativeControlsForTouch: false,
    sources: [
      {
        src: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <main className="min-w-screen min-h-screen bg-black">
      <VideoJS options={videoJsOptions} />
    </main>
  );
}

export default App;

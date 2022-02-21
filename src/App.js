import './App.css';
import Card from './Components/Card/Card';
import Tilt from 'react-parallax-tilt';

function App() {
  return (
    <div
      className="flex items-center justify-center w-screen h-screen bg-cover App"
      style={{
        backgroundImage: `url("https://wallpapersmug.com/large/3bcbc6/digital-art-neon-bubbles.jpg")`,
      }}
    >
      <Tilt tiltReverse={true}>
        <Card></Card>
      </Tilt>
    </div>
  );
}

export default App;

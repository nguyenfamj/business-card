import './App.css';
import Card from './Components/Card/Card';

function App() {
  return (
    <div
      className="flex items-center w-screen h-screen bg-cover App"
      style={{
        backgroundImage: `url("https://wallpapersmug.com/large/3bcbc6/digital-art-neon-bubbles.jpg")`,
      }}
    >
      <Card></Card>
    </div>
  );
}

export default App;

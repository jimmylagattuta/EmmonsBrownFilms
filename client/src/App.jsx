import SiteHeader from "./components/SiteHeader";
import HeroVideo from "./components/HeroVideo";

function App() {
  return (
    <div className="min-h-screen bg-black font-sans text-white">
      <SiteHeader />

      <HeroVideo />

      <main className="min-h-screen bg-black" />
    </div>
  );
}

export default App;
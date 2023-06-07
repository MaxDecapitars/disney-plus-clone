import Header from '@/components/Header';
import Slider from './components/Slider';
import ProductionHouse from './components/ProductionHouse';
import GenreMovieList from './components/GenreMovieList';
import Background from './components/Background';

function App() {
  return (
    <div className="text-white">
      <Header />
      <main className="min-h-screen w-full">
        <Slider />
        <ProductionHouse />
        <GenreMovieList />
        <Background />
      </main>
    </div>
  );
}

export default App;

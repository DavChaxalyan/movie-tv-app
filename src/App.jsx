import { FilmProvider } from './contexts/FilmContext';
import Home from './pages/Home/Home';

function App() {
  return (
    <FilmProvider>
      <Home />
    </FilmProvider>
  );
}

export default App;

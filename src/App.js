import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import Catalog from './pages/catalog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Index />} />
          <Route path=':query' element={<Catalog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

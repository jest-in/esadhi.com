import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

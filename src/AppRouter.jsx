// import core & vendor packages below
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import components below
import UnderConstruction from './views/UnderConstruction';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<UnderConstruction />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;

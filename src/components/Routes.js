import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

const RouteSwitch = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="/Home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Quote from './Quote';

const RouteSwitch = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path="/Home" element={<Home />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Calculator from './Calculator';
import Home from './Home';
import Quote from './Quote';

const RouteSwitch = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>
);

export default RouteSwitch;

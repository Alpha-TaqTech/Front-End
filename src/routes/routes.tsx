import { Navigate, Route, Routes } from 'react-router-dom';

import { Register } from '../pages/Register';
import { Home } from '../pages/Home';

export const Router = () => (
  <Routes>
    <Route path="*" element={<Home />} />
    <Route path="/" element={<Navigate to={'/home'} />} />
    <Route path="*" element={<Home />} />
    <Route path="/register" element={<Register />} />
  </Routes>

);

import { Route, Routes, Navigate } from 'react-router-dom';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />
  </Routes>
);

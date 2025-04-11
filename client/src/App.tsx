import React from 'react';
import './App.css';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import routes from './routes';
import { Toaster } from 'react-hot-toast';

const AppRoutes = () => useRoutes(routes);

const App: React.FC = () => (
  <>
    <Toaster />
    <AppRoutes />
  </>
);

export default App;

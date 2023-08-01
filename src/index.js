import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {App} from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container-fluid bg-light">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);
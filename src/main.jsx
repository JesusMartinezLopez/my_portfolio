import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/ContextProvider';
import { NextUIProvider } from '@nextui-org/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <ContextProvider>
      <App />
    </ContextProvider>
  </NextUIProvider>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createMuiTheme, createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./state/index.jsx";

const store = configureStore({
  reducer: {cart: cartReducer}
})

const theme = createTheme({
  typography: {
    fontFamily: [
       "estedad"
    ].join(','),
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
   </Provider>
  </React.StrictMode>,
)

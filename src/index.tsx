import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from 'react-redux'
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import store from './redux/store'
import Dispacher from "./components/Dispatcher";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Dispacher />
        <App />
      </BrowserRouter>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

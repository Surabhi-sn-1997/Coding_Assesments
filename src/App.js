import React from "react";
import { hot } from "react-hot-loader";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store/configureStore";
import Album from "./album/Album.js";
import "./App.css";

const store = configureStore();
const App = () => (
  <ReduxProvider store={store}>
    <div className="albums-app">
      <Album />
    </div>
  </ReduxProvider>
);

export default hot(module)(App);

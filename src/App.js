import React from "react";
import MyApp from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <React.Fragment>
      <Provider store={store}>
        <MyApp />
      </Provider>
    </React.Fragment>
  );
}

export default App;

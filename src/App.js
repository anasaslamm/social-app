import React from "react";
import MyApp from "./router";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { postApi } from "./store/apiStore";

function App() {
  return (
    <React.Fragment>
      <ApiProvider api={postApi}>
        <Provider store={store}>
          <MyApp />
        </Provider>
      </ApiProvider>
    </React.Fragment>
  );
}

export default App;

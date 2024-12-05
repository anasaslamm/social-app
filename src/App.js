import React from "react";
import MyApp from "./router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <MyApp />
        </Provider>
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import MyApp from "./router";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <React.Fragment>
      <QueryClientProvider client={queryClient}>
        <MyApp />
      </QueryClientProvider>
    </React.Fragment>
  );
}

export default App;

//api provider for mobile app

import { queryClient } from "./queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export const ApiProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

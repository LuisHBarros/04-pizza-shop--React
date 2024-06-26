import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster, toast } from "sonner";
function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | pizza.shop" />
      <Toaster closeButton />
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;

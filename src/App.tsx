import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster, toast } from "sonner";
import { Loader } from "lucide-react";
import { ThemeProvider } from "./components/theme/theme-provider";
function App() {
  const [count, setCount] = useState(0);

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | pizza.shop" />
        <Toaster closeButton />
        <RouterProvider router={appRouter}/>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;

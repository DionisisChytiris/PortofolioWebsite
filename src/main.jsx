import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./hooks/useTheme.jsx";
import { store } from "./redux/store.js";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider>
          <App />
          <Analytics />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);

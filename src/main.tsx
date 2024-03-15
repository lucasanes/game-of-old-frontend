import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/auth";
import { ThemeProvider } from "./contexts/theme";
import { Routes } from "./routes";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <ThemeProvider>
      <GlobalStyles />
      <Routes />
      <ToastContainer />
    </ThemeProvider>
  </AuthProvider>
);

import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { initializeApp } from "firebase/app";
import { config } from "./config/config";
import AuthRoute from "./components/AuthRoute";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <ShoppingCartProvider>
      {window.location.pathname !== "/login" &&
        window.location.pathname !== "/register" && <Navbar />}
      {/* <Navbar /> */}
      <Container className="mb-4">
        <Routes>
          <Route
            path="/"
            element={
              <AuthRoute>
                <Home />
              </AuthRoute>
            }
          />
          <Route
            path="/store"
            element={
              <AuthRoute>
                <Store />
              </AuthRoute>
            }
          />
          <Route
            path="/about"
            element={
              <AuthRoute>
                <About />
              </AuthRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;

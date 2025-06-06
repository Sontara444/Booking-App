import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home, Login, Dashboard } from "./pages";
import { ProtectedRoute, PublicRoute } from "./routes";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

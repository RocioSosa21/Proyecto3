import { Routes, Route } from "react-router-dom";
import { FavoritosPage } from "./pages/FavoritosPage";
import { Home } from "./pages/Home";
import { RecetaPage } from "./pages/RecetaPage";
import { Header } from "./components/Header";

function App() {

  return (
    <>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/receta/:id"
          element={<RecetaPage />}
        />

        <Route
          path="/favoritos"
          element={<FavoritosPage />}
        />

      </Routes>

    </>

  );
}

export default App;
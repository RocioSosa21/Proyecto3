import { Link } from "react-router-dom";
import { useRecetasStore } from "../store/recetasStore";

export const Header = () => {

    const cantidadFavoritos = useRecetasStore((state) => state.favoritos.length);

    return (

        <header>

            <h1>🍳 Gestor de Recetas</h1>

            <nav>

                <Link to="/">
                    Inicio
                </Link>

                {" | "}

                <Link to="/favoritos">
                    ❤️ Favoritos: {cantidadFavoritos}
                </Link>
            </nav>

        </header>
    );
};
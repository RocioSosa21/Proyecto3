import { Link } from "react-router-dom";
import { useRecetasStore } from "../store/recetasStore";

export const Header = () => {

    const favoritos =
    useRecetasStore((state) => state.favoritos);

    return (

        <header>

            <h1>🍳 Gestor de Recetas</h1>

            <nav>

                <Link to="/">
                    Inicio
                </Link>

                {" | "}

                <Link to="/favoritos">
                    ❤️ Favoritos:
                </Link>

                <span> {favoritos.length} </span>

            </nav>

        </header>
    );
};
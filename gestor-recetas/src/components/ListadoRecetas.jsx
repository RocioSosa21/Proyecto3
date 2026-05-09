import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { useRecetasStore } from "../store/recetasStore";

const API_URL =
"https://www.themealdb.com/api/json/v1/1/search.php?s=";

export const ListadoRecetas = () => {

    const { data, loading, error } = useFetch(API_URL);
    const agregarFavorito = useRecetasStore((state) => state.agregarFavorito);

    if (loading) {
        return <h2>Cargando recetas...</h2>;
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div>

            <h2>🍳 Recetas Disponibles</h2>

            {data.meals?.map((receta) => (

                <div key={receta.idMeal}>

                    <img
                        src={receta.strMealThumb}
                        alt={receta.strMeal}
                        width="250"
                    />

                    <h3>{receta.strMeal}</h3>

                    <Link to={`/receta/${receta.idMeal}`}>
                        Ver receta
                    </Link>

                    <button
                        onClick={() => agregarFavorito(receta)}
                    >
                        ❤️ Favorito
                    </button>

                    <p>{receta.strCategory}</p>

                </div>
            ))}
        </div>
    );
};
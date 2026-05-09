import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export const RecetaDetalle = () => {

    const { id } = useParams();

    const API_URL =
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

    const { data, loading, error } = useFetch(API_URL);

    if (loading) {
        return <h2>Cargando receta...</h2>;
    }

    if (error) {
        return <h2>Error al cargar receta</h2>;
    }

    const receta = data.meals?.[0];

    return (
        <div>

            <h1>{receta.strMeal}</h1>

            <img
                src={receta.strMealThumb}
                alt={receta.strMeal}
                width="400"
            />

            <h3>Categoría:</h3>
            <p>{receta.strCategory}</p>

            <h3>País:</h3>
            <p>{receta.strArea}</p>

            <h3>Instrucciones:</h3>
            <p>{receta.strInstructions}</p>

        </div>
    );
};
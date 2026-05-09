import { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useRecetasStore } from "../store/recetasStore";

export const ListadoRecetas = () => {

    const [busqueda, setBusqueda] = useState("");

    const API_URL =
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${busqueda}`;

    const { data, loading, error } = useFetch(API_URL);

    const agregarFavorito =
    useRecetasStore((state) => state.agregarFavorito);

    return (
        <div className="container">

            <h2>🍳 Recetas Disponibles</h2>

            <input
                type="text"
                placeholder="Buscar receta..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />

            {loading && <h2>Cargando...</h2>}

            {error && <h2>{error}</h2>}

            {!loading && data.meals?.map((receta) => (

                <div key={receta.idMeal}>

                    <img
                        src={receta.strMealThumb}
                        alt={receta.strMeal}
                        width="250"
                    />

                    <h3>{receta.strMeal}</h3>

                    <p>{receta.strCategory}</p>

                    <Link to={`/receta/${receta.idMeal}`}>
                        Ver receta
                    </Link>

                    <button
                        onClick={() => agregarFavorito(receta)}
                    >
                        ❤️ Favorito
                    </button>

                </div>
            ))}

            {!loading && !data.meals && (
                <h3>No se encontraron recetas</h3>
            )}

        </div>
    );
};
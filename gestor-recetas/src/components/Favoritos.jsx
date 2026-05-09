import { useRecetasStore } from "../store/recetasStore";

export const Favoritos = () => {

    const favoritos =
    useRecetasStore((state) => state.favoritos);

    const eliminarFavorito =
    useRecetasStore((state) => state.eliminarFavorito);

    if (favoritos.length === 0) {

        return <h2>No hay recetas favoritas</h2>;
    }

    return (
        <div>

            <h2>❤️ Tus Favoritos</h2>

            {favoritos.map((receta) => (

                <div key={receta.idMeal}>

                    <img
                        src={receta.strMealThumb}
                        width="200"
                    />

                    <h3>{receta.strMeal}</h3>

                    <button
                        onClick={() =>
                            eliminarFavorito(receta.idMeal)
                        }
                    >
                        Eliminar
                    </button>

                </div>
            ))}
        </div>
    );
};
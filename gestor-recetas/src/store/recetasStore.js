import { create } from "zustand";

const favoritosGuardados =
JSON.parse(localStorage.getItem("favoritos")) || [];

export const useRecetasStore = create((set) => ({

    favoritos: favoritosGuardados,

    agregarFavorito: (receta) =>

        set((state) => {

            const existe = state.favoritos.find(
                (item) => item.idMeal === receta.idMeal
            );

            if (existe) {
                return {
                    favoritos: state.favoritos
                };
            }

            const nuevosFavoritos = [
                ...state.favoritos,
                receta
            ];

            localStorage.setItem(
                "favoritos",
                JSON.stringify(nuevosFavoritos)
            );

            return {
                favoritos: nuevosFavoritos,
            };
        }),

    eliminarFavorito: (id) =>

        set((state) => {

            const nuevosFavoritos =
            state.favoritos.filter(
                (receta) => receta.idMeal !== id
            );

            localStorage.setItem(
                "favoritos",
                JSON.stringify(nuevosFavoritos)
            );

            return {
                favoritos: nuevosFavoritos,
            };
        }),

}));
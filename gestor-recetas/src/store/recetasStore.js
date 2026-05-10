import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useRecetasStore = create(
    persist(
        (set) => ({

            favoritos: [],

            agregarFavorito: (receta) =>

                set((state) => {

                    const existe = state.favoritos.find(
                        (item) => item.idMeal === receta.idMeal
                    );

                    if (existe) {
                        return state;
                    }

                    return {
                        favoritos: [
                            ...state.favoritos,
                            receta
                        ],
                    };
                }),

            eliminarFavorito: (id) =>

                set((state) => ({
                    favoritos: state.favoritos.filter(
                        (receta) => receta.idMeal !== id
                    ),
                })),

        }),
        {
            name: "favoritos-storage",
        }
    )
);
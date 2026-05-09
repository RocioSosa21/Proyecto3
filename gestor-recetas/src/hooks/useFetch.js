import { useEffect, useState } from "react";

export const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            setLoading(true);

            try {

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Error al obtener datos");
                }

                const json = await response.json();

                setData(json);

            } catch (err) {

                setError(err.message);

            } finally {

                setLoading(false);

            }
        };

        fetchData();

    }, [url]);

    return { data, loading, error };
};
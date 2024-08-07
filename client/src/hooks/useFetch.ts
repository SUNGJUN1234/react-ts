import {useEffect, useState} from "react";



export const useFetch = (url: string, initialType: string) => {
    const [data, setData] = useState(undefined);

    const fetchUrl = (type: string) => {
        fetch(url + "/" + type)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json()
            })
            .then(data => setData(data))
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    useEffect(() => {
        fetchUrl(initialType);
    }, []);

    return {
        data,
        fetchUrl
    }
}
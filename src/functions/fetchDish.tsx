import { useEffect, useState } from 'react';
import { type Dish } from '../interface/Dish';


export default function fetchDish(){
    
    const [dishData, setData] = useState<Dish[]>([]);

    useEffect(() => {
        
        const URL = `https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json`;
        const fetchData = async () => {
            try {

                const response = await fetch(URL);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const json: Dish[] = await response.json();
                setData(json);

            } catch (err: any) {
                
            } 
        };

        fetchData();
    }, []);

    return { dishData};
}
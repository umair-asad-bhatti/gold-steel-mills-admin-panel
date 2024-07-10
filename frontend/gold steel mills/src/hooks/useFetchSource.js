import {useState,useEffect} from "react";
import axios from "axios";

export const useFetchSource=(url)=>{
    const [data,setData]=useState([])
    const [isRefreshed, setIsRefreshed] = useState(false);
    const [isFetching, setIsFetching] = useState(true); // Track if data is fetching
    // Fetch all suppliers from API
    useEffect(() => {
         (async () => {
            try {
                const { data } = await axios.get(url);
                setData(data)
                setIsFetching(false);
                setIsRefreshed(false)// Set fetching to false after data is fetched
            } catch (error) {
                console.error('Error fetching suppliers:', error);
            }
        })()
    }, [isRefreshed]);

    const refresh=()=>{
        setData([])
        setIsRefreshed(true)
    }
    return {data,isFetching,setData,refresh}
}
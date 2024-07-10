import {useEffect,useState} from "react";
import {useFetchSource} from "./useFetchSource.js";

export const usePaginationAndFiltering = (url,filterField,ITEMS_PER_PAGE=5 ) => {
    const {data,setData,refresh}=useFetchSource(url);
    const [filteredData, setFilteredData] = useState(data);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    // Apply search filter
    useEffect(() => {
        if (searchQuery.trim() !== '') {
            const filtered = data.filter(supplier =>
                supplier[filterField].toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredData(filtered);
            setCurrentPage(1); // Reset to first page when search query changes
        } else {
            setFilteredData(data);
        }
    }, [searchQuery, data]);

    // Calculate paginated data based on current page
    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        const endIndex = startIndex + ITEMS_PER_PAGE;
        return filteredData.slice(startIndex, endIndex);
    };

    return {
        filteredData,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        getPaginatedData,
        setData,
        refresh
    };
};
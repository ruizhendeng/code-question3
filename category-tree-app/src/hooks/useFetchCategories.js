import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from '../actions/categoryActions';

// Custom hook to conditionally fetch categories based on the 'enabled' parameter
const useFetchCategories = (enabled) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (!enabled) return;
        // Define an async function to fetch data
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/categories');
                dispatch(fetchCategoriesSuccess(response.data));
            } catch (error) {
                dispatch(fetchCategoriesFailure(error.message));
            }
        };

        fetchData(); // Call the async function to fetch data
    }, [enabled, dispatch]); // Re-run useEffect when 'enabled' or 'dispatch' changes
};

export default useFetchCategories;

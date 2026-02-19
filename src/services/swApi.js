import axios from "axios";

const BASE_URL = 'https://swapi.dev/api/';

const api = axios.create({
    baseURL: BASE_URL,
});

export const getAllStarships = async () =>{
    try {
    const response = await api.get('/starships'); 
    return response.data.results; // The actual data is in the 'data' property of the response
  } catch (error) {
    console.error('Error fetching breeds:', error);
    throw error; // Propagate the error for the calling function to handle
  }
}

export const getStartshipById = async (starshipId) =>{
    try {
        const response =  await api.get('/starships/', {
            params:{
                id: starshipId,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching breeds:', error);
        throw error; 
    }
}


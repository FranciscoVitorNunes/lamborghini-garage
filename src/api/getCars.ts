import axios from 'axios'
import { carModel } from '../Components/CardView/props';
import { CARS_API_BASE_URL } from '../constants/car';

interface apiResponse {
    cars: carModel[]
}

export const fetcGetCardata = async (id: number) => {
    try{
    const response = await axios.get<apiResponse>(CARS_API_BASE_URL);
    const carData = response.data.cars.find((car) => car.id === id);
    return carData;
    }catch(error){
        console.error("Erro ao buscar dados da api:", error);
        throw error;
    }
}
import { fetchGetCarData } from "../../api/getCars";
import { carModel } from "./props";

export const loadCarData = async (
    id: number, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    const data = await fetchGetCarData(id);    
    try{
        if(data){
            setCarData(data);
        }
    }catch(error){
        console.error("Erro ao carregar dados do carro:", error);
    }
}

export const handlePreviousCar = async (
    carData:  carModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    let response = null
    if( carData && carData.id > 1){
        response = await fetchGetCarData(carData?.id-1)
    }
    if(response){
        setCarData(response)
    }
}

export const handleNextCar = async (
    carData:  carModel | null, 
    setCarData: React.Dispatch<React.SetStateAction<carModel | null>>
) => {
    let response = null
    if( carData && carData.id < 10){
        response = await fetchGetCarData(carData?.id+1)
    }
    if(response){
        setCarData(response)
    }
}



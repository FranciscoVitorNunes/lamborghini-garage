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

export const handlePreviousCar = async () => {}

export const handleNextCar = async () => {}
function setCarData(data: carModel) {
    throw new Error("Function not implemented.");
}


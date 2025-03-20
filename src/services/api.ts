import axios from "axios";
import { Place } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchPets = async (): Promise<void> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch pets.");
  }
};

export const addPlaceToServer = async (place: Place): Promise<Place> => {
  try {
    const response = await axios.post(API_URL, place);
    if (response) console.log({ ...place });
    return response.data;
  } catch (erorr) {
    throw new Error("Failed to add pet.");
  }
};

import axios from "axios";
import { Concert } from "../types/Concert";

const API_URL = "http://127.0.0.1:8080/concerts";

const getConcerts = async (): Promise<Concert[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching concerts:", error);
    return [];
  }
};

export default { getConcerts };

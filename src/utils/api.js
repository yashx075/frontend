import axios from "axios";

const api = axios.create({
  baseURL: "https://backend-b0do.onrender.com", // Backend URL
});

// Fetch questions from the backend
export const fetchQuestions = async () => {
  try {
    const response = await api.get("/questions/");
    return response.data;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw error;
  }
};

import axios from 'axios';

export const getAllSurveys = async () => {
  try {
    const response = await axios.get(
      'https://back-end-fgtracker.onrender.com/surveys'
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

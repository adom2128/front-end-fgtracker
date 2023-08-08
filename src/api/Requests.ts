import axios from 'axios';
import { SurveyData } from '../types/types';
import { convertFromApi, convertPaymentFromApi } from '../helpers';

const baseUrl = 'http://127.0.0.1:5000';
// const baseUrl = 'https://back-end-fgtracker.onrender.com'

export const getAllSurveys = async () => {
  try {
    const response = await axios.get(`${baseUrl}/surveys`);
    return response.data.map(convertFromApi);
  } catch (error) {
    console.log(error);
  }
};

export const postSurvey = async (newSurvey: Partial<SurveyData>) => {
  try {
    const response = await axios.post(`${baseUrl}/surveys`, newSurvey);
    return convertFromApi(response.data);
  } catch (error) {
    console.log(error);
  }
};

export const updateSurvey = async (
  updatedSurvey: SurveyData,
  surveyID: number
) => {
  try {
    console.log(updatedSurvey);
    const response = await axios.put(
      `${baseUrl}/surveys/${surveyID}`,
      updatedSurvey
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteSurvey = async (surveyID: number) => {
  try {
    const response = await axios.delete(`${baseUrl}/surveys/${surveyID}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllPayments = async () => {
  try {
    const response = await axios.get(`${baseUrl}/payments`);
    return response.data.map(convertPaymentFromApi);
  } catch (error) {
    console.log(error);
  }
};

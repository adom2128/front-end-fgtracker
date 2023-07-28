import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { getAllSurveys } from './api/Requests';
import Dashboard from './pages/Dashboard';
import { SurveyData } from './types/types';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);

  const fetchSurveys = async () => {
    const fetchedSurveys = await getAllSurveys();
    setSurveysData(fetchedSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return <Dashboard surveys={surveysData} />;
}

export default App;

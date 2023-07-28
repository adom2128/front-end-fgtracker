import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllSurveys } from './api/Requests';
import { SurveyData } from './types/types';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';
import Home from './pages/Home';
import FourOhFour from './pages/404';
import NavBar from './components/NavBar';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);

  const fetchSurveys = async () => {
    const fetchedSurveys = await getAllSurveys();
    setSurveysData(fetchedSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <Container className="my-4">
      <NavBar />
      <Routes>
        <Route element={<Home surveys={surveysData} />} path="/" />
        <Route element={<Dashboard surveys={surveysData} />} path="dashboard" />
        <Route element={<Completed surveys={surveysData} />} path="completed">
          {/* <Route element={<SurveyPage />} path=":completed_survey_id" /> */}
        </Route>
        <Route element={<FourOhFour />} path="*" />
      </Routes>
    </Container>
  );
}

export default App;

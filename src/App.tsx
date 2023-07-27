import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllSurveys } from './api/Requests';
import NavBar from './components/NavBar';
import FourOhFour from './pages/404';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';
import Survey from './components/Survey';

function App() {
  const [surveys, setSurveys] = useState([]);

  const fetchSurveys = async () => {
    const fetchedSurveys = await getAllSurveys();
    setSurveys(fetchedSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  return (
    <Container className="my-4">
      <NavBar />
      <Routes>
        <Route element={<Dashboard surveys={surveys} />} path="/">
          <Route element={<Survey />} path=":dashboard_survey_id" />
        </Route>
        <Route element={<Completed />} path="completed">
          <Route element={<Survey />} path=":completed_survey_id" />
        </Route>
        <Route element={<FourOhFour />} path="*" />
      </Routes>
    </Container>
  );
}

export default App;

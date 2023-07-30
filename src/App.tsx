import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getAllSurveys, postSurvey } from './api/Requests';
import { SurveyData, NewSurveyData } from './types/types';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';
import SurveyPage from './pages/SurveyPage';
import Home from './pages/Home';
import FourOhFour from './pages/404';
import NavBar from './components/NavBar';
import PlusButtonWithPopUp from './components/PlusButton';
import AddSurveyPopUp from './components/AddSurveyPopUp';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);
  const [showAddSurveyPopup, setShowAddSurveyPopup] = useState(false);

  const fetchSurveys = async () => {
    const fetchedSurveys = await getAllSurveys();
    setSurveysData(fetchedSurveys);
  };

  useEffect(() => {
    fetchSurveys();
  }, []);

  const handlePlusButtonClick = () => {
    setShowAddSurveyPopup(true);
  };

  const handleAddSurveyPopupClose = () => {
    setShowAddSurveyPopup(false);
  };

  const handleAddSurveyPopupSave = (newSurvey: NewSurveyData) => {
    setShowAddSurveyPopup(false);

    postSurvey(newSurvey).then((response) => {
      setSurveysData((prev) => [...prev, response]);
    });
  };

  const handleSurveyMenuButtonClick = () => {
    console.log('survey menu button clicked');
  };

  return (
    <Container className="my-4">
      <NavBar />
      <Routes>
        <Route element={<Home surveys={surveysData} />} path="/" />
        <Route element={<Dashboard surveys={surveysData} onSurveyMenuButtonClick={handleSurveyMenuButtonClick}/>} path="dashboard" />
        <Route element={<Completed surveys={surveysData} onSurveyMenuButtonClick={handleSurveyMenuButtonClick}/>} path="completed">
          {/* <Route element={<SurveyPage />} path=":completed_survey_id" /> */}
        </Route>
        <Route element={<FourOhFour />} path="*" />
      </Routes>
      <PlusButtonWithPopUp onClick={handlePlusButtonClick} />
      {showAddSurveyPopup && (
        <AddSurveyPopUp
          onCancel={handleAddSurveyPopupClose}
          onSaveClick={handleAddSurveyPopupSave}
        />
      )}
    </Container>
  );
}

export default App;

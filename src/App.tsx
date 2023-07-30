import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  getAllSurveys,
  postSurvey,
  deleteSurvey,
  updateSurvey,
} from './api/Requests';
import { SurveyData } from './types/types';
import Dashboard from './pages/Dashboard';
import Completed from './pages/Completed';
import SurveyPage from './pages/SurveyPage';
import Home from './pages/Home';
import FourOhFour from './pages/404';
import NavBar from './components/NavBar';
import PlusButtonWithPopUp from './components/PlusButton';
import AddSurveyPopUp from './components/AddSurveyPopUp';
import EditSurvey from './components/EditSurvey';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);
  const [showAddSurveyPopup, setShowAddSurveyPopup] = useState(false);
  const [showEditSurveyPopup, setShowEditSurveyPopup] = useState(false);
  const [selectedSurveyID, setSelectedSurveyID] = useState<number | null>(null);

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

  const handleAddSurveyPopupSave = (newSurvey: Partial<SurveyData>) => {
    setShowAddSurveyPopup(false);

    postSurvey(newSurvey).then((response) => {
      setSurveysData((prev) => [...prev, response]);
    });
  };

  const handleEditSurveyClick = (surveyID: number) => {
    setShowEditSurveyPopup(true);
    setSelectedSurveyID(surveyID);
    console.log('edit survey menu item clicked');
  };

  const handleDeleteSurveyClick = (surveyID: number) => {
    deleteSurvey(surveyID).then(() => {
      fetchSurveys();
    });
  };

  const handleEditSurveyPopupSave = (
    updatedSurvey: SurveyData,
    surveyID: number
  ) => {
    setShowEditSurveyPopup(false);
    updateSurvey(updatedSurvey, surveyID).then(() => {
      fetchSurveys();
    });
  };

  const handleEditSurveyPopupClose = () => {
    setShowEditSurveyPopup(false);
  };

  return (
    <Container className="my-4">
      <NavBar />
      <Routes>
        <Route element={<Home surveys={surveysData} />} path="/" />
        <Route
          element={
            <Dashboard
              surveys={surveysData}
              onDeleteSurveyClick={handleDeleteSurveyClick}
              onEditSurveyClick={handleEditSurveyClick}
            />
          }
          path="dashboard"
        />
        <Route
          element={
            <Completed
              surveys={surveysData}
              onDeleteSurveyClick={handleDeleteSurveyClick}
              onEditSurveyClick={handleEditSurveyClick}
            />
          }
          path="completed"
        >
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
      {showEditSurveyPopup && selectedSurveyID !== null && (
        <EditSurvey
          selectedSurveyData={
            surveysData.find((survey) => survey.id === selectedSurveyID)!
          }
          onCancel={handleEditSurveyPopupClose}
          onSaveClick={handleEditSurveyPopupSave}
        />
      )}
    </Container>
  );
}

export default App;

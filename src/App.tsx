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
import PlusButton from './components/PlusButton';
import AddSurveyPopUp from './components/AddSurveyPopUp';
import EditSurvey from './components/EditSurvey';
import DeleteModal from './components/DeleteModal';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);
  const [showAddSurveyPopup, setShowAddSurveyPopup] = useState(false);
  const [showEditSurveyPopup, setShowEditSurveyPopup] = useState(false);
  const [selectedSurveyToEditID, setSelectedSurveyToEditID] = useState<number | null>(null);
  const [selectedSurveyToDeleteID, setSelectedSurveyToDeleteID] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const fetchSurveys = () => {
    getAllSurveys().then((response) => {
      setSurveysData(response)
    })
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
    setSelectedSurveyToEditID(surveyID);
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteSurveyClick = (surveyID: number) => {
    setSelectedSurveyToDeleteID(surveyID);
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteSurvey = () => {
    if (selectedSurveyToDeleteID !== null) {
      deleteSurvey(selectedSurveyToDeleteID).then(() => {
        fetchSurveys();
      });
    }
    setShowDeleteModal(false);
  };

  const handleEditSurveyPopupSave = (
    updatedSurvey: SurveyData,
    surveyID: number
  ) => {
    setShowEditSurveyPopup(false);
    updateSurvey(updatedSurvey, surveyID).then(() => {
      fetchSurveys();
    });
    setSelectedSurveyToEditID(null);
  };

  const handleEditSurveyPopupClose = () => {
    setShowEditSurveyPopup(false);
    setSelectedSurveyToEditID(null);
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
      <PlusButton onClick={handlePlusButtonClick} />

      <AddSurveyPopUp
        show={showAddSurveyPopup}
        onCancel={handleAddSurveyPopupClose}
        onSaveClick={handleAddSurveyPopupSave}
      />

      {selectedSurveyToEditID !== null && (
        <EditSurvey
          selectedSurveyData={
            surveysData.find((survey) => survey.id === selectedSurveyToEditID)!
          }
          show={showEditSurveyPopup}
          onCancel={handleEditSurveyPopupClose}
          onSaveClick={handleEditSurveyPopupSave}
        />
      )}
      <DeleteModal
        show={showDeleteModal}
        onHide={hideDeleteModal}
        onConfirmDelete={handleConfirmDeleteSurvey}
      />
    </Container>
  );
}

export default App;

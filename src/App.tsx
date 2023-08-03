import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.css';
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
import Home from './pages/Home';
import FourOhFour from './pages/404';
import NavBar from './components/NavBar';
import PlusButton from './components/PlusButton';
import AddSurveyPopUp from './components/AddSurveyPopUp';
import EditSurvey from './components/EditSurvey';
import DeleteModal from './components/DeleteModal';
import PrivateRoute from './components/PrivateRoute';
import Survey from './components/Survey';
import LoginButton from './components/LoginButton';
import Login from './pages/Login';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [surveysData, setSurveysData] = useState<SurveyData[]>([]);
  const [showAddSurveyPopup, setShowAddSurveyPopup] = useState(false);
  const [showEditSurveyPopup, setShowEditSurveyPopup] = useState(false);
  const [showViewSurveyPopup, setShowViewSurveyPopup] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSurveyToEditID, setSelectedSurveyToEditID] = useState<
    number | null
  >(null);
  const [selectedSurveyToDeleteID, setSelectedSurveyToDeleteID] = useState<
    number | null
  >(null);
  const [selectedSurveyToViewID, setSelectedSurveyToViewID] = useState<
    number | null
  >(null);
  const { isAuthenticated } = useAuth0();

  const fetchSurveys = () => {
    getAllSurveys().then((response) => {
      setSurveysData(response);
    });
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
  };

  const handleEditSurveyPopupClose = () => {
    setShowEditSurveyPopup(false);
  };

  const handleViewSurveyClick = (surveyID: number) => {
    setSelectedSurveyToViewID(surveyID);
    setShowViewSurveyPopup(true);
  };

  const handleCloseSurvey = () => {
    setShowViewSurveyPopup(false);
    setSelectedSurveyToViewID(null);
  };

  const handleEditSurvey = () => {
    setShowViewSurveyPopup(false);
    handleEditSurveyClick(selectedSurveyToViewID!);
  };

  // const handleCompanyCardClick = (company: string) => {
  //   const companyLink = companyEmails(company);
  //   window.open(companyLink, '_blank');
  // };

  return (
    <Container className="my-4">
      <NavBar />
      <Routes>
        <Route element={<Login />} path="/" />
        <Route element={<FourOhFour />} path="*" />
        <Route element={<PrivateRoute />}>
          <Route element={<Home surveys={surveysData} />} path="/home" />
          <Route
            element={
              <Dashboard
                surveys={surveysData}
                onDeleteSurveyClick={handleDeleteSurveyClick}
                onEditSurveyClick={handleEditSurveyClick}
                onViewSurveyClick={handleViewSurveyClick}
              />
            }
            path="/dashboard"
          />
          <Route
            element={
              <Completed
                surveys={surveysData}
                onDeleteSurveyClick={handleDeleteSurveyClick}
                onEditSurveyClick={handleEditSurveyClick}
                onViewSurveyClick={handleViewSurveyClick}
              />
            }
            path="/completed"
          />
        </Route>
      </Routes>
      <PlusButton onClick={handlePlusButtonClick} />

      <AddSurveyPopUp
        show={showAddSurveyPopup}
        onCancel={handleAddSurveyPopupClose}
        onSaveClick={handleAddSurveyPopupSave}
      />
      {selectedSurveyToViewID !== null && (
        <Survey
          selectedSurveyData={
            surveysData.find((survey) => survey.id === selectedSurveyToViewID)!
          }
          show={showViewSurveyPopup}
          onCancel={handleCloseSurvey}
          onEdit={handleEditSurvey}
        />
      )}

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

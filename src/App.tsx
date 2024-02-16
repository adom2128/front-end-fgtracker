import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import '@fortawesome/fontawesome-free/css/all.css';
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
import Login from './pages/Login';
import Payments from './pages/Payments';
import Footer from './components/Footer';

function App() {
  const { isAuthenticated } = useAuth0();
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

  const fetchSurveys = async () => {
    const response = await getAllSurveys();
    setSurveysData(response);
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

  const handleAddSurveyPopupSave = async (newSurvey: Partial<SurveyData>) => {
    setShowAddSurveyPopup(false);

    const response = await postSurvey(newSurvey);

    if (!response) {
      return;
    }

    setSurveysData((prev) => [...prev, response]);
  };

  const handleEditSurveyClick = (surveyID: number | null) => {
    if (!surveyID) {
      return;
    }

    setShowEditSurveyPopup(true);
    setSelectedSurveyToEditID(surveyID);
  };

  const hideDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDeleteSurveyClick = (surveyID: number) => {
    setShowEditSurveyPopup(false);
    setSelectedSurveyToDeleteID(surveyID);
    setShowDeleteModal(true);
  };

  const handleConfirmDeleteSurvey = async () => {
    setShowEditSurveyPopup(false);
    setShowDeleteModal(false);
    await deleteSurvey(selectedSurveyToDeleteID);
    fetchSurveys();
  };

  const handleEditSurveyPopupSave = async (
    updatedSurvey: SurveyData | undefined,
    surveyID: number
  ) => {
    if (!updatedSurvey) {
      return;
    }

    setShowEditSurveyPopup(false);
    await updateSurvey(updatedSurvey, surveyID);
    fetchSurveys();
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
  };

  const handleEditSurvey = () => {
    setShowViewSurveyPopup(false);
    handleEditSurveyClick(selectedSurveyToViewID);
  };

  const selectedSurveyData = surveysData?.find(
    (survey) => survey.id === selectedSurveyToEditID
  );

  return (
    <>
      <NavBar />
      <Container className="app-home-container">
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
            <Route
              element={<Payments surveys={surveysData} />}
              path="/payments"
            />
          </Route>
        </Routes>
        {isAuthenticated && <PlusButton onClick={handlePlusButtonClick} />}

        <AddSurveyPopUp
          show={showAddSurveyPopup}
          onCancel={handleAddSurveyPopupClose}
          onSaveClick={handleAddSurveyPopupSave}
        />
        {selectedSurveyToViewID !== null && (
          <Survey
            selectedSurveyData={surveysData?.find(
              (survey) => survey?.id === selectedSurveyToViewID
            )}
            show={showViewSurveyPopup}
            onCancel={handleCloseSurvey}
            onEdit={handleEditSurvey}
          />
        )}

        {selectedSurveyData && (
          <EditSurvey
            selectedSurveyData={selectedSurveyData}
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
        <Footer />
      </Container>
    </>
  );
}

export default App;

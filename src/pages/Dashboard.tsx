import './Dashboard.css';
import SurveyList from '../components/SurveyList';
import { SurveyData } from '../types/types';

interface Props {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
  onViewSurveyClick: (surveyID: number) => void;
}

const Dashboard = ({
  surveys,
  onEditSurveyClick,
  onDeleteSurveyClick,
  onViewSurveyClick,
}: Props) => {
  return (
    <>
      <SurveyList
        surveys={surveys}
        onDeleteSurveyClick={onDeleteSurveyClick}
        onEditSurveyClick={onEditSurveyClick}
        onViewSurveyClick={onViewSurveyClick}
      />
    </>
  );
};

export default Dashboard;

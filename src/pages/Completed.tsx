import CompletedSurveyList from '../components/CompletedSurveyList';
import { SurveyData } from '../types/types';
import './Completed.css'

interface CompletedProps {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
  onViewSurveyClick: (surveyID: number) => void;
}

const Completed = ({ surveys, onEditSurveyClick, onDeleteSurveyClick, onViewSurveyClick }: CompletedProps) => {
  return (
    <div className="table-container result-tables">
      <CompletedSurveyList
        surveys={surveys}
        onDeleteSurveyClick={onDeleteSurveyClick}
        onEditSurveyClick={onEditSurveyClick}
        onViewSurveyClick={onViewSurveyClick}
      />
    </div>
  );
};

export default Completed;

import CompletedSurveyList from '../components/CompletedSurveyList';
import { SurveyData } from '../types/types';

interface CompletedProps {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
}

const Completed = ({ surveys, onEditSurveyClick, onDeleteSurveyClick }: CompletedProps) => {
  return (
    <div className="table-container">
      <CompletedSurveyList
        surveys={surveys}
        onDeleteSurveyClick={onDeleteSurveyClick}
        onEditSurveyClick={onEditSurveyClick}
      />
    </div>
  );
};

export default Completed;

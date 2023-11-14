import './Completed.css';
import CompletedSurveyList from '../components/CompletedSurveyList';
import { SurveyData } from '../types/types';

interface Props {
  surveys: SurveyData[];
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
  onViewSurveyClick: (surveyID: number) => void;
}

const Completed = ({
  surveys,
  onEditSurveyClick,
  onDeleteSurveyClick,
  onViewSurveyClick,
}: Props) => {
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

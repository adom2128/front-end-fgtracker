import CompletedSurvey from './CompletedSurvey';
import { SurveyData } from '../types/types';
import MenuButton from './MenuButton';
import { Table } from 'react-bootstrap';

interface CompletedSurveyListProps {
  surveys: SurveyData[];
  onSurveyMenuButtonClick: () => void;
}

const CompletedSurveyList = ({
  surveys,
  onSurveyMenuButtonClick,
}: CompletedSurveyListProps) => {
  return (
    <>
      <div className="table-responsive">
        <Table hover>
          <thead>
            <tr>
              <th>Company</th>
              <th>Topic</th>
              <th>Payment</th>
              <th>Notes</th>
              <th>Date Participated</th>
              <th>Payment Received</th>
              <th>Payment Left</th>
              <th>Payment Expiration Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {surveys
              .filter((survey) => survey.stage === 'Completed')
              .map((survey) => (
                <tr key={survey.id}>
                  <td>{survey.company}</td>
                  <td>{survey.topic}</td>
                  <td>{survey.payment}</td>
                  <td>{survey.notes}</td>
                  <td>{survey.dateFGCompleted}</td>
                  <td>{survey.paymentReceived}</td>
                  <td>{survey.paymentLeft}</td>
                  <td>{survey.paymentExpirationDate}</td>
                  <td>
                    <MenuButton
                      surveyID={survey.id}
                      onSurveyMenuButtonClick={onSurveyMenuButtonClick}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default CompletedSurveyList;

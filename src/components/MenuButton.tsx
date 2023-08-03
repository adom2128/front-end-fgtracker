import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'react-bootstrap';
import './MenuButton.css';

interface MenuButtonProps {
  surveyID: number;
  onViewSurveyClick: (surveyID: number) => void;
  onEditSurveyClick: (surveyID: number) => void;
  onDeleteSurveyClick: (surveyID: number) => void;
}

const MenuButton = ({
  onViewSurveyClick,
  onEditSurveyClick,
  onDeleteSurveyClick,
  surveyID,
}: MenuButtonProps) => {
  return (
    <>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic-${surveyID}"
          className="dropdown-btn"
        >
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => onViewSurveyClick(surveyID)}>
            View
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onEditSurveyClick(surveyID)}>
            Edit
          </Dropdown.Item>
          <Dropdown.Item onClick={() => onDeleteSurveyClick(surveyID)}>
            Delete
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default MenuButton;

import './PlusButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

interface PlusButtonProps {
  onClick: () => void;
}

const PlusButton = ({ onClick }: PlusButtonProps) => {
  return (
    <>
      <button
        onClick={onClick}
        className="plus-btn btn btn-primary btn-lg rounded-circle"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </>
  );
};

export default PlusButton;

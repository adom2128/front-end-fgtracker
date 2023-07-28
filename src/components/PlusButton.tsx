import './PlusButton.css';

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
        +
      </button>
    </>
  );
};

export default PlusButton;

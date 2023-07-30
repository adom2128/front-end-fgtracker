import { Link } from 'react-router-dom';
import "./404.css"

const FourOhFour = () => {
  return (
    <div className="four-oh-four-container">
      <h1 className="display-1 fw-bold">Yikes!</h1>
      <h2 className="text-danger">404 Page Not Found</h2>
      <img src="business-cat.jpg" alt="business cat" className="business-cat"/>
      <h3>Looks like this page is at a focus group.</h3>
      <h4>
        Try our <Link to="/dashboard">Dashboard</Link> instead.
      </h4>
    </div>
  );
};

export default FourOhFour;

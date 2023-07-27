import { Outlet } from 'react-router-dom';

const Completed = () => {
  return (
    <>
      <p>Hello from Completed</p>
      <Outlet />
    </>
  );
};

export default Completed;

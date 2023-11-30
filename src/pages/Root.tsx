import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <div className="bg-primary-paleNavy w-screen h-screen">
      <Outlet />
    </div>
  );
};

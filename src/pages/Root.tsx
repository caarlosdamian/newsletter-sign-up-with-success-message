import { Outlet } from 'react-router-dom';

export const Root = () => {
  return (
    <main className="bg-primary-paleNavy w-screen h-screen flex items-center justify-center">
      <Outlet />
    </main>
  );
};

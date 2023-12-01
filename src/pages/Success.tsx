import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '../components/button/Button';

export const Success = () => {
  const navigate = useNavigate();
  const {
    state,
  } = useLocation();

  return (
    <div className="w-screen h-screen bg-white flex items-center justify-between flex-col px-6 pt-20 pb-10 gap-10
    md:w-[504px] md:h-[520px] md:rounded-[36px] md:pt-12 md:px-16 md:pb-16">
      <div className="flex flex-col items-start gap-6 ">
        <img
          src="/src/assets/images/icon-success.svg"
          alt="icon-success"
          className="mb-4 md:mb-0"
        />
        <h1 className="text-[40px] font-bold text-primary-darkNavy md:text-[56px] md:leading-[56px]">
          Thanks for subscribing!
        </h1>
        <h2 className="text-base font-normal">
          A confirmation email has been sent to <strong>{state?.email || ''}</strong>. Please
          open it and click the button inside to confirm your subscription
        </h2>
      </div>
      <div className="w-full">
        <Button label="Dismiss message" onClick={() => navigate('/')} />
      </div>
    </div>
  );
};

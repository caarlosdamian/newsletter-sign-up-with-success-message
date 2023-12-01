import { FormEvent, useMemo, useState } from 'react';
import { Button } from '../components/button/Button';
import { Input } from '../components/input/Input';
import { featuresInfo } from '../constants';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils';

export const Home = () => {
  const [formState, setformState] = useState({
    email: '',
    isTouched: false,
  });
  const navigate = useNavigate();

  const isValid = useMemo(
    () =>
      formState.email.length !== 0 && validateEmail(formState.email) !== null,
    [formState]
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/success', { state: { email: formState.email } });
    setformState({ email: '', isTouched: false });
  };

  return (
    <div className="bg-white w-screen h-full flex flex-col gap-10 md:w-[928px] md:h-[641px] md:flex-row-reverse md:justify-between md:gap-16 md:py-6 md:pr-6 md:pl-16 md:rounded-[36px]">
      <div className="bg-headerMobile h-full bg-no-repeat w-screen min-h-[284px] bg-cover md:bg-contain md:bg-headerDesktop md:flex-1"></div>
      <div className="flex flex-col gap-10 px-6 md:flex-1 md:p-0 md:pt-[73px]">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold md:text-[56px]">
            Stay updated!
          </h1>
          <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
          <ul className="">
            {featuresInfo.map((feature) => (
              <li key={feature.id} className="flex items-start gap-4">
                <img src="src/assets/images/icon-list.svg" alt="icon-list" />
                <span className="text-base">{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <form
          className="flex flex-col gap-6 mb-10 md:mb-0"
          onSubmit={handleSubmit}
        >
          <Input
            label="Email address"
            placeholder="email@company.com"
            onChange={(e) =>
              setformState((prev) => ({ ...prev, email: e.target.value }))
            }
            isTouched={formState.isTouched}
            isValid={formState.isTouched && isValid}
            onBlur={() =>
              setformState((prev) => ({ ...prev, isTouched: true }))
            }
          />
          <Button
            disabled={!isValid}
            label="Subscribe to monthly newsletter"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

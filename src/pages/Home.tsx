import { featuresInfo } from '../constants';

export const Home = () => {
  return (
    <div className="bg-white w-screen h-full flex flex-col gap-10">
      <div className="bg-headerMobile h-full bg-no-repeat w-full min-h-[284px]"></div>
      <div className="flex flex-col gap-10 px-6">
        <div className="flex flex-col gap-6">
          <h1 className="text-[40px] font-bold">Stay updated!</h1>
          <h3>Join 60,000+ product managers receiving monthly updates on:</h3>
          <ul className="">
            {featuresInfo.map((feature) => (
              <li key={feature.id} className="flex items-start gap-4">
                <img src="src/assets/images/icon-list.svg" alt="icon-list" />
                <span>{feature.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};

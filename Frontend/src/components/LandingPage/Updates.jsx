import UpdateTabs from "./UpdateTabs";
import { useNavigate } from "react-router-dom";

const Updates = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-16">
        <div className="text-center">
          <h1 className="text-7xl">Top Updates</h1>
        </div>
        <div>
          <UpdateTabs></UpdateTabs>
        </div>
        <div className="flex justify-center">
          <a href="./allGames">
            <button onClick={() => navigate("/allGames")} className="px-6 py-3 mt-10 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
              All Games
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Updates;

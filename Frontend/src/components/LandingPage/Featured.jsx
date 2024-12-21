import FeaturedTabs from "./FeaturedTabs";

const Featured = () => {
  return (
    <>
      <div className="relative">
        <div className="text-center mt-16">
          <h1 className="text-7xl">Featured Games</h1>
        </div>
        <FeaturedTabs></FeaturedTabs>
        <div className="flex justify-center items-center">
          <a href="./allGames">
            <button className="px-6 py-3 mt-16 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
              Latest Games
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
export default Featured;

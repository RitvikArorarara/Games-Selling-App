import UpdateTabs from "./UpdateTabs";

const Updates = () => {
  return (
    <>
      <div className="mt-16">
        <div className="text-center">
          <h1 className="text-6xl">Top Updates</h1>
        </div>
        <div>
          <UpdateTabs></UpdateTabs>
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-3 mt-10 bg-transparent border-2 border-black rounded-md hover:bg-white hover:text-black transition duration-300">
            All Games
          </button>
        </div>
      </div>
    </>
  );
};
export default Updates;

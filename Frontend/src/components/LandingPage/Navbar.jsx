import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="relative mx-auto border-2 border-[#E4E8F1] text-[#24262E] p-2 bg-[#E4E8F1]">
        <div className=" md:flex items-center justify-between space-x-20 ">
          <Link to="/">
            <img src="gamer.png" alt="" className="max-w-11 ml-20" />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            <Link to="/allGames">
              <div>Store</div>
            </Link>

            <Link to="/signin">
              <div>Sign in</div>
            </Link>

            <Link to="/signup">
              <div>Sign up</div>
            </Link>

            <Link to="/purchases">
              <div>Purchases</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

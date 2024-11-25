const Navbar = () => {
  return (
    <>
      <div className="relative mx-auto border-2 border-[#E4E8F1] text-[#24262E] p-2 bg-[#E4E8F1]">
        <div className=" md:flex items-center justify-between space-x-20 ">
          <img src="gamer.png" alt="" className="max-w-11 ml-20" />

          <div className="hidden md:flex items-center space-x-10">
          
            <button>Games</button>
            <button>Experience</button>
            <button>Newsletter</button>
            <button>FAQ</button>
            
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;

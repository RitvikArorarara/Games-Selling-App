const Footer = () => {
  return (
    <>

      <div className=" w-full bottom-0 justify-evenly items-center bg-[#E4E8F1]">
        <div className="flex justify-evenly items-center">
        <div className="max-w-32">
          <img src="gamer.png" alt="" className="max-w-32" />
        </div>
        <div className="max-w-screen-md p-14">
          <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum, fuga quo, atque temporibus iure pariatur molestias, vero facilis molestiae aliquam nesciunt alias earum tempora dicta ducimus assumenda repellat ipsa.
          </p>
        </div>
        <div>
          <button className="px-6 py-3 mt-10 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
            Contact us
          </button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

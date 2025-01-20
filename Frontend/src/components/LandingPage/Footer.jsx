const Footer = () => {
  const handleContact = () => {
    window.location.href = "mailto:aroraritvik@gmail.com";
  };
  return (
    <>
      <div className=" w-full bottom-0 justify-evenly items-center bg-[#E4E8F1]">
        <div className="justify-evenly items-center md:flex ">
        <div className="max-w-32">
          <img src="gamer.png" alt="" className="max-w-32" />
        </div>
        <div className="max-w-screen-md p-14">
          <p>
       This is a mockup website for a game store such as EA, Steam, etc. It is a simple website that allows users to browse games and purchase them. It is built with <b> React, Tailwind, MUI, Node.js, Express, and MongoDB</b>. If you want to see other projects I have worked on, you can visit my <a href="https://github.com/RitvikArorarara" target="_blank" rel="noopener noreferrer"><i>GitHub</i></a> profile.
          </p>
        </div>
        <div>
          <button onClick={handleContact} className="px-6 py-3 mt-10 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
            Contact us
          </button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

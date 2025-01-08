

const Hero = () => {
  let date = (new Date().getDate());

  let newDate = date + 5;
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: "url('f124.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>

        <div className=" relative z-10 p-16  flex flex-col justify-start items-center text-wrap text-center text-white h-full max-w-screen-md">
          <h1 className="text-4xl mt-10 md:text-6xl font-bold mb-4 uppercase">
            Play F1® 24 for Free This Weekend
          </h1>
          <p className="text-lg md:text-xl max-w-2xl m-8">
            Experience F1® 24 from {date} January to {newDate} January , for free on
            this platform to enjoy double XP and unlock new content and
            exclusive rewards!
          </p>
          {/* <button  className="px-6 py-3 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button> */}
        </div>
      </div>
      <div
        className="relative bg-cover bg-center h-[20vh] max-w-screen"
        style={{
          backgroundImage: "url('SIMS-Hero.jpg')",
        }}
      >
        <div className="sm:absolute sm:inset-0 flex flex-wrap justify-evenly items-center">
          <div className=" relative z-10 text-xl p-16 flex justify-start items-center text-wrap text-center text-white h-full max-w-screen-sm">
            <p>Make adorable friends and discover creative adventures.</p>
          </div>
          {/* <button className="px-6 py-3 bg-transparent border-2 text-white border-white rounded-md hover:bg-white hover:text-black transition duration-300" >
           Buy Now
          </button> */}
        </div>
      </div>
    </>
  );
};
export default Hero;

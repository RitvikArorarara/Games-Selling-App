import Featured from "./Featured";
import Hero from "./Hero";
import Updates from "./Updates";

const LandingPage = () => {
  return (
    <>
      {/* <div className=" inset-0 bg-gradient-to-br from-indigo-950/80 to-rose-600/80"> */}
      
        <Hero></Hero>
        <Featured></Featured>
        <Updates></Updates>
      {/* </div> */}
    </>
  );
};
export default LandingPage;

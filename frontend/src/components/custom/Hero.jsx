import { Button } from "../ui/button";

const heroItems = {
  banner1: "Discover Your Next Advanture with AI: ",
  banner2: "Personalized Itenaraties at Your Fingertips",
  tagLine:
    "Your personal trip planner and traval curator, creating custom itineraries tailored to your interests and budget.",
  button: "Get Started, It's Free!"
};

const Hero = () => {
  return (
    <div className="flex flex-col items-center mx-56 gap-9">

      <div className="font-extrabold text-[50px] text-center mt-16">
        <p className="text-[#f56551]">{heroItems.banner1}</p>
        <p>{heroItems.banner2}</p>
      </div>

      <p className="text-xl text-gray-500 text-center">{heroItems.tagLine}</p>

      <Button>{heroItems.button}</Button>
    </div>
  );
};

export default Hero;

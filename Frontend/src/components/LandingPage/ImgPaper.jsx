const gameList = [
  {
    id: 1,
    name: "f1",
    img: "GoW.jpg",
  },
  {
    id: 2,
    name: "Apex",
    img: "apex-legends.jpg",
    logo: "apex-legends-logo.png",
  },
  {
    id: 3,
    name: "f1",
    img: "FC25.jpg",
  },
  {
    id: 4,
    name: "f1",
    img: "sims.jpg",
  },
  {
    id: 5,
    name: "f1",
    img: "m25.jpg",
  },
  {
    id: 6,
    name: "f1",
    img: "f124-verstappen.jpg",
  },
];

export default function ImgPaper() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6 mt-16">
        {gameList.map((game) => (
          <div
            key={game.id}
            className="relative h-[360px] w-[360px] md:basis-1/3 lg:basis-1/4 flex justify-center"
          >
            <img
              src={game.img}
              alt={game.name}
              className="h-[360px] w-[360px] object-cover rounded-lg shadow-lg"
            />

            <div className="group h-[360px] w-[360px] object-cover transition duration-300 absolute inset-0 flex flex-col justify-center items-center text-center hover:bg-[#100007] hover:bg-opacity-75 rounded-lg text-white text-xl font-bold">
              {game.name}
              <button className="hidden group-hover:block px-4 py-2 mt-5 bg-transparent border-2 border-white rounded-md hover:bg-white hover:text-black transition duration-300 focus:ring-2 focus:ring-white focus:outline-none">Buy Now?</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

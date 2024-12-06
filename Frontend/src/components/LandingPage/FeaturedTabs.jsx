const gameList = [
  {
    id: 1,
    name: "God of war",
    img: "GoW.jpg",
    link: "https://store.steampowered.com/agecheck/app/1593500/",
  },
  {
    id: 2,
    name: "Apex",
    img: "apex-legends.jpg",
    logo: "apex-legends-logo.png",
    link: "https://www.ea.com/games/apex-legends",
  },
  {
    id: 3,
    name: "FC24",
    img: "FC25.jpg",
    link: "https://www.ea.com/games/ea-sports-fc/fc-25",
  },
  {
    id: 4,
    name: "Sims",
    img: "sims.jpg",
    link: "https://www.ea.com/games/the-sims/the-sims-4/store/addons/the-sims-4-life-and-death-expansion-pack",
  },
  {
    id: 5,
    name: "Madden",
    img: "m25.jpg",
    link: "https://www.ea.com/games/madden-nfl/madden-nfl-25",
  },
  {
    id: 6,
    name: "F1",
    img: "f124-verstappen.jpg",
    link: "https://www.ea.com/games/f1/f1-24",
  },
];

export default function FeaturedTabs() {
  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6 mt-16">
        {gameList.map((game) => (
          <a
            key={game.id}
            href={game.link}
            className="group relative block w-[300px] md:basis-1/3 lg:basis-1/4 aspect-square overflow-hidden rounded-lg"
          >
            {/* Base Image */}
            <img
              src={game.img}
              alt={game.name}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 to-rose-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              {/* EA Sports Logo - Hidden by default, shows on hover */}
              <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2">
                <p className="text-xl font-medium text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  {game.name}
                </p>
              </div>

              {/* Title - Always visible, moves up on hover */}
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

import { gameList } from "../../GameData/gameList";
export function TopUpdateTabs({ type }) {
  const shooter = gameList.filter((shoot) => shoot.genre === type);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6 mt-16">
        {shooter.map((game) => (
          <a
            key={game.id}
            href={game.game_url}
            className="group relative block max-h-[206px] max-w-[365px] md:basis-1/3 lg:basis-1/4 aspect-square overflow-hidden rounded-lg "
          >
            <img
              src={game.thumbnail}
              alt={game.title}
              className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50 "
            />

            {/* <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 to-rose-600/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" /> */}

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center ">
              <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 ">
                <p className="text-xl font-medium text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                  {game.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

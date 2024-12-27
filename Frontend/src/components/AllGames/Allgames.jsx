import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function AllGames() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [purchasedGames, setPurchasedGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchGames() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/v1/game/preview"
        );
        setGames(response.data.games);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch games");
        setLoading(false);
      }
    }

    fetchGames();
  }, []);
  async function handlePurchaseClick(game) {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found. Please log in.");
     navigate("/signin");
      return;
    }
    try {
      
      const response = await axios.post(
        "http://localhost:3001/api/v1/game/purchase",
        {
          gameId: game._id,
        },
        {
          headers: {
            "Authorization":`Bearer ${token}` 
          },
        }
      );
      if (response.data.message === "You have successfully bought this game") {
        setPurchasedGames([...purchasedGames, game]);
        navigate("/purchases");
      }
    } catch (error) {
      console.error("Failed to purchase the game", error);
    }
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // const gameList = async function getGames() {
  //   await axios.get("http://localhost:3001/api/v1/game/preview", {
  //     title: title,
  //     thumbnail: thumbnail,
  //     description: short_description,
  //     game_url: game_url,
  //     genre: genre,
  //     platform: platform,
  //     publisher: publisher,
  //     developer: developer,
  //     release_date: release_date,
  //     price: price,
  //   });
  // };

  return (
    <>
      <h1 className="text-center font-bold text-9xl m-6">Gaming Store</h1>
      <div className="flex justify-center items-center flex-wrap gap-6 p-16  ">
        {games.map((game) => (
          <div
            key={game._id}
            className="border-4 rounded-xl transition-all duration-300 hover:-translate-y-2 max-w-[365px] "
          >
            <div
              key={game.id}
              className="group relative block md:basis-1/3 lg:basis-1/4  overflow-hidden rounded-lg"
            >
              <img
                src={game.thumbnail}
                alt={game.title}
                className="max-h-[206px] w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50"
              />

              <div className=" absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <div className="transform transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2">
                  <p className="text-xl font-medium text-white transform transition-transform duration-300 group-hover:-translate-y-2">
                    {game.title}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-xl font-semibold mt-2">{game.title}</h2>
              <p className="mt-2 text-lg ">{game.short_description}</p>
              <p className="mt-2 text-sm text-gray-600">Genre: {game.genre}</p>
              <p className="mt-2 text-lg font-bold">${game.price}</p>
            </div>
            <div className="relative flex justify-evenly items-center m-6 gap-2 ">
              <div>
                <a href={game.game_url}>
                  <button className="px-10 py-3 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
                    Game Site
                  </button>
                </a>
              </div>
              <div>
                <button
                  onClick={() => handlePurchaseClick(game)}
                  className="px-6 py-3 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

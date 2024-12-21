import React, { useState, useEffect } from "react";
import axios from "axios";

const Purchases = () => {
  const [purchasedGames, setPurchasedGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchasedGames = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:3001/api/v1/user/purchases",
          {
            userId: userId,
            headers: {
              token: `Bearer ${token}`,
            },
          }
        );

        if (response.data.purchases && response.data.gameData) {
          // Combine purchase data with game data
          const combinedData = response.data.purchases.map((purchase) => ({
            ...purchase,
            ...response.data.gameData,
          }));
          setPurchasedGames(combinedData);
        } else {
          setPurchasedGames([]);
        }
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch purchased games");
        setLoading(false);
      }
    };

    fetchPurchasedGames();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 text-xl mt-10">
        Error: {error}
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Purchased Games</h1>
      {purchasedGames.length === 0 ? (
        <p className="text-xl text-gray-600">
          You haven't purchased any games yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {purchasedGames.map((game) => (
            <div
              key={game._id}
              className="border rounded-lg shadow-lg p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mt-2">{game.title}</h2>
                <p className="text-gray-600 mt-1">Genre: {game.genre}</p>
                <p className="text-gray-600 mt-1">
                  Developer: {game.developer}
                </p>
                <p className="text-gray-600 mt-1">
                  Purchase Date: {new Date(game.createdAt).toLocaleDateString()}
                </p>
                <a
                  href={game.game_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Play Game
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchases;

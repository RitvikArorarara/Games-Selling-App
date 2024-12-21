import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { gameList } from "../../GameData/gameList";

export default function InfoCard({ type }) {
  const shooter = gameList.filter((shoot) => shoot.genre === type).slice(0, 10);

  return (
    <>
      <div className="flex justify-center items-center flex-wrap gap-6 mt-16  ">
        {shooter.map((game) => (
          <Card
            sx={{ maxWidth: 325, height: 375 }}
            key={game.id}
            className="relative hover:shadow-lg hover:shadow-black hover:scale-105"
          >
            <CardActionArea href={game.game_url}>
              <CardMedia
                component="img"
                image={game.thumbnail}
                alt={game.title}
                
              />
              <CardContent className="text-center ">
                <Typography gutterBottom variant="h5" component="div">
                  {game.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {game.short_description}
                </Typography>
              </CardContent>
            </CardActionArea>

            {/* <CardActions className="flex justify-around items-center bottom-0 text-xl mt-auto">
              <a
                href={game.game_url}
                className="px-3 py-2 bg-transparent border-2 bg-indigo-500 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none "
              >
                Game website
              </a>
              <button className="px-3 py-2 bg-transparent border-2 border-black rounded-md hover:bg-black hover:text-white transition duration-300 focus:ring-2 focus:ring-flack focus:outline-none">
                Add to Cart
              </button>
            </CardActions> */}
          </Card>
        ))}
      </div>
    </>
  );
}

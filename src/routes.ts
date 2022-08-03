import {
  deleteMoviesId,
  getMovies,
  getMoviesId,
  moviesPut,
  postMoviesId,
} from "@controllers/todo"
import { getLogin } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.get("/login", getLogin)
  app.get("/movies", getMovies)
  app.get("/movies/:id", getMoviesId)
  app.delete("/movies/:id", deleteMoviesId)
  app.post("/movies", postMoviesId)
  app.put("/movies/:id", moviesPut)
}

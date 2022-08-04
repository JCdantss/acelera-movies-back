import {
  deleteMoviesId,
  getMovies,
  getMoviesId,
  moviesPut,
  postMoviesId,
} from "@controllers/todo"
import { login } from "@controllers/todo"

export const defineRoutes = (app) => {
  app.post("/login", login)
  app.get("/movie", getMovies)
  app.get("/movie/:id", getMoviesId)
  app.delete("/movie/:id", deleteMoviesId)
  app.post("/movie", postMoviesId)
  app.put("/movie/:id", moviesPut)
}

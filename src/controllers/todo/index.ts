import { getRepository } from "typeorm"
import { Movies } from "@models/entity/Movies"
import { User } from "@models/entity/User"

export const getMovies = async (request, response) => {
  try {
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.find()
    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const getLogin = async (request, response) => {
  const userRepository = getRepository(User)
  const findUser = await userRepository.find()
  return response.json(findUser)
}

export const getMoviesId = async (request, response) => {
  try {
    const { id } = request.params
    const movieRepository = getRepository(Movies)
    const findMovie = await movieRepository.findOne(id)

    return response.status(200).json(findMovie)
  } catch (error) {
    return response.status(500).json(error)
  }
}

export const postMoviesId = async (request, response) => {
  try {
    const {
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    } = request.body
    const movieRepository = getRepository(Movies)
    const createMovie = movieRepository.create({
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    })
    const saveMovies = await movieRepository.save(createMovie)
    return response.status(200).json(saveMovies)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const deleteMoviesId = async (request, response) => {
  try {
    const { id } = request.params
    const getMovies = getRepository(Movies)
    const deleteMoviesId = await getMovies.delete(id)
    return response.status(200).json(deleteMoviesId)
  } catch (error) {
    return response.status(500).json(error)
  }
}
export const moviesPut = async (request, response) => {
  try {
    const {
      title,
      subtitle,
      resume,
      releaseDate,
      image,
      director,
      writer,
      classification,
      studio,
      note,
    } = request.body
    const { id } = request.params
    const updateMoviesId = getRepository(Movies)
    const movie = await updateMoviesId.findOne(id)
    if (title) {
      movie.title = title
    }
    if (subtitle) {
      movie.subtitle = subtitle
    }
    if (resume) {
      movie.resume = resume
    }
    if (releaseDate) {
      movie.releaseDate = releaseDate
    }
    if (image) {
      movie.image = image
    }
    if (director) {
      movie.director = director
    }
    if (writer) {
      movie.writer = writer
    }
    if (classification) {
      movie.classification = classification
    }
    if (studio) {
      movie.studio = studio
    }
    if (note) {
      movie.note = note
    }
    const result = await updateMoviesId.save(movie)
    return response.status(200).json(result)
  } catch (error) {
    return response.status(500).json(error)
  }
}

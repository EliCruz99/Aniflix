import api from "./api-config";

export const getAllAnime = async () => {
  try {
    const res = await api.get('/animes')
    return res.data
  } catch (e) {
    throw e
  }
}

export const getAnime = async (animeId) => {
  try {
    const res = await api.get(`/animes/${animeId}`)
    return res.data
  } catch (e) {
    throw e
  }
}

export const postAnime = async (animeForm) => {
  try {
    const res = await api.post('/animes', animeForm)
    return res.data
  } catch (e) {
    throw e
  }
}

export const putAnime = async (animeId, animeForm) => {
  try {
    const res = await api.put(`/animes/${animeId}`, animeForm)
    return res.data
  } catch (e) {
    throw e
  }
}

export const deleteAnime = async (animeId) => {
  try {
    await api.delete(`/animes/${animeId}`)
  } catch (e) {
    throw e
  }
}
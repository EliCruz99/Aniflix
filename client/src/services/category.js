import api from "./api-config";

export const getAllCategories = async () => {
  try {
    const res = await api.get('/categories')
    return res.data
  } catch (e) {
    throw e
  }
}
console.log(getAllCategories())
  
export const getCategory = async(categoryId) => {
  try {
    const res = await api.get(`/categories/${categoryId}`)
    return res.data
  } catch (e) {
    throw e
  }
}
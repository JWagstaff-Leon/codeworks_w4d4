
// @ts-ignore
export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs/search?api_key=KDQIMSuoRZvVFpBN7qyk78JY3hwO3Rxf&q=turtles&limit=25&offset=0&rating=g&lang=en',
  timeout: 5000,
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 5000,
})


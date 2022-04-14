export const giphyApiParams = { api_key: "KDQIMSuoRZvVFpBN7qyk78JY3hwO3Rxf", rating: "g", offset: "0", lang: "eng", limit: "25", q: "" };

// @ts-ignore
export const giphyApi = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 5000,
})

// @ts-ignore
export const sandboxApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/gifts',
  timeout: 5000,
})


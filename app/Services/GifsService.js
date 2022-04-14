import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";
import { giphyApi, giphyApiParams } from "./AxiosService.js";

class GifsService
{
    async searchGifs(searchTerm)
    {
        giphyApiParams.q = searchTerm;
        const res = await giphyApi.get("search", giphyApiParams);
        console.log(res);
        ProxyState.gifs = res.data.data.map(gif => new Gif(gif));
        giphyApiParams.q = "";
    }
}

export const gifsService = new GifsService();
import { ProxyState } from "../AppState.js";
import { Gif } from "../Models/Gif.js";
import { giphyApi, giphyApiParams } from "./AxiosService.js";

class GifsService
{
    searchGifs(searchTerm)
    {
        giphyApiParams.q = searchTerm;
        const res = giphyApi.get("search", giphyApiParams);
        console.log(res);
        ProxyState.gifs = res.data.map(gif => new Gif(gif));
        giphyApiParams.q = "";

    }
}

export const gifsService = new GifsService();
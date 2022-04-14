import { ProxyState } from "../AppState.js";
import { gifsService } from "../Services/GifsService.js";

function _drawGifs()
{
    let giftsTemplate = "";
    ProxyState.gifs.forEach(gif => template += gif.Template);
    document.getElementById("gifs-list").innerHTML = giftsTemplate;
}

export class GifsController
{
    constructor()
    {
        ProxyState.on("gifs", _drawGifs)
    }

    searchGifs(searchTerm)
    {
        try
        {
            gifsService.searchGifs(serachTerm);
        }
        catch(error)
        {
            console.error("[GIFS SEARCH ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }

    selectGif(gifId)
    {
        const selectedGif = ProxyState.gifs.find(gif => gif.id === gifId)
        document.getElementById("url").value = selectedGif.url;
    }
}
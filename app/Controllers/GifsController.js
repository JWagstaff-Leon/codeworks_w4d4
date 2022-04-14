import { ProxyState } from "../AppState.js";
import { gifsService } from "../Services/GifsService.js";

function _drawGifs()
{
    let giftsTemplate = "";

    ProxyState.gifs.forEach(gif => template += gif.Template);

    // TODO add element id
    throw new Error("GifsController._drawGifs has a missing element id.");
    document.getElementById("").innerHTML = giftsTemplate;
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

    selectGif(gifUrl)
    {
        // TODO add url input id
        throw new Error("GifsController.selectGif has a missing element id.")
        document.getElementById
    }
}
import { ProxyState } from "../AppState.js";
import { gifsService } from "../Services/GifsService.js";

function _drawGifs()
{
    let gifsTemplate = "";
    ProxyState.gifs.forEach(gif => gifsTemplate += gif.Template);
    document.getElementById("gifs-list").innerHTML = gifsTemplate;
}

export class GifsController
{
    constructor()
    {
        ProxyState.on("gifs", _drawGifs);
    }

    searchGifs()
    {
        try
        {
            window.event.preventDefault();
            const form = window.event.target;
            const searchTerm = form.search.value;
            gifsService.searchGifs(searchTerm);
        }
        catch(error)
        {
            console.error("[GIFS SEARCH ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }

    selectGif(gifId)
    {
        try
        {
            const selectedGif = ProxyState.gifs.find(gif => gif.id === gifId);
            document.getElementById("url").value = selectedGif.url;
        }
        catch(error)
        {
            console.error("[SELECT GIF ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}
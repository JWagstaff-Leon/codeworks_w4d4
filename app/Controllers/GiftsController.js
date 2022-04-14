import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { giftsService } from "../Services/GiftsService.js";

function _drawGifts()
{
    let giftsTemplate = "";
    ProxyState.gifts.forEach(gift => giftsTemplate += gift.Template);
    document.getElementById("gifts-list").innerHTML = giftsTemplate;
}

function _getGiftsFromApi()
{
    try
    {
        giftsService.getAllGifts();
    }
    catch(error)
    {
        console.error("[GET GIFTS FROM API ERROR]", error.message);
        Pop.toast(error.message, "error");
    }
}

export class GiftsController
{
    constructor()
    {
        ProxyState.on("gifts", _drawGifts);
        _getGiftsFromApi();
    }

    addGift()
    {
        try
        {
            window.event.preventDefault();
            const form = window.event.target;

            const newGiftData = 
            {
                tag: form.tag.value,
                url: form.url.value,
                opened: false
            };

            const newGift = new Gift(newGiftData);
            giftsService.addGift(newGift);
            form.reset();
        }
        catch(error)
        {
            console.error("[ADD GIFT ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }

    openGift(giftId)
    {
        try
        {
            giftsService.openGift(giftId);
        }
        catch(error)
        {
            console.error("[OPEN GIFT ERROR]", error.message);
            Pop.toast(error.message, "error");
        }
    }
}
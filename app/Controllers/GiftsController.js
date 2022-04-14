import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/GIft.js";
import { giftsService } from "../Services/GiftsService.js";

function _drawGifts()
{
    let giftsTemplate = "";

    ProxyState.gifts.forEach(gift => giftsTemplate += gift.Template);

    // TODO add element id
    throw new Error("GiftsController._drawGifts has a missing element id.");
    document.getElementById("").innerHTML = giftsTemplate;
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

            //TODO add in form names/ids
            throw new Error("GiftsController.addGift has missing form ids.");
            const newGiftData = 
            {
                tag: form./*id.*/value,
                url: form./*id.*/value,
                opened: false
            };

            const newGift = new Gift(newGiftData);
            giftsService.addGift(newGift);
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
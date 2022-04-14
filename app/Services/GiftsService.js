import { ProxyState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { sandboxApi } from "./AxiosService.js";

class GiftsService
{
    async getAllGifts()
    {
        const res = await sandboxApi.get("");
        ProxyState.gifts = res.data.map(gift => new Gift(gift));
    }

    async addGift(newGift)
    {
        const res = await sandboxApi.post("", newGift);
        const resNewGift = new Gift(res.data);
        ProxyState.gifts = [...ProxyState.gifts, resNewGift];
    }

    async openGift(giftId)
    {
        const openedGiftIndex = ProxyState.gifts.findIndex(gift => gift._id === giftId);
        if(openedGiftIndex === -1)
        {
            throw new Error("GiftsService.openGift could not find the gift with the right ID.");
        }
        const res = await sandboxApi.put(giftId, { opened: true });
        ProxyState.gifts.splice(openedGiftIndex, 1, new Gift(res.data));
        ProxyState.gifts = ProxyState.gifts;
    }
}

export const giftsService = new GiftsService();
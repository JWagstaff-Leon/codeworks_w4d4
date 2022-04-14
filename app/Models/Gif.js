export class Gif
{
    constructor(data)
    {
        this.id = data.id;
        this.url = data.images.fixed-height.url;
    }

    get Template()
    {
        return `
        <div class="col-12 mb-3 p-2" onclick="selectGif">
            <img src="${this.url}" class="search-result"/>
        </div>
        `;
    }
}
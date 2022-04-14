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
        <div class="col-6 mx-1 mb-2 border-dark" onclick="app.gifsController.selectGif('${this.id}')">
            <img src="${this.url}" class="search-result"/>
        </div>
        `;
    }
}
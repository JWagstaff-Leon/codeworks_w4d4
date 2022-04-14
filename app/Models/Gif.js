export class Gif
{
    constructor(data)
    {
        this.id = data.id;
        this.url = data.images.fixed_height.url;
    }

    get Template()
    {
        return `
        <div class="col-6 mb-2 py-2 border-dark" onclick="app.gifsController.selectGif('${this.id}')">
            <img src="${this.url}" class="search-result"/>
        </div>
        `;
    }
}
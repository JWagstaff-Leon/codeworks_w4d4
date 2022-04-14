export class Gift
{
    constructor(data)
    {
        this.id = data.id;
        this.tag = data.tag;
        this.url = data.url;
        this.opened = data.opened || false;
    }

    get Template()
    {
        return this.opened ? this.OpenedTemplate : this.ClosedTemplate;
    }

    get ClosedTemplate()
    {
        return `
        <div class="gift-card shadow bg-warning m-3 text-center align-items-center" onclick="app.giftsController.openGift('${this.id}')">
            <div class="card h-100">
                <img src="/./assets/img/wrappape.png" class="card-img" alt="...">
                <div class="card-img-overlay d-flex align-items-center justify-content-center">
                <div class="bg-grey p-2 rounded">
                    <h5 class="card-title fw-bold">Card title</h5>
                    <p class="card-text fw-bold">Click to Open</p>
                </div>
                </div>
            </div>
        </div>
        `;
    }

    get OpenedTemplate()
    {
        return `
        <div class="gift-card shadow bg-warning m-3 text-center align-items-center">
            <div>
                <img class="object-fit" src="${this.url}" alt="">
            </div>
            <p>${this.tag}</p>
        </div>
        `;
    }
}
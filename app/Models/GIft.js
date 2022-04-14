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
        return `<span>TODO make a closed template</span>`;
    }

    get OpenedTemplate()
    {
        return `<span>TODO make an opened template</span>`;
    }
}
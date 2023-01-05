export class Items {
    private _id: number;
    private _name: string;
    private _type: string;
    private _price: string;
    private _quantity: number;
    private _dateCreated: number;
    private _describe: string;


    constructor(id: number, name: string, type: string, price: string, quantity: number, dateCreated: number, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._quantity = quantity;
        this._dateCreated = dateCreated;
        this._describe = describe;
    }


    getId(): number {
        return this._id;
    }
    setId(value: number) {
        this._id = value;
    }

    getName(): string {
        return this._name;
    }
    setName(value: string) {
        this._name = value;
    }

    getType(): string {
        return this._type;
    }
    setType(value: string) {
        this._type = value;
    }

    getPrice(): string {
        return this._price;
    }
    setPrice(value: string) {
        this._price = value;
    }

    getQuantity(): number {
        return this._quantity;
    }
    setQuantity(value: number) {
        this._quantity = value;
    }

    getDateCreated():number {
        return this._dateCreated;
    }
    setDateCreated(value: number) {
        this._dateCreated = value;
    }

    getDescribe(): string {
        return this._describe;
    }
    setDescribe(value: string) {
        this._describe = value;
    }
}

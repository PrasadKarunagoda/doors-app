export class Lock {

    Type: string;
    Qty: number;
    Material: string;

    deserialize(json: any) : Lock {
        Object.assign(this, json);
        return this;
    }

    displayText() : string {
        return this.Type + " (" + this.Material + ") Quantity: " + this.Qty;
    }
}

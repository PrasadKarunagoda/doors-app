export class Cylinder {

    Type: string;
    Qty: number;
    Material: string;

    deserialize(json: any) : Cylinder {
        Object.assign(this, json);
        return this;
    }

    displayText() : string {
        return this.Type + " (" + this.Material + ") Quantity: " + this.Qty;
    }
}

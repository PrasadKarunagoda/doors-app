export class Frame {

    Type: string;

    deserialize(json: any) : Frame {
        Object.assign(this, json);
        return this;
    }
}

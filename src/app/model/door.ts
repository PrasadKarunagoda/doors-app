import { Lock } from './lock';
import { Cylinder } from './cylinder';
import { Frame } from './frame';

export class Door {

    Name: string;
    Room: string;
    Building: string;
    Floor: string;
    Height: string;
    Width: string;
    lock: Lock;
    cylinder: Cylinder;
    frame: Frame;

    lockDone: boolean;
    cylinderDone: boolean;
    frameDone: boolean;  

    deserialize(json: any) : Door {
        Object.assign(this, json);
        this.lock = new Lock().deserialize(json.Lock);
        this.cylinder = new Cylinder().deserialize(json.Cylinder);
        this.frame = new Frame().deserialize(json.Frame);
        return this;
    }
}

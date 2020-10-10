import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Door } from './model/door';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Doors-R-Us';
  doors: Door[];

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  fileSelected(event: any): void {
    if (event.target.files.length > 0) {
      var path = URL.createObjectURL(event.target.files[0]);

      this.httpClient.get(path).subscribe((result: Array<Door>) => {
        var newDoors: Door[] = result.map((json: any) => new Door().deserialize(json));
        if (this.doors != undefined && this.doors.length > 0) {
          for (let newDoor of newDoors) {
            for (let d of this.doors) {
              if (newDoor.Name == d.Name) {
                newDoor.lockDone = d.lockDone;
                newDoor.cylinderDone = d.cylinderDone;
                newDoor.frameDone = d.frameDone;
                break;
              }
            }  
          }
          Object.assign(this.doors, newDoors);      
        }
        else {
          this.doors = newDoors;
        }
      });
    }
    else {
      console.warn("A file is not selected.");
    }
  }
}

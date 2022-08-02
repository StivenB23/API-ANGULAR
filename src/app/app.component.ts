import { Component, OnInit } from '@angular/core';
import { DigimonesServices } from './digimones/digimones.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  digimones:any;
  constructor(public digimon:DigimonesServices){}

  ngOnInit(){
    this.digimon.getDigimones().subscribe(
      (response) => {this.digimones = response;console.log(response);},
      (error) => { console.error(error)}
    )
  }
}

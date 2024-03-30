import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  panelOpenState1 = false;
  panelOpenState2 = false;

  tools1 = ['Java', 'Spring', 'Maven', 'Angular', 'Cassandra', 'ReadyAPI', 'Postman', 'Git' , 'Github'];
  tools2 = ['Java', 'Spring', 'Maven', 'Git', 'MySql', 'Restful']

  openPanel1(){
    this.panelOpenState1 = !this.panelOpenState1;
  }

  openPanel2(){
    this.panelOpenState2 = !this.panelOpenState2;
  }
}

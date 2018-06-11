import { Component, Input } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todosListOfItems = [];

  constructor(public navCtrl: NavController, private AlCtrl: AlertController) {

  }

  OpenToDoAlert() {
    let addTodoAlert = this.AlCtrl.create({
      title: "Add a Todo",
      message: "Please enter the details",
      inputs: [
        {
          type: "text",
          placeholder: "Add your item name here",
          name: "addTodoInputText"
        }
      ],

      buttons: [
        {
          text: "add",
          handler: (inputData) => {
            let todoTest = inputData.addTodoInputText;
            this.todosListOfItems.push(todoTest);
          }
        },
        {
          text: "cancel"
        }
      ]
    });
    addTodoAlert.present();
  }

}

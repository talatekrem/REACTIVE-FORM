import {Component, ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  portfolio = 'TFf';
  @ViewChild('MainForm') mainForm: any;
  validate = true;
  guess = 'TC';
  what = 'AZ';

  username = '';
  password = '';


  Technologyused = new FormControl('Angular 7');

  setdefaultvalue() {
    this.Technologyused.setValue('Angular 8');
  }

  submitform() {
    alert('form submitted');
    // if (this.mainForm.valid) {
    //   this.validate = true;
    // } else {
    //   this.validate = false;
    // }
  }
}




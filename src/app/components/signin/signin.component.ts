import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  signInForm = new FormGroup({
    username: new FormControl(''),
    psswd: new FormControl(''),
  });
}

onSubmit() 
{
  // TODO: Actually make this do a POST request I guess
  console.alert("Congrats this does nothing yet");
}
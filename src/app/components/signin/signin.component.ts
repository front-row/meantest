import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'sign-in',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
  private apiUrl = environment.baseUrl + "/api/auth";

  signInForm = new FormGroup({
    employeeId: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(
    private router: Router,
    private http: HttpClient
  ){}

  ngOnInit(): void {
    // get if user is signed in
    var signedIn = true;
    
    if(!signedIn){
      this.router.navigate(['employeedetail']);
    }
  }



  onSubmit(loginData) 
  {
    let login = {};
    login['employeeId'] = loginData.employeeId;
    login['password'] = loginData.password;
    return this.http.post(this.apiUrl + '/signIn', login)
      .subscribe((response: Response) => {
        console.log(response);
          this.router.navigate(['mainmenu']);
      });
  }
}


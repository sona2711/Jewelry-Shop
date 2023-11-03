import { Component , OnInit} from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { LoginService } from 'src/app/services/loginService.service';



@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent implements OnInit {
  resetEmail =  new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  });
  lost:boolean =false

constructor( 
  private authService: LoginService,
  private Router: Router,
  private http: HttpClient) {} 


ngOnInit(): void {
  
}
resetPass(){
  this.lost = !this.lost
  this.http.post(this.authService.address, this.resetEmail.value)
  this.resetEmail.reset()
}
}

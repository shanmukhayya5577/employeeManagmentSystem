import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  registerForm: any=new FormGroup({
        uname:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-z]+$')],),
        userN:new FormControl('',[Validators.required,Validators.minLength(5),Validators.pattern('^[a-zA-z0-9]+$')]),
        email:new FormControl('',[Validators.required,Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]),
        pass:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{6,15}$')]),
        cpass:new FormControl('',[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')])
  
      })
    get uname(){
      return this.registerForm.get('uname')
    }
    get userN(){
      return this.registerForm.get('userN')
    }
    get email(){
      return this.registerForm.get('email')
    }
    get pass(){
      return this.registerForm.get('pass')
    }
    get cpass(){
      return this.registerForm.get('cpass')
    }
  
    signIn(){
      console.log(this.registerForm.value);
      this.registerForm.reload()
    }
  
}
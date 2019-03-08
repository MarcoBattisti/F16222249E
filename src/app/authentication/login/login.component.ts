import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  TOKEN_FIELD = 'token';

  env = this.app.env;
  form;
  returnUrl: string;

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private myRoute: Router,
              private auth: AuthService,
              private app: AppComponent) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/admin/home';
  }

  login() {
    if (this.form.valid) {
      this.auth.login(this.form.value.email, this.form.value.password, this.env.apiUrl).subscribe(
        res => {
          localStorage.setItem(this.TOKEN_FIELD, res.token);
          this.auth.loggedIn(this.env.apiUrl).then(isAuth => {
            console.log('isAuth -> ' + isAuth);
            if (isAuth) {
              console.log('User logged!');
              console.log('Redirect to: ' + this.returnUrl)
              this.myRoute.navigateByUrl(this.returnUrl);
            } else {
              this.auth.logout();
            }
          });
        },
        error => console.log(error));
        // .then(response => this.myRoute.navigate(['admin/home']));
    } else {
      console.log('form not valid!');
    }
  }
}

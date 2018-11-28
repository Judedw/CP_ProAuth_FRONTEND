import { Component, OnInit, ViewChild } from '@angular/core';
import { MatProgressBar, MatButton } from '@angular/material';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { UserService } from "../UserService.service";
import { Router } from "@angular/router";
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';



const REGEX_PASSWORD_PATTERN: string = "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[$@£!%*#?&])[A-Za-z0-9$@£!%*#?&]{8,12}$";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup;
  result: boolean = true;
  successUrl: string = "profile";


  constructor(private userService: UserService, private router: Router,
    private loader: AppLoaderService,
    private errDialog: AppErrorService) { }

  ngOnInit() {
    const password = new FormControl('', [Validators.required, Validators.pattern(REGEX_PASSWORD_PATTERN) ]);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

    this.signupForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: password,
      confirmPassword: confirmPassword,
      agreed: new FormControl('', (control: FormControl) => {
        const agreed = control.value;
        if (!agreed) {
          return { agreed: true }
        }
        return null;
      })
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    let formData = this.prepareToSave(signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';

    this.userService.signup(formData).subscribe(
      data => {
        console.log('success!');
        this.router.navigate([this.successUrl]);
      },
      error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
        console.log('Error!');
      }
    );
  }


  prepareToSave(formvalue): any {
    let userToken = {
      name: formvalue.name,
      email: formvalue.email,
      password: formvalue.password,
      status: "Active",
      image: "assets/images/cp_users/coca_cola.jpg",
      description: "Pepsi is a carbonated soft drink manufactured by PepsiCo. Originally created and developed in 1893 by Caleb Bradham and introduced as Brad's Drink, it was renamed as Pepsi-Cola on August 28, 1898, and then as Pepsi in 1961."
    };
    return userToken;
  }
}

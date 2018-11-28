import { Component, OnInit, ViewChild } from "@angular/core";
import { MatProgressBar, MatButton } from "@angular/material";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { UserService } from "../UserService.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrls: ["./signin.component.css"]
})
export class SigninComponent implements OnInit {
  @ViewChild(MatProgressBar)
  progressBar: MatProgressBar;
  @ViewChild(MatButton)
  submitButton: MatButton;

  signinForm: FormGroup;

  successUrl: string = "profile";
  signInUrl: string = "sessions/signin";
  result: boolean = true;


  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      rememberMe: new FormControl(false)
    });
  }

  signin() {
    const signinData = this.signinForm.value;
    
    console.log(signinData);
    console.log("LOCAL STORAGE");
    console.log(localStorage.getItem("currentUser"));

    this.submitButton.disabled = true;
    this.progressBar.mode = "indeterminate";
    this.result = this.userService.login(signinData);
    console.log(this.result);
    console.log(JSON.parse(localStorage.getItem("currentUser")));
    if (this.result) {
      this.router.navigate([this.successUrl]);
    } else {
      this.progressBar.mode = "determinate";
      this.signinForm.reset();
      this.router.navigate([this.signInUrl]);
    }
  }

}

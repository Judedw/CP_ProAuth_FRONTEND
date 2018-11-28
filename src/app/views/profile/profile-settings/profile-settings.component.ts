import { Component, OnInit, ViewChild } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { CustomValidators } from 'ng2-validation';
import { CountryAndStateDB } from 'app/shared/fake-db/country-and-states';
import { UserService } from 'app/views/sessions/UserService.service';
import { Router } from '@angular/router';
import { AppLoaderService } from 'app/shared/services/app-loader/app-loader.service';
import { AppErrorService } from 'app/shared/services/app-error/app-error.service';


const REGEX_PASSWORD_PATTERN: string = "^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[$@£!%*#?&])[A-Za-z0-9$@£!%*#?&]{8,12}$";

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({ url: 'upload_url' });
  public hasBaseDropZoneOver: boolean = false;

  userToken;
  accountSettingForm: FormGroup;
  passwordSettingForm: FormGroup;
  imageSettingForm: FormGroup;
  addressTab: number = 0;
  selectedCountry: number = 0;
  selectedState: number = 0;
  countries = [];

  constructor(private userService: UserService, private router: Router,
    private loader: AppLoaderService,
    private errDialog: AppErrorService) {
    const countries: CountryAndStateDB = new CountryAndStateDB();
    this.countries = countries.countries_and_states;
  }

  ngOnInit() {
    this.getLocalUser();
    
    this.selectedCountry = this.countries.findIndex(country => country.country == this.userToken.country);
    this.selectedState = this.countries[this.selectedCountry].states.findIndex(state => state == this.userToken.state);

    this.accountSettingForm = new FormGroup({
      name: new FormControl(this.userToken.name || "", Validators.required),
      email: new FormControl(this.userToken.email || "", [Validators.required, Validators.email]),
      description: new FormControl(this.userToken.description || "", Validators.required),
      address: new FormControl(""),
      address_line1: new FormControl(this.userToken.address_line1 || "", Validators.required),
      address_line2: new FormControl(this.userToken.address_line2 || "", Validators.required),
      city: new FormControl(this.userToken.city || "", Validators.required),
      postal_code: new FormControl(this.userToken.postal_code || "", Validators.required),
      state: new FormControl(this.selectedState || 0, Validators.required),
      country: new FormControl(this.selectedCountry || 0, Validators.required)
    });


    const password = new FormControl('', [Validators.required, Validators.pattern(REGEX_PASSWORD_PATTERN)]);
    const confirmPassword = new FormControl('', CustomValidators.equalTo(password));


    this.passwordSettingForm = new FormGroup({
      current_password: new FormControl("", Validators.required),
      new_password: password,
      confirm_password: confirmPassword
    });
    this.imageSettingForm = new FormGroup({
    });
  }
  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  public handleAddressChange(address: Address) {
    console.log(address.formatted_address);
  }

  getUser() {
    return this.userService.getUser().subscribe(
      data => {
        console.log('success!');
        return data.content;
      }, error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
        console.log('Error!');
      });
  }
  getLocalUser() {
    this.userToken = JSON.parse(localStorage.getItem("currentUser"));
    console.log(this.userToken);
  }

  updateUser() {
    const accountSettingFormData = this.accountSettingForm.value;
    let formData = this.prepareToSave("AccountSetting", accountSettingFormData);
    console.log(formData);

    this.userService.updateAccountSetting(this.userToken.id, formData).subscribe(
      data => {
        console.log('success!');
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

  updatePassword() {
    const passwordSettingForm = this.passwordSettingForm.value;
    let formData = this.prepareToSave("PasswordSetting", passwordSettingForm);
    console.log(formData);

    this.userService.getUser().subscribe(
      data => {
        console.log('success!');
        // return data.content;
        console.log(data.content.password);

        if (data.content.password === passwordSettingForm.current_password) {
          this.userService.updatePasswordSetting(this.userToken.id, formData).subscribe(
            data => {
              console.log('success!');
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
        } else {
          console.log("Incorrect Password");
        }
      }, error => {
        this.loader.close();
        this.errDialog.showError({
          title: "Error",
          status: error.status,
          type: "http_error"
        });
        console.log('Error!');
      });


  }


  prepareToSave(type, formvalue): any {
    let userToken = {};
    if (type === "AccountSetting") {
      userToken = {
        name: formvalue.name,
        email: formvalue.email,
        description: formvalue.description,
        address_line1: formvalue.address_line1,
        address_line2: formvalue.address_line2,
        city: formvalue.city,
        postal_code: formvalue.postal_code,
        state: this.countries[formvalue.country].states[formvalue.state],
        country: this.countries[formvalue.country].country
      };
    } else if (type === "PasswordSetting") {
      userToken = {
        password: formvalue.new_password,
      };
    } else if (type === "ImageSetting") {

    }
    return userToken;
  }

  tabChanged(tab_event) {
    if (tab_event.index === 0) {
      this.accountSettingForm.controls['address'].setValue("");
    } else if (tab_event.index === 1) {
      this.accountSettingForm.controls['address_line1'].setValue(this.userToken.address_line1 || "");
      this.accountSettingForm.controls['address_line2'].setValue(this.userToken.address_line2 || "");
      this.accountSettingForm.controls['city'].setValue(this.userToken.city || "");
      this.accountSettingForm.controls['postal_code'].setValue(this.userToken.postal_code || "");
      this.accountSettingForm.controls['country'].setValue(this.selectedCountry || 0);
      this.accountSettingForm.controls['state'].setValue(this.selectedState || 0);
    }
  }

  selected(country_event) {
    console.log(country_event);
  }

}
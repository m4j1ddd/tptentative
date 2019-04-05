import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.css']
})

export class InputUserDataFormComponent implements OnInit {
  registered = false;
  submitted = false;
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder)
  {

  }

  invalidUserId()
  {
    return (this.submitted && this.userForm.controls.user_id.errors != null);
  }

  invalidName()
  {
    return (this.submitted && this.userForm.controls.name.errors != null);
  }

  invalidPassword()
  {
    return (this.submitted && this.userForm.controls.password.errors != null);
  }

  ngOnInit()
  {
    this.userForm = this.formBuilder.group({
      user_id: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
  }

  onSubmit()
  {
    this.submitted = true;

    if(this.userForm.invalid == true)
    {
      return;
    }
    else
    {
      this.registered = true;
    }
  }

};

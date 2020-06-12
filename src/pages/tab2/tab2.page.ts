import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  labelRadioPosition: 'before' | 'after';

  // address: {latitude: number, longitude: number};

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      codice: ['', Validators.required],
      tipologia: ['', Validators.required],
      responsabile: ['', Validators.required],
      address: [null, Validators.required],
      photo: [null, Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      ctrl1: ['', Validators.required],
      ctrl2: [''],
      radio1: [null]
    });

    this.firstFormGroup.valueChanges.subscribe(v => {
      console.log('value:', v);
    });

  }

  // Get Current Location Coordinates
  setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        this.firstFormGroup.patchValue({ address: { latitude, longitude }, options: { emitEvent: false } });
      });
    }
  }

  setPhoto() {
    this.firstFormGroup.patchValue({ photo: true });
  }

  onSubmit() {
    if ( this.firstFormGroup.valid && this.secondFormGroup.valid ) {
      const obj = {
        firstGroup: this.firstFormGroup.value,
        secondGroup: this.secondFormGroup.value
      };

      if (window.localStorage.getItem('impianti') === null) {
        window.localStorage.setItem('impianti', JSON.stringify([obj]));
      } else {
        window.localStorage.setItem('impianti', JSON.stringify([...JSON.parse(window.localStorage.getItem('impianti')), obj]));
      }
    }
  }

}

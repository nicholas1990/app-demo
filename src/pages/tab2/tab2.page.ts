import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

interface Select {
  value: string;
  viewValue: string;
}
>>>>>>> features/login

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
<<<<<<< HEAD

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

=======

  isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  labelRadioPosition: 'before' | 'after';

  readonly tipologie: Select[] = [
    {value: 'autonomo', viewValue: 'Autonomo'},
    {value: 'centralizzato', viewValue: 'Centralizzato'},
    {value: 'non noto', viewValue: 'Non noto'}
  ];

  readonly combustibili: Select[] = [
    { value: '', viewValue: '--' },
    { value: '2', viewValue: 'Altro' },
    { value: '12', viewValue: 'Combustibile solido'},
    { value: '3', viewValue: 'Gasolio'},
    { value: '4', viewValue: 'GPL'},
    { value: '6', viewValue: 'Legna'},
    { value: '5', viewValue: 'Metano'},
    { value: '0', viewValue: 'Non noto'},
    { value: '1', viewValue: 'Olio'},
    { value: '88', viewValue: 'Pompa di calore' },
    { value: '7', viewValue: 'Teleriscaldamento'}
  ];

  readonly categorie: Select[] = [
    { value: '', viewValue: '--' },
    { value: 'E11', viewValue: 'E11 Residenze continuative}'},
    { value: 'E12', viewValue: 'E12 Residenze saltuarie}'},
    { value: 'E13', viewValue: 'E13 Residenze alberghi pensioni}'},
    { value: 'E1', viewValue: 'E1 Residenze}'},
    { value: 'E2', viewValue: 'E2 Uffici}'},
    { value: 'E3', viewValue: 'E3 Ospedali cliniche case di cura}'},
    { value: 'E41', viewValue: 'E41 Attività ricreative cinema teatri sale per riunione o congressi}'},
    { value: 'E42', viewValue: 'E42 Attività ricreative mostre musei biblioteche luoghi di culto}'},
    { value: 'E43', viewValue: 'E43 Attività ricreative bar ristoranti sale da ballo}'},
    { value: 'E4', viewValue: 'E4 Attività ricreative}'},
    { value: 'E5', viewValue: 'E5 Attività commerciali}'},
    { value: 'E61', viewValue: 'E61 Attività sportive piscine saune}'},
    { value: 'E62', viewValue: 'E62 Attività sportive palestre}'},
    { value: 'E63', viewValue: 'E63 Attività sportive servizi di supporto'},
    { value: 'E6', viewValue: 'E6 Attività sportive'},
    { value: 'E7', viewValue: 'E7 Attività scolastiche'},
    { value: 'E8', viewValue: 'E8 Industriali ed artigianali}'},
  ];

  // Fascie di potenza
  readonly fascie: Select[] = [
    { value: '', viewValue: '--' },
    { value: '0', viewValue: 'POTENZA NON NOTA' },
    { value: 'B', viewValue: 'POTENZA INFERIORE A 35,00 KW' },
    { value: 'C', viewValue: 'POTENZA MIN 35  A 100  KW' },
    { value: 'MA', viewValue: 'POTENZA DA 100  A 350,00 KW' },
    { value: 'A', viewValue: 'POTENZA MAGGIORE DI 350,00 KW' },
  ];

  // Scarico fumi
  readonly scarichi: Select[] = [
    { value: '', viewValue: 'Non noto' },
    { value: 'camino collettivo', viewValue: 'Camino collettivo' },
    { value: 'camino individuale', viewValue: 'Camino individuale' },
    { value: 'scarico a parete', viewValue: 'Scarico a parete' },
  ];

  // address: {latitude: number, longitude: number};

  constructor(private readonly fb: FormBuilder, private readonly router: Router, private navController: NavController) {}

  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      codice: ['', Validators.required],
      tipologia: ['', Validators.required],
      address: [null, Validators.required], // obj Address: { latitude: string; longitude: string; }
      destinazione: [null],
      combustibile: [null],
      categoria: [null],
      volumetria: [''],
      responsabile: ['', Validators.required],
      photo: [null, Validators.required],
      note: []
    });
    this.secondFormGroup = this.fb.group({
      costruttore: ['', Validators.required],
      tiraggio: [null],
      destGeneratore: [''],
      prot : [''],
      modello: [''],
      tipo: [null],
      fascia: [null],
      matricola: [''],
      scarico: [null],
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
    } else {
      this.firstFormGroup.patchValue({ address: { latitude: '', longitude: '' }, options: { emitEvent: false } });
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

>>>>>>> features/login
      if (window.localStorage.getItem('impianti') === null) {
        window.localStorage.setItem('impianti', JSON.stringify([obj]));
      } else {
        window.localStorage.setItem('impianti', JSON.stringify([...JSON.parse(window.localStorage.getItem('impianti')), obj]));
      }
<<<<<<< HEAD
=======
      this.router.navigateByUrl('tabs/tab1');
>>>>>>> features/login
    }
  }

}

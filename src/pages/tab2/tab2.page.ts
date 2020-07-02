import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatRadioChange } from '@angular/material/radio';

import { TargheStoreService } from '../../services/targhe.localstore.service';

interface Select {
  value: string;
  viewValue: string;
}

// TODO: use
interface Radio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [
    TargheStoreService,
  ],
})
export class Tab2Page implements OnInit {

  isLinear = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  firstFormGroupSubmitted: false;  // todo

  submitLabel: string;

  isSubmitting: boolean = false;
  private isChangedStep: boolean = false;
  private esitoClicked: boolean;

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

  // Esiti della verifica.
  readonly esiti: Radio[] = [
    { value: 'true', viewValue: 'Positivo' },
    { value: 'false', viewValue: 'Negativo' },
  ];

  // address: {latitude: number, longitude: number};

  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly targheStore: TargheStoreService,
  ) {}

  ngOnInit(): void {
    /**
     * TODO: per la geolocalizzazione e per la foto, andrebbe implementatoun validatore custom,
     * in modo da mostrare l'errore 'required' solamente ad una potenziale validazione e non
     * sempre.
     */
    this.firstFormGroup = this.fb.group({
      codice: ['', Validators.required],
      tipologia: ['', Validators.required],
      address: [null, Validators.required], // obj Address: { latitude: string; longitude: string; }
      destinazione: [null, Validators.required],
      combustibile: [null],
      categoria: [null],
      volumetria: [''],
      responsabile: ['', Validators.required],
      photo: [null, Validators.required],
      note: []
    });
    this.secondFormGroup = this.fb.group({
      costruttore: ['', Validators.required],
      tiraggio: [null, Validators.required],
      destGeneratore: [''],
      prot : [''],
      modello: [''],
      tipo: [null, Validators.required],
      fascia: [null],
      matricola: [''],
      scarico: [null],
    });
    this.thirdFormGroup = this.fb.group({
      esito: [null]
    });
  }

  onStepChange(event: Event): void {
    console.log('onStepChange(event: Event): ', event);

    this.isSubmitting = false;
    this.isChangedStep = true;
  }

  onMatStepperPrevious(event: Event) {
    console.log('onMatStepperPrevious(event: Event):', event);
  }

  onMatStepperNext(event: Event) {
    console.log('onMatStepperNext(event: Event):', event);
    console.log('this.isSubmitting:', this.isSubmitting, 'this.isChangedStep', this.isChangedStep);

    if (event === undefined) {
      if (!this.isChangedStep) {
        this.isSubmitting = true;
      }
      this.isChangedStep = false;
    }

    console.log('this.isSubmitting:', this.isSubmitting, 'this.isChangedStep', this.isChangedStep);
  }

  // Get Current Location Coordinates
  setCurrentLocation(event: Event) {
    event.preventDefault();  // avoid validation form at click

    if ('geolocation' in navigator) {
      let latitude = 0;
      let longitude = 0;

      navigator.geolocation.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });

      this.firstFormGroup.patchValue({ address: { latitude, longitude }, options: { emitEvent: false } });
    }
  }

  private info(str: string) {
    console.log(str);
  }

  setPhoto(event: Event, color?: string) {
    event.preventDefault();

    const value = this.firstFormGroup.get('photo').value;
    this.info(value);

    this.firstFormGroup.patchValue({ photo: true });

  }

  onChangeRadioEsito(event: MatRadioChange) {
    this.submitLabel = (event.value === 'true') ? 'Paga e conferma' : 'Conferma';
  }

  onSubmit() {
    if ( this.firstFormGroup.valid && this.secondFormGroup.valid ) {
      const esito = (this.thirdFormGroup.controls.esito.value === 'true');  // esito clicked casted to boolean.

      const obj = {
        firstGroup: this.firstFormGroup.value,
        secondGroup: this.secondFormGroup.value,
        thirdGroup: {
          esito
        }
      };

      if (window.localStorage.getItem('impianti') === null) {
        window.localStorage.setItem('impianti', JSON.stringify([obj]));
      } else {
        const newImpianti = [...JSON.parse(window.localStorage.getItem('impianti')), obj];
        window.localStorage.setItem('impianti', JSON.stringify(newImpianti));
      }

      if (this.submitLabel === 'Paga e conferma') {
        const ultimoTotTarghe = this.targheStore.getTotTarghe();
        const totaleTarghe = ultimoTotTarghe - 1;

        this.targheStore.setTotTarghe(totaleTarghe);
        this.targheStore.setUltimoMovimento(-1);
      }

      this.router.navigateByUrl('tabs/tab1');
    } else {
      debugger;
    }
  }

}

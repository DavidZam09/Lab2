import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  opcionSelect: string = 'Mujer';
  sexos = [
    'Hombre',
    'Mujer',
  ]
  peso: any;
  edad: any;
  estatura: any;
  sliderAF = 0;
  result = 0;
  totalSlider: any;
  actividadFisica = '';
  total = 0;


  calcular() {
    switch (this.opcionSelect) {
      case 'Hombre': this.result = 66.5 + (13.7 * this.peso) + (5 * this.estatura) - (6.8 * this.edad);
        this.result = (this.result * this.total) + this.result;
        alert('Gasto Energético Total en Calorias (Kcal): ' + this.result)
        break;
      case 'Mujer': this.result = 655.1 + (9.56 * this.peso) + (1.85 * this.estatura) - (4.7 * this.edad);
      this.result = (this.result * this.total) + this.result;
        alert('Gasto Energético Total en Calorias (Kcal):' + this.result)
        break;
    }

  }
  change() {
    this.totalSlider = this.sliderAF;
    if (this.totalSlider <= 30) {
      this.total = this.totalSlider / 100;
      this.actividadFisica = 'Sedentario'
    }
    if (this.totalSlider >= 30) {
      this.totalSlider = this.totalSlider / 100;
      this.actividadFisica = 'Actividad ligera'
    }
    if (this.totalSlider >= 40) {
      this.total = this.totalSlider / 100;
      this.actividadFisica = 'Actividad Moderada'
    }
    if (this.totalSlider >= 50) {
      this.total = this.totalSlider / 100;
    }
    if (this.totalSlider >= 70) {
      this.total = this.totalSlider / 100;
      this.actividadFisica = 'Actividad Muy Intensa'
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { PresetDataProviderService } from 'src/app/services/preset-data-provider.service';


@Component({
  selector: 'app-preseteditor',
  templateUrl: './preseteditor.component.html',
  styleUrls: ['./preseteditor.component.css']
})


export class PreseteditorComponent {

  checkchili: boolean = false
  checkbasil: boolean = false
  checkpotato: boolean = false
  checkpaprica: boolean = false
  checkzucchini: boolean = false

 chili = {
    minHours: 14,
    maxHours: 16,
    minWaterTemp: 18,
    maxWaterTemp: 26,
    minAirTemp: 15,
    maxAirTemp: 32,
    minHumidity: 60,
    maxHumidity: 100,
    minTdsWert: 896,
    maxTdsWert: 1536,
  }

basil = {
    minHours: 6,
    maxHours: 12,
    minWaterTemp: 18,
    maxWaterTemp: 26,
    minAirTemp: 16,
    maxAirTemp: 22,
    minHumidity: 60,
    maxHumidity: 100,
    minTdsWert: 640,
    maxTdsWert: 1152,
  }

potato = {
    minHours: 14,
    maxHours: 16,
    minWaterTemp: 18,
    maxWaterTemp: 26,
    minAirTemp: 15,
    maxAirTemp: 32,
    minHumidity: 60,
    maxHumidity: 100,
    minTdsWert: 896,
    maxTdsWert: 1536,
  }

paprica = {
    minHours: 8,
    maxHours: 12,
    minWaterTemp: 18,
    maxWaterTemp: 25,
    minAirTemp: 15,
    maxAirTemp: 32,
    minHumidity: 60,
    maxHumidity: 100,
    minTdsWert: 896,
    maxTdsWert: 1408,
  }

zucchini = {
    minHours: 8,
    maxHours: 14,
    minWaterTemp: 18,
    maxWaterTemp: 26,
    minAirTemp: 27,
    maxAirTemp: 32,
    minHumidity: 60,
    maxHumidity: 100,
    minTdsWert: 960,
    maxTdsWert: 1536,
  }

  name: string = "";
  lightNeededPerDay: number = 0;

  minTdsWert: number = 896;
  maxTdsWert: number = 1550;
  optionsTds: Options = {
    floor: 0,
    ceil:  1950,
    step: 1,
    ticksArray: [0, 1950],
    getPointerColor: (value: number): string => {
        return 'green';
    },
    noSwitching: true
  };

  minWaterTemp: number = 18;
  maxWaterTemp: number = 26;
  optionsWatertemp: Options = {
    floor: 10,
    ceil:  30,
    step: 1,
    ticksArray: [10, 30],
    getPointerColor: (value: number): string => {
        return 'green';
    },
    noSwitching: true
  };

  minAirTemp: number = 15;
  maxAirTemp: number = 32;
  optionsAirtemp: Options = {
    floor: 12,
    ceil:  35,
    step: 1,
    ticksArray: [12, 35],
    getPointerColor: (value: number): string => {
      if(this.checkbasil && this.checkzucchini){
        return 'red'
      }
      else {
        return 'green';
      }  
    },
    noSwitching: true
  };

  minHumidity: number = 60;
  maxHumidity: number = 100;
  optionsHumidity: Options = {
    floor: 45,
    ceil:  100,
    step: 5,
    ticksArray: [45, 100],
    getPointerColor: (value: number): string => {
        return 'green';
    },
    noSwitching: true
  };

  

  

  constructor (private presetdataprovider : PresetDataProviderService){ }

  ngOnInit(){
    this.presetdataprovider.getPresets()
      .subscribe(data =>{
        this.minAirTemp = JSON.parse(JSON.stringify(data[0])).minAirTemp;
        this.maxAirTemp = JSON.parse(JSON.stringify(data[0])).maxAirTemp;
        this.minWaterTemp = JSON.parse(JSON.stringify(data[0])).minWaterTemp;
        this.maxWaterTemp = JSON.parse(JSON.stringify(data[0])).maxWaterTemp;
        this.minTdsWert = JSON.parse(JSON.stringify(data[0])).minTdsWert;
        this.maxTdsWert = JSON.parse(JSON.stringify(data[0])).maxTdsWert;
        this.minHumidity = JSON.parse(JSON.stringify(data[0])).minHumidity;
        this.maxHumidity = JSON.parse(JSON.stringify(data[0])).maxHumidity;
      });
  }

  getPresets(){
    this.presetdataprovider.getPresets();
  }

  updatePreset(){
    this.presetdataprovider.updatePreset(this.name, this.minWaterTemp, this.maxWaterTemp, this.minAirTemp, this.maxAirTemp, this.minHumidity, this.maxHumidity, this.lightNeededPerDay, this.minTdsWert, this.maxTdsWert);
  }

  onClick(){

    let checkarray = [this.checkbasil, this.checkchili, this.checkpaprica, this.checkpotato, this.checkzucchini];
    let plantarray = [this.basil, this.chili, this.paprica, this.potato, this.zucchini];
    let plants = [];

    for(let i=0;i<checkarray.length;i++){
      if(checkarray[i]===true){
        plants.push(plantarray[i]);
      }
    }

    this.minAirTemp = this.maxAirTemp = this.minWaterTemp = this.maxWaterTemp = this.minHumidity = this.maxHumidity = this.minTdsWert = this.maxTdsWert = Number.POSITIVE_INFINITY;

    plants.forEach(plant => {
        this.minAirTemp = plant.minAirTemp < this.minAirTemp ? plant.minAirTemp : this.minAirTemp;
        this.maxAirTemp = plant.maxAirTemp < this.maxAirTemp ? plant.maxAirTemp : this.maxAirTemp;
        this.minWaterTemp = plant.minWaterTemp < this.minWaterTemp ? plant.minWaterTemp : this.minWaterTemp;
        this.maxWaterTemp = plant.maxWaterTemp < this.maxWaterTemp ? plant.maxWaterTemp : this.maxWaterTemp;
        this.minHumidity = plant.minHumidity < this.minHumidity ? plant.minHumidity : this.minHumidity;
        this.maxHumidity = plant.maxHumidity < this.maxHumidity ? plant.maxHumidity : this.maxHumidity;
        this.minTdsWert = plant.minTdsWert < this.minTdsWert ? plant.minTdsWert : this.minTdsWert;
        this.maxTdsWert = plant.maxTdsWert < this.maxTdsWert ? plant.maxTdsWert : this.maxTdsWert;
    });
    
  }
}

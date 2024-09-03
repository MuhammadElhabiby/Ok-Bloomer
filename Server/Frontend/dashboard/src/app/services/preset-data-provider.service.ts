import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Preset } from '../components/preseteditor/preset.model';

@Injectable({
  providedIn: 'root'
})
// maybe change name of service to preset-data.service.ts
// because it does more than just provice data
export class PresetDataProviderService {
  preset: Preset = {
    name: "", 
    minWaterTemp: 0, 
    maxWaterTemp: 0, 
    minAirTemp: 0, 
    maxAirTemp: 0, 
    minHumidity: 0, 
    maxHumidity: 0, 
    lightNeededPerDay: 0, 
    minTdsWert: 0, 
    maxTdsWert: 0
  }


  constructor(private http: HttpClient) { }

  updatePreset(name: string, minWaterTemp: number, maxWaterTemp: number, minAirTemp: number, maxAirTemp: number, minHumidity: number, maxHumidity: number, lightNeededPerDay: number, minPhWert: number, maxPhWert: number){
    this.preset.name = name;
    this.preset.minWaterTemp = minWaterTemp;
    this.preset.maxWaterTemp = maxWaterTemp;
    this.preset.minAirTemp = minAirTemp;
    this.preset.maxAirTemp = maxAirTemp;
    this.preset.minHumidity = minHumidity;
    this.preset.maxHumidity = maxHumidity;
    this.preset.lightNeededPerDay = lightNeededPerDay;
    this.preset.minTdsWert = minPhWert;
    this.preset.maxTdsWert = maxPhWert;

    this.http.post<{ message: string }>('http://localhost:7000/api/plantProfile/updatePreset', this.preset)
      .subscribe((responseData: { message: any; }) =>{
        console.log(responseData.message)
      });
  }

  getPresets(){
    return this.http.get<JSON[]>("http://localhost:7000/api/plantProfile/getPresets");
  }

}
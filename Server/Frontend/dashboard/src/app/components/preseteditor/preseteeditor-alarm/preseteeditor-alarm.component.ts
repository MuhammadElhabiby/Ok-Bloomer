import { Component, OnInit } from '@angular/core';
import { PresetDataProviderService } from 'src/app/services/preset-data-provider.service';
import { DataProviderService } from 'src/app/services/data-provider.service';

@Component({
  selector: 'app-preseteeditor-alarm',
  templateUrl: './preseteeditor-alarm.component.html',
  styleUrls: ['./preseteeditor-alarm.component.css'],
})
export class PreseteeditorAlarmComponent implements OnInit {
  lastWaterTemp = 0;
  lastAirTemp = 0;
  lastTds = 0;
  lastHumidity = 0;

  minAirTemp: number = 0;
  maxAirTemp: number = 0;
  minWaterTemp: number = 0;
  maxWaterTemp: number = 0;
  minTdsWert: number = 0;
  maxTdsWert: number = 0;
  minHumidity: number = 0;
  maxHumidity: number = 0;


  constructor (private presetdataprovider : PresetDataProviderService,
    private dataProvider: DataProviderService,){ }


  ngOnInit(): void {
    this.getLastDataPoints();
    this.getPresetDataPoints();
  }

  getPresetDataPoints(){
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

  getLastDataPoints(){
    this.dataProvider.getAllData().subscribe(
      data => {
        let lastDataPoint = JSON.parse(JSON.stringify(data[data.length-1]));
        this.lastWaterTemp = +parseFloat(lastDataPoint.tempWater).toFixed(1);
        this.lastTds = +parseFloat(lastDataPoint.tds).toFixed(1);
        this.lastHumidity = +parseFloat(lastDataPoint.humidity).toFixed(1);
        this.lastAirTemp = +parseFloat(lastDataPoint.tempAir).toFixed(1);
      }
    )
  }

}

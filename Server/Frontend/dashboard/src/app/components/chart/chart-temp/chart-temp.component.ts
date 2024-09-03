import { Component, OnInit } from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';
import { DataProviderService } from 'src/app/services/data-provider.service';
import zoomPlugin from 'chartjs-plugin-zoom';
import {FormGroup, FormControl} from '@angular/forms';
import { DatePipe } from '@angular/common';

Chart.register(zoomPlugin);

var canvas: any;
var tempChart: any;
var tempChartInstance: Chart;

@Component({
  selector: 'app-chart-temp',
  templateUrl: './chart-temp.component.html',
  styleUrls: ['./chart-temp.component.css']
})
export class ChartTempComponent implements OnInit {
  public dataLabels: string[] = [];
  public dataWater: number[] = [];
  public dataAir: number[] = [];

  
  public lineChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
            speed: 0.05,
          },
        },
        pan: {
          enabled: true,
        },
        limits: {
          y: {min: -20, max: 50}
        },
      }
    }
  };

  dateStartIndex: number = 0;
  dateEndIndex: number = this.dataLabels.length;

  public lineChartLabels = this.dataLabels.slice(this.dateStartIndex, this.dateEndIndex); 
   
  public lineChartLegend = true;
  public lineChartType: keyof ChartTypeRegistry = 'line';

  public lineChartData = [
    {data: this.dataWater.slice(this.dateStartIndex, this.dateEndIndex), label: "Water Temperature"},
    {data: this.dataAir.slice(this.dateStartIndex, this.dateEndIndex), label: "Air Temperature"},

  ];


  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });


  constructor(
    private dataProvider: DataProviderService,
    private datepipe: DatePipe
    ) { }

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(){
    canvas = <HTMLCanvasElement> document.getElementById('canvasTemp');
    tempChart = <Chart>canvas.getContext('2d');
    tempChartInstance = new Chart(tempChart, 
      {
        type: "line",
        data: {
          labels: this.lineChartLabels,
          datasets: this.lineChartData,
        },
        
        options: this.lineChartOptions,
      });

    setTimeout(() => {
      this.resetChart();
      let currentDateTime = new Date(this.datepipe.transform((new Date)));
      this.range.value.end = currentDateTime;
      this.range.value.start = new Date(currentDateTime.getFullYear() + "-" + currentDateTime.getMonth().valueOf()+1 + "-" + (currentDateTime.getDate().valueOf()-2));
      this.filterDate();
    }, 500);
  }
  

  resetChart(){
    console.log("reset Chart");
    tempChartInstance.resetZoom();

    let currentDateTime = new Date(this.datepipe.transform((new Date)));
    this.range.value.end = currentDateTime;
    this.range.value.start = new Date(currentDateTime.getFullYear() + "-" + currentDateTime.getMonth().valueOf()+1 + "-" + (currentDateTime.getDate().valueOf()-2));
    this.filterDate();

    tempChartInstance.update();
  }

  filterDate(){
    let dayStart: number = this.range.value.start.getDate();
    let monthStart: number = this.range.value.start.getMonth().valueOf();
    monthStart += 1;
    let yearStart: number = this.range.value.start.getFullYear();
    let dateStart = dayStart + "." + monthStart + "." + yearStart;
    console.log("Start Date: " + dateStart);

    let dayEnd: number = this.range.value.end.getDate();
    let monthEnd: number = this.range.value.end.getMonth().valueOf();
    monthEnd += 1;
    let yearEnd: number = this.range.value.end.getFullYear();
    let dateEnd = dayEnd + "." + monthEnd + "." + yearEnd;
    console.log("End Date: " + dateEnd);

    this.dateEndIndex = this.dataLabels.findIndex(label =>{
      if(label === dateEnd + ": 00uhr" || label === dateEnd + ": 01uhr" || label === dateEnd + ": 02uhr" || label === dateEnd + ": 03uhr" || label === dateEnd + ": 04uhr" || label === dateEnd + ": 05uhr" || label === dateEnd + ": 06uhr" || label === dateEnd + ": 07uhr" || label === dateEnd + ": 08uhr" || label === dateEnd + ": 09uhr" || label === dateEnd + ": 10uhr" || label === dateEnd + ": 11uhr" || label === dateEnd + ": 12uhr" || label === dateEnd + ": 13uhr" || label === dateEnd + ": 14uhr" || label === dateEnd + ": 15uhr" || label === dateEnd + ": 16uhr" || label === dateEnd + ": 17uhr" || label === dateEnd + ": 18uhr" || label === dateEnd + ": 19uhr" || label === dateEnd + ": 20uhr" || label === dateEnd + ": 21uhr" || label === dateEnd + ": 22uhr" || label === dateEnd + ": 23uhr"){
        return true;
      }else{
        return false;
      }      
    });
    this.dateEndIndex += 1;

    this.dateStartIndex = this.dataLabels.findIndex(label =>{
      if(label === dateStart + ": 00uhr" || label === dateStart + ": 01uhr" || label === dateStart + ": 02uhr" || label === dateStart + ": 03uhr" || label === dateStart + ": 04uhr" || label === dateStart + ": 05uhr" || label === dateStart + ": 06uhr" || label === dateStart + ": 07uhr" || label === dateStart + ": 08uhr" || label === dateStart + ": 09uhr" || label === dateStart + ": 10uhr" || label === dateStart + ": 11uhr" || label === dateStart + ": 12uhr" || label === dateStart + ": 13uhr" || label === dateStart + ": 14uhr" || label === dateStart + ": 15uhr" || label === dateStart + ": 16uhr" || label === dateStart + ": 17uhr" || label === dateStart + ": 18uhr" || label === dateStart + ": 19uhr" || label === dateStart + ": 20uhr" || label === dateStart + ": 21uhr" || label === dateStart + ": 22uhr" || label === dateStart + ": 23uhr"){
        return true;
      }else{
        return false;
      }   
    });

    tempChartInstance.data.labels = this.dataLabels.slice(this.dateStartIndex, this.dateEndIndex);
    tempChartInstance.data.datasets[0].data = this.dataWater.slice(this.dateStartIndex, this.dateEndIndex);
    tempChartInstance.data.datasets[1].data = this.dataAir.slice(this.dateStartIndex, this.dateEndIndex);
    tempChartInstance.update();
  }

  // Alle Data comes as a array of json object
  getData(){
    this.dataProvider.getAllData().subscribe(
      data => {
        for(let i = 0; i < data.length; i++){
          let dataPoint = JSON.parse(JSON.stringify(data[i]));
          let dateRaw: string = dataPoint.date;
          let tmp: string = "";
          for(let j = 0; j < dateRaw.length; j++){
            if(dateRaw.charAt(j) === ":"){
              tmp = dateRaw.substring(0, j);
              tmp += "uhr";
              break;
            }
          }
          let date: string = tmp.replace(",", ":");
          this.dataLabels.push(date);
        }
        for(let i = 0; i < data.length; i++){
          let dataPoint = JSON.parse(JSON.stringify(data[i]));
          this.dataWater.push(dataPoint.tempWater)
        }
        for(let i = 0; i < data.length; i++){
          let dataPoint = JSON.parse(JSON.stringify(data[i]));
          this.dataAir.push(dataPoint.tempAir)
        }
      }
    );
  }
}

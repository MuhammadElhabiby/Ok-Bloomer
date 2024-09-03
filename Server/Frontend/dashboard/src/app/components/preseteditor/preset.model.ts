import { NumberInput } from "@angular/cdk/coercion";

export interface Preset {
    name: string;
    minWaterTemp: number;
    maxWaterTemp: number;
    minAirTemp: number;
    maxAirTemp: number;
    minHumidity: number;
    maxHumidity: number;
    lightNeededPerDay: number;
    minTdsWert: number;
    maxTdsWert: NumberInput;
}
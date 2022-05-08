import { MeasuresEnum } from "../enums/MeasuresEnum";

export interface IUnit {
  name: string;
  measure: MeasuresEnum;
  english: {
    name: string;
    listName: string;
  };
  spanish: {
    name: string;
    listName: string;
  };
}

import { LanguagesEnum } from "../enums/LanguagesEnum";
import { MeasuresEnum } from "../enums/MeasuresEnum";
import { IUnit } from "./Units.interfaces";

export const Units: IUnit[] = [
  {
    name: "units",
    measure: MeasuresEnum.Units,
    english: {
      listName: "Units",
      name: "units",
    },
    spanish: {
      listName: "Unidades",
      name: "unidades",
    },
  },
  {
    name: "gram",
    measure: MeasuresEnum.Weight,
    english: {
      listName: "Grams - Weight",
      name: "gram",
    },
    spanish: {
      listName: "Gramo - Peso",
      name: "gramo",
    },
  },
  {
    name: "onze",
    measure: MeasuresEnum.Weight,
    english: {
      name: "onze",
      listName: "Onzes - Weight",
    },
    spanish: {
      listName: "Onzas - Peso",
      name: "onza",
    },
  },
  {
    name: "pound",
    measure: MeasuresEnum.Weight,
    english: {
      listName: "Pounds - Weight",
      name: "pound",
    },
    spanish: {
      listName: "Libras - Peso",
      name: "libra",
    },
  },
  {
    name: "liter",
    measure: MeasuresEnum.Volume,
    english: {
      listName: "Liters - Volume",
      name: "liter",
    },
    spanish: {
      listName: "Litros - Volumen",
      name: "litro",
    },
  },
  {
    name: "milliliter",
    measure: MeasuresEnum.Volume,
    english: {
      listName: "Milliliters - Volume",
      name: "milliliter",
    },
    spanish: {
      listName: "Mililitros - Volumen",
      name: "mililitro",
    },
  },
];

export const listUnitsByLanguage = (language: LanguagesEnum): any => {
  let unitsToLanguage = {};

  Units.forEach((unit) => {
    unitsToLanguage = {
      ...unitsToLanguage,
      [unit.name]: unit[language]?.name,
    };
  });

  return unitsToLanguage;
};

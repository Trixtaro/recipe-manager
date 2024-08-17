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
    value: 1,
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
    value: 1,
  },
  {
    name: "ounce",
    measure: MeasuresEnum.Weight,
    english: {
      name: "ounces",
      listName: "Ounces - Weight",
    },
    spanish: {
      listName: "Onzas - Peso",
      name: "onzas",
    },
    value: 28.3495,
  },
  {
    name: "pound",
    measure: MeasuresEnum.Weight,
    english: {
      listName: "Pounds - Weight",
      name: "pounds",
    },
    spanish: {
      listName: "Libras - Peso",
      name: "libras",
    },
    value: 453.592,
  },
  {
    name: "kilogram",
    measure: MeasuresEnum.Weight,
    english: {
      listName: "Kilograms - Weight",
      name: "kilograms",
    },
    spanish: {
      listName: "Kilogramos - Peso",
      name: "kilogramos",
    },
    value: 1000,
  },
  {
    name: "liter",
    measure: MeasuresEnum.Volume,
    english: {
      listName: "Liters - Volume",
      name: "liters",
    },
    spanish: {
      listName: "Litros - Volumen",
      name: "litros",
    },
    value: 1000,
  },
  {
    name: "milliliter",
    measure: MeasuresEnum.Volume,
    english: {
      listName: "Milliliters - Volume",
      name: "mm.",
    },
    spanish: {
      listName: "Mililitros - Volumen",
      name: "mm.",
    },
    value: 1,
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

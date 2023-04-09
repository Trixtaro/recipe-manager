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
      name: "onzes",
      listName: "Onzes - Weight",
    },
    spanish: {
      listName: "Onzas - Peso",
      name: "onzas",
    },
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

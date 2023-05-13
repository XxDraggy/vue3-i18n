import { LanguageObject } from "../types";

function getLanguageObject(
  languages: LanguageObject[],
  languageName: string
): LanguageObject {
  return languages.filter((obj) => obj.name == languageName)[0];
}

export { getLanguageObject };

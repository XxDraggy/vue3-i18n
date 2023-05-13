import { I18n } from "../i18n";
import { LanguageObject } from "../types";

function createI18n(
  defaultLanguage: string,
  languages: LanguageObject[]
): I18n {
  return new I18n(defaultLanguage, languages);
}

export { createI18n };

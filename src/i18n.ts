import { App } from "vue";
import { LanguageObject } from "./types";
import { getLanguageObject, translate } from "./functions";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $t: (keys: string[], params?: string[]) => string;
    $lang: () => string;
    $setLang: (newLanguage: string) => string;
  }
}

class I18n {
  public currentLanguageName: string = "en";
  public languages: LanguageObject[] = [];

  constructor(defaultLanguage: string, languages: LanguageObject[]) {
    this.languages = languages;

    this._setLanguage(defaultLanguage);
  }

  public install(app: App): void {
    app.config.globalProperties.$t = (keys, params) => {
      return translate(
        getLanguageObject(this.languages, this._getLanguage()),
        keys,
        params
      );
    };

    app.config.globalProperties.$lang = this._getLanguage;

    app.config.globalProperties.$setLang = this._setLanguage;
  }

  private _getLanguage(): string {
    return this.currentLanguageName;
  }

  private _setLanguage(newLanguageName: string): string {
    this.currentLanguageName = newLanguageName;

    return this.currentLanguageName;
  }
}

export { I18n };

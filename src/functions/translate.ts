import { LanguageObject } from "../types";

function translate(
  languageObject: LanguageObject,
  keys: string[],
  params: string[] = []
): string {
  var result: any = languageObject.value;

  if (!result) throw new Error("Vue i18n error: Cannot find current language!");

  keys.forEach((key) => {
    try {
      result = result[key];
    } catch {
      console.warn("Vue i18n warning: Cannot find key!\n%s", keys.join("."));

      return keys.join(".");
    }
  });

  if (typeof result == "object") {
    console.warn("Vue i18n warning: Missing key!\n%s", keys.join("."));

    return keys.join(".");
  }

  if (typeof result == "string") {
    params.forEach((param) => {
      result = result.replace("%", param);
    });
  }

  return result;
}

export { translate };

import i18n from "i18next";
import locales from "./resources/locales.json";

i18n.init(
    {
        lng: "en",
        fallbackLng: "en",
        debug: true,

        interpolation: {
            escapeValue: false
        },

        resources: locales,

        react: {
            wait: false,
            bindI18n: "languageChanged loaded",
            bindStore: "added removed",
            nsMode: "default"
        }
    },
    err => {
        console.error(err);
    }
);

export default i18n;
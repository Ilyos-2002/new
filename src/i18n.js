import React from "react";
import { createRoot } from 'react-dom/client';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import Uz from "./languages/languages_uz";
import Ru from "./languages/languages_ru";

const resources = {
    uz: {
        translation: Uz
    },
    ru: {
        translation: Ru
    }

};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({

        resources,

        lng: "uz", // if you're using a language detector, do not define the lng option
        fallbackLng: "uz",

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        }
    });



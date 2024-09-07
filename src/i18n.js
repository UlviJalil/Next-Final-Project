import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                "home": "Home",
                "about": "About",
                "shop": "Shop",
                "catalogue": "Catalogue",
                "new_arrivals": "New Arrivals",
                "contact": "Contact",
                "search_placeholder": "Search",
                "shoppers": "Shoppers",
                "enjoy_shopping": "Enjoy Your Shopping"
            }
        },
        az: {
            translation: {
                "home": "Ana Səhifə",
                "about": "Haqqımızda",
                "shop": "Mağaza",
                "catalogue": "Kataloq",
                "new_arrivals": "Yeni Gələnlər",
                "contact": "Əlaqə",
                "search_placeholder": "Axtar",
                "shoppers": "Alıcılar",
                "enjoy_shopping": "Alış-verişdən həzz alın"
            }
        },
        ru: {
            translation: {
                "home": "Дом",
                "about": "около",
                "shop": "магазин",
                "catalogue": "каталог",
                "new_arrivals": "новые_поступления",
                "contact": "контакт",
                "search_placeholder": "поиск заполнителя",
                "shoppers": "покупатели",
                "enjoy_shopping": "наслаждайтесь_покупками"
            }
        }
    },
    lng: "en", // Default language
    fallbackLng: "en",

    interpolation: {
        escapeValue: false
    }
});

export default i18n;

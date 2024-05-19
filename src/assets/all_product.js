import { translateText } from "../helpers/translation";

import Image1 from "../Product-Image/Clothes/Clothes1.jpg";
import Image2 from "../Product-Image/Clothes/Clothes2.jpg";
import Image3 from "../Product-Image/Clothes/Clothes3.jpg";
import Image4 from "../Product-Image/Clothes/Clothes4.jpg";
import Image5 from "../Product-Image/Clothes/Clothes5.png";
import Image6 from "../Product-Image/Clothes/Clothes6.jpg";

import Image7 from "../Product-Image/Electronics/Electronics1.jpg";
import Image8 from "../Product-Image/Electronics/Electronics2.jpg";
import Image9 from "../Product-Image/Electronics/Electronics3.png";
import Image10 from "../Product-Image/Electronics/Electronics4.jpg";
import Image11 from "../Product-Image/Electronics/Electronics5.jpg";
import Image12 from "../Product-Image/Electronics/Electronics6.jpg";

import Image13 from "../Product-Image/HealthCare/HealthCare1.png";
import Image14 from "../Product-Image/HealthCare/HealthCare2.png";
import Image15 from "../Product-Image/HealthCare/HealthCare3.jpg";
import Image16 from "../Product-Image/HealthCare/HealthCare4.jpg";
import Image17 from "../Product-Image/HealthCare/HealthCare5.png";
import Image18 from "../Product-Image/HealthCare/HealthCare6.jpg";

import Image19 from "../Product-Image/Shoeses/Shoeses1.jpg";
import Image20 from "../Product-Image/Shoeses/Shoeses2.png";
import Image21 from "../Product-Image/Shoeses/Shoeses3.jpg";
import Image22 from "../Product-Image/Shoeses/Shoeses4.jpg";
import Image23 from "../Product-Image/Shoeses/Shoeses5.jpg";
import Image24 from "../Product-Image/Shoeses/Shoeses6.jpg";

import Image25 from "../Product-Image/Toys/Toys1.jpg";
import Image26 from "../Product-Image/Toys/Toys2.jpg";
import Image27 from "../Product-Image/Toys/Toys3.jpg";
import Image28 from "../Product-Image/Toys/Toys4.jpg";
import Image29 from "../Product-Image/Toys/Toys5.jpg";
import Image30 from "../Product-Image/Toys/Toys6.jpg";

import Image31 from "../Product-Image/Watches/Watches1.png";
import Image32 from "../Product-Image/Watches/Watches2.jpg";
import Image33 from "../Product-Image/Watches/Watches3.jpg";
import Image34 from "../Product-Image/Watches/Watches4.jpg";
import Image35 from "../Product-Image/Watches/Watches5.jpg";
import Image36 from "../Product-Image/Watches/Watches6.jpg";


let all_product = [
    {
        id: 1,
        category: "clothes",
        image: Image1,
        title: translateText().ClothesProduct1,
        description: translateText().ClothesProduct1_title,
        oldPrice: "189",
        price: "163$",
    },   
    
    {
        id: 2,
        category: "clothes",
        image: Image2,
        title: translateText().ClothesProduct2,
        description: translateText().ClothesProduct2_title,
        oldPrice: "189",
        price: "163$",
    },    

    {
        id: 3,
        category: "clothes",
        image: Image3,
        title: translateText().ClothesProduct3,
        description: translateText().ClothesProduct3_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 4,
        category: "clothes",
        image: Image4,
        title: translateText().ClothesProduct4,
        description: translateText().ClothesProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 5,
        category: "clothes",
        image: Image5,
        title: translateText().ClothesProduct5,
        description: translateText().ClothesProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 6,
        category: "clothes",
        image: Image6,
        title: translateText().ClothesProduct6,
        description: translateText().ClothesProduct6_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 7,
        category: "electronics",
        image: Image7,
        title: translateText().ElectronicsProduct1,
        description: translateText().ElectronicsProduct1_title,
        oldPrice: "189",
        price: "163$",
        //Samsung Galaxy s24
    },    

    {
        id: 8,
        category: "electronics",
        image: Image8,
        title: translateText().ElectronicsProduct2,
        description: translateText().ElectronicsProduct2_title,
        oldPrice: "189",
        price: "163$",
    },
    
    {
        id: 9,
        category: "electronics",
        image: Image9,
        title: translateText().ElectronicsProduct3,
        description: translateText().ElectronicsProduct3_title,
        oldPrice: "189",
        price: "163$",
        //Samsung Galaxy s24
    },

    {
        id: 10,
        category: "electronics",
        image: Image10,
        title: translateText().ElectronicsProduct4,
        description: translateText().ElectronicsProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 11,
        category: "electronics",
        image: Image11,
        title: translateText().ElectronicsProduct5,
        description: translateText().ElectronicsProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 12,
        category: "electronics",
        image: Image12,
        title: translateText().ElectronicsProduct6,
        description: translateText().ElectronicsProduct6_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 13,
        category: "shampoo",
        image: Image13,
        title: translateText().HealthCareProduct1,
        description: translateText().HealthCareProduct1_title,
        oldPrice: "189",
        price: "163$",
    },    

    {
        id: 14,
        category: "shampoo",
        image: Image14,
        title: translateText().HealthCareProduct2,
        description: translateText().HealthCareProduct2_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 15,
        category: "shampoo",
        image: Image15,
        title: translateText().HealthCareProduct3,
        description: translateText().HealthCareProduct3_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 16,
        category: "shampoo",
        image: Image16,
        title: translateText().HealthCareProduct4,
        description: translateText().HealthCareProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 17,
        category: "shampoo",
        image: Image17,
        title: translateText().HealthCareProduct5,
        description: translateText().HealthCareProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 18,
        category: "shampoo",
        image: Image18,
        title: translateText().HealthCareProduct6,
        description: translateText().HealthCareProduct6_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 19,
        category: "shoeses",
        image: Image19,
        title: translateText().ShoesesProduct1,
        description: translateText().ShoesesProduct1_title,
        oldPrice: "189",
        price: "163$",
    },
    
    {
        id: 20,
        category: "shoeses",
        image: Image20,
        title: translateText().ShoesesProduct2,
        description: translateText().ShoesesProduct2_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 21,
        category: "shoeses",
        image: Image21,
        title: translateText().ShoesesProduct3,
        description: translateText().ShoesesProduct3_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 22,
        category: "shoeses",
        image: Image22,
        title: translateText().ShoesesProduct4,
        description: translateText().ShoesesProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 23,
        category: "shoeses",
        image: Image23,
        title: translateText().ShoesesProduct5,
        description: translateText().ShoesesProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 24,
        category: "shoeses",
        image: Image24,
        title: translateText().ShoesesProduct6,
        description: translateText().ShoesesProduct6_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 25,
        category: "toys",
        image: Image25,
        title: translateText().ToysProduct1,
        description: translateText().ToysProduct1_title,
        oldPrice: "189",
        price: "163$",
    },   

    {
        id: 26,
        category: "toys",
        image: Image26,
        title: translateText().ToysProduct6,
        description: translateText().ToysProduct6_title,
        oldPrice: "189",
        price: "163$",
    },
    
    {
        id: 27,
        category: "toys",
        image: Image27,
        title: translateText().ToysProduct2,
        description: translateText().ToysProduct2_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 28,
        category: "toys",
        image: Image28,
        title: translateText().ToysProduct3,
        description: translateText().ToysProduct3_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 29,
        category: "toys",
        image: Image29,
        title: translateText().ToysProduct4,
        description: translateText().ToysProduct4_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 30,
        category: "toys",
        image: Image30,
        title: translateText().ToysProduct5,
        description: translateText().ToysProduct5_title,
        oldPrice: "189",
        price: "163$",
    },

    {
        id: 31,
        category: "watches",
        image: Image31,
        title: translateText().WatchesProduct1,
        description: translateText().WatchesProduct1_title,
        oldPrice: "189",
        price: "163$",
    },    

    {
        id: 32,
        category: "watches",
        image: Image32,
        title: translateText().WatchesProduct2,
        description: translateText().WatchesProduct2_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 33,
        category: "watches",
        image: Image33,
        title: translateText().WatchesProduct3,
        description: translateText().WatchesProduct3_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 34,
        category: "watches",
        image: Image34,
        title: translateText().WatchesProduct4,
        description: translateText().WatchesProduct4_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 35,
        category: "watches",
        image: Image35,
        title: translateText().WatchesProduct5,
        description: translateText().WatchesProduct5_title,
        oldPrice: "189",
        price: "163$",
    }, 

    {
        id: 36,
        category: "watches",
        image: Image36,
        title: translateText().WatchesProduct6,
        description: translateText().WatchesProduct6_title,
        oldPrice: "189",
        price: "163$",
    }, 
]
;

export default all_product;
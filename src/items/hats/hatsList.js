import premiumHatKhaki from './img/premium-leather-khaki.jpg'
import furLeatherHatKhaki from './img/fur-leather-khaki.jpg'
import furLeatherHatWhite from './img/fur-leather-white.jpg'
import latexBlack from './img/latex-black.jpg'
import leatherBlack from './img/leather-black.jpg'
import latexRed from './img/latex-red.jpg'
import standartWarmBlack from './img/standart-warm-hat-black.jpg'
import standartWarmWhite from './img/standart-warm-hat-white.jpg'
import standartWarmKhaki from './img/standart-warm-hat-khaki.jpg'

const hatsList = [
    {
        id:0,name:"Premium Leather Hat",
        imgSrc:premiumHatKhaki,
        price:"45",
        size:'ზომა: 56-58 სმ (რეგულირებადი)'},
    {
        id:1,
        name:"Latex Hat",
        imgSrc:latexRed,
        blackImgSrc:latexBlack,
        price:"40",
        size:'ზომა: 56-58 სმ (რეგულირებადი)'}, 
    {
        id:2,
        name:"Standart Warm Hat",
        imgSrc:standartWarmKhaki,
        blackImgSrc:standartWarmBlack,
        WhiteImgSrc:standartWarmWhite,
        price:"25",
        size:'ზომა: 56-58 სმ (რეგულირებადი)'},
    {
        id:3,
        name:"Fur Leather Hat",
        imgSrc:furLeatherHatKhaki,
        WhiteImgSrc:furLeatherHatWhite,
        price:"50",
        size:'ზომა: 56-58 სმ (რეგულირებადი)'},
]

export default hatsList
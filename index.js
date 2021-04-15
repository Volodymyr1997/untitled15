car = {model: `opel`, made: `Germany`, yurs: 2017, max:260};
function drive() {
    console.log(`їдемо зі швидкістю ${car.max} на годину`)
    return;
}
//drive()

function  Teg (titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag
    this.action = action
    this.attrs = attrs
}


//  let titel = `a`;
// let  acti = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`
// let att = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.\n'},
// ];
// let a = new Teg(titel, acti, att);
// console.log(a);
let titel2 = `div`
let  acti2 = `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого`
let att2 = [
    {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
    {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'},
]
let div = new Teg(titel2,acti2,att2);
console.log(div);
let titl3 = `h1`;
let acti3 =`HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.`
let att3 = [
    {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}

];
let h1 = new Teg(titl3,acti3,att3);
console.log(h1);
class Tegs {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag
        this.action = action
        this.attrs = attrs
    }
}


let titel = `a`;
let acti = `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок`;
let atter = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.\n'},
];
let a = new Tegs(titel, acti, atter);
console.log(a);
function Cars (model, made, yurs, max, power) {

    this.model = model;
    this.made = made;
    this.yurs = yurs;
    this.max = max;
    this.power = power;
     function drive () {console.log(`їдемо зі швидкістю ${car.max} на годину`)
function info (){
         this.model, this.made, this.yurs, this.max, this.power
}

    }
};
let opel = new Cars(`opel`,`germani`, 2017,240,200,drive(), info()) ;
console.log(opel);

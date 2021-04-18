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
let opel = new Cars(`opel`,`germani`, 2017,240,200,) ;
console.log(opel);

class Humen {
constructor(name,age) {
    this.name = name || `no name`;
    this.age = age || `no age`;
    }
}
class Cinderela extends Humen {
    constructor(name, age, foodsize) {
        super(name,age);
        this.foodsize = foodsize || `no foodsize`;
    }
}
class princ extends Humen{
    constructor(name, age, shoesize) {
        super(name, age);
        this.shoesize = shoesize || `no shose`;
    }

    findCinderela(arry) {
      let  find = null;

     find = arry.find(item => item.foodsize === this.shoesize);
     find ? console.log(`my cinderela is ${find.name}`) : console.log(`i not find cinderela`);
    }
}

const prince = new princ(`Vova`,23,38);
let cinderela1 = new Cinderela(`karina`,26,36);
let cinderela2 = new Cinderela(`Vika`,18,37);
let cinderela3 = new Cinderela(`Olesy`,22,37.5);
let cinderela4 = new Cinderela(`Ira`,22,38);
let cinderela5 = new Cinderela(`Oksana`, 30,38.5);
let cinderela6 = new Cinderela(`lera`,19,39);
let cinderela7 = new Cinderela(`Diana`,20,39.5)
let cinderela8 = new Cinderela(`Dayana`,21,40);
let cinderela9 = new Cinderela(`Solomya`,25,40.5);
let cinderela10 = new Cinderela(`khrystyna`,21,41);
let cindereles = [cinderela1,cinderela2,cinderela3,cinderela4,cinderela5,cinderela6,cinderela7,cinderela8,cinderela9,cinderela10];
let findCind = prince.findCinderela(cindereles);


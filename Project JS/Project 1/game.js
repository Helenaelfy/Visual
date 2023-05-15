window.onload = function () 
{
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'style.css';
    document.head.appendChild(link);
};

const canvas = document.getElementById('canvas');   // поле
const context = canvas.getContext('2d');            // двухмерная змейка

let grid = 16;         // размер клетки на поле
let count = 0;         // начальная скорость змейки
let snake =            // змейка
{
x : 160,               // начальные коррдинаты змейки
y : 160,

dx : grid,             // скорость по у ноль так как змейка изначально движется горионтально
dy : 0,

sells : [],            //хвост пока пустой       
maxCells : 4           // начальная длина змейки 4 клетки
};

let apple =
{
    x : 320,           // начальные координаты яблок         
    y : 320,
};

function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min)) + min;    // генератор случайных чисел для размещения еды
}




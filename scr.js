"use strict";
/* 
массивы FigureBot и FigurePlayer состоят из характеристик кораблей

Структура массивов такова: [первый корабль, второй корабль, ..., эн-ный корабль]
при этом с первого по N_one-нный порабли - однопалубные, с N_one+1 по N_one+N_two - двухпалубные
и так далее

А Корабль имеет структуру [Координаты начала корабля, направление, здоровье]
Направление задаётся в виде бинарного числа, если true, то горизонтально, если нет, то вертикально
Здоровье в виде 
*/
const N_one = 4; const N_two = 3; const N_three = 2; const N_fourth = 1;
let FigureBot = [];
let FigurePlayer = [];
let PlayingFieldIsBisy = new Array(10*10);


for (let Ship of FigureBot) {

}

// функция CheckNear проверяет, не находится ли корабль вблизи других
// т.е. возвращает true если вблизи одной клетки у корабля нет других кораблей

function CheckNearShip(ShipToCheck) {
	
}

function Ranking() {
    /* 
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // создаем новый параграф
    var pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val;
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement); // */
}
 
var ButtonRanking = document.getElementById("ButtonRanking");
ButtonRanking.onclick = Ranking();

function RotateShip() {
	/*
    // получаем значение поля key
    var keyBox = document.search.key;
    var val = keyBox.value;
    // получаем элемент printBlock
    var printBlock = document.getElementById("printBlock");
    // создаем новый параграф
    var pElement = document.createElement("p");
    // устанавливаем у него текст
    pElement.textContent = val;
    // добавляем параграф в printBlock
    printBlock.appendChild(pElement); // */
}
 
var ButtonRotate = document.getElementById("ButtonRotate");
ButtonRotate.onclick = RotateShip();
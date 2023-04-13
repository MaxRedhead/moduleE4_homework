/** Реализовать следующее консольное приложение подобно примеру, который разбирался в видео.
 Реализуйте его на прототипах.
 Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность.
 Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
 Выбрав прибор, подумайте, какими свойствами он обладает.*/

// План:
//
// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой. :)

function Device(turnOn){
    this.turnOn = turnOn

}

Device.prototype.getTurnedOn = function (power) {
    if (power === true){
       console.log('Прибор включён')
    }else {
        console.log('Прибор выключен')
    }
}

function Console(name, electricity) {
    this.name = name
    this.electricity = electricity
}

function Computer(name, electricity){
    let sumOfElectricity = 0
    this.name = name
    this.electricity = electricity
    this.sum = function (power, electricity){
        if (power === true){
            sumOfElectricity += electricity
            console.log(sumOfElectricity)
        }
    }
}

Console.prototype = new Device()
Computer.prototype = new Device()


const PS5 = new Console('PS5', 45)
const Xbox = new Console('Xbox', 45)
const Mac = new Computer('Mac', 35)
const Asus = new Computer('Asus', 40)

console.log(PS5)
PS5.getTurnedOn(true)

console.log(Xbox)
Xbox.getTurnedOn(false)

console.log(Mac)
Mac.getTurnedOn(true)

console.log(Asus)
Asus.getTurnedOn(true)






/** Переписать консольное приложение из предыдущего юнита на классы.*/

class Device{
    constructor(turnOn){
        this.turnOn = turnOn || true;
    }
    getTurnedOn = function (turnOn) {
        if (turnOn === true){
            return('Прибор включён')
        }else {
            return('Прибор выключен')
        }
    }
}


class Console extends Device{
    constructor(name, electricity, turnOn) {
        super(turnOn);
        this.name = name;
        this.electricity = electricity ;
    }
}

class Computer extends Device{
    constructor(name, electricity, turnOn) {
        super(turnOn);
        this.name = name;
        this.electricity = electricity ;
    }
}

const mac = new Computer('Mac', 46);
const asus = new Computer('Asus', 40);
const ps5 = new Console('PS5', 50);
const xbox = new Console('XBOX', 50);

console.log(mac)
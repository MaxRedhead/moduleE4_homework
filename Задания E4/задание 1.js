/** Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все
 ключи и значения только собственных свойств. Данная функция не должна возвращать значение.*/

function func() {
    const obj = {
        a: 123,
        b: 'Привет'
    };
    for (let key in obj) {
        console.log(obj[key])
    }
}

func();
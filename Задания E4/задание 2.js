/** Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет
 есть ли у переданного объекта свойство с данным именем. Функция должна возвращать true или false.*/

function func(){
    const str = 'Привет Мир!';
    const obj = {
        a: 123
    }
    console.log(obj.hasOwnProperty('a'))
}
func();

function func1(){
    const stroka = 'Привет мир ещё раз!';
    const obj1 = {
        b: 123
    }
    console.log('b' in obj1)
}
func1();

//Не наю как лучше, вроде оба варианта рабочие
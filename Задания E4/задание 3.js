/** Написать функцию, которая создает пустой объект, но без прототипа.*/

function func(){
    obj = Object.create(null)
    console.log(typeof obj)
}
func();

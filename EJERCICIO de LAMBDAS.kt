/*Crea una funcion de orden superior que reciba un int y una funcion que reciba un int y devuelva un boolean


Llama a dicha funcion de orden superior con expresiones lambdas que hagan lo siguientes

- comprobar si el numero es un numero par

- comprobar si el numero es un numero primo

- comprobar si el numero es un numero guay (un numero es guay cuando es el resultado de la suma de numeros consecutivos desde el 1. Por ejemplo el número 10 es guay porque 1+2+3+4 = 10. El 15 también es guay porque 1+2+3+4+5 = 15. El numero 8 no es guay porque no hay ninguna posible combinación de sumas consecutivas desde el 1 que resulte en 8)*/ 
fun higherOrderFunction(number: Int, condition: (Int) -> Boolean): Boolean {
    return condition(number)
}

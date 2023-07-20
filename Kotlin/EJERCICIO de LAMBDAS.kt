/*Crea una funcion de orden superior que reciba un int y una funcion que reciba un int y devuelva un boolean


Llama a dicha funcion de orden superior con expresiones lambdas que hagan lo siguientes

- comprobar si el numero es un numero par

- comprobar si el numero es un numero primo

- comprobar si el numero es un numero guay (un numero es guay cuando es el resultado de la suma de numeros consecutivos desde el 1. Por ejemplo el número 10 es guay porque 1+2+3+4 = 10. El 15 también es guay porque 1+2+3+4+5 = 15. El numero 8 no es guay porque no hay ninguna posible combinación de sumas consecutivas desde el 1 que resulte en 8)*/ 
fun higherOrderFunction(number: Int, condition: (Int) -> Boolean): Boolean {
    return condition(number)
}

fun main() {
    val number = 10
    
    val isEven = higherOrderFunction(number) { it % 2 == 0 }
    println("¿Es par? $isEven")
    
    val isPrime = higherOrderFunction(number) { n ->
        if (n < 2) return@higherOrderFunction false
        for (i in 2 until n) {
            if (n % i == 0) return@higherOrderFunction false
        }
        return@higherOrderFunction true
    }
    println("¿Es primo? $isPrime")
    
    val isCool = higherOrderFunction(number) { n ->
        var sum = 0
        var i = 1
        while (sum < n) {
            sum += i
            if (sum == n) return@higherOrderFunction true
            i++
        }
        return@higherOrderFunction false
    }
    println("¿Es guay? $isCool")
}
/* 
Estas expresiones lambda implementan las condiciones específicas para cada caso. En el caso de comprobar si un número es guay, se utiliza un bucle while para sumar números consecutivos hasta alcanzar o superar el número dado. Si la suma es igual al número, se considera guay; de lo contrario, no lo es.*/
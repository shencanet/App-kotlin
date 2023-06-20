//Usa un bucle for para recorrer un array en el que estén almacenados los diferentes platos que ofrece un restaurante y mostrarlos por pantalla

val platos = arrayOf("Hamburguesa", "Pizza", "Ensalada", "Sushi", "Pasta")

for (plato in platos) {
    println(plato);
}
//Usa un bucle while para recorrer todos los números del 1 al 10 y mostrar únicamente los pares
var numero = 1

while (numero <= 10) {
    if (numero % 2 == 0) {
        println(numero)
    }
    numero++
}

//Cada elemento del array debe contener el nombre del plato y su precio e kotlin
data class Plato(val nombre: String, val precio: Double)

val platos = arrayOf(
    Plato("Hamburguesa", 9.99),
    Plato("Pizza", 12.99),
    Plato("Ensalada", 8.99),
    Plato("Sushi", 15.99),
    Plato("Pasta", 11.99)
)

for (plato in platos) {
    println("Nombre: ${plato.nombre}, Precio: ${plato.precio}")
}

//Crea el mismo ejercicio de antes pero añadiendo a cada conjunto de datos un array con los ingredientes de cada plato

//Ahora deberiamos tener la siguiente información de cada elemento del array principal: plato, precio, lista de ingredientes


//ADVERTENCIA: la idea NO es que toooooooooooooodos los ingredientes este en una unica string, sino que cada ingrediente sea una string


data class Plato(val nombre: String, val precio: Double, val ingredientes: Array<String>)

val platos = arrayOf(
    Plato("Hamburguesa", 9.99, arrayOf("Pan", "Carne", "Lechuga", "Tomate", "Queso")),
    Plato("Pizza", 12.99, arrayOf("Masa", "Salsa de tomate", "Queso", "Jamón", "Champiñones")),
    Plato("Ensalada", 8.99, arrayOf("Lechuga", "Tomate", "Pepino", "Aceitunas", "Vinagreta")),
    Plato("Sushi", 15.99, arrayOf("Arroz", "Alga nori", "Salmón", "Aguacate", "Salsa de soja")),
    Plato("Pasta", 11.99, arrayOf("Pasta", "Salsa de tomate", "Albóndigas", "Queso parmesano"))
)

for (plato in platos) {
    println("Nombre: ${plato.nombre}, Precio: ${plato.precio}")
    println("Ingredientes:")
    for (ingrediente in plato.ingredientes) {
        println("- $ingrediente")
    }
    println()
}
/*Usa un bucle do-while para mostrar por pantalla una cuenta regresiva del 9 al 0 igual que cuando hay un lanzamiento de un cohete por parte de la NASA.*/
 
var contador = 9

do {
    println(contador)
    Thread.sleep(1000) // Pausa de 1 segundo (1000 milisegundos)
    contador--
} while (contador >= 0)

println("¡Despegue!")
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
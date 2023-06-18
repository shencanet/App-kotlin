fun main() {
    var matriz = arrayOf(
    intArrayOf(1,2,3),
    intArrayOf(4,5,6,7,8,9,10),
    intArrayOf(11,12,13)
)
for  (i in (0 until matriz.size)){
    println()
    for (j in (0 until matriz[i].size))
    println("Posicion[$i][$j] : ${matriz[i][j]}")
}

//colecciones set y colecciones lista
//mutables 
var clientesVIP : Set<Int> = setOf (1234, 5678, 4040) //datos ser de datos enteros
val setMezclado : setOf(2, 4.458, "pedro", 'c')
println("clientes VIP: \n") 
//clientesVIP.add(6666) DA ERROR PORQUE ES INMUTABLE
println(clientesVIP)

println("Numero de Clientes VIP${clientesVIP.size} ")

if(clientesVIP.contains(1234))println("cliente Vip encontrado 1")

if(clientesVIP.contains(1111))println("cliente Vip encontrado 2")


//version mutable 2

var clientes: MutableSet<Int> = mutableSetOf(1234, 5678, 4040)
println("clientes: \n")
println(clientes)
clientes.add(6666) //agregar un elemento MUTABLE
println(clientes)

clientes.remove(6666) //eliminar un elemento MUTABLE
println(clientes)
clientes.clear() //eliminar todos los elementos MUTABLE 
println(clientes)
print(message = "Numero de clientes: ${clientes.size} \n")

//listas no mutables
//Divisas 
var divisas : List<String> = listOf("Dolar", "Euro", "Yen", "Libra", "Peso")
println(divisas)
println("Numero de divisas: ${divisas.size}")
println("Primera divisa: ${divisas.first()}")
println("Ultima divisa: ${divisas.last()}")
println("Divisa en la posicion 3: ${divisas[3]}")
println("Divisa en la posicion 3: ${divisas.get(3)}")
println("Divisa en la posicion 3: ${divisas.indexOf("Yen")}")

//listas mutables
var divisas2 : MutableList<String> = mutableListOf("Dolar", "Euro", "Yen", "Libra", "Peso")
println(divisas2)
divisas2.add("Bitcoin")
println(divisas2)
divisas2.removeAt(2)
println(divisas2)
divisas2[0] = "Dolar Americano"
println(divisas2)
println(divisas2.first())
println(divisas2.last())
println(divisas2.elementAt(2))
println(divisas2.none())
println(divisas2.isEmpty())
println(divisas2.isNotEmpty())
divisas2.clear()
println(divisas2.none())











}
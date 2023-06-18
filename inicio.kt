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
//mutables y inmutables

var clientesVIP : Set<Int> = setOf (1234, 5678, 4040) //datos ser de datos enteros
val setMezclado : setOf(2, 4.458, "pedro", 'c')
println("clientes VIP: \n") 
println(clientesVIP)
println("Numero de Clientes VIP${clientesVIP.size} ")

if(clientesVIP.contains(1234))println("cliente Vip encontrado 1")

if(clientesVIP.contains(1111))println("cliente Vip encontrado 2")


}
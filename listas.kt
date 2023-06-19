
//listas no mutables
var mapa: Map<Int, String> = mapOf(
    1 to "Lunes",
    2 to "Martes",
    3 to "Miercoles",
    4 to "Jueves",
    5 to "Viernes",
    6 to "Sabado",
    7 to "Domingo"
)
println(mapa)

//listas mutables

var inversiones = mutableMapOf<String, Float>()
    inversiones.put("Google", 12.5f)
    inversiones.put("Apple", 15.5f)
    inversiones.put("Amazon", 17.5f)
    inversiones.put("Tesla", 19.5f)
    inversiones.put("Microsoft", 21.5f)
    inversiones.put("Facebook", 23.5f)
    inversiones.remove("Tesla")

println(inversiones)

var empresa: String =  "ShenCanet"
mostrar_saldo()

var cantidad_a_invertir: Float = 90f
while(saldo >= cantidad_a_invertir){
    empresa = bolsa.elementAtOrNull(index)
    if(empresa != null){
        saldo -= cantidad_a_invertir
        println("Invertimos $cantidad_a_invertir en $empresa")
}








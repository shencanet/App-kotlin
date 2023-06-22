/*CREAR FICHERO KOTLIN CLASS
Person.kt
mejor el archivo igual que la clase
 
class Person(var name: String = "Anonimo", var passport: String? = null) { //tipo del dato



    fun Person(){
        name = "Anonimo"
        passport = null
    }
     var alive: Boolean = true
     fun nacer(){
            alive = true
     }
     fun morir(){
            alive = false
     }


}


class mainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        var num: Int = 10
        var jota: Person = Person()// constructor
        jota.alive = false
        jota.nacer()
        jota.morir()
        println(jota.alive)

        var anonimo: Person = Person("Anonimo", "123456789")
        var anonimo2 = Person()






    }
}
*/


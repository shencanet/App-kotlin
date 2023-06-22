/*CREAR FICHERO KOTLIN CLASS
Person.kt
mejor el archivo igual que la clase
 
class Person { //tipo del dato

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






    }
}
*/


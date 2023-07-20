
class Pokemon ( private var name: String = "Pok",
                private var attackPower: Float = 30f,
                private var life: Float = 100f) {
    
    fun Pokemon(n: String, aP: Float) {
        this.name = n
        this.attackPower = aP
        this.life = 100f
    }
    fun getName(): String{ return this.name }
    fun getAttackPower(): Float{ return this.attackPower }
    fun getLife(): Float{ return this.life }
    fun setLife(i: Float){this.life = i}

}




//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
 FUNCION fun main(args: Array<String>) {
    var bicho: Pokemon = Pokemon()
    println(bicho.getName())
    println(bicho.getAttackPower())
    println(bicho.getLife())
    println("")
    bicho.setLife(30f)
    println(bicho.getLife())


    
 }





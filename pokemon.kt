class Pokemon (private var name: String = "Pok",
private var attackPower: Float = 30f,
private var life: Float = 100f){
    fun Pokemon(n: String, aP: Float){
        this.name = n
        this.attackPower = aP
        this.life = 100f
    }
    fun attack(): String{ return this.name + " attack with " + this.attackPower + " of power" }

}




//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

println()




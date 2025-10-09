function fun (num) {
    if (num < 1) {
        return
    }
    console.log(num)
    num--
    fun(num)
}

fun(10)
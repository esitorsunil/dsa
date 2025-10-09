function fun (num) {
    if (num < 1) {
        return
    }
    console.log(num)
    num--
    fun(num)
}

fun(10)

n = 10
function fun (num) {
    if (num > n) {
        return
    }
    console.log(num)
    num++
    fun(num)
}

fun(1)
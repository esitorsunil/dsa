function balancedParanthesis (str) {
    let stack = []

    let top = -1

    for (let i=0; i<str.length; i++) {
        let char = str [i]

        if(stack[char] === "(") {
            top ++

            stack[top] = "("
        }
        else if (char[str] === ")") {
            if (top === -1) {
                return false
            }
            top --
        }
    }
    return top === -1;
}
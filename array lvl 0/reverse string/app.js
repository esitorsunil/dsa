function reverseString(s) {
  let len = s.length;
  let halflen = Math.floor(len / 2);

  for (let i=0; i < halflen; i++) {
    let temp = s[i];

    s[i] = s[len - 1 - i];

    s[len - 1 - i] = temp;
  }
}
var s = '       ';
for (var i = 5; i > 0; i--) {
    for (var o = 0; o < i; o++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);
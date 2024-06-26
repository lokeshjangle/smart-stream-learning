var a = '32';
console.log(a);
function addType(a, b) {
    if (typeof a === 'string' || typeof b === 'string')
        return a.toString() + b.toString();
    return a + b;
}
var ret = addType(10, 15);
console.log(ret);

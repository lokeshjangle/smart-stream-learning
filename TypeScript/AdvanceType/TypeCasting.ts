const a: unknown = '32';
console.log(a as number);

type Combinablee = string | number;
function addType(a: Combinablee, b: Combinablee) {
  if (typeof a === 'string' || typeof b === 'string')
    return a.toString() + b.toString();
  return a + b;
}

const ret = addType(10, 15) as string;
console.log(ret);

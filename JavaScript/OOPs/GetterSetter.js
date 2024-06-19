'use strict';

const account = {
  owner: 'lokesh',
  movements: [200, 530, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
account.latest = 50;
console.log(account.movements); //[ 200, 530, 120, 300, 50 ]

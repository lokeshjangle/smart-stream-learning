class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItem() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Lokesh');
textStorage.addItem('Yashwant');
textStorage.addItem('Sagrika');
console.log(textStorage.getItem()); //[ 'Lokesh', 'Yashwant', 'Sagrika' ]

textStorage.removeItem('Sagrika');
console.log(textStorage.getItem()); //[ 'Lokesh', 'Yashwant']

const objStorage = new DataStorage<object>();
objStorage.addItem({ name: 'Sai' });
objStorage.addItem({ name: 'Vishal' });
console.log(objStorage.getItem()); //[ { name: 'Sai' }, { name: 'Vishal' } ]

objStorage.removeItem({ name: 'Sai' });
console.log(objStorage.getItem()); //[ { name: 'Sai' } ]  --> because every object type has differnce reference so it is always delete last value because indexOf may not found the index so it return -1 then splice remove that element from array which is last element to avoid it we should store data in different variable and add those varaible reference in array
const maxObj = { name: 'Max' };
const manuObj = { name: 'Manu' };
objStorage.addItem(maxObj);
objStorage.addItem(manuObj);
console.log(objStorage.getItem()); //[ { name: 'Sai' }, { name: 'Max' }, { name: 'Manu' } ]
objStorage.removeItem(maxObj);
console.log(objStorage.getItem()); //[ { name: 'Sai' }, { name: 'Manu' } ]

//Readonly type

const names: Readonly<string[]> = ['Lokesh', 'Yashwant'];
// names.push('Sagarika'); //Property 'push' does not exist on type 'readonly
// names.pop('Sagarika'); //Property 'pop' does not exist on type 'readonly

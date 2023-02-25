const Hash = (string, max) => 
{
  var hash = 0;
  for (let i = 0; i < string.length; i++) 
  {
    hash += string.charCodeAt(i);
  }
  return hash % max
}

class HashTable 
{
  constructor() 
  {
    this.storage = [];
    this.storageLimit = 4;
  }

  add(key, value)
   {
    var index = Hash(key, this.storageLimit)

    if (this.storage[index] === undefined) 
    {
      this.storage[index] = [[key, value]];
    }

    else
     {
      let inserted = false;

      for (let i = 0; i < this.storage[index].length; i++) 
      {
        if (this.storage[index][i][0] === key) 
        {
          this.storage[index][i][1] = value;

          inserted = true;
        }
      }
      if (inserted === false) 
      {
        this.storage[index].push([key, value])
      }
    }
  }

  remove(key) 
  {
    var index = Hash(key, this.storageLimit)

    if (this.storage[index].length === 1 && this.storage[index][0][0] === key) 
    {
      delete this.storage[index];
    }

    else 
    {
      for (let i = 0; i < this.storage[index].length; i++) 
      {
        if (this.storage[index][i][0] === key)
        {
          delete this.storage[index][i][0];
          delete this.storage[index][i][1];
        }
      }
    }
  }

  lookup(key) 
  {
    var index = Hash(key, this.storageLimit)

    if (this.storage[index] === undefined) 
    {
      return undefined;
    }
    else 
    {
      for (let i = 0; i < this.storage[index].length; i++) {
        if (this.storage[index][i][0] === key) 
        {
          return this.storage[index][i][1];
        }
        if(this.storage[index][i][0] === undefined)
        {
          return undefined
        }
      }
    }
  }
}

const prueba = new HashTable();

prueba.add("Lenny", 10);
prueba.add("Yael", 20);
prueba.add("Elen", 30);
prueba.add("Beleric", 40);
prueba.add("Jose", 50);
prueba.add("Manuel", 60);
prueba.add("Zorrilla", 70);
prueba.add("Carlos", 80);

console.log(prueba.lookup("Lenny"));
console.log(prueba.lookup("Yael"));
console.log(prueba.lookup("Elen"));
console.log(prueba.lookup("Beleric"));
console.log(prueba.lookup("Jose"));
console.log(prueba.lookup("Manuel"));
console.log(prueba.lookup("Zorrilla"));
console.log(prueba.lookup("Carlos"));

prueba.remove("Jose");
prueba.remove("Manuel");
prueba.remove("Carlos")
prueba.remove('?');

console.log('--------------------------------')

console.log(prueba.lookup("Lenny"));
console.log(prueba.lookup("Yael"));
console.log(prueba.lookup("Elen"));
console.log(prueba.lookup("Beleric"));
console.log(prueba.lookup("Jose"));
console.log(prueba.lookup("Manuel"));
console.log(prueba.lookup("Zorrilla"));
console.log(prueba.lookup("Carlos"));

module.exports = {Hash, HashTable};



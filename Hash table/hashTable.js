function hash(string, max) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

function HashTable() {
  let storage = [];
  const storageLimit = 4;

  this.add = function (key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [
        [key, value]
      ];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  this.lookup = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
}

const hashTable = new HashTable();

hashTable.add("lenny", 25);
hashTable.add("ynnel", 28);
hashTable.add("lenny", 28);
hashTable.add("garcia", 25);
hashTable.add("jose", 25);
hashTable.add("perez", 25);
hashTable.add("carlos", 26);
hashTable.add("oroscopo", 25);

 console.table(hashTable.lookup("ynnel"));

 var array3D = [];
 
 array3D[1] = 4;

console.table(array3D[1].length);

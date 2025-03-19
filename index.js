// Collection Functions (Arrays or Objects)

// 1. myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }
  
  // 2. myMap
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, (item) => result.push(callback(item)));
    return result;
  }
  
  // 3. myReduce
  function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    if (acc === undefined) {
      acc = values[0];
      values = values.slice(1);
    }
    for (let i = 0; i < values.length; i++) {
      acc = callback(acc, values[i], collection);
    }
    return acc;
  }
  
  // 4. myFind
  function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
      if (predicate(values[i])) {
        return values[i];
      }
    }
    return undefined;
  }
  
  // 5. myFilter
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, (item) => {
      if (predicate(item)) {
        result.push(item);
      }
    });
    return result;
  }
  
  // 6. mySize
  function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
  }
  
  // Array Functions
  
  // 7. myFirst
  function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
  }
  
  // 8. myLast
  function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
  }
  
  // Object Functions
  
  // 9. myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // 10. myValues
  function myValues(object) {
    return Object.values(object);
  }
  
  // Bonus Functions
  
  // 11. mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      return valA > valB ? 1 : -1;
    });
  }
  
  // 12. myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    for (let item of array) {
      if (Array.isArray(item) && !shallow) {
        myFlatten(item, false, newArr);
      } else {
        newArr.push(item);
      }
    }
    return newArr;
  }
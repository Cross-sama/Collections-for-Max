const findLongestWord = (arr) => {
  let result = ''
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i].length > result.length) {
      result = arr[i]
    } else {
      continue
    }
  }
  return result
};
console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const sumUniqueNumbers = (arr) => {
  result = 0
  let arrOfUniqueNums = []
  for (let num of arr) {
    if (!arrOfUniqueNums.includes(num)) {
      arrOfUniqueNums.push(num)
    }
  }
  for (let i = 0; i < arrOfUniqueNums.length; i += 1) {
    result += arrOfUniqueNums[i]
  }
  return result
}
console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const mergeArrays = (...arrays) => {
  let result = [];
  
  for (let i = 0; i < arrays.length; i +=1) {
    for (let arr of arrays) {
      for (let num of arr) {
        if (!result.includes(num)) {
          result.push(num)
        }
      }
    }
  }
  return result
}
console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const hasProperty = (obj, str) => {
  let result = ''
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (str === key) {
      result = true
      break
    } else {
      result = false
    }
  }
  return result
}
console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

const getPropertyValue = (obj, str) => {
  let result = ''
  const entries = Object.entries(obj)
  for (const [key, value] of entries) {
    if (key === str) {
      result = value
      break
    } else {
      result = undefined
    }
  }
  return result
}
console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell"

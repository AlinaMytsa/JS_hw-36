'use strict';
let ulEl = document.getElementById('ulId');
let ulChilds = ulEl.childNodes;
let ulArr = Array.from(ulChilds);
// 1
for (let node of ulArr){
  console.log(node);
}
// 2
console.log(ulArr.length);
// 3
let liText = document.getElementsByTagName('li');

for (let i of liText){
  liText.push('i'.innerHTML);
}
console.log(liText.data)

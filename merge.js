function merge(left, right) {
 let output = [];
 let leftPointer = 0;
 let rightPointer = 0;


 while (leftPointer < left.length && rightPointer < right.length){

  if (left[leftPointer] < right[rightPointer]){
    output.push(left[leftPointer]);
    leftPointer++;
  }else {
    output.push(right[rightPointer]);
    rightPointer++;
  }

}

while (leftPointer < left.length){
  output.push(left[leftPointer]);
  leftPointer++;
}
while (rightPointer < right.length){
  output.push(right[rightPointer]);
  rightPointer++;
}

return output;
}

function mergeSort(values) {

  if (values.length <= 1){
    // console.log(`small values are`, values);
    return values;
  }

  let middlePointer = Math.floor(values.length/2);


  let leftHalf = mergeSort(values.slice(0,middlePointer));
  //mergeSort([4,20,12]);
  //mergeSort([4]);

  let rightHalf = mergeSort(values.slice(middlePointer));

  console.log(`left half is`, leftHalf);
  console.log(`right half is `, rightHalf);
  console.log(`result of merge is`,merge(leftHalf, rightHalf))
  return merge(leftHalf, rightHalf);



}

module.exports = { merge, mergeSort};
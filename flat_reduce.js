function flatten(arr) {
  arr.reduce(function(acc, val) {
    if (Array.isArray(val)) {
      acc.concat(flatten(val));
    } else acc.concat(val);

    //return acc;
  });
}
var test = [1, [5, 34], {}, [3, [4], 5], [6, "seven"]];

console.log(flatten(test));

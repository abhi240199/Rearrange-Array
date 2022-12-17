var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var n = arr.length;
var max_index = arr.length - 1,
  min_index = 0;
var max_element = arr[n - 1] + 1;
for (var i = 0; i < n; i++) {
  if (i % 2 == 0) {
    arr[i] += parseInt(arr[max_index] % max_element) * max_element;
    max_index--;
  } else {
    arr[i] += parseInt(arr[min_index] % max_element) * max_element;
    min_index++;
  }
}

for (var i = 0; i < n; i++) {
  arr[i] = parseInt(arr[i] / max_element);
}
console.log(arr);

function merge(arrList) {
  if (arrList.length === 0) return [];
  if (arrList.length === 1) return arrList[0];
  if (arrList.length === 2) return merge2Lists(arrList[0], arrList[1]);
  let mid = Math.floor(arrList.length / 2)
  let left = merge(arrList.slice(0, mid));
  let right = merge(arrList.slice(mid, arrList.length));
  return merge2Lists(left, right);
}

function merge2Lists(arr1, arr2) {
  const ans = []
  let l=0, r=0
  while (l<arr1.length && r<arr2.length) {
    if (arr1[l] < arr2[r]) ans.push(arr1[l++])
    else ans.push(arr2[r++])
  }
  while (l<arr1.length) ans.push(arr1[l++])
  while (r<arr2.length) ans.push(arr2[r++])
  return ans
}
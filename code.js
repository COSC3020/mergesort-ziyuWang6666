function mergeSort(arr) {
    const n = arr.length;
    // const temp = new Array(n);
  
    function merge(arr, left, mid, right) {
        // mid is left subarray end index
        let i = left;//left subarray index
        let j = mid + 1;//right subarray start index
        
        // index compare: if left <= mid and right start <= right
        while (i <= mid && j <= right) {
            // right ele larger or equal to left array ele
            if (arr[i] <= arr[j]) {
                i++;
            } else {
                const temp = arr[j];
                let k = j;//help shift ele in right subarray
                while (k !== i) {
                    // shift
                    arr[k] = arr[k - 1];
                    k--;
                }
                //swap
                arr[i] = temp;
                i++;
                mid++;
                j++;
            }
        }
    }
    
  
    for (let currSize = 1; currSize < n; currSize *= 2) {
      for (let leftStart = 0; leftStart < n; leftStart += 2 * currSize) {
        // partion in every step
        const mid = Math.min(leftStart + currSize - 1, n - 1);
        const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
        merge(arr, leftStart, mid, rightEnd);
      }
    }
  
    return arr;
  }
  
  
//   const array = [12, 11, 13, 5, 6, 7];
//   const sortedArr = mergeSort(array);
//   console.log(sortedArr); // Sorted array
  

  
// I get some help from TA and Dhruv
// https://medium.com/karuna-sehgal/a-simplified-explanation-of-merge-sort-77089fe03bb2

[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=12047894&assignment_repo_type=AssignmentRepo)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

## Answer

In the mergeSort function, the outer loop iterates log₂(n) times (where 'n' denotes the array's size). This behavior comes from doubling the subarray sizes during each iteration.

The inner loop, in each iteration of the outer loop, runs a maximum of n/2 times because it partitions the array into subarrays of varying sizes.

The merge function is merging left and right subarrays, first to compare left and right elements on both sides, shift and swap elements as needed. In the worst case, the time complexity is O(n) since there might be a traverse of every element. 

So the total worst-case complexity of this merge sort is O(n^2 log n).

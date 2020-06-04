export const SORTING =
    [
        {
            id:1,
            name:"Bubble Sort",
            img:'bubblesort.png',
            detail:"Bubble sort algorithm starts from the first element and keeps on comparing the next element with the next element. If the next element is smaller than the current one, they both get swapped, otherwise the the round continues. In every round, one element reaches it's correct position. Therefore,if given array has n elements, it would take n-1 rounds for all the elements to reach their correct positions.",
            likes:0
        },
        {
            id:2,
            name:"Selection Sort",
            img:'selection.png',
            detail:"Selection sort works in a way that it reserves first element and compares the remaining elements with the first. If any of the remaining element is smaller than first, they both get swapped. After one round of camparison, the first element of array is shifted by one position and again, the similar procedure goes on.",
            likes:0
        },
        {
            id:3,
            name:"Counting Sort",
            img:'counting.png',
            detail:"The counting sort works in a way that it needs not to compare any element for sorting the array. Instead it first counts frequency of each element and stores in a seperate sequence. In the second array,it counts one by one that how many elements are smaller or equal to each element.  At last, it places each element at the position such that all elements smaller than it will come before it. The procedure goes on for every element. For instance, if you have sequence of [2,1,3]. It creates a new sequence whose index are the elements of previos array and will be sorted. The new array would then be [0,1,1,1]. Since,we do not have 0 in array. It's value is 0 in new array. The second step is to count how many numbers are smaller than or equal to particular element. The array will now look like [0,1,1,3]. The last step is to pick elements from the first array and place it at the suitable index in new array that will be the result. For instance, value 3 has 3 elements smaller or equal to it. It will be placed at index 2 of new array. Repeating this for all element will result in the sorted array-[1,2,3] ",
            likes:0
        },
        {
            id:4,
            name:"Quick Sort",
            img:'quicksort.png',
            detail:"The quick sort is another efficient algorithm that works on divide and conquer approach. It takes an element which is the pivot element and goes through the array again. The elements smaller than it are placed on left side of and the elements while larger on the right. The procedure goes on untill the array gets sorted. In each recursion or iteration, one correct element reaches the desired position. The pivot element that we chose can either be last element of array or the first. For examples, if we have an array [2,1,3,4,2], 2 is popped out and placed at postion such that the array becomes [2,1,2,3,4]. In other round ,the lower subarray [2,1] is passed and which becomes [1,2]. The final array then becomes [1,2,2,3,4] and the array gets sorted. Notice that we need not to change the elements of larger subarray since it's already sorted",
            likes:0
        },
        {
            id:5,
            name:"Brick Sort",
            img:'',
            detail:"The brick sort algorithm works in lot way similar to bubble sort except for that it makes two rounds inside the inner loop where it first sorts, for instance, all the even numbers and in other iteration,solves the odd numbers.The polynimial complexity of this algorithm is O(n^2). ",
            likes:0
        }
        
            ];
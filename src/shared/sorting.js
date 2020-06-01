export const SORTING =
    [
        {
            id:1,
            name:"Bubble Sort",
            detail:"Bubble sort algorithm starts from the first element and keeps on comparing the next element woth the next element. If the next element is smaller than the current one, they both gets swapped otherwise the the loop continues. In every round, one element reaches it's correct position. Therefore,if given array has n elements, it would take n-1 rounds for all the elements to reach their correct positions.",
            likes:null
        },
        {
            id:2,
            name:"Selection Sort",
            detail:"Selection sort works in a way that it reserves first element and compares the remaining elements with the first. If any of the remaining element is smaller than first, they both get swapped. After one round of camparison, the first element of array is shifted by one position and again, the similar procedure goes on.",
            likes:null
        },
        {
            id:3,
            name:"Counting Sort",
            detail:"The counting sort works in a way that it needs not to compare any element for sorting the array. Instead it first counts frequency of each element and stores in a seperate sequence. In the second array,it counts one by one that how many elements are smaller or equal to each element.  At last, it places each element at the position such that all elements smaller than it will come before it. The procedure goes on for every element. For instance, if you have sequence of [2,1,3]. It creates a new sequence whose index are the elements of previos array and will be sorted. The new array would then be [0,1,1,1]. Since,we do not have 0 in array. It's value is 0 in new array. The second step is to count how many numbers are smaller than or equal to particular element. The array will now look like [0,1,1,3]. The last step is to pick elements from the first array and place it at the suitable index in new array that will be the result. For instance, value 3 has 3 elements smaller or equal to it. It will be placed at index 2 of new array. Repeating this for all element will result in the sorted array-[1,2,3] ",
            likes:null
        }
            ];
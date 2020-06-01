export const SEARCHING =
    [
        {
            id: 1,
            name: "Binary Search",
            detail: "A binary search algorithm is widely used searching algorithm due to its less worst case complexity. It is a divid and conquer algorithm means that it divides a problem into many parts and individually solves it. A neccessary condition for this algorithm to work is that the given array should be sorted. This algorithm works well even with large numbers and large sized arrays. For instance, You have a list of 4 numbers - [1,4,2,3,7] and you want to find where does number 7 lies in the list. One alternative of this is the linear sort which may has to go through entire list to find certain element. On the other hand,if the array gets sorted and we first target the middle element, we can compare the desired element with the middle element. If the desired element is greater than the middle element, it will definitely be in the right side of the list. In this way, left list is skipped and also, our essential time gets saved.The process keeps on repeating iteratively or recursively untill the element is found. The worst case complexity of this algorithm is O(log n). "
        },
        {
            id: 2,
            name: "Linear Search",
            detail: "A linear search algorithms starts from the first index and compares each element with the desired key. If the value of both matches, it returns True else it continues the loop. It is to notice that this algorithm may take very long to find an element if this is placed at the end of the list and the sequence is very large. Binary search is always preferred over this algorithm. Suppose,you have a sequence [2,4,5,2] and you need to find 5. The algorithm will first compare 2 with 5. Since, the value doesn't match, it goes further and stops at index 2."
        }
    ];
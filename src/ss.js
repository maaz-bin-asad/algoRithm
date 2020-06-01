//Below is the implementation of binary search algorithm to proof 
//that given number is perfect square
const num=81
low=0
high=81
def binary_search(num,low,high){
    if low>high{
        return false
    }
    else{
        mid=parseInt(low+high/2)
        if(mid*mid==num){
            return true
        }
        else if(mid*mid>num){
            high=mid-1
            return binary_search(num,low,high)
        }
        else{
            low=mid+1
            return binary_search(num,low,high)
        }
    }
}
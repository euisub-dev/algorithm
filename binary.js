function BSearch(searchNum){
    const arr = [1,3,4,6,7,8,10,13,14];
    let right = arr.length - 1;
    let left  = 0, mid = 0;

    while(left <= right){
        mid = Math.floor((left + right) / 2);
        console.log(mid);
        if(arr[mid] === searchNum) return mid;

        if(arr[mid] > searchNum){
            right = mid - 1;
        }else{
            left  = mid + 1;
        }
    }

    return -1;
}


function Recursive(serchNum,left,right,arr){
    let mid = Math.floor((left+right) / 2);
    if(left <= right){
        if(arr[mid] === serchNum) return mid;

        if(arr[mid] > serchNum){
            return Recursive(serchNum,left,mid-1,arr);
        }else{
            return Recursive(serchNum,mid+1,right,arr);
        }
    }
    return -1;
}

const arr = [1,3,4,6,7,8,10,13,14];
const serchNum = 4;
let left = 0, right = arr.length - 1;

Recursive(serchNum,left,right,arr);
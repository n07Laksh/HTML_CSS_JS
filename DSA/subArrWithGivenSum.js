console.log("Sub Array With Given Sum");

class Solution 
{
    //Function to find a continuous sub-array which adds up to a given number.
    subarraySum(arr, n, s)
    {
        //your code here
        // arr[1,2,3,4,5,6,7,8,9,10];
        
        let first=0,last=0,flag=false, sum=0,res=[];
        for(let i = 0; i<n; i++){
            sum += arr[i];

            if(sum>=s){
                last = i;

                while(s<sum && first<last){
                    sum -= arr[first];
                    ++first;
                }
                if(sum === s){
                    res.push(first+1);
                    res.push(last+1);

                    flag=true;
                    break;
                }
            }

        }
        if(flag === false){
             res.push(-1);
        }
        return res;
    }
}
const obj = new Solution();
let res = obj.subarraySum([0,2,3,4,5,6,7,8,9],9,0);

// console.log(res);

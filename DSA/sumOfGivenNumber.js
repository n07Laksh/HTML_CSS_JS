var twoSum = function(nums, target) {
    let start=0,pos=1;
    let res = [];
 //    let val = nums[0];
 
    while(start < pos){
        console.log(nums[start] + nums[pos])
        let val = nums[start] + nums[pos];
        if(val === target){
            res.push(start);
            res.push(pos);
            break;
        }
        else{
            pos++; //2 3 4 5 //3 4 5 
            if(pos == nums.length){
                ++start;
                pos = start+1;
            }
        }
    }
    return res;
 };

 console.log(twoSum([-1,-2,-3,-4,-5],-8));

//  console.log(-3 + -5);
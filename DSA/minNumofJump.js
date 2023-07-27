console.log("Minimum Number of Jump");

let array = [5,4,3,2,6,1,6,3,3,3,3,3,1,3,3];
console.log(minJumps([1,2,3,4,5,6,7,8,9,10],10));
    function minJumps(arr,n){
        //code here
       let jump = 0;
       let curr = 0;
       let res = 0;
       //[5,4,3,2,6,1,6,3,3,3,3,3,1,3,3]
       for(let i=0; i<n-1; i++){ // 0 1 2 3 4
           res = Math.max(res,arr[i]+i);//0,1+0 = 1
                                        //1,2+1 = 3
                                        //3, 3+2 = 5
                                        //5, 4+3 = 7
                                        //7, 5+4 = 9
                                        //9, 6+5 = 11
                                        //11, 7+6 = 13
                                        //13, 8+7 = 15



                                        //5, 2+3 = 5
                                        //5, 6+4 = 10
                                        //10, 1+5 = 10
                                        //10, 6+6 = 12
                                        //12, 3+7 = 12;
                                        //12, 3+8 = 12;
                                        //11, 3+9 = 12;
                                        //12, 3+10 = 13;
                                        //13, 3+11 = 14;
                                        //14, 1+12 = 14;
                                        //14, 3+13 = 16;
            // console.log(res)
              
           if(curr == i){
               curr = res; // 1 3 7 15
               jump++; //1 2 3
           }
       }
       
       if(curr >= (n-1)){
           return jump;
       }else {
           return -1;
       }
    }

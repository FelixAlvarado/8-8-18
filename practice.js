// chaotic years skip line question

function minimumBribes(q) {

    let result = 0; 
    let switched = false;
        for(let j = 0; j < q.length; j++) {
            let number = j + 1;
            if (number + 2 < q[j]) {
                console.log('Too chaotic');
                return;
            }
        }
        
        for (let i = 0; i < q.length; i++){
            let number = i + 1; 
    
            if (q[i] > number){
                result += (q[i] - number);
            } else if (q[i] < number - 2){
                result += 1;
            }
    
        }
        console.log(result);
    
    
    }
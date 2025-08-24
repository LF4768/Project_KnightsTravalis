let arr = []

for(let j = 0; j <= 7; j++) {
    let arr1 = [];
    for(let i = 0; i <= 7; i++) {
        arr1.push(0)
    }
    arr.push(arr1)
}

function validity(arr) {
    let x = arr[0]
    let y = arr[1]
    let returnArr = []
    if (x - 2 >= 0 &&   y - 1 >= 0) {
        returnArr.push([x-2,y-1])
    }
    
    if (x - 1 >= 0 &&   y - 2  >= 0) {
        returnArr.push([x-1,y-2])
    }
    
    if (x + 2 <= 7 &&   y - 1 >= 0) {
        returnArr.push([x+2,y-1])
    }
    
    if (x + 1 <= 7 &&   y - 2 >= 0) {
        returnArr.push([x+1,y-2])
    }
    
    if (x + 2 <= 7 &&   y + 1 <= 7) {
        returnArr.push([x+2,y+1])
    }
    
    if (x + 1 <= 7 &&   y + 2 <= 7) {
        returnArr.push([x+1,y+2])
    }
    
    if (x - 2 >= 0 &&   y + 1 <= 7) {
        returnArr.push([x-2,y+1])
    }

    if (x - 1 >= 0 &&   y + 2 <= 7) {
        returnArr.push([x-1,y+2])
    }
    return returnArr
}

let queue = []

function travel(arr1) {
    queue.push(arr1)
    while(queue.length != 0) {
        let move = queue.shift()
        if(!arr[move[0]][move[1]]){
            arr[move[0]][move[1]] = 1
            let moves = validity(move)
            for(let i =0; i < moves.length; i++) {
                queue.push(moves[i])
            }
        }
    }    
}

travel([0,0])
// console.log(arr)
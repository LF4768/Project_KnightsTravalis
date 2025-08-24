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

function knightMoves(arr1,arr2) {
    let parentArr = structuredClone(arr)
    queue.push([arr1,0])
    let dist = 0
    let childQueue = []
    while(queue.length != 0) {
        let move = queue.shift()
        if(JSON.stringify(move[0]) == JSON.stringify(arr2)) { 
            arr[move[0][0]][move[0][1]] = 1
            queue = move
            break
        } 

        if(!arr[move[0][0]][move[0][1]]){
            arr[move[0][0]][move[0][1]] = 1
            let moves = validity(move[0])
            for(let i =0; i < moves.length; i++) {
                if(parentArr[moves[i][0]][moves[i][1]] == 0 ) {
                    parentArr[moves[i][0]][moves[i][1]] =  move[0]  
                }
                childQueue.push([moves[i], dist])
            }
        }
        if(queue.length == 0) {
            dist++
            queue = childQueue
            childQueue = []
        }
    }    
    let movement = []
    let move = queue[0]
    while(JSON.stringify(move) != JSON.stringify(arr1)) { 
        movement.push(move)
        move = parentArr[move[0]][move[1]]
    } 
    movement.push(arr1) 
    console.log("You made it in " + (queue[1] + 1) + " moves!, Here's your path")
    for(let i = movement.length - 1; i >= 0; i--) {
        console.log(movement[i])
    }

}

knightMoves([7,1],[0,3])
// console.log(arr)

function ArrayMethods(){


const array = [1,2,3,4,5,6,7,8,9,10]


const oddNumbers = array.filter((number)=> number % 2 !== 0 )


const designOddNumbers = oddNumbers.join('-->')




class Queue {
    constructor() {
        this.queue = []
    }


// add a number to the back of the array
enqueue(number) {
 return this.queue.push(number)
}


// remove the first index of this array
dequeue() {
    this.queue.shift()
}


// view where the queue currently is
peek() {
    return this.queue[0]
}

// view the length of the queue
length() {
    return this.queue.length
}



}


// Add all Odd numbers to the queue 
// Remove all numbers that 

function runQueue() {
    let newQueue = new Queue

    oddNumbers.forEach(num => newQueue.enqueue(num))
    newQueue.dequeue() 
    newQueue.peek()
    newQueue.length() 
    newQueue.dequeue() 



    console.log(newQueue)
    
}






runQueue();











return (



    <div>
        <h1>Hello World!</h1>
        <li>{designOddNumbers}</li>
    </div>
)






}


export default ArrayMethods;
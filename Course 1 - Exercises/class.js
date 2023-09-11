function addThisAndThat(x,y) {
    return this + x + y;
}

console.log(addThisAndThat.call(3, 5, 4));

let a = { x: 100, y: 200}

console.log("With a " + addThisAndThat.call(a, 400, 50))
a.add = addThisAndThat
console.log(a.add(400,500));

// old-fashioned constructor
function BOld(x,y) {
    this.x = x;
    this.y = y;
    this.toString = function () { return this.x + ' ' + this.y}
}

let b = new BOld(100, 200);
console.log(b.toString());

// new-fashioned constructor
class BNew {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString = function () { return this.x + ' ' + this.y; }
}

b = new BNew(100,200);
console.log(b.toString());


// factory function
function createObject2(x,y) {
    function getX() { return x}
    function setX(_x) { x = _x}
    const getY = () => y
    function setY(_y) { y = _y}
    function total() { return x + y}
    return { getX, setX, getY, setY, total }
}

let obj = createObject2(11, 47)
console.log(obj);

// Output
// {
//     getX: [Function: getX],
//     setX: [Function: setX],
//     getY: [Function: getY],
//     setY: [Function: setY],
//     total: [Function: total]
// }

console.log(obj.getX())
obj.setX(110)
console.log(obj.total())

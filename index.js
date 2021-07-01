function evalFirstExcercise(input) {
    let toRet = "";
    let split = input.split(/[A-Z]:/);
    let commandLines = split.filter((e) => e.length > 3);
    commandLines.forEach((command, index) => {
        const char = String.fromCharCode(65 + index);
        const commandString = command.substring(command.indexOf("(") + 1, command.indexOf(")"));
        toRet += `${char}: ${eval(commandString)}\n`
    });

    return toRet;
}

function checkSum(nums) {
    if (!Array.isArray(nums)) {
        throw "Parameter is not an array";
    }

    return nums.
        filter(n => !isNaN(n)). //filter non number values
        map(n => Math.pow(n, 2)).reduce((number, currentValue) => currentValue += number);
}

let waitMinutes = (minutes) => {
    return new Promise(resolve => {
        setTimeout(resolve, minutes * 60 * 1000)
    })
}

let getAges = (input) => {
    return input.reduce((array, accumulator) => accumulator.concat(array), []).filter(n => n >= 0).map(n => ({ age: n }))
}

console.log("--------------1--------------");
console.log(evalFirstExcercise("A: console.log(+'2' + 3)B: console.log('2' + 3)C: console.log(!![])D: console.log(!!0)E: console.log(null == undefined)F: console.log(1 || 2)G: console.log(3 && 5)H: console.log(false && 5)I: console.log(null === undefined)J: console.log(NaN === NaN)"))

console.log("--------------2--------------");
console.log(checkSum([1, 2, "x", 4]));

console.log("--------------3--------------");
console.log("!! se používá pro převedení hodnoty na booleovskou hodnotu");
console.log("!! pro hodnoty false, null, undefined, \"\", 0, NaN je false, pro ostatní true");

console.log("--------------4--------------");
(async () => {
    console.log('prvni vypis');
    await waitMinutes(0.1);
    console.log('tento vypis ze zobrazi za 0.1 minuty');
})();

console.log("--------------5--------------");
const o1 = { x: 1, y: 2, z: 3 };
const o2 = { x: 11, ...o1, z: 33 }; //jako x se použije o1.x, protože "o2.x" je jím přepsáno při destrukturalizaci o1
console.log('x=', o2.x);
console.log('y=', o2.y);
console.log('z=', o2.z);

console.log("--------------6--------------");
const arr = [[12, 5, -3], [44, 55], [-1]];
console.log(getAges(arr)); // [{ age: 12 }, { age: 5 }, { age: 44 }, { age: 55 }];

console.log("--------------7--------------");
console.log([1, -2, -0, 2, 0, -1].sort());


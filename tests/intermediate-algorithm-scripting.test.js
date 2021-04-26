const { sumAll } = require("../src/intermediate-algorithm-scripting");

test("Sum All Numbers in a RangePassed.", () => {
    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
});

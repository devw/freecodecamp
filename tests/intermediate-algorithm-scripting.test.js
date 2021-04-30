const {
    sumAll,
    diffArray,
} = require("../src/intermediate-algorithm-scripting");

test("Sum All Numbers in a RangePassed", () => {
    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
    expect(sumAll([1, 4])).toBe(10);
    expect(sumAll([5, 10])).toBe(45);
    expect(sumAll([10, 5])).toBe(45);
});

test("Diff Two ArraysPassed", () => {
    // https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-numbers-in-a-range
    expect(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toMatchObject([4]);
    expect(
        diffArray(
            ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
            ["diorite", "andesite", "grass", "dirt", "dead shrub"]
        )
    ).toMatchObject(["pink wool"]);
});

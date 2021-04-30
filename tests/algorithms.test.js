const { sym, updateInventory } = require("../src/algorithms");

test("Find the Symmetric Difference", () => {
    // https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toMatchObject([3, 4, 5]);
    let out = [1, 4, 5];
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toMatchObject(out);
});

test("Inventory Update", () => {
    // https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/inventory-update
    const arr1 = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"],
    ];
    const arr2 = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"],
    ];
    const res = updateInventory(arr1, arr2);
    const out = [
        [88, "Bowling Ball"],
        [2, "Dirty Sock"],
        [3, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [5, "Microphone"],
        [7, "Toothpaste"],
    ];
    expect(res).toMatchObject(out);
});

const { sym } = require("../src/algorithms");

test("Find the Symmetric Difference", () => {
    // https://www.freecodecamp.org/learn/coding-interview-prep/algorithms/find-the-symmetric-difference
    expect(sym([1, 2, 3], [5, 2, 1, 4])).toMatchObject([3, 4, 5]);
    let out = [1, 4, 5];
    expect(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toMatchObject(out);
});

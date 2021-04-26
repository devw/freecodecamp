exports.sumAll = (arr) => {
    const [min, max] = [Math.min(...arr), Math.max(...arr)];
    return [...Array(max - min + 1)].reduce((a, c, i) => a + i + min, 0);
};

exports.diffArray = (arr1, arr2) =>
    arr1.concat(arr2).filter((e) => !arr1.includes(e) || !arr2.includes(e));

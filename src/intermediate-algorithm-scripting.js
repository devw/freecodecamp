exports.sumAll = (arr) => {
    const [min, max] = [Math.min(...arr), Math.max(...arr)];
    return [...Array(max - min + 1)].reduce((a, c, i) => a + i + min, 0);
};

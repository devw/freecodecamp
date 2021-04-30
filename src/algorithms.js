exports.sym = (...args) => {
    const onFilter = (a1, a2) => (e) => !a1.includes(e) || !a2.includes(e);
    const res = args.reduce((a, c) => a.concat(c).filter(onFilter(a, c)));
    return [...new Set(res)].sort();
};

exports.updateInventory = (arr1, arr2) => {
    const arr2obj = (a, c) => ({ ...a, [c[1]]: c[0] });
    const keys = [...new Set([...arr1, ...arr2].map((e) => e[1]))].sort();
    const [obj1, obj2] = [arr1, arr2].map((e) => e.reduce(arr2obj, {}));
    const sum = (a, c) => [...a, { [c]: (obj1[c] || 0) + (obj2[c] || 0) }];
    const sumObj = keys.reduce(sum, []);
    return sumObj.map((e) => Object.entries(e)[0].reverse());
};

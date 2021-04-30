exports.sym = (...args) => {
    const onFilter = (a1, a2) => (e) => !a1.includes(e) || !a2.includes(e);
    const res = args.reduce((a, c) => a.concat(c).filter(onFilter(a, c)));
    return [...new Set(res)].sort();
};

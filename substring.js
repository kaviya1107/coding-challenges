function substring(str) {
    var subset = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            subset.push(str.substring(i, j));
        }
    }
    return subset;
}
console.log(substring("kavi"));

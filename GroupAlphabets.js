// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.
//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}
function GroupAlpha(strings) {
    var grouped = {};
    for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
        var str = strings_1[_i];
        var firstletter = str.charAt(0).toLowerCase();
        if (!grouped[firstletter]) {
            grouped[firstletter] = [];
        }
        grouped[firstletter].push(str);
    }
    return grouped;
}
var res = GroupAlpha(["kavi", "jemi", "nithu"]);
console.log(res);

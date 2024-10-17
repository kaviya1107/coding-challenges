// Write a function that takes an array of strings as argument. Group those strings by their first letter.
//  Return an object that contains properties with keys representing first letters.
//   The values should be arrays of strings containing only the corresponding strings.


//    For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
//    { a: ['Alf', 'Alice'], b: ['Ben']}


function GroupAlpha(strings: string[]): { [key: string]: string[] } {
    const grouped = {};
    for (const str of strings) {
        const firstletter = str.charAt(0).toLowerCase();
        if (!grouped[firstletter]) {
            grouped[firstletter] = [];
        }
        grouped[firstletter].push(str);
    }
    return grouped;
}
const res = GroupAlpha(["karthi","kavi", "jemi", "nithu"]);
console.log(res);
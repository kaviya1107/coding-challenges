// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
// Return the number of consistent strings in the array words.
// Example 1:
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:
// Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// Output: 7
// Explanation: All strings are consistent.
// Example 3:
// Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// Output: 4
// Explanation: Strings "cc", "acd", "ac", and "d" are consistent.
function countConsistentStrings(allowed, words) {
    var allowedSet = new Set(allowed);
    var count = 0;
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        var isConsistent = true;
        for (var _a = 0, word_1 = word; _a < word_1.length; _a++) {
            var char = word_1[_a];
            if (!allowedSet.has(char)) {
                isConsistent = false;
                break;
            }
        }
        if (isConsistent) {
            count++;
        }
    }
    return count;
}
console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"]));
console.log(countConsistentStrings("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"]));

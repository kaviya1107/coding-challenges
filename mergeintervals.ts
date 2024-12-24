
//mergeIntervals([[1, 3], [2, 4], [5, 7], [6, 8]]);
//Output: [[1, 4], [5, 8]]
// Explanation: The first two intervals [1, 3] and [2, 4] overlap, so they are merged into [1, 4]. The next two intervals [5, 7] and [6, 8] also overlap, so they are merged into [5, 8].
function mergeIntervals(intervals: number[][]): number[][] {
    if (intervals.length === 0) {
      return [];
    }
    intervals.sort((a, b) => a[0] - b[0]);
    let merged: number[][] = [];
    merged.push(intervals[0]);
    for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      const lastMerged = merged[merged.length - 1];
      if (current[0] <= lastMerged[1]) {
        lastMerged[1] = Math.max(lastMerged[1], current[1]);
      } else {
        merged.push(current);
      }
    }
    return merged;
  }
  console.log(mergeIntervals([[1, 3], [2, 4], [5, 7], [6, 8]]));

  
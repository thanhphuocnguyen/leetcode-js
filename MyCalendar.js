var MyCalendar = function () {
  this.books = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  let left = 0;
  let right = this.books.length;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    const [st, ed] = this.books[mid] || [Infinity, Infinity];

    if (st === start) {
      return false;
    }

    if (st < end && ed > start) {
      return false;
    }
    if (start >= ed) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  this.books.splice(left, 0, [start, end]);
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

var obj = new MyCalendar();

[[], [10, 20], [15, 25], [20, 30]].forEach((element) => {
  if (element.length === 0) {
    return;
  }
  console.log(obj.book(element[0], element[1]));
});

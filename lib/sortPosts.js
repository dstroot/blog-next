export function SortByDate(arr) {
  return arr.sort((a, b) => {
    var _ad = new Date(a.date).valueOf();
    var _bd = new Date(b.date).valueOf();
    return _bd - _ad;
  });
}

export function SortByViews(arr) {
  return arr.sort((a, b) => {
    var _av = a.viewCount;
    var _bv = b.viewCount;
    return _bv - _av;
  });
}

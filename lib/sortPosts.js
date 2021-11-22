export function SortByDate(arr) {
  return arr.sort((a, b) => {
    var _ad = new Date(a.publishedAt).valueOf();
    var _bd = new Date(b.publishedAt).valueOf();
    return _bd - _ad;
  });
}

export function SortByViews(arr) {
  return arr.sort((a, b) => {
    var _av = a.views;
    var _bv = b.views;
    return _bv - _av;
  });
}
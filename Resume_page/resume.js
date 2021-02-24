// debugger
var collapseElementList = [].slice.call(document.querySelectorAll('.collapse'))
console.log(collapseElementList)
collapseElementList.map(function (collapseEl) {
  return new bootstrap.Collapse(collapseEl)
})


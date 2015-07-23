window.onload = function() {
  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = file_list[i]; i++) {
    output.push('<li><strong>', escape(f.split('.')[0]), '</strong>', '</li>');
  }
  document.getElementById('subheader-menu').innerHTML = '<ul>' + output.join('') + '</ul>';
}

window.onload = function() {
  // files is a FileList of File objects. List some properties.
  var output = [];
  for (var i = 0, f; f = file_list[i]; i++) {
    var formatted_date = f.split('.')[0].replace(/-/g,'/').split('/');
    formatted_date = [formatted_date[1],formatted_date[2],formatted_date[0]];
    output.push('<li href="test_data/', escape(f),'" onclick="load_graph(this)">', escape(formatted_date.join('/')), '</li>');
  }
  document.getElementById('subheader-menu').innerHTML = '<ul>' + output.join('') + '</ul>';

  $('#subheader-menu ul li').each(function(i) {
    $(this).delay((i++) * 50).fadeTo(500, 1);
  })
}

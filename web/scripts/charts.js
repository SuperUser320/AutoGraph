var chart = c3.generate({
  bindto: '#graph1',
  data: {
    url: 'test_data/2015-07-19.csv',
    type: 'line',
    x: 'Time',
    xFormat: '%H:%M:%S',
    axes: {
      Engine_RPM: 'y2'
    }
  },
  point: {
    show: false
  },
  axis: {
    x: {
        type: 'timeseries',
        tick: {
            format: '%H:%M:%S'
        }
    },
    y2: {
      show: true
    }
  },
  size: {
    height: 700
  },
  subchart: {
      show: true
  }
});

function load_graph (link_obj) {
  var graph_url = link_obj.getAttribute("href");
  chart.load({
        url: graph_url
    });
}

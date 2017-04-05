$('#calendario').daterangepicker({
    "timePicker": true,
    "ranges": {
      'Hoy': [moment().subtract(24, 'hours'), moment()],
      'Ayer': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days')],
      'Últimos 7 días': [moment().subtract(6, 'days'), moment()],
      'Últimos 30 días': [moment().subtract(29, 'days'), moment()],
      'Este mes': [moment().startOf('month'), moment().endOf('month')],
      'Mes anterior': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    "alwaysShowCalendars": true,
    "startDate": moment().subtract(29, 'days'),
    "endDate": moment()
}, function(start, end, label) {
  "#2017-03-01T23:30:18"
  console.log([moment().subtract(24, 'hours'), moment(),moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days')]);
  run(start.format('YYYY-MM-DDTHH:mm:ss'),end.format('YYYY-MM-DDTHH:mm:ss'));
});

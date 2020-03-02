
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('locations').insert([
       
        {id: 1, name: 'Makara', activity_id: 2, widget: "https://www.trailforks.com/widgets/region_map/?rid=5563&w=800px&h=400px&activitytype=1&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 2, name: 'Polhill', activity_id: 2, widget: "https://www.trailforks.com/widgets/region_map/?rid=5247&w=800px&h=400px&activitytype=1&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 3, name: 'Mt Vic', activity_id: 2, widget: "https://www.trailforks.com/widgets/region_map/?rid=5724&w=800px&h=400px&activitytype=1&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 4, name: 'Wainuiomata', activity_id: 3, widget: "https://www.trailforks.com/widgets/region_map/?rid=13384&w=800px&h=400px&activitytype=6&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 5, name: 'Belmont', activity_id: 3, widget: "https://www.trailforks.com/widgets/region_map/?rid=5471&w=800px&h=400px&activitytype=6&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 6, name: 'Mt Vic', activity_id: 3, widget: "https://www.trailforks.com/widgets/region_map/?rid=5724&w=800px&h=400px&activitytype=6&maptype=terrain&trailstyle=difficulty&controls=0&list=0&layers=labels,poi,polygon,directory,region&hideunsanctioned=0&routeids=null&z=&lat=&lon="},
        {id: 7, name: 'Lyall Bay', activity_id: 1, widget: "//www.surf-forecast.com/breaks/Lyall-Bay/forecasts/feed/m"}, 
        {id: 8, name: 'Houghton Bay', activity_id: 1, widget: "//www.surf-forecast.com/breaks/Houghton-Bay/forecasts/widget/m"}, 
        {id: 9, name: 'Breaker Bay', activity_id: 1, widget: "//www.surf-forecast.com/breaks/Breaker-Bay/forecasts/widget/m"}, 
        
      ]);
    });
};

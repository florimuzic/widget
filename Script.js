  // retrieve an instance of the date object and its UTC hour
  const date = new Date();
  const utcHours = date.getUTCHours(); // 0-23 range

  // create the geojson object necessary for a geoPath
  const countries = topojson.feature(json, json.objects.countries);
  // create a projection and rotate it as follows
  // - enough degress to have the map indicate where is noon (+ 180 for the fact that midnight is already at the bottom) 
  // - 90 degrees to have Antartica centered on the screen
  const projection = d3.geoAzimuthalEquidistant().rotate([utcHours * 360 / 24 + 180, 90, 0]).scale(size / 7);
  const geoPath = d3.geoPath().projection(projection);

  // include a path element for each country
  group
    .append('g')
    .attr('transform', `translate(${-size / 2} -15)`)
    .selectAll('path')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('d', geoPath)
    // use the position in the continentsArray array to determine a different hue for each continent
    .attr('fill', (d, i) => `hsl(${360 / continentsArray.length * continentsArray.findIndex(continent => continent === continents[d.id])}, 90%, 80%)`);

});

var plotBarChart = new function (data) {

    //console.log(ParticipationByYear);
    //console.log(data);
    // Add X axis
    var x = d3.scaleLinear()
      .domain([0, 800])
      .range([ 1, 300]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    var y = d3.scaleBand()
      .range([ 0, height ])
      .domain( data.map(function(d) { return d.Country; }) )
      .padding(.3);
    svg.append("g")
      .call(d3.axisLeft(y))

   // Color scale
   var color = d3.scaleOrdinal()
                  .domain(["SubRegion", "EAG", "Non-EAG" ])
                  .range([ "#440154ff", "#21908dff", "#fde725ff"])
    //Bars
    svg.selectAll("myRect")
      .data(data)
      .enter()
      .append("rect")
      .transition()
      .duration(800)
      .attr("x", x(0) )
      .attr("y", function(d) { return y(d.Country); })
      .attr("width", function(d) { return x(+d.NumberOfParticipants); })
      .attr("height", y.bandwidth() )
      .attr("fill", "#69b3a2")
});

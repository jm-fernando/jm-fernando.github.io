// Setting the dimensions and margins of the graph
const margin2 = {top: 10, right: 30, bottom: 20, left: 50},
    width2 = 460 - margin2.left - margin2.right,
    height2 = 400 - margin2.top - margin2.bottom;

// Appending the svg object to the body of the page
const svg2 = d3.select("#page-3")
    .append("svg")
    .attr("width", width2 + margin2.left + margin2.right)
    .attr("height", height2 + margin2.top + margin2.bottom)
    .append("g")
    .attr("transform",`translate(${margin2.left},${margin2.top})`);

//Creating legend
svg2.append("circle").attr("cx",80).attr("cy",60).attr("r", 6).style("fill", "#FFC72C")
svg2.append("circle").attr("cx",220).attr("cy",60).attr("r", 6).style("fill", "#1D428A")
svg2.append("text").attr("x", 90).attr("y", 60).text("Coach Jackson").style("font-size", "12px").attr("alignment-baseline","middle")
svg2.append("text").attr("x", 230).attr("y", 60).text("Coach Kerr").style("font-size", "12px").attr("alignment-baseline","middle")

//Creating tooltip
const mjvsskortg_tooltip = d3.select("#page-3")
    .append("mjvsskortg_tooltip")
    .attr("class", "tooltip")
    .style("opacity", 0);

//Creating title for page
svg2.append("text")
    .attr("transform", "translate(-10, -20)")
    .attr("x", 60)
    .attr("y", 50)
    .attr("font-size", "18px")
    .text("Team Offensive Rating in First 3 Seasons")



// Parse the Data
d3.csv("js/data/mj_vs_sk_ortg.csv").then(function(data) {

    // List of subgroups / header of the csv files
    const subgroups2 = data.columns.slice(1)

    // List of groups / value of the first column called group
    const groups2 = data.map(d => d.season)

    console.log(groups2)

    // Add X axis
    const x2 = d3.scaleBand()
        .domain(groups2)
        .range([0, width2])
        .padding([0.2])
    svg2.append("g")
        .style("font", "14px times")
        .attr("transform", `translate(0, ${height2})`)
        .call(d3.axisBottom(x2).tickSize(0));

    // Add Y axis
    const y2 = d3.scaleLinear()
        .domain([80, 130])
        .range([height2, 20 ]);
    svg2.append("g")
        .style("font", "14px times")
        .call(d3.axisLeft(y2));

    // Another scale for subgroup position
    const xSubgroup2 = d3.scaleBand()
        .domain(subgroups2)
        .range([0, x2.bandwidth()])
        .padding([0.1])

    // Color scale
    const color2 = d3.scaleOrdinal()
        .domain(subgroups2)
        .range(['#FFC72C','#1D428A'])

    // Show the bars and implement tooltip
    svg2.append("g")
        .selectAll("g")
        
        // Enter in data = loop group per group
        .data(data)
        .join("g")
        .attr("transform", d => `translate(${x2(d.season)}, 0)`)
        .selectAll("rect")
        .data(function(d) { return subgroups2.map(function(key) { return {key: key, value: d[key]}; }); })
        .join("rect")
        .attr("x", d => xSubgroup2(d.key))
        .attr("y", d => y2(d.value))
        .attr("width", xSubgroup2.bandwidth())
        .attr("height", d => height2 - y2(d.value))
        .attr("fill", d => color2(d.key))
        .on("mouseover", (event, d) => {
            mjvsskortg_tooltip.transition()
                .duration(200)
                .style("opacity", .9);
            mjvsskortg_tooltip.html(`${d.value}`)
                .style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px");
        })
        .on("mouseout", _ => {
            mjvsskortg_tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        })
        .on("mousemove", event => {
            mjvsskortg_tooltip.style("left", (event.pageX + 10) + "px")
                .style("top", (event.pageY - 20) + "px")
        });



})

	/*
		Javascript called after page load.
		CSV data has been compilied before hand and is specified in each visual.
	*/


	//1st visual - created using Dimple library - ref #visA
	var svg1 = dimple.newSvg("#visA", 800, 600);
    d3.csv("data/age.csv", function(data){
        var chart = new dimple.chart(svg1, data);
        x = chart.addCategoryAxis("x", "Age Group");
        x.addOrderRule(["0-15", "15-30", "30-45", "45-60", "more than 60"]);
        chart.addMeasureAxis("y", "Survival Rate");
        chart.addSeries(null,dimple.plot.scatter);
        chart.addSeries(null,dimple.plot.line);
        svg1.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Age");

        chart.draw();
    }); 


	//2nd visual - created using Dimple library - ref #visB
    var svg2 = dimple.newSvg("#visB", 800, 600);
    d3.csv("data/companion.csv", function(data){
		var chart = new dimple.chart(svg2, data); // base Dimple Chart
        x = chart.addCategoryAxis("x", "Alone/Not Alone"); // X-Axis
        chart.addMeasureAxis("y", "Survival Rate"); // Y-Axis
        chart.addSeries(null, dimple.plot.bar);
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Comparing those who were traveling alone to those who were not");
        
		chart.draw();
    });

	
	//3rd visual - created using Dimple library - ref #visC
    var svg3 = dimple.newSvg("#visC", 800, 600);
    d3.csv("data/class-sex.csv", function(data){
        var chart = new dimple.chart(svg3, data);
        chart.addCategoryAxis("x", ["Class"]);
        chart.addMeasureAxis("y", "Survival Rate");
        chart.addSeries("Sex", dimple.plot.bar);
        svg3.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Class");
		chart.addLegend(200, 110, 510, 100, "right");
    
		chart.draw();
    });    

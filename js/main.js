


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


  
    var svg2 = dimple.newSvg("#visB", 800, 600);
    d3.csv("data/companion.csv", function(data){
        var chart = new dimple.chart(svg2, data);
        x = chart.addCategoryAxis("x", "Alone/Not Alone");
        chart.addMeasureAxis("y", "Survival Rate");
        chart.addSeries(null, dimple.plot.bar);
        svg2.append("text")
         .attr("x", chart._xPixels() + chart._widthPixels() / 2)
         .attr("y", chart._yPixels() - 20)
         .style("text-anchor", "middle")
         .style("font-weight", "bold")
         .text("Survival Rate: Comparing those who were travelling alone to those who were not");
        
      chart.draw();
    });

    var svg3 = dimple.newSvg("#visC",800, 600);
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
    //chart.addLegend(65, 28, 510, 20, "right");
    chart.draw();
    });    

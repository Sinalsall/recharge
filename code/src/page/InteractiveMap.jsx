
import "leaflet/dist/leaflet.css";
import React, { useState } from "react";


function InteractiveMap() {
  const [activeIframe,setActiveIframe] =useState(0);
  const iframeUrls= [
    "qgis2web_2025_08_19-17_02_26_291282\\index.html",
    "Web Map\\Curah Hujan\\qgis2web_2025_08_20-00_40_00_086360\\index.html",
    "Web Map\\Drain Density\\qgis2web_2025_08_20-00_59_25_610735\\index.html",
    "Web Map\\Jenis Tanah\\qgis2web_2025_08_20-01_02_49_900079\\index.html",
    "Web Map\\LST\\qgis2web_2025_08_20-00_53_09_223397\\index.html",
    "Web Map\\Overlay\\qgis2web_2025_08_19-23_21_03_822955\\index.html"
  ];
  const legendsData = [

    {
      title: "Clean Water Demand Index",
      items: [
        { color: "#b547e5ff", label: "Very Low Demand" },
        { color: "#77d8dfff", label: "Low Demand" },
        { color: "#90fb1eff", label: "Moderate" },
        { color: "#eef773ff", label: "High Demand" },
        { color: "#f059b9ff", label: "Very High Demand" }
      ]
    },

    {
      title: "Curah Hujan (Rainfall)",
      items: [
        { color: "#fb2c2cff", label: "Very Low" },
        { color: "#f8a20eff", label: "Low" },
        { color: "#fff155ff", label: "Medium" },
        { color: "#b2f894ff", label: "High" },
        { color: "#65ae29ff", label: "Very High" }
      ]
    },

    {
      title: "Drain Density",
      items: [
        { color: "#121111ff", label: "Very Low" },
        { color: "#1961f0ff", label: "Low" },
        { color: "#87fd70ff", label: "Medium" },
        { color: "#f3e13aff", label: "High" },
        { color: "#fd9711ff", label: "Very High" }
      ]
    },

    {
      title: "Jenis Tanah (Soil Type)",
      items: [
        { color: "#f91212ff", label: "Dystric Flusivols" },
        { color: "#fdf0bfff", label: "Dystric Nitosols" },
      ]
    },

    {
      title: "Land Surface Temp.",
      items: [
        { color: "#121111ff", label: "Very Low" },
        { color: "#1961f0ff", label: "Low" },
        { color: "#87fd70ff", label: "Medium" },
        { color: "#eaf921ff", label: "High" },
        { color: "#fd9711ff", label: "Very High" }
      ]
    },

    {
      title: "Injection Suitability",
      items: [
        { color: "#003ebbff", label: "Not Potential" },
        { color: "#3bc319ff", label: "Less Potential" },
        { color: "#be8754ff", label: "Potential" },
        { color: "#7dffeeff", label: "Very Potential" },

      ]
    }
  ];
   const currentLegend = legendsData[activeIframe];

  return (
    <>
    <div>
      <ul className="map-button-holder">
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(0)}>Clean Water Demand Index</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(1)}>Rainfall</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(2)}>Drain Density</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(3)}>Soil Type</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(4)}>LST</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(5)}>Injection Suitability Index</button></li>
      </ul>
    
    
    </div>
    <div className="map-container">
      <div className="legend-container">
          <h4 className="legend-title">{currentLegend.title}</h4>
          {currentLegend.items.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color-box"
                style={{ backgroundColor: item.color }}
              ></span>
              <span className="legend-label">{item.label}</span>
            </div>
          ))}
        </div>
      <iframe
    src={iframeUrls[activeIframe]}
    className ="interactive-map"
    title="Interactive Map"
    />
    </div>
    
    </>
  );
}

export default InteractiveMap;


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

  return (
    <>
    <div>
      <ul className="map-button-holder">
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(0)}>Clean Water Demand Index</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(1)}>Curah Hujan</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(2)}>Drain Density</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(3)}>Jenis Tanah</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(4)}>LST</button></li>
      <li className="map-li"><button className="map-toggle" onClick={()=>setActiveIframe(5)}>Injection Suitability Index</button></li>
      </ul>
    
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

export default function Information(){
    return(
        <>
        <h1>How We Help</h1>
        <div className="info-container">
            <img src="src\assets\penjelasan1.jpg"  className="gambar-info"/>
            <div className="info-paragraph">
                <h4>
                    What RECHARGE is
                </h4>
                <p>
                    RECHARGE is a smart water program for Jakarta that injects pre-treated water into suitable aquifers and distributes non-potable water for everyday uses. It blends engineering and equity: managed aquifer recharge (MAR) to build resilience, plus neighborhood-level water access where the need is highest.
                </p>
                <h4>
                    Why Jakarta needs it
                </h4>
                <p>
                    <ul>
                        <li>
                            Sinking ground + rising seas: Research shows groundwater extraction is a major driver of land subsidence in Jakarta
                        </li>
                        <li>
                            Unreliable surface storage & intense rain: Climate variability brings long dry spells and then cloudbursts; storing water underground cuts evaporation and helps control urban flooding.
                        </li>
                        <li>
                            Coastal aquifer stress: MAR and targeted freshwater barriers are proven tools to curb seawater intrusion into coastal aquifers.
                        </li>
                    </ul>
                </p>
                <h4>
                    How RECHARGE works 
                </h4>
                <p>
                    <ol>
                        <li>
                            Capture & pre-treat (screening, settling/filtration).
                        </li>
                        <li>
                            Inject via wells at mapped priority sites (designed to avoid rivers and sensitive zones).
                        </li>
                        <li>
                            Monitor & protect (pH, turbidity/TSS, EC/TDS, flow, pressure, groundwater levels) with real-time alarms to prevent clogging and safeguard aquifers
                        </li>
                        <li>
                            Distribute non-potable water locally (toilets, cleaning, irrigation), reducing pressure on the piped-water network and private pumping
                        </li>
                    </ol>
                </p>
                <h4>
                    What makes it responsible
                </h4>
                <ul>
                    <li>
                        Standards-based: We follow internationally recognized MAR guidelines that emphasize protecting human health and environmental values.
                    </li>
                    <li>
                        Not waste disposal: MAR stores fit-for-purpose water under controlled conditions. “It is not a method for waste disposal.” 
                    </li>
                    <li>
                        Evidence-led siting: Locations are chosen using multi-criteria analysis (hydrologic potential, subsurface safety, infrastructure readiness, and social equity). 
                    </li>
                    <li>
                        Transparent operations: Live dashboards show well status and water-quality indicators, with automatic safeguards when thresholds are exceeded (e.g., high turbidity). 
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}
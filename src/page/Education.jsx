import React,{useState} from 'react'
export default function Education(){
    const [modal1,setModal] = useState(false) ;
    const toggleModal1 = () =>{
        setModal(!modal1);
    }
    const [modal2,setModal2] = useState(false) ;
    const toggleModal2 = () =>{
        setModal2(!modal2);
    }

    const [modal3,setModal3] = useState(false) ;
    const toggleModal3 = () =>{
        setModal3(!modal3);
    }

    const [modal4,setModal4] = useState(false) ;
    const toggleModal4 = () =>{
        setModal4(!modal4);
    }

    if(modal1 || modal2 || modal3 || modal4) {
    document.body.classList.add('active-modal')
    } else {
    document.body.classList.remove('active-modal')
    }
    return(
        <>
        <h1>Recharge Trivia</h1>
        <h2>The 101 You Need To Know</h2>
        <ul className="trivia" >
            <li onClick={toggleModal1} className='mainlist'>
                Groundwater 101 - The Invisible Lake Under Your Feet 
                <p className="note"> There's a hidden water world beneath streets and rice fields. Not big caves, just tiny spaces in soil and rock storing the water that keeps taps running when the rain stops.</p>

                {modal1 && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal1}></div>
                    <div className='modal-content'>
                        <ul className="card-container">
                            <li className='trivia-cards'>
                                <h3>1 Zoomed-In Water Cycle</h3>
                                <p className="description">When rain hits the ground, three things compete: runoff, evaporation, and infiltration. Infiltration is the doorway to groundwater. Water seeps through topsoil, then percolates down until it reaches layers where all pores are full—this is the saturated zone. 
                                    From there, groundwater feeds springs and streams during dry spells (called baseflow), which is why some rivers still trickle when the sky stays blue for weeks. Land cover matters: grass, gardens, and parks help infiltration; paved areas push water to drains, reducing natural recharge.
                                </p>
                            </li>
                            <li className='trivia-cards'>
                                <h3>2 What Groundwater Is</h3>
                                <p className='description'>Groundwater is not a lake with walls; it’s water stored in pores and cracks between grains of sand and gravel, or along fractures in rock. Above the saturated zone sits the unsaturated zone, where pores hold both air and water. Right at the top of the saturated zone is the water table 
                                    (imagine it as a living line that rises after storms and slowly falls in drought.)
                                </p>
                            </li> 
                            <li className='trivia-cards'>
                                <h3>3 What Groundwater Isn't</h3>
                                <p className="description">Movies love underground rivers. Reality? Except in special karst landscapes (limestone caves), most flow creeps through microscopic pathways. 
                                    The water is there, but spread out like moisture in a sponge—not roaring through tunnels.
                                </p>
                            </li>
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>4 Meet the Water Table</h3>
                                <p className='description'>
                                    The water table responds to weather, seasons, and pumping. After heavy rain it bulges upward; in dry seasons or during heavy well use, it lowers. 
                                    Pumping a well creates a cone of depression—a local dip in the water table around the well—showing how human use can reshape underground water levels.
                                </p>
                            </li>
                            <li className="trivia-cards">
                                <h3>
                                    5 How and Why Groundwater Moves
                                </h3>
                                <p className='description'>
                                    Groundwater moves because of differences in hydraulic head (think “energy level”), which includes elevation and pressure. 
                                    It naturally flows from high head to low head—slowly but persistently. Materials with higher hydraulic conductivity (sands, gravels) let it move faster than tighter materials (silts, clays). No equations needed—just picture water seeking the easy path downhill.
                                </p>
                            </li>
                            <li className="trivia-cards">
                                <h3>
                                    6 Why  It Matters
                                </h3>
                                <p className='description'>
                                    Healthy aquifers buffer droughts, support farms and ecosystems, and give cities a back-up when reservoirs run low. 
                                    Over-pumping can lower the water table, dry out wells, reduce streamflow, and—in soft soils—contribute to land subsidence.
                                </p>
                            </li>
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>Key Terms</h3>
                                <ul>
                                    <li>Groundwater</li>
                                    <li>Aquifer</li>
                                    <li>Water table</li>
                                    <li>Infiltration</li>
                                    <li>Percolation</li>
                                    <li>Hydraulic Head</li>
                                    <li>Baseflow</li>
                                </ul>
                            </li>
                            <li className="trivia-cards">
                                <h3>Fun Facts</h3>
                                <ul>
                                <li>About ~30% of Earth's unfrozen fresh water is underground—more than in rivers and lakes combined.</li>
                                <li>Many streams don't “run out” in dry season because groundwater quietly tops them up.</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                )}
            </li>
            <li className='mainlist'  onClick={toggleModal2}>
                Aquifers 101 — Sponges vs. Bricks Underground
                <p className="note">Not all underground layers are equal. Some behave like sponges, letting water in and out easily. Others are stubborn bricks. Knowing the difference tells you where wells actually work.</p>
                {modal2 && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal2}></div>
                    <div className='modal-content'>
                        <ul className="card-container">
                            <li className='trivia-cards'>
                                <h3>1  Meet the Layers</h3>
                                <p className="description">
                                    <ul>
                                        <li>
                                            Aquifer: Stores and transmits water well (sand, gravel, some fractured rocks). Wells in good aquifers produce steady flows.
                                        </li>
                                        <li>
                                            Aquitard: Has storage but slows water (silt, clay). It can protect deeper aquifers from quick contamination.
                                        </li>
                                        <li>
                                            Aquiclude: Effectively blocks flow (very tight clay or unfractured rock), acting like a barrier.
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li className='trivia-cards'>
                                <h3>2 Porosity vs. Permeability (Space vs. Shortcuts)</h3>
                                <p className='description'>
                                    Porosity = how much empty space a material has; permeability = how connected those spaces are. Clay can have high porosity (lots of tiny pores) but extremely low permeability (pores aren’t well connected), so water barely moves. Well-sorted sands and gravels have both: plenty of space and many connected pathways.
                                </p>
                            </li> 
                            <li className='trivia-cards'>
                                <h3>3 Unconfined vs. Confined</h3>
                                <p className="description">
                                    <ul>
                                        <li>
                                            Unconfined aquifer: Its top is the water table. It recharges relatively quickly from the surface and is more vulnerable to surface contamination.
                                        </li>
                                        <li>
                                            Confined aquifer: Sits below a tighter layer (confining layer). It often has pressure, drill a well and the water level can rise above the aquifer top (sometimes above ground = artesian flow). Recharge usually happens where the aquifer is exposed at the surface, which may be far away.
                                        </li>
                                    </ul>
                                </p>
                            </li>
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>4 Quality, Yield, and Protection</h3>
                                <p className='description'>
                                    Unconfined aquifers are easier to refill but can pick up pollutants faster. Confined aquifers are better protected but might be deeper and slower to recharge. The “best” aquifer depends on your goal: high-yield wells, fast recharge, or long-term protection.
                                </p>
                            </li>
                            <li className="trivia-cards">
                                <h3>
                                    5 Why Type Matters for Projects
                                </h3>
                                <p className='description'>
                                    Planning wells or recharge? Aquifer type sets expectations for well yield, recharge rates, monitoring needs, and risk. The smarter the match between project and aquifer, the cheaper and safer the outcome.
                                </p>
                            </li>
                            
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>Key Terms</h3>
                                <ul>
                                    <li>Aquifer</li>
                                    <li>Aquitard</li>
                                    <li>Aquiclude</li>
                                    <li>Porosity</li>
                                    <li>Permeability</li>
                                    <li>Confined</li>
                                    <li>Unconfined</li>
                                    <li>Artesian</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                )}
            </li>
            <li className='mainlist' onClick={toggleModal3}>
                Recharge 101 — Refilling the Underground Bank
                <p className="note">Think of an aquifer like a savings account. Recharge is the deposit. If withdrawals beat deposits, wells drop, land can sink, and rivers run low.</p>
                {modal3 && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal3}></div>
                    <div className='modal-content'>
                        <ul className="card-container">
                            <li className='trivia-cards'>
                                <h3>1  What Recharge Really Is</h3>
                                <p className="description">Recharge is water returning to the aquifer—first by infiltration through soil, then percolation to the saturated zone. Nature does this after storms; we can boost it with simple designs that slow water and let it soak in.
                                </p>
                            </li>
                            <li className='trivia-cards'>
                                <h3>2 Natural vs. Managed Recharge</h3>
                                <p className='description'>
                                    <ul>
                                        <li>
                                            Natural recharge: Unpaved, vegetated land allows rain to soak in. Riverbeds can also leak water into underlying aquifers.
                                        </li>
                                        <li>
                                            Managed Aquifer Recharge (MAR): We intentionally add clean water using infiltration basins, trenches/swales, or wells. MAR turns stormwater from a flooding problem into a water resource.
                                        </li>
                                    </ul>
                                </p>
                            </li> 
                            <li className='trivia-cards'>
                                <h3>3 Where Recharge Works Best</h3>
                                <p className="description">Success depends on permeable soils, a suitable aquifer depth, and clean source water. Sites should be away from pollution sources (e.g., septic fields, certain industries). Good design checks infiltration rates (how fast water soaks), potential mounding (temporary water-table rise), and travel time to any drinking-water wells.
                                </p>
                            </li>
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>4 Why Do It (The Payoff)</h3>
                                <p className='description'>
                                    <ul>
                                        <li>
                                            Drought buffer: Store wet-season water for dry seasons.
                                        </li>
                                        <li>
                                            Urban flood relief: Spread storm peaks by holding and soaking water locally.
                                        </li>
                                        <li>
                                            Subsidence control: Maintain underground water pressure so the ground doesn’t compact.
                                        </li>
                                        <li>
                                            Coastal shield: Create a freshwater barrier that helps keep seawater out.
                                        </li>
                                    </ul>
                                </p>
                            </li>
                            <li className="trivia-cards">
                                <h3>
                                    5 The Golden Rule: Good In = Good Out
                                </h3>
                                <p className='description'>
                                   Recharge only works long-term if the input water is clean enough. Sediment clogs pores; microbes and chemicals risk health. Pretreatment (settling, filtration, maybe disinfection) keeps systems working and aquifers safe.
                                </p>
                            </li>
                            <li className="trivia-cards">
                                <h3>
                                    6 Safeguards & Community
                                </h3>
                                <p className='description'>
                                    Use monitoring wells to track water levels and quality. Share data with the community, MAR is strongest when people can see and trust the results.
                                </p>
                            </li>
                        </ul>
                    
                        <ul className='card-container'>
                            <li className="trivia-cards">
                                <h3>Key Terms</h3>
                                <ul>
                                    <li>Recharge</li>
                                    <li>MAR</li>
                                    <li>Infiltration basin</li>
                                    <li>Mounding</li>
                                    <li>Percolation</li>
                                    <li>Travel time</li>
                                    <li>Saltwater intrusion</li>
                                    <li>Subsidence</li>
                                </ul>
                            </li>
                            <li className="trivia-cards">
                                <h3>Fun Facts</h3>
                                <ul>
                                <li>
                                    Many historic cities used seasonal ponds/canals that accidentally performed MAR.
                                    </li>
                                <li>
                                    Turning stormwater into recharge can cut flood risk and reduce imported water needs.
                                </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                )}
            </li>
            <li className='mainlist' onClick={toggleModal4}>
                Injection Wells 101 — A Straw That Pushes Water Down (Safely)
                <p className="note">When land is tight or targets are deep, injection wells deliver clean water right where it's needed—down in the aquifer.</p>
            </li>
            <li className='mainlist'>
                Water Quality 101 — Only Good Water In = Good Water Out
                <p className="note"> If you wouldn't drink it, don't inject it. Aquifers are precious storage, not trash cans. Clean inputs protect wells, equipment, and public health.</p>
            </li>
        </ul>
        </>
    )
}
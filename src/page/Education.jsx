import React,{useState} from 'react'
export default function Education(){
    const [modal1,setModal] = useState(false) ;
    const toggleModal1 = () =>{
        setModal(!modal1);
    }
    if(modal1) {
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
            <li className='mainlist'>
                Aquifers 101 — Sponges vs. Bricks Underground
                <p className="note">Not all underground layers are equal. Some behave like sponges, letting water in and out easily. Others are stubborn bricks. Knowing the difference tells you where wells actually work.</p>
            </li>
            <li className='mainlist'>
                Recharge 101 — Refilling the Underground Bank
                <p className="note">Think of an aquifer like a savings account. Recharge is the deposit. If withdrawals beat deposits, wells drop, land can sink, and rivers run low.</p>
            </li>
            <li className='mainlist'>
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
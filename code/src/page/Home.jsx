import { Link } from 'react-router-dom';
export default function Home(){
    return(
       <>
       <div className="home-top">
            <div className="logo-h1">
            <img className="home-logo" src="src\assets\cropped_logo.png"></img>
            <h1 className="solution-name">RECHARGE</h1>
            </div>
        <h2 className="team-name">Restoring Aquifers and Empowering Communities through <br/> Smart Water Injection for Jakarta’s Coastal Resilience</h2>
       </div>
       <div className="home-bot">
        <ul className="shortcut-container">
            <li className="shortcut-card" >
                <Link to="/info">
                <p>
                How We Help
                </p>
                </Link>
            </li>
            <li className="shortcut-card">
                <Link to="education">
                <p>
                Recharge Trivia
                </p>
                </Link>
            </li>
        </ul>
        <ul className="shortcut-container">
            <li className="shortcut-card">
                <Link to="/map">
                <p>
                Interactive Map
                </p>
                </Link>
            </li>
            <li className="shortcut-card">
                <Link to="/sumur">
                <p>
                Real Time Data
                </p>
                </Link>
            </li>
        </ul>
       </div>
       </> 
       
    )
}
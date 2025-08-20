import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (<nav className= "nav"> 
        <img src="src\assets\logo recharge.png" width="80" height="auto"/>
        <ul>
            <li> <CustomLink to="/">Home</CustomLink> </li>
            <li> <CustomLink to ="/info">How We Help</CustomLink> </li>
            <li> <CustomLink to="/education">Recharge Trivia</CustomLink> </li>
            <li> <CustomLink to="/map">Interactive map</CustomLink></li>
            <li> <CustomLink to="/sumur">Real Time Data</CustomLink> </li> 
           
        </ul>
    </nav>)
}

function CustomLink({to,children,...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path : resolvedPath.pathname,end:true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){
    return (<nav className= "nav"> 
        <img src="src\assets\logo recharge.png" width="150" height="auto"/>
        <ul>
            <li> <CustomLink to="/">Home</CustomLink> </li>
            <li> <CustomLink to ="/info">Basic Information</CustomLink> </li>
            <li> <CustomLink to="/education">Education</CustomLink> </li>
            <li> <CustomLink to="/map">Interactive map</CustomLink></li>
            <li> <CustomLink to="/sumur">Data Real Time</CustomLink> </li> 
            <li> <CustomLink to="/calculator">Calculator</CustomLink></li>
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
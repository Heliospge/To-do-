import { Calculator, ClipboardList } from "lucide-react";
import { Link } from 'react-router-dom'
import './BottomNav.css'


export default function BottomNav(){
    
    return (
        <div className="bottom-nav">
            <Link to="/"> <ClipboardList></ClipboardList> </Link>
            <Link to="/calories"> <Calculator></Calculator></Link>
        </div>
    )
}

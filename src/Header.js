import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className='bg_color'>
                <div className='Container'>
                    <div className="Header d-flex justify-content-between py-3">
                        <div className="react">
                            <h3><Link to="/home">Json Placeholder</Link></h3>
                        </div>
                        <div className="Header_info">
                            <ul className='d-flex list-unstyled align-items-center'>
                                <li className='mx-4'><Link to="/Posts">Posts</Link></li>
                                <li className='mx-4'><Link to="/Comments">Comments</Link></li>
                                <li className='mx-4'><Link to="/Albums">Ablums</Link></li>
                                <li className='mx-4'><Link to="/Photos">Photos</Link></li>
                                <li className='mx-4'><Link to="/Todos">Todos</Link></li>
                                <li className='mx-4'><Link to="/Users">Users</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;
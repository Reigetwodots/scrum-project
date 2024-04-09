import ProjectPopover from "./projectPopover";
import UserPopover from "./userPopover";
import { Link } from "react-router-dom";
function Header() {
    // const location = useLocation(); // 获取当前路径
    // console.log(location);
    // const pathname = location.pathname;
    // const keys = pathname.split('/')[1];
    // console.log(keys);

    return (
        <div className="header_wrap_body">
            <button className="header_button">
                <div className="icon_blue"></div>
                <Link to={'/project'}><h2>Jira Software</h2></Link>
            </button>
            <ProjectPopover />
            <UserPopover />
        </div>
    );
}
export default Header;
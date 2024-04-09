import ProjectPopover from "./projectPopover";
import UserPopover from "./userPopover";

function Header() {
    return (
        <div className="header_wrap_body">
            <button className="header_button">
                <div className="icon_blue"></div>
                <h2>Jira Software</h2>
            </button>
            <ProjectPopover />
            <UserPopover />
        </div>
    );
}
export default Header;
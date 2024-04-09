import Header from "./header";
import LeftMenu from "./left_menu";
import { Outlet, useLocation } from "react-router-dom";



function Layout() {
    let location = useLocation();
    let is_project_page = location.pathname === '/project';

    return (
        // 类BEM命名法
        <div className="layout_wrap">
            <div className="header_wrap">
                <Header />
            </div>
            <div className="layout_wrap_project">
                {is_project_page ? null :
                    <div className="project_side_menu_wrap">
                        <LeftMenu />
                    </div>
                }
                <div className="project_wrap">
                    {/* <LeftMenu /> */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
export default Layout;
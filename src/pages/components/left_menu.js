import { Menu } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
function LeftMenu() {

    const location = useLocation(); // 获取当前路径
    console.log(location);
    const pathname = location.pathname;
    const keys = pathname.split('/')[3];
    console.log(keys);

    const items = [
        {
            key: 'kanban',
            label: (<NavLink
                to={'/project/1/kanban'}
                className='link_title'
                style={{ color: 'black', fontSize: '16px' }}>看板</NavLink>),
        },
        {
            key: 'epic',
            label: (<NavLink
                to={'/project/1/epic'}
                className='link_title'
                style={{ color: 'black', fontSize: '16px' }}>任务组</NavLink>),
        }
    ]

    return (
        <div className='left_menu'>
            <Menu
                selectedKeys={keys}
                mode={'inline'}
                items={items}
            ></Menu>
        </div>
    )
}
export default LeftMenu;

import { Table, Space } from "antd";
import { useState } from "react";
// function xinxinclick() {
//     const style = {}
//     const style1 = {

//         color: '#dfd50c',
//         fontSize: '20px'

//     }
//     return (
//         style = { style1 }
//     )
// }

// 点击收藏图标，图标变色
const CollectIcon = () => {
    const [style, setStyle] = useState({});

    const handleClick = () => {
        if (style.color) {
            setStyle({});
        } else {
            setStyle({
                color: '#dfd50c',
                // fontSize: '20px'
            });
        }
    };

    return (
        <div className="iconfont icon-shoucang shoucang-item" style={style} onClick={handleClick}></div>
    );
};

const columns = [
    {
        title: (<div className="iconfont icon-shoucang" style={{ color: '#dfd50c' }}></div>),
        dataIndex: 'collect',
        key: 'collect',
        // render: text => <div className="iconfont icon-shoucang shoucang-item"></div>,
        render: (text) => <CollectIcon />,
        width: '10%',
    },
    {
        title: '项目名称',
        dataIndex: 'name',
        key: 'name',
        render: text => <button style={{ fontSize: 16, color: '#0052cc', border: 'none', background: 'none', padding: '0', textDecoration: 'underline', cursor: 'pointer' }}>{text}</button>,
        sorter: (a, b) => a.title - b.title,
        width: '30%'
    },
    {
        title: '项目部门',
        dataIndex: 'organization',
        key: 'organization',
        width: '15%'
    },
    {
        title: '负责人',
        dataIndex: 'owner',
        key: 'owner',
        render: text => <div>{text}</div>,
        width: '15%'
    },
    {
        title: '创建时间',
        dataIndex: 'created',
        key: 'created',
        render: (text, record) => (
            <Space size="middle">
                <div>{record.created}</div>
            </Space>
        ),
    },
];

const data = [{
    collect: false,
    name: '测试数据',
    organization: '测试部门',
    owner: 'admin',
    created: '2021-07-07',
}]

// function get_data(list) {
//     return list.map(item) => {
//         return {
//             collect: false,
//             name: item.name,
//             organization: item.organization,
//             owner: item.owner,
//             created: item.created,
//         }
//     }
// }

function ProjectTable() {
    // const data = get_data(list)
    return (
        <Table className='project_table_css' dataSource={data} columns={columns} align='center' />
    )
}

export default ProjectTable
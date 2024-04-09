import { Popover, List, Typography } from "antd";

function ProjectPopover() {
    let content = (
        <div className="project_create">
            <Typography.Text type="secondary">收藏项目</Typography.Text>
            <List>
                <List.Item className="project_listitem">
                    <Typography.Text>
                        <p>物流管理项目</p>
                    </Typography.Text>
                </List.Item>
                <List.Item className="project_listitem">
                    <Typography.Text>
                        <p>物流管理项目</p>
                    </Typography.Text>
                </List.Item>
                <List.Item className="project_listitem">
                    <Typography.Text>
                        <p>物流管理项目</p>
                    </Typography.Text>
                </List.Item>
            </List>
        </div>
    )

    return (
        <Popover placement={'bottom'} content={content}>
            <h2 style={{ cursor: 'pointer' }}>项目</h2>
        </Popover>
    )


}

export default ProjectPopover;
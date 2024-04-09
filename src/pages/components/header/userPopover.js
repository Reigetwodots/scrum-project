import { Popover, List, Typography } from "antd";

function UserPopover() {
    let content = (
        <div className="project_create">
            <Typography.Text type="secondary">组员列表</Typography.Text>
            <List>
                <List.Item className="user_listitem">
                    <Typography.Text>
                        <p>高修文</p>
                    </Typography.Text>
                </List.Item>
                <List.Item className="user_listitem">
                    <Typography.Text>
                        <p>熊天成</p>
                    </Typography.Text>
                </List.Item>
                <List.Item className="user_listitem">
                    <Typography.Text>
                        <p>温婉</p>
                    </Typography.Text>
                </List.Item>
                <List.Item className="user_listitem">
                    <Typography.Text>
                        <p>戚戚</p>
                    </Typography.Text>
                </List.Item>
            </List>
        </div>
    )

    return (
        <Popover placement={'bottom'} content={content}>
            <h2 style={{ cursor: 'pointer' }}>组员</h2>
        </Popover>
    )


}

export default UserPopover;
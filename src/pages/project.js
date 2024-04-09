import { Input, Select } from "antd"
import ProjectTable from "./components/project_table"
// import CreateProjectModal from "./components/create_project_modal"
import { useState } from "react"
import { Modal, Form } from 'antd';


function Project() {
    // function create_project_click() {
    //     // console.log('创建项目')
    // }

    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='project_body_wrap'>
            <div className='project_title_wrap'>
                <h1>项目列表</h1>
                <>
                    <button onClick={showModal}>创建项目</button>
                    <Modal
                        title="创建项目"
                        open={isModalOpen}
                        okText='创建项目'
                        onOk={handleOk}
                        onCancel={handleCancel}>
                        <Form
                            name="basic"
                            autoComplete="off"
                            form={form}
                        >
                            <Form.Item
                                label="项目名称"
                                name="name"
                                rules={[{ required: true, message: '请输入项目名称' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="所在部门"
                                name="organization"
                                rules={[{ required: true, message: '请选择部门' }]}
                            >
                                <Select>

                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="负责人"
                                name="owner"
                                rules={[{ required: true, message: '请选择负责人' }]}
                            >
                                <Select>

                                </Select>
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            </div>
            <div className='project_search_wrap'>
                <Input placeholder={"任务名"} className="search_wrap_input" />
                <Select
                    className="search_wrap_select"
                    defaultValue='lucy'
                    style={{ width: 120 }}
                    options={[
                        { label: 'Jack', value: 'jack' },
                        { label: 'Lucy', value: 'lucy' },
                        { label: 'disabled', value: 'disabled', disabled: true },
                        { label: 'Yiminghe', value: 'yiminghe' }
                    ]}
                />
            </div>
            <div className='project_table_wrap'>
                <ProjectTable />
            </div>
        </div>
    )
}

export default Project
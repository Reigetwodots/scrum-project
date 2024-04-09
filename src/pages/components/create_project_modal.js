

import React, { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';
function CreateProjectModal() {
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
    );
};
export default CreateProjectModal;
import { Input, Select } from "antd"
import ProjectTable from "./components/project_table"
// import CreateProjectModal from "./components/create_project_modal"
import CreateProjectModal from "./components/create_project_modal"
import { useEffect } from "react"

function Project() {

    useEffect(() => {
        console.log('发起请求API')

    }, [])

    return (
        <div className='project_body_wrap'>
            <div className='project_title_wrap'>
                <h1>项目列表</h1>
                <>
                    <CreateProjectModal></CreateProjectModal>
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
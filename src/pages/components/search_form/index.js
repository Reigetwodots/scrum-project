import { Button, Input, Select } from "antd";


function SearchForm() {
    return (
        <div>
            <div className="search_form_wrap">
                <Input placeholder="任务名" className="search_form_input" />
                <Select
                    className="seach_form_select"
                    defaultValue={'经办人'}
                    style={{ width: 120, fontSize: '16px', marginRight: '15px' }}
                    options={[
                        { label: '经办人', value: '经办人' },
                        { label: '高文修', value: '高文修' },
                        { label: '优先级', value: '优先级' },
                        { label: '优先级', value: '优先级' },
                        { label: '状态', value: '状态' },
                        { label: 'disabled', value: 'disabled', disabled: true },
                    ]}
                />
                <Select
                    className="seach_form_select"
                    defaultValue={'类型'}
                    style={{ width: 120, fontSize: '16px', marginRight: '15px' }}
                    options={[
                        { label: '类型', value: '类型' },
                        { label: '任务', value: '任务' },
                        { label: '故事', value: '故事' },
                        { label: '缺陷', value: '缺陷' },
                        { label: '工作项', value: '工作项' },
                        { label: 'disabled', value: 'disabled', disabled: true },
                    ]}
                />
                <Button>清除筛选器</Button>
            </div>
        </div>
    );
}

export default SearchForm;
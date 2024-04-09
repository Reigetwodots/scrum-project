import { Droppable, Draggable } from "react-beautiful-dnd";
import classnames from 'classnames'
import { Button } from 'antd';
function TaskDrop(props) {
    const task = props.task
    const list = task.task

    return (
        <Droppable droppableId={task.kanban_key} type="task">
            {(provided, snapshot) => (
                <div
                    className="task_drop_wrap"
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                >
                    {list.map((item, index) => {
                        return (
                            <Draggable
                                key={`${task.kanban_key}_${item.name}`}
                                draggableId={`${task.kanban_key}_${item.name}`}
                                index={index}
                            >
                                {(provided, snapshot) => {
                                    return (
                                        <div
                                            className="task_drag_wrap"
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <div className='task_card'>
                                                <div className='task_card_top'>
                                                    <div className='task_head_picture' alt='' ></div>
                                                    <p className='task_head-p'>{item.name}</p>
                                                </div>
                                                <div className='task_card_bottom'>
                                                    <div className='task_owner'>{item.owner}</div>
                                                    <div className={classnames({
                                                        new_task_type: true,
                                                        red: item.type === 'bug',
                                                        blue: item.type === 'task'
                                                    })}>
                                                        <span className='task_type-span'>{item.type}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }}
                            </Draggable>
                        )
                    })}
                    <Button className='new_task_btn' type="primary" ghost>
                        新建task
                    </Button>
                    {provided.placeholder}
                </div>
            )
            }
        </Droppable >
    );
}
export default TaskDrop;
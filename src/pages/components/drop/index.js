import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import TaskDrop from "./task_drop";
// import { Button } from 'antd';
import { useSelector } from 'react-redux';
import { kanban_selector, kanban_order, task_same_order, task_diff_order } from '../../../redux/slice/drop';
import { useDispatch } from "react-redux";
function DropCp() {
    const dispatch = useDispatch()
    const drop_data = useSelector(kanban_selector)

    function onDragEnd(result) {
        console.log('@@@@@@', result);
        if (!result.destination) {
            return;
        }

        if (result.type === 'kanban') {
            dispatch(kanban_order({
                soure: result.source.index,
                destination: result.destination.index
            }))
        }

        if (result.type === 'task') {
            if (result.source.droppableId === result.destination.droppableId) {
                dispatch(task_same_order({
                    source: result.source.index,
                    destination: result.destination.index,
                    kanban_key: result.source.droppableId
                }))
            } else {
                console.log('不同的kanban')
                dispatch(task_diff_order({
                    source: result.source.index,
                    destination: result.destination.index,
                    source_kanban: result.source.droppableId,
                    destination_kanban: result.destination.droppableId
                }))
            }
        }


    }

    return (
        <DragDropContext
            onDragEnd={onDragEnd}
            className="drag_container"
        >
            <Droppable
                direction="horizontal"
                droppableId="dropable-kanban"
                type="kanban"
            >{(provided, snapshot) => {
                return (
                    <div ref={provided.innerRef}
                        className="kanban_drop_wrap"
                        {...provided.droppableProps}
                    >
                        {drop_data.map((item, index) => {
                            return (
                                <Draggable
                                    draggableId={item.kanban_key}
                                    index={index}
                                    key={item.kanban_key}
                                >
                                    {(provided, index) => {
                                        return (
                                            <div
                                                className="kanban_drag_wrap"
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <h1>{item.kanban_key}</h1>
                                                <TaskDrop task={item} />
                                            </div>

                                        )
                                    }}
                                </Draggable>
                            )
                        })}
                        {provided.placeholder}
                    </div>
                )
            }}
            </Droppable>
        </DragDropContext >
    );
}

export default DropCp;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    kanban_data: [
        {
            "kanban_key": "需求评审",
            "task": [
                {
                    "name": "task1",
                    "type": "bug",
                    "owner": "zhangsan",
                    "task_id": "7rfjk56432"
                },
                {
                    "name": "task2",
                    "type": "bug",
                    "owner": "lisi",
                    "task_id": "7rfjk56121"
                },
                {
                    "name": "task3",
                    "type": "bug",
                    "owner": "wangwu",
                    "task_id": "7rfjk56123"
                },
                {
                    "name": "task4",
                    "type": "bug",
                    "owner": "zhaoliu",
                    "task_id": "7rfjk56124"
                }
            ]
        },
        {
            "kanban_key": "开发",
            "task": [
                {
                    "name": "task5",
                    "type": "bug",
                    "owner": "zhangsan",
                    "task_id": "7rfjk56125"
                },
                {
                    "name": "task6",
                    "type": "bug",
                    "owner": "lisi",
                    "task_id": "7rfjk56126"
                },
                {
                    "name": "task7",
                    "type": "bug",
                    "owner": "wangwu",
                    "task_id": "7rfjk56127"
                },
                {
                    "name": "task8",
                    "type": "bug",
                    "owner": "zhaoliu",
                    "task_id": "7rfjk56128"
                }
            ]
        }
    ],
}

function reorderList(list, startIndex, endIndex) {
    const result = list;
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
}

export const DropSlice = createSlice({
    name: 'drop',
    initialState,
    reducers: {
        kanban_order: (state, action) => {
            reorderList(
                state.kanban_data,
                action.payload.source,
                action.payload.destination
            );
            // state.kanban_data = result
        },
        task_same_order: (state, action) => {
            const kanban = state.kanban_data.find(kanban => kanban.kanban_key === action.payload.kanban_key)
            reorderList(
                kanban.task,
                action.payload.source,
                action.payload.destination
            );
        },
        task_diff_order: (state, action) => {
            const source_kanban = state.kanban_data.find(
                kanban => kanban.kanban_key === action.payload.source_kanban)
            const destination_kanban = state.kanban_data.find(
                kanban => kanban.kanban_key === action.payload.destination_kanban)
            const [removed] = source_kanban.task.splice(action.payload.source, 1);
            destination_kanban.task.splice(action.payload.destination, 0, removed);
        },
        add_kanban: (state, action) => {

        },
        add_task: (state, action) => {
        },
        update_task: (state, action) => {

        }

    },
});

export const kanban_selector = (state) => {
    return state.drop.kanban_data
}

export const {
    kanban_order,
    task_diff_order,
    task_same_order,
    add_kanban, add_task,
    update_task
} = DropSlice.actions;
export default DropSlice.reducer;
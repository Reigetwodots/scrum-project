

import SearchForm from "./components/search_form";

function Kanban() {
    return (
        <div className="kanban_body">
            <div className="Kanban_title">
                <h1>scrum敏捷项目管理研发看板</h1>
            </div>
            <SearchForm />
            <div className="drop_wrap">

            </div>
        </div>
    );
}
export default Kanban;
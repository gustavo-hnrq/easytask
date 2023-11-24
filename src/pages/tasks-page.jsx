import Header from "../components/tasks/Header-Task";
import Aside from "../components/tasks/Aside";
import MainTasks from "../components/tasks/MainTasks";

function tasksPage() {
    return (
        <div className="">
            <Header />
            <Aside />
            <MainTasks />
        </div> 
    );
}

export default tasksPage;
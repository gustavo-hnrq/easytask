import Header from "../components/tasks/Header-Task";
import MainTasks from "../components/tasks/MainTasks";

function tasksPage() {
    return (
        <div className="flex flex-col item-center justify-center mx-auto max-w-[85rem]">
            <Header />
            <MainTasks />
        </div> 
    );
}

export default tasksPage;
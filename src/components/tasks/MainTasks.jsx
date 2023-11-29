import "./Header-Task.css"
import Aside from "../tasks/Aside";

function MainTasks() {
    return ( 
        <main className="flex items-center justify-end">
            <div className="flex flex-row w-full">
                <Aside />

                <div className="bg-gray-100 flex flex-col items-start flex-nowrap justify-center px-20 py-10 gap-7 w-full sm:flex-row">
                    <div className="flex flex-col gap-0 justify-center">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-red-600 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs">Pendente</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-yellow-400 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs">Fazendo</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-0">
                        <div className="flex gap-3 items-center"> {/* Header */}
                            <div className="rounded-full bg-green-600 h-3.5 w-3.5"></div>
                            <p className="font-thin text-xs">Feito</p>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>

                        <div className="mt-5"> {/* Main */}
                            <div className="flex flex-col min-w-[280px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                                <h1 className="font-medium text-xl">Lorem Ipsum</h1>
                                <p className="font-thin text-xs">dd/mm/yyyy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainTasks;
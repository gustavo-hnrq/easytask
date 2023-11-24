import "./Header-Task.css"

function MainTasks() {
    return ( 
        <div className="bg-gray-100 flex items-center justify-between px-52 py-10">
            <div className="flex flex-col gap-0">
                <div className="flex gap-3 items-center"> {/* Header */}
                    <div className="rounded-full bg-red-600 h-3.5 w-3.5"></div>
                    <p className="font-thin">Pendente</p>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 red rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col gap-0">
                <div className="flex gap-3 items-center"> {/* Header */}
                    <div className="rounded-full bg-yellow-400 h-3.5 w-3.5"></div>
                    <p className="font-thin">Fazendo</p>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 yellow rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-0">
                <div className="flex gap-3 items-center"> {/* Header */}
                    <div className="rounded-full bg-green-600 h-3.5 w-3.5"></div>
                    <p className="font-thin">Feito</p>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>

                <div className="mt-5"> {/* Main */}
                    <div className="flex flex-col min-w-[320px] max-w-xs p-6 gap-3 green rounded-md bg-white">
                        <h1 className="font-medium text-2xl">Lorem Ipsum</h1>
                        <p className="font-thin text-xs">dd/mm/yyyy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainTasks;
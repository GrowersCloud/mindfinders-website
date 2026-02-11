import { CheckCircle2, Play, ShieldCheck, Lock } from "lucide-react";

interface ModuleCardProps {
    moduleNumber: number;
    title: string;
    description: string;
    status: "completed" | "in-progress" | "locked";
    progress?: number;
}

export function ModuleCard({
    moduleNumber,
    title,
    description,
    status,
    progress = 0,
}: ModuleCardProps) {
    if (status === "completed") {
        return (
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-gray-50 border border-gray-100 opacity-60">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white">
                        <CheckCircle2 className="w-6 h-6" />
                    </div>
                </div>
                <div className="flex-grow">
                    <h4 className="text-lg font-bold text-gray-800 line-through">
                        Module {moduleNumber}: {title}
                    </h4>
                    <p className="text-gray-500 text-sm">{description}</p>
                </div>
                <div className="flex-shrink-0 self-center">
                    <span className="px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                        Completed
                    </span>
                </div>
            </div>
        );
    }

    if (status === "in-progress") {
        return (
            <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white border-2 border-[#ED1B2F] shadow-lg transform scale-[1.02]">
                <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#ED1B2F] flex items-center justify-center text-white animate-pulse">
                        <Play className="w-5 h-5 ml-1" />
                    </div>
                </div>
                <div className="flex-grow">
                    <div className="flex justify-between mb-2">
                        <h4 className="text-xl font-bold text-[#231F20]">
                            Module {moduleNumber}: {title}
                        </h4>
                        <span className="text-sm font-bold text-[#ED1B2F]">
                            In Progress ({progress}%)
                        </span>
                    </div>
                    <p className="text-gray-600 mb-4">{description}</p>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                        <div
                            className="bg-[#ED1B2F] h-2.5 rounded-full"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
                <div className="flex-shrink-0 self-center">
                    <button className="px-6 py-2 bg-[#ED1B2F] text-white font-bold rounded hover:bg-red-700 transition-colors">
                        Resume
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col md:flex-row gap-6 p-6 rounded-xl bg-white border border-gray-200">
            <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <span className="font-bold">{moduleNumber.toString().padStart(2, "0")}</span>
                </div>
            </div>
            <div className="flex-grow">
                <h4 className="text-lg font-bold text-gray-400">
                    Module {moduleNumber}: {title}
                </h4>
                <p className="text-gray-400 text-sm">{description}</p>
            </div>
            <div className="flex-shrink-0 self-center">
                <span className="text-gray-300 text-sm font-semibold flex items-center gap-1">
                    <Lock className="w-4 h-4" /> Locked
                </span>
            </div>
        </div>
    );
}

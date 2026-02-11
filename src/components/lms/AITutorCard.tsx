import { LucideIcon } from "lucide-react";

interface AITutorCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    colorClass: string; // e.g. "bg-blue-600"
    tagText?: string;
    buttonText?: string;
}

export function AITutorCard({
    title,
    description,
    icon: Icon,
    colorClass,
    tagText = "Simulation",
    buttonText = "Start Simulation",
}: AITutorCardProps) {
    return (
        <div className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-[0_10px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
            <div className={`h-32 ${colorClass} relative`}>
                <div className="absolute inset-0 bg-grid-white/[0.1] bg-[size:20px_20px]" />
                <div className="absolute top-6 right-6">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-white/10">
                        {tagText}
                    </span>
                </div>
            </div>
            <div className="p-8 pt-0 relative">
                <div className="w-16 h-16 bg-white rounded-xl shadow-lg -mt-8 flex items-center justify-center mb-4">
                    <Icon className={`w-8 h-8 text-gray-700`} />
                    {/* Note: Icon color handling might need refinement if strict brand colors are needed, 
              but slate-700 is a safe default for the icon itself inside the white box. 
              Or we can pass a specific text color class. */}
                </div>
                <h3 className="text-xl font-bold font-heading mb-2">{title}</h3>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                    {description}
                </p>
                <button className="w-full py-3 border border-gray-200 rounded-lg font-semibold text-slate-700 group-hover:bg-gray-900 group-hover:text-white transition-colors">
                    {buttonText}
                </button>
            </div>
        </div>
    );
}

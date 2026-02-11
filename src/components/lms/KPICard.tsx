import { LucideIcon } from "lucide-react";

interface KPICardProps {
    title: string;
    value: string;
    unit?: string;
    target: string;
    trend: number;
    icon: LucideIcon;
    iconColorClass: string;
    trendColorClass?: string;
    trendText?: string;
    borderClass?: string;
}

export function KPICard({
    title,
    value,
    unit,
    target,
    trend,
    icon: Icon,
    iconColorClass,
    trendColorClass,
    trendText,
    borderClass = "",
}: KPICardProps) {
    const isPositive = trend > 0;
    const isNegative = trend < 0;

    // Default trend colors if not provided
    const defaultTrendClass = isPositive
        ? "text-green-600 bg-green-50"
        : isNegative
            ? "text-red-600 bg-red-50"
            : "text-gray-500 bg-gray-50";

    const trendClass = trendColorClass || defaultTrendClass;

    return (
        <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${borderClass}`}>
            <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-lg ${iconColorClass}`}>
                    <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded flex items-center gap-1 ${trendClass}`}>
                    {trendText ? trendText : (
                        <>
                            {isPositive && "+"}
                            {trend}%
                        </>
                    )}
                </span>
            </div>
            <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">
                {title}
            </div>
            <div className="text-3xl font-bold mt-1">
                {value}
                {unit && <span className="text-sm text-gray-400 font-normal"> {unit}</span>}
            </div>
            <div className="text-xs text-gray-400 mt-2">Target: {target}</div>
        </div>
    );
}

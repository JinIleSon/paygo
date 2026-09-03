import { IconCheck, IconHome, IconPackage, IconTruck } from "@tabler/icons-react";
import { getShippingStep } from "../../lib/orderUtils";
import type { OrderStatus } from "../../types/order";

interface ShippingStepProps {
    orderStatus: OrderStatus;
    isOrderDetailPage: boolean;
}

function ShippingStep({ orderStatus, isOrderDetailPage } : ShippingStepProps) {
    const step = getShippingStep(orderStatus); // { label: label, status: "done" 또는 "current" 또는 "pending" }
    
    const stepIconColor = step.map((s) => {
        if (s.status !== "pending")
            return "bg-blue-500 text-white";
        else
            return "bg-gray-200 text-gray-400";
    });
    
    const stepBarColor = step.map((s, index) => {
        if (index === 0)
            return undefined;
        if (s.status !== "pending")
            return "bg-blue-500";
        else
            return "bg-gray-200";
    });

    const stepTextColor = step.map((s) => {
        if (s.status !== "current")
            return "text-gray-400";
        else
            return "text-blue-500";
    });

    const shippingIcon = [
        IconCheck,
        IconPackage,
        IconTruck,
        IconHome
    ];

    return (
        <div className="flex gap-3">
            {step.map((s, index) => {
                const Icon = shippingIcon[index];
                
                return (
                <div key={index} className={`relative flex flex-col items-center justify-center ${isOrderDetailPage ? 'w-24' : 'w-18'} gap-1`}>
                    <div className={`flex items-center justify-center rounded-full w-8 h-8 ${stepIconColor[index]}`}>
                        <Icon />
                    </div>
                    <div className={`text-sm ${stepTextColor[index]}`}>
                        {s.label}
                    </div>
                    {index !== 0 && (
                    <div className={`absolute ${isOrderDetailPage ? 'w-15 right-18 rounded-full' : 'w-14 right-12'} h-1 top-3.5 ${stepBarColor[index]}`}></div>
                    )}
                </div>
            )})}
        </div>
    );
}

export default ShippingStep;
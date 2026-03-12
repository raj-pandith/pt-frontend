import React from 'react';
import { Package, Folder, Search, Waves, Shield, Wind, CheckCircle, Truck } from 'lucide-react';

const ProcessFlow = () => {
    const steps = [
        {
            id: 1,
            title: "Pickup",
            desc: "Scheduled collection from the campus or facility for hassle-free service",
            icon: <Package size={24} className="text-white" />,
            image: "/1.png"
        },
        {
            id: 2,
            title: "Sorting & Coding",
            desc: "Garments are sorted and coded for accurate tracking.",
            icon: <Folder size={24} className="text-white" />,
            image: "/2.png"
        },
        {
            id: 3,
            title: "Inspection",
            desc: "Items are checked for stains, fabric condition, and special care needs",
            icon: <Search size={24} className="text-white" />,
            image: "/3.png"
        },
        {
            id: 4,
            title: "Washing",
            desc: "Washed using RO-treated water at controlled temperatures, eco-friendly detergents, and machines.",
            icon: <Waves size={24} className="text-white" />,
            image: "/4.png"
        },
        {
            id: 5,
            title: "Fabric Care",
            desc: "Extra care is taken to maintain color, softness, and durability.",
            icon: <Shield size={24} className="text-white" />,
            image: "/5.jpg"
        },
        {
            id: 6,
            title: "Drying & Finishing",
            desc: "Clothes are dried, pressed, or folded as required.",
            icon: <Wind size={24} className="text-white" />,
            image: "/6.png"
        },
        {
            id: 7,
            title: "Quality Check",
            desc: "Each batch is inspected before dispatch.",
            icon: <CheckCircle size={24} className="text-white" />,
            image: "/7.jpg"
        },
        {
            id: 8,
            title: "Delivery",
            desc: "Securely packed and delivered on time.",
            icon: <Truck size={24} className="text-white" />,
            image: "/8.jpg"
        },
    ];

    return (
        <div className="w-full max-w-[85rem] mx-auto py-16 px-6 md:px-16 font-sans bg-gray-50 overflow-hidden scale-95">

            {/* 
        Grid Setup 
        md:gap-x-12 = 48px horizontal space between columns (Wide gap for long visible arrows)
        md:gap-y-24 = 96px vertical space between rows
      */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-12 md:gap-y-24 relative w-full">

                {/* Wrap-Around S-Curve: Center Horizontal Span */}
                <div className="hidden md:block absolute top-1/2 left-[-48px] right-[-48px] border-t-[6px] border-dashed border-gray-900 -translate-y-[3px] z-0"></div>

                {steps.map((step, index) => (
                    <div key={step.id} className="relative z-10 w-full h-full flex flex-col items-center">

                        {/* Step Card Details (Smaller and more compact) */}
                        <div className="bg-white rounded-xl shadow-md border border-gray-100 p-4 flex flex-col items-center text-center w-full z-10 relative transition-transform hover:-translate-y-1 duration-300">

                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#1e88e5] rounded-full flex items-center justify-center mb-4 shadow-sm shrink-0">
                                {step.icon}
                            </div>

                            {/* Text */}
                            <h3 className="font-bold text-gray-800 text-base mb-2">{step.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow">
                                {step.desc}
                            </p>

                            {/* Image Container inside Card */}
                            <div className="w-full h-20 flex items-center justify-center bg-blue-50/50 rounded-lg p-2 mt-auto">
                                <img
                                    src={step.image}
                                    alt={`${step.title} illustration`}
                                    className="w-full h-24 object-contain"
                                />
                            </div>

                        </div>

                        {/* Standard Horizontal Thick Arrow between adjacent cards (1->2, 2->3, 3->4, 5->6, 6->7, 7->8) */}
                        {(index === 0 || index === 1 || index === 2 || index === 4 || index === 5 || index === 6) && (
                            <div className="hidden md:block absolute top-1/2 -right-[48px] w-[48px] border-t-[6px] border-dashed border-gray-900 -translate-y-1/2 z-0">
                                <div className="absolute right-0 -top-[9px] w-0 h-0   border-t-[12px] border-t-transparent border-l-[18px] border-l-gray-900 border-b-[12px] border-b-transparent" style={{ "marginRight": "-3px", marginTop: "-5px" }}></div>
                            </div>
                        )}

                        {/* S-Curve Right Drop Connection (Exits Card 4 and goes down to the middle span) */}
                        {index === 3 && (
                            <div className="hidden md:block absolute top-1/2 -right-[48px] w-[48px] h-[calc(50%+48px)] border-t-[6px] border-r-[6px] border-dashed border-gray-900 rounded-tr-[24px] z-0"></div>
                        )}

                        {/* S-Curve Left Drop Connection (Comes up from middle span and points into Card 5) */}
                        {index === 4 && (
                            <div className="hidden md:block absolute -top-[48px] -left-[48px] w-[48px] h-[calc(50%+48px)] border-l-[6px] border-b-[6px] border-dashed border-gray-900 rounded-bl-[24px] z-0">
                                <div className="absolute right-0 -bottom-[9px] w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-gray-900 border-b-[12px] border-b-transparent"></div>
                            </div>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProcessFlow;
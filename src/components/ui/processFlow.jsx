import React from "react";
import {
    Package, FolderOpen, Search, Waves, Shield, Wind,
    CheckCircle, Box, Truck, ArrowRight, Building2, MapPin, ArrowDown, ArrowLeft,
} from 'lucide-react';

const ProcessIcons = {
    package: Package,
    folderOpen: FolderOpen,
    search: Search,
    waves: Waves,
    shield: Shield,
    wind: Wind,
    checkCircle: CheckCircle,
    box: Box
};



interface ProcessStep {
    id: string | number;
    title: string;
    description: string;
    image: string;
    icon: keyof typeof ProcessIcons;
}

interface Props {
    processSteps: ProcessStep[];
}

export default function ProcessFlow({ processSteps }) {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid container – snake pattern achieved via placement + arrows */}
                <div
                    className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
            gap-x-6 gap-y-10 md:gap-y-16 
            auto-rows-fr
          "
                >
                    {processSteps.map((step, index) => {
                        const Icon = ProcessIcons[step.icon] || (() => null);

                        // Determine visual row (0-based)
                        const visualRow = Math.floor(index / 4); // change 4 → your max items per visual row
                        const positionInRow = index % 4;

                        // Arrow logic – which direction should connect TO THE NEXT step
                        // let ArrowComponent: React.ElementType = ArrowRight;
                        let arrowClass = "w-8 h-8 text-gray-400 flex-shrink-0";

                        if (index === processSteps.length - 1) {
                            // no arrow after last step
                            ArrowComponent = null;
                        } else {
                            // Even visual rows (0,2,...) go left-to-right
                            if (visualRow % 2 === 0) {
                                if (positionInRow < 3) {
                                    ArrowComponent = ArrowRight;
                                } else {
                                    // last in even row → down to next row
                                    ArrowComponent = ArrowDown;
                                    arrowClass += " rotate-90 md:rotate-0"; // optional tilt on mobile
                                }
                            }
                            // Odd visual rows go right-to-left
                            else {
                                if (positionInRow < 3) {
                                    ArrowComponent = ArrowLeft;
                                } else {
                                    ArrowComponent = ArrowDown;
                                    arrowClass += " -rotate-90 md:rotate-0";
                                }
                            }
                        }

                        return (
                            <React.Fragment key={step.id}>
                                {/* Step card */}
                                <div
                                    className={`
                    flex flex-col items-center text-center 
                    bg-white border border-gray-200 rounded-xl 
                    shadow-sm hover:shadow-md transition-shadow p-5
                    ${positionInRow === 0 || positionInRow === 3 ? 'lg:col-start-1 lg:col-end-5' : ''}
                    ${visualRow % 2 === 1 && positionInRow !== 0 && positionInRow !== 3 ? 'lg:-order-1' : ''} 
                  `}
                                >
                                    <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center mb-4 shadow-sm">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                                        {step.title}
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-4 min-h-[3rem]">
                                        {step.description}
                                    </p>

                                    {step.image && (
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full max-w-[180px] h-28 object-cover rounded-lg border border-gray-200"
                                        />
                                    )}
                                </div>

                                {/* Arrow – only between steps */}
                                {ArrowComponent && index < processSteps.length - 1 && (
                                    <div
                                        className={`
                      hidden md:flex items-center justify-center 
                      ${positionInRow === 3 ? 'row-start-auto col-span-full' : ''}
                    `}
                                    >
                                        <ArrowComponent className={arrowClass} />
                                    </div>
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
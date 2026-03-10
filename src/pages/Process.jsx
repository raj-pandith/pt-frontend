import React from 'react';
import {
  Package, FolderOpen, Search, Waves, Shield, Wind,
  CheckCircle, Box, Truck, ArrowRight, Building2, MapPin, ArrowDown, ArrowLeft,
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

const processSteps = [
  {
    id: 1,
    title: "Pickup",
    description: "Scheduled collection from the campus or facility for hassle-free service",
    icon: "package",
    image: "/1.png"
  },
  {
    id: 2,
    title: "Sorting & Coding",
    description: "Garments are sorted and coded for accurate tracking.",
    icon: "folderOpen",
    image: "/2.png"
  },
  {
    id: 3,
    title: "Inspection",
    description: " Items are checked for stains, fabric condition, and special care needs",
    icon: "search",
    image: "/3.png"
  },
  {
    id: 4,
    title: "Washing",
    description: "Washed using RO-treated water at controlled temperatures, eco-friendly detergents, and commercial-grade machines.",
    icon: "waves",
    image: "/4.png"
  },
  {
    id: 8,
    title: "Delivery",
    description: "Securely packed and delivered on time.",
    icon: "box",
    image: "/8.jpg"
  }, {
    id: 7,
    title: "Quality Check",
    description: "Each batch is inspected before dispatch.",
    icon: "checkCircle",
    image: "/7.jpg"
  }, {
    id: 6,
    title: "Drying & Finishing",
    description: "Clothes are dried, pressed, or folded as required.",
    icon: "wind",
    image: "/6.png"
  },
  {
    id: 5,
    title: "Fabric Care",
    description: "Extra care is taken to maintain color, softness, and durability.",
    icon: "shield",
    image: "/5.jpg"
  },



];

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

const Process = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Laundry Process</h1>
          <p className="text-xl md:text-2xl text-sky-100 max-w-3xl mx-auto">
            A systematic, step-by-step approach ensuring quality at every stage
          </p>
          <p className="text-base text-sky-100 leading-relaxed pt-3">
            Our laundry solution delivers clean, fresh, and well-maintained garments with complete reliability. Every step is carefully managed to ensure high hygiene standards, advanced fabric care, and on-time delivery. Using eco-friendly detergents, modern washing techniques, and strict quality checks, we protect fabric life while providing safe, hygienic laundry services. Our efficient pickup and delivery system ensures a hassle-free experience, saving time while maintaining cleanliness and comfort.
          </p>
        </div>
      </section>

      {/* Process Flow Introduction */}
      {/* <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
        </div>
      </section> */}


      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex flex-wrap items-center justify-center gap-8">

            {processSteps.map((step, index) => {
              const Icon = ProcessIcons[step.icon];

              const itemsPerRow = 4;
              const row = Math.floor(index / itemsPerRow);
              const position = index % itemsPerRow;

              let ArrowComponent = ArrowRight;

              // Even row → arrows go right
              if (row % 2 === 0) {
                if (position === itemsPerRow - 1) {
                  ArrowComponent = ArrowDown; // last item → go down
                } else {
                  ArrowComponent = ArrowRight;
                }
              }

              // Odd row → arrows go left
              else {
                if (position === itemsPerRow - 1) {
                  ArrowComponent = ArrowDown;
                } else {
                  ArrowComponent = ArrowLeft;
                }
              }


              return (
                <React.Fragment key={step.id}>

                  {/* Step */}
                  <div className="flex flex-col items-center text-center w-48">

                    <div className="w-16 h-16 rounded-full bg-sky-600 flex items-center justify-center mb-3">
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <h3 className="font-semibold text-gray-900">
                      {step.title}
                    </h3>

                    <p className="text-sm text-gray-600 mt-1">
                      {step.description}
                    </p>

                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-40 h-28 object-cover rounded-md mt-3"
                    />

                  </div>

                  {/* Arrow */}
                  {index !== processSteps.length - 1 && (
                    <ArrowComponent className="w-6 h-6 text-gray-400 hidden md:block" />
                  )}

                </React.Fragment>
              );
            })}

          </div>

        </div>
      </section>


























      {/* Process Highlights */}
      <section className="py-16 lg:py-0 bg-gradient-to-b lg:pt-3 from-blue-50 to-white scale-75">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              What Makes Our Solution Special
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Fabric Safety</h3>
                <p className="text-gray-600">
                  Eco-friendly detergents and gentle handling to preserve fabric quality and color
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Quality Control</h3>
                <p className="text-gray-600">
                  Manual checks at multiple stages to ensure every garment meets our standards
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                  <Truck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Timely Delivery</h3>
                <p className="text-gray-600">
                  Scheduled pickup and delivery to ensure your laundry is always on time
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Operational Setup */}
      <section className="py-12 lg:py-0 lg:pb-6 -m-5 bg-white scale-90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Operational Setup
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer flexible operational models to suit your institution's needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:-m-3">
            <Card className="border-sky-200 shadow-lg bg-sky-50 hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-4">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">On-Campus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We set up laundry units inside your campus so we can process clothes faster,
                  monitor quality easily, and manage daily laundry without delays.
                </p>
              </CardContent>
            </Card>

            <Card className="border-sky-200 bg-sky-50 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Off-Campus</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  We run processing units near your campus with daily pickup and delivery,
                  and we can set up units anywhere in India based on your needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-12 bg-gradient-to-r from-blue-900 to-sky-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Experience Our Solution-Driven Approach
          </h2>
          <p className="text-xl mb-8 text-sky-100">
            Let us handle your laundry with care, consistency, and professionalism
          </p>
          <a href="/contact">
            <button className="bg-white text-sky-600 hover:bg-sky-50 font-semibold px-8 py-4 rounded-lg text-lg inline-flex items-center transition-colors shadow-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </a>
        </div>
      </section>
    </div >
  );
};

export default Process;
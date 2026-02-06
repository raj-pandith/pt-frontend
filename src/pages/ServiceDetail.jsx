import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../mock';
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

// Service-specific content
const serviceContent = {
  'residential-school': {
    subtitle: (
      <>
        <b>Fresh, Clean Uniforms for Happy School Days.</b>
        <br />
        <br />
        We offer a reliable school laundry service designed to support cleanliness, comfort, and discipline. From student uniforms to school bedding, we ensure every item is washed hygienically and handled with care so students look neat and feel confident every day
      </>
    ),
    processTitle: 'How We Handle  Residential School Laundry',
    processDescription:
      'Our school laundry service is built around hygiene, discipline, and consistency. We handle uniforms, bedding, and school textiles with care, ensuring professional washing, drying, and finishing. This reduces hostel staff workload and ensures students always have clean, ready-to-use clothes.',
    whoFor: [
      'Residential Boarding Schools',
      'CBSE / ICSE / State Board Residential Schools',
      'International Schools with Boarding Facilities',
      'Gurukuls & Residential Academies',
      'K–12 Residential Campuses',
    ],
    challenges: [
      { problem: 'Students depend fully on staff', solution: 'Laundry managed externally' },
      { problem: 'Parents worry about cleanliness', solution: 'Hygiene-focused washing methods' },
      { problem: 'Uniforms wear out quickly', solution: 'Gentle, fabric-safe care' },
      { problem: 'Laundry schedules get missed', solution: 'Fixed service routines' },
      { problem: 'Mixing of student clothes', solution: 'Clear tagging & identification' },
      { problem: 'High staff workload', solution: 'Reduced internal handling' }
    ],
    benefits: [
      'Designed with children’s comfort in mind',
      'Suitable for daily uniform use',
      'Consistent service throughout the year',
      'Reduces laundry-related parent concerns',
      'Cleaner hostel environments',
      'Easy coordination with school authorities',
      'Reliable during peak school schedules',
      'Maintains discipline through routine'
    ]
  },
  'pu-laundry': {
    subtitle: (
      <>
        <b>Hygienic, Reliable Laundry Solutions for Residential Academic Excellence
        </b>
        <br />
        <br />
        We provide clean, hygienic, and reliable laundry services for Residential PU Colleges and Integrated Coaching Campuses. Designed for institutions with NEET, JEE, CET, and foundation coaching, our service ensures students receive fresh clothes on time without disrupting their study schedules.
      </>
    ),
    processTitle: 'How We Handle PU Laundry',
    processDescription: (
      <>
        Our structured laundry process is designed for fully residential PU and junior college campuses. With scheduled pickup and delivery, students receive clean clothes without queues or delays, helping management maintain hygiene standards while students stay focused on academics and exam preparation.
      </>
    ),
    whoFor: ['PU Colleges with Integrated NEET Coaching', 'PU Colleges with Integrated JEE / CET Coaching', 'Residential Junior Colleges', 'Pre-University Boarding Campuses', 'Integrated Foundation Academies'],
    challenges: [
      { problem: 'No time for laundry', solution: 'Fully managed service' },
      { problem: 'Lack of washing space', solution: 'Professional infrastructure' },
      { problem: 'Clothes get mixed', solution: 'Proper tagging & tracking' },
      { problem: 'Laundry stress', solution: 'Regular pickup schedules' },
      { problem: 'Hygiene concerns', solution: 'Sanitized wash process' },
      { problem: 'Staff burden', solution: 'End-to-end management' }
    ],
    benefits: [
      'Tailored for Residential PU Campuses',
      'High Hygiene & Safety Standards',
      'Supports Competitive Exam Preparation',
      'Uniform & Hostel Laundry Management',
      'Reliable Weekly Pickup & Delivery',
      'Affordable Institutional Pricing',
      'Improved Hostel Organization',
      'Peace of Mind for Parents & Management'
    ]
  },

  'industrial-laundry': {
    subtitle: (
      <>
        <b>Professional Laundry Solutions for High-Volume Commercial Operations</b>
        <br />
        <br />
        We provide reliable, hygienic, and scalable laundry services for hospitality and industrial institutions, supporting operations where cleanliness, consistency, and turnaround time are critical. From hotels and resorts to manufacturing plants and large corporate campuses, our laundry solutions are designed to handle high-volume, continuous-use environments with efficiency and care.
      </>
    ),
    processTitle: 'How We Handle Hospitality & Industrial Institutions',
    processDescription:
      'Hospitality and industrial facilities require a fast, organized, and dependable laundry system to support daily operations without interruption. Our scheduled pickup and delivery model ensures smooth laundry flow across departments and facilities',
    whoFor: [
      'Hotel linens, bedding, and towels',
      'Staff uniforms and workwear',
      'Industrial and corporate laundry requirements',
      'Bulk laundry for large operational teams',
    ],
    challenges: [
      { problem: 'Large laundry volumes', solution: 'High-capacity processing' },
      { problem: 'Heavy stains', solution: 'Pre-treatment & inspection' },
      { problem: 'Fabric damage', solution: 'Fabric-specific wash cycles' },
      { problem: 'Operational delays', solution: 'Scheduled pickup & delivery' },
      { problem: 'Strict hygiene rules', solution: 'Eco-friendly sanitization' },
      { problem: 'Tracking issues', solution: 'Cloth coding & batch tracking' },
      { problem: 'Extra manpower required', solution: 'Fully outsourced service' }
    ],
    benefits: [
      'Built for High-Volume Operations',
      'Commercial-Grade Hygiene Standards',
      'Fast & Reliable Turnaround Times',
      'Uniform & Linen Management',
      'Scalable Service Models',
      'Cost-Effective Commercial Pricing',
      'Reduced Operational Burden',
      'Consistent Quality & Professional Handling'
    ]
  },
  'universities-laundry': {
    subtitle: (
      <>
        <b>Professional Laundry Services for Higher Education & Healthcare Campuses
        </b>
        <br />
        <br />
        We provide reliable, hygienic, and large-scale laundry services for colleges, universities, and medical & healthcare institutions with hostels, residential blocks, hospitals, clinics, and staff housing. Our laundry solutions are designed to support academic campuses, medical colleges, and healthcare facilities where cleanliness, consistency, and timely service are essential for daily operations.
      </>
    ),
    processTitle: 'How We Handle College Laundry',
    processDescription: (
      <>
        Education and healthcare institutions require a structured, high-capacity laundry system that works without disrupting schedules or compromising hygiene. Our scheduled pickup and delivery model ensures smooth laundry operations across campuses, hostels, hospitals, and residential facilities.
      </>
    ),
    whoFor: ['Engineering Colleges', 'Medical & Dental Colleges', 'Nursing & Paramedical Colleges', 'Degree Colleges', 'Universities & Deemed Universities', 'Autonomous Colleges', 'Institutional Hostels & Student Housing', 'Multi-Speciality Hospitals', 'Super-Speciality Hospitals', 'Clinics & Diagnostic Centres'],
    challenges: [
      { problem: 'No time for laundry', solution: 'Fully managed service' },
      { problem: 'Lack of washing space', solution: 'Professional infrastructure' },
      { problem: 'Clothes get mixed', solution: 'Proper tagging & tracking' },
      { problem: 'Laundry stress', solution: 'Regular pickup schedules' },
      { problem: 'Hygiene concerns', solution: 'Sanitized wash process' },
      { problem: 'Staff burden', solution: 'End-to-end management' }
    ],
    benefits: [
      'Built for Large Institutional Campuse',
      'High Hygiene & Safety Standards',
      'Safe Handling of Medical & Institutional Textiles',
      'Reliable Pickup & Delivery Schedules',
      'Scalable & Centralized Laundry Management',
      'Cost-Effective Institutional Pricing',
      'Reduced Operational & Administrative Load',
      'Peace of Mind for Management, Staff & Parents'
    ]
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  const content = serviceContent[slug];

  if (!service || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/">
            <Button className="bg-sky-600 hover:bg-sky-700">Go Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const {
    subtitle,
    processTitle,
    processDescription,
    whoFor = [],
    challenges = [],
    benefits = []
  } = content;

  const whoWeServeLayout =
    whoFor.length >= 5
      ? 'flex flex-wrap justify-center max-w-6xl'
      : whoFor.length === 4
        ? 'grid sm:grid-cols-2 lg:grid-cols-4 max-w-7xl'
        : 'grid sm:grid-cols-2 lg:grid-cols-3 max-w-4xl';

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-sky-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-700 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-100 items-center">
          <div>
            <Link to="/" className="inline-flex items-center mb-6 text-sky-100 hover:text-white">
              <ArrowLeft className="mr-2" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl mb-8 text-sky-100">{subtitle}</p>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50">
                Get a Quote Today <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>

          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-sm h-64 md:h-80 lg:h-96 object-contain rounded-2xl ml-auto"
          />
        </div>
      </section>

      {/* Process */}
      <section className="py-10 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-4">{processTitle}</h2>
        <p className="max-w-4xl mx-auto text-gray-700">{processDescription}</p>
      </section>

      {/* Who We Serve */}
      <section className="py-10 bg-white">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">Who We Serve</h2>
        <div className={`gap-6 mx-auto ${whoWeServeLayout}`}>
          {whoFor.map((item, i) => (
            <Card
              key={i}
              className={`bg-blue-100 border-sky-100 ${whoFor.length >= 5 ? 'w-full sm:w-[45%] lg:w-[30%]' : ''}`}
            >
              <CardContent className="p-6 text-center">
                <CheckCircle className="mx-auto mb-3 text-sky-600" />
                <p className="font-medium text-gray-700">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-sky-50">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          What Makes Our Service Special
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex gap-3 bg-blue-100 p-5 rounded-xl">
              <CheckCircle className="text-sky-600 mt-1" />
              <span className="text-gray-700">{b}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;

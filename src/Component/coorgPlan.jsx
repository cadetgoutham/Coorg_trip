import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Train,
  MapPin,
  Camera,
  Coffee,
  Mountain,
  Sunset,
  Calendar,
  IndianRupee,
} from 'lucide-react';
import { Link } from 'react-router-dom'

const MysoreCoorgPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Mysore - Coorg Adventure',
      subtitle: '3-Day Itinerary | Dec 18-21, 2024',
      type: 'cover',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'Day 1: Journey to Mysore',
      date: 'December 18',
      dayplan: 'day0',
      content: [
        {
          icon: Train,
          text: '5:50 AM - 12:20 PM: Train to Mysore (Chair Car)',
        },
        { icon: Camera, text: 'Mysore Palace - Royal Architecture' },
        { icon: MapPin, text: "St. Philomena's Church & Nearby Places" },
        { icon: MapPin, text: 'Evening: Travel to Coorg' },
      ],
      type: 'itinerary',
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Day 2: Coorg Exploration',
      date: 'December 19',
      dayplan: 'day1',
      content: [
        {
          icon: Mountain,
          text: 'Mandalpatti Viewpoint - Sunrise Off-road Adventure',
        },
        { icon: MapPin, text: 'Kotte Abbe Falls (Optional)' },
        { icon: Camera, text: 'Madikeri Fort - Historical Site' },
        { icon: Coffee, text: 'Coffee Plantation Tour' },
        { icon: Sunset, text: "Raja's Seat - Sunset Views" },
      ],
      type: 'itinerary',
      gradient: 'from-green-500 to-teal-600',
    },
    {
      title: 'Day 3: Coorg Continued',
      date: 'December 20',
      dayplan: 'day1',
      content: [
        { icon: MapPin, text: 'Dubare Elephant Camp - Wildlife Experience' },
        { icon: Camera, text: 'Golden Temple - Tibetan Architecture' },
        { icon: MapPin, text: 'Nisargadhama Forest Park (Optional)' },
        { icon: Sunset, text: 'Chiklihole Reservoir - Sunset' },
        { icon: MapPin, text: 'Explore Places En Route' },
      ],
      type: 'itinerary',
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      title: 'Return Journey',
      date: 'December 21',
      dayplan: 'day1',
      content: [
        { icon: Train, text: '5:15 AM: Train to Chennai (Second Sitting)' },
        { icon: MapPin, text: 'Trip Concludes with Amazing Memories!' },
      ],
      type: 'itinerary',
      gradient: 'from-indigo-500 to-blue-600',
    },
    {
      title: 'Budget Breakdown',
      subtitle: 'Per Person for 3 Days',
      type: 'budget',
      gradient: 'from-emerald-500 to-green-600',
      expenses: [
        { category: 'Train Travel (To & Fro)', amount: '₹1,500' },
        { category: 'Accommodation', amount: '₹2,000' },
        { category: 'Tempo/Transport', amount: '₹2,500' },
        { category: 'Food (3 Days)', amount: '₹2,500 - ₹3,000' },
        { category: 'Entry Fees', amount: '₹500 - ₹1,000' },
      ],
      total: '₹9,000 - ₹10,000',
    },
    {
      title: 'Trip Highlights',
      type: 'highlights',
      gradient: 'from-pink-500 to-rose-600',
      highlights: [
        {
          icon: Mountain,
          title: 'Adventure',
          desc: 'Off-road experiences & viewpoints',
        },
        {
          icon: Coffee,
          title: 'Culture',
          desc: 'Coffee plantations & local heritage',
        },
        {
          icon: Camera,
          title: 'Photography',
          desc: 'Stunning sunrises & sunsets',
        },
        { icon: MapPin, title: 'Nature', desc: 'Forests, falls & wildlife' },
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-90`}
        ></div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center p-12 text-white">
          {slide.type === 'cover' && (
            <div className="text-center space-y-6">
              <h1 className="text-7xl font-bold mb-4">{slide.title}</h1>
              <p className="text-3xl opacity-90">{slide.subtitle}</p>
              <div className="mt-12 flex gap-8 justify-center">
                <div className="flex items-center gap-2">
                  <Calendar className="w-8 h-8" />
                  <span className="text-xl">3 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-8 h-8" />
                  <span className="text-xl">2 Destinations</span>
                </div>
                <div className="flex items-center gap-2">
                  <IndianRupee className="w-8 h-8" />
                  <span className="text-xl">₹7.5k - ₹9.5k</span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'itinerary' && (
            <div className="max-w-4xl w-full space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-6xl font-bold mb-2">{slide.title}</h2>
                <p className="text-2xl opacity-90">{slide.date}</p>
                <Link to={slide.dayplan} className="mt-4 inline-block text-xl underline font-bold opacity-75 text-white"><p>Day Plan</p></Link>
              </div>
              <div className="space-y-4">
                {slide.content.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 bg-white/10 backdrop-blur-sm p-6 rounded-lg"
                  >
                    <item.icon className="w-8 h-8 flex-shrink-0 mt-1" />
                    <p className="text-2xl">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {slide.type === 'budget' && (
            <div className="max-w-4xl w-full space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-6xl font-bold mb-2">{slide.title}</h2>
                <p className="text-2xl opacity-90">{slide.subtitle}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-4">
                {slide.expenses.map((expense, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-4 border-b border-white/20"
                  >
                    <span className="text-2xl">{expense.category}</span>
                    <span className="text-2xl font-semibold">
                      {expense.amount}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-6 mt-4">
                  <span className="text-3xl font-bold">Total Budget</span>
                  <span className="text-4xl font-bold text-yellow-300">
                    {slide.total}
                  </span>
                </div>
              </div>
            </div>
          )}

          {slide.type === 'highlights' && (
            <div className="max-w-5xl w-full space-y-8">
              <h2 className="text-6xl font-bold text-center mb-12">
                {slide.title}
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {slide.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center space-y-4"
                  >
                    <highlight.icon className="w-16 h-16 mx-auto" />
                    <h3 className="text-3xl font-bold">{highlight.title}</h3>
                    <p className="text-xl opacity-90">{highlight.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-gray-800 p-6 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
          <span className="text-white font-medium">Previous</span>
        </button>

        <div className="flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentSlide ? 'bg-white w-8' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
        >
          <span className="text-white font-medium">Next</span>
          <ChevronRight className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Slide Counter */}
      <div className="absolute bottom-24 right-8 text-white text-lg bg-black/30 px-4 py-2 rounded-lg backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </div>
  );
};

export default MysoreCoorgPresentation;

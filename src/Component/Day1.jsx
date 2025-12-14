import React, { useState } from 'react';
import { Sunrise, Droplets, Coffee, Crown, Castle, Utensils, Church, Trees, Moon, Hotel, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom'

const Day1Itinerary = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const itinerary = [
    {
      time: '4:30 AM',
      title: 'Wake Up',
      icon: Moon,
      color: 'bg-indigo-500',
      details: 'Start your adventure early!',
      travel: null
    },
    {
      time: '5:00 AM',
      title: 'Jeep Safari Start',
      icon: Navigation,
      color: 'bg-orange-500',
      details: 'Adventure begins with an exciting jeep safari',
      travel: '18 km travel'
    },
    {
      time: '6:00 AM',
      title: 'Mandalpatti View Point',
      icon: Sunrise,
      color: 'bg-amber-500',
      details: 'Watch the breathtaking sunrise from the viewpoint',
      travel: null,
      highlight: '🌅 Sunrise Viewing'
    },
    {
      time: '7:00 AM',
      title: 'Starting for Kotte Abbe Falls',
      icon: Navigation,
      color: 'bg-blue-400',
      details: 'Heading to the beautiful waterfall',
      travel: '8 km travel'
    },
    {
      time: '7:30 AM',
      title: 'Kotte Abbe Falls',
      icon: Droplets,
      color: 'bg-cyan-500',
      details: 'Enjoy bathing in the refreshing falls',
      travel: null,
      duration: '1.5 hours',
      highlight: '💦 Waterfall Bath'
    },
    {
      time: '9:00 AM',
      title: 'Return to Hotel',
      icon: Hotel,
      color: 'bg-purple-500',
      details: 'Head back for breakfast',
      travel: '24 km travel'
    },
    {
      time: '10:00 AM',
      title: 'Breakfast at Hotel',
      icon: Coffee,
      color: 'bg-amber-600',
      details: 'Energize yourself with a hearty breakfast',
      travel: null,
      duration: '1 hour'
    },
    {
      time: '11:00 AM',
      title: 'Raja\'s Seat',
      icon: Crown,
      color: 'bg-yellow-500',
      details: 'Visit the scenic garden with panoramic valley views',
      travel: '3 km travel',
      duration: '40 minutes'
    },
    {
      time: '12:00 PM',
      title: 'Madikeri Fort',
      icon: Castle,
      color: 'bg-red-500',
      details: 'Explore the historic fort and museum',
      travel: '950 m travel',
      duration: '50 minutes'
    },
    {
      time: '1:00 PM',
      title: 'Lunch - Coorg Cuisine',
      icon: Utensils,
      color: 'bg-green-600',
      details: 'Savor authentic Coorg flavors',
      travel: '450 m from fort',
      duration: '1 hour',
      highlight: '🍛 Local Cuisine'
    },
    {
      time: '2:00 PM',
      title: 'Raja\'s Tomb',
      icon: Church,
      color: 'bg-stone-600',
      details: 'Visit the beautiful Indo-Saracenic architecture',
      travel: '1.5 km travel',
      duration: '50 minutes'
    },
    {
      time: '3:00 PM',
      title: 'Golden Temple (Namdroling)',
      icon: Church,
      color: 'bg-yellow-600',
      details: 'Visit the magnificent Tibetan monastery',
      travel: '33 km travel',
      duration: '1 hour',
      highlight: '🏛️ Must Visit!'
    },
    {
      time: '5:30 PM',
      title: 'Chiklihole Reservoir',
      icon: Trees,
      color: 'bg-blue-600',
      details: 'Beautiful sunset views by the water',
      travel: '19 km travel',
      duration: '1 hour',
      highlight: '🌇 Sunset Point'
    },
    {
      time: '7:00 PM',
      title: 'Return to Hotel',
      icon: Hotel,
      color: 'bg-indigo-600',
      details: 'End of Day 1 activities',
      travel: '29 km travel'
    },
    {
      time: '8:30 PM',
      title: 'Reaching Hotel',
      icon: Hotel,
      color: 'bg-purple-700',
      details: 'Rest and relax after an amazing day!',
      travel: null,
      highlight: '😴 Rest Time'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-6 w-full">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Coorg Adventure - Day 1d
          </h1>
          <p className="text-xl text-gray-600 mb-1">Thursday, December 19, 2025</p>
          <p className="text-sm text-gray-500">Complete Itinerary with Timings</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Sunrise className="mx-auto mb-2 text-amber-500" size={32} />
            <h3 className="font-bold text-gray-800">Early Start</h3>
            <p className="text-sm text-gray-600">4:30 AM Wake Up</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Navigation className="mx-auto mb-2 text-blue-500" size={32} />
            <h3 className="font-bold text-gray-800">Total Distance</h3>
            <p className="text-sm text-gray-600">~107.5 km</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Castle className="mx-auto mb-2 text-red-500" size={32} />
            <h3 className="font-bold text-gray-800">Places to Visit</h3>
            <p className="text-sm text-gray-600">8 Attractions</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Detailed Schedule
          </h2>
          
          <div className="relative">
            {itinerary.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === itinerary.length - 1;
              const isExpanded = expandedItem === index;
              
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-gray-400 z-0"></div>
                  )}
                  
                  {/* Timeline Item */}
                  <div 
                    className="flex items-start gap-4 mb-6 relative z-10 cursor-pointer"
                    onClick={() => setExpandedItem(isExpanded ? null : index)}
                  >
                    <div className={`${item.color} rounded-full p-3 shadow-lg flex-shrink-0`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    
                    <div className="flex-1 bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold mb-2">
                            {item.time}
                          </span>
                          <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
                        </div>
                        {item.highlight && (
                          <span className="text-2xl">{item.highlight.split(' ')[0]}</span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 mb-2">{item.details}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {item.travel && (
                          <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-semibold">
                            📍 {item.travel}
                          </span>
                        )}
                        {item.duration && (
                          <span className="inline-block px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                            ⏱️ {item.duration}
                          </span>
                        )}
                        {item.highlight && (
                          <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 rounded text-xs font-semibold">
                            {item.highlight}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Important Notes */}
        <div className="mt-6 space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>⚠️ Note:</strong> This is a packed schedule. Be prepared for an early start and long day!
            </p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 Tips:</strong> Carry water, snacks, sunscreen, and comfortable walking shoes. Keep camera charged for sunrise!
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>✅ Highlights:</strong> Sunrise at Mandalpatti | Waterfall Bath | Coorg Cuisine | Golden Temple | Sunset at Reservoir
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1Itinerary;
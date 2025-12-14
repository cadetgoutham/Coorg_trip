import React from 'react';
import { Train, Utensils, Castle, Church, Coffee, MapPin, Clock } from 'lucide-react';

const Day0Itinerary = () => {
  const itinerary = [
    {
      time: '4:00 AM',
      title: 'Start from Home',
      icon: MapPin,
      color: 'bg-indigo-600',
      details: 'Early morning departure to catch the train',
      travel: null
    },
    {
      time: '~5:00 AM',
      title: 'Reach Chennai Central',
      icon: Train,
      color: 'bg-blue-500',
      details: 'Arrive at Chennai Central Railway Station',
      travel: null
    },
    {
      time: '5:50 AM',
      title: 'Board Train to Mysore',
      icon: Train,
      color: 'bg-green-600',
      details: 'Train departure from Chennai Central',
      travel: 'Journey to Mysore',
      highlight: '🚂 Train Journey'
    },
    {
      time: 'During Journey',
      title: 'Breakfast on Train',
      icon: Utensils,
      color: 'bg-orange-500',
      details: 'Breakfast will be provided in the train',
      travel: null,
      highlight: '🍳 Breakfast Included'
    },
    {
      time: '12:20 PM',
      title: 'Arrive at Mysore',
      icon: Train,
      color: 'bg-purple-600',
      details: 'Train reaches Mysore Junction',
      travel: '~6.5 hours journey'
    },
    {
      time: '1:00 PM',
      title: 'Lunch at Hanumanthu Restaurant',
      icon: Utensils,
      color: 'bg-red-500',
      details: 'Enjoy authentic Mysore cuisine',
      travel: 'From Mysore Railway Station',
      duration: '~1 hour',
      highlight: '🍛 Local Restaurant'
    },
    {
      time: '2:30 PM',
      title: 'Mysore Palace',
      icon: Castle,
      color: 'bg-yellow-600',
      details: 'Visit the magnificent Mysore Palace - one of India\'s most visited monuments',
      travel: null,
      duration: '~2 hours',
      highlight: '🏰 Must Visit!'
    },
    {
      time: '4:30 PM',
      title: 'Philomena\'s Church',
      icon: Church,
      color: 'bg-blue-600',
      details: 'Beautiful neo-gothic style cathedral',
      travel: null,
      duration: '~45 minutes'
    },
    {
      time: '5:30 PM',
      title: 'Guru Sweet Shop',
      icon: Coffee,
      color: 'bg-amber-600',
      details: 'Famous for Mysore Pak and other traditional sweets',
      travel: null,
      duration: '~30 minutes',
      highlight: '🍬 Famous Sweets'
    },
    {
      time: '6:30 PM',
      title: 'Journey to Coorg Starts',
      icon: MapPin,
      color: 'bg-indigo-700',
      details: 'Start journey from Mysore to Coorg',
      travel: '~120 km to Coorg',
      highlight: '🚗 Road Trip'
    },
    {
      time: '8:00 PM',
      title: 'Dinner En Route',
      icon: Utensils,
      color: 'bg-orange-600',
      details: 'Dinner stop on the way to Coorg',
      travel: null,
      duration: '~45 minutes',
      highlight: '🍽️ Dinner Break'
    },
    {
      time: '9:30 - 10:30 PM',
      title: 'Reach Coorg & Check-in',
      icon: MapPin,
      color: 'bg-green-700',
      details: 'Arrive at Coorg hotel and check-in for the night',
      travel: null,
      highlight: '🏨 Hotel Check-in'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold mb-3">
            DAY 0 - TRAVEL DAY
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Chennai to Mysore Journey
          </h1>
          <p className="text-xl text-gray-600 mb-1">Wednesday, December 18, 2025</p>
          <p className="text-sm text-gray-500">Train Journey & Mysore Sightseeing</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Clock className="mx-auto mb-2 text-indigo-500" size={32} />
            <h3 className="font-bold text-gray-800">Departure</h3>
            <p className="text-sm text-gray-600">4:00 AM Start</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Train className="mx-auto mb-2 text-green-500" size={32} />
            <h3 className="font-bold text-gray-800">Train</h3>
            <p className="text-sm text-gray-600">5:50 AM - 12:20 PM</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Castle className="mx-auto mb-2 text-yellow-500" size={32} />
            <h3 className="font-bold text-gray-800">Mysore Sights</h3>
            <p className="text-sm text-gray-600">3 Attractions</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 text-center">
            <Utensils className="mx-auto mb-2 text-red-500" size={32} />
            <h3 className="font-bold text-gray-800">Meals</h3>
            <p className="text-sm text-gray-600">3 Meals Planned</p>
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
              
              return (
                <div key={index} className="relative">
                  {/* Connection Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-gray-400 z-0"></div>
                  )}
                  
                  {/* Timeline Item */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
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
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>⏰ Early Morning Alert:</strong> Wake up by 3:30 AM to ensure you reach Chennai Central on time!
            </p>
          </div>
          
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>🚂 Train Details:</strong> Chennai Central to Mysore - Departure: 5:50 AM | Arrival: 12:20 PM | Duration: ~6.5 hours
            </p>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>💡 What to Carry:</strong> Valid ID for train travel, comfortable clothes, water bottle, snacks, phone charger, camera
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>🚗 Mysore to Coorg:</strong> ~120 km journey | Departure: 6:30 PM | Dinner en route | Reach Coorg: 9:30-10:30 PM
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
            <p className="text-sm text-gray-700">
              <strong>💤 Rest Well:</strong> Early check-in at Coorg hotel. Get good sleep for Day 1's 4:30 AM wake-up call for the adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day0Itinerary;
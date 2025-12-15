import React, { useState } from 'react';
import { Sunrise, Droplets, Coffee, Castle, Utensils, Church, Trees, Moon, Hotel, Navigation, Crown, Mountain, Users, MapPin } from 'lucide-react';

const CompleteItinerary = () => {
  const [selectedDay, setSelectedDay] = useState('day0');

  const day0Itinerary = [
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
      icon: Navigation,
      color: 'bg-blue-500',
      details: 'Arrive at Chennai Central Railway Station',
      travel: null
    },
    {
      time: '5:50 AM',
      title: 'Board Train to Mysore',
      icon: Navigation,
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
      highlight: '🍳 Breakfast'
    },
    {
      time: '12:20 PM',
      title: 'Arrive at Mysore',
      icon: Navigation,
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
      highlight: '🍛 Local Food'
    },
    {
      time: '2:30 PM',
      title: 'Mysore Palace',
      icon: Castle,
      color: 'bg-yellow-600',
      details: 'Visit the magnificent Mysore Palace',
      travel: null,
      duration: '~2 hours',
      highlight: '🏰 Must Visit'
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
      details: 'Famous for Mysore Pak and traditional sweets',
      travel: null,
      duration: '~30 minutes',
      highlight: '🍬 Sweets'
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
      highlight: '🍽️ Dinner'
    },
    {
      time: '9:30 - 10:30 PM',
      title: 'Reach Coorg & Check-in',
      icon: Hotel,
      color: 'bg-green-700',
      details: 'Arrive at Coorg hotel and check-in',
      travel: null,
      highlight: '🏨 Check-in'
    }
  ];

  const day1Itinerary = [
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
      highlight: '🌅 Sunrise'
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
      highlight: '💦 Waterfall'
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
      title: 'Raja\'s Tomb',
      icon: Church,
      color: 'bg-stone-600',
      details: 'Visit the beautiful Indo-Saracenic architecture',
      travel: '1.5 km travel',
      duration: '50 minutes'
    },
    {
      time: '12:00 PM',
      title: 'Lunch - Coorg Cuisine',
      icon: Utensils,
      color: 'bg-green-600',
      details: 'Savor authentic Coorg flavors',
      travel: '450 m from Madikeri Fort',
      duration: '1 hour',
      highlight: '🍛 Local Food'
    },
    {
      time: '1:00 PM',
      title: 'Golden Temple (Namdroling)',
      icon: Church,
      color: 'bg-yellow-600',
      details: 'Visit the magnificent Tibetan monastery',
      travel: '33 km travel',
      duration: '1 hour',
      highlight: '🏛️ Must Visit'
    },
    {
      time: '3:15 PM',
      title: 'Dubare Elephant Camp',
      icon: Users,
      color: 'bg-green-700',
      details: 'Interactive experience with elephants',
      travel: '19 km travel',
      duration: '1 hour',
      highlight: '🐘 Elephants'
    },
    {
      time: '5:00 PM',
      title: 'Chiklihole Reservoir',
      icon: Trees,
      color: 'bg-blue-600',
      details: 'Beautiful sunset views by the water',
      travel: '7 km travel',
      duration: '30 minutes',
      highlight: '🌇 Sunset'
    },
    {
      time: '6:00 PM',
      title: 'Return to Hotel',
      icon: Hotel,
      color: 'bg-indigo-600',
      details: 'Head back after an amazing day',
      travel: '29 km travel'
    },
    {
      time: '7:30 PM',
      title: 'Reaching Hotel',
      icon: Hotel,
      color: 'bg-purple-700',
      details: 'Rest and relax for tomorrow\'s trek!',
      travel: null,
      highlight: '😴 Rest'
    }
  ];

  const day2Itinerary = [
    {
      time: '6:00 AM',
      title: 'Wake Up & Breakfast',
      icon: Coffee,
      color: 'bg-amber-600',
      details: 'Early breakfast at hotel before checkout',
      travel: null,
      duration: '~1 hour'
    },
    {
      time: '7:00 AM',
      title: 'Pack & Prepare for Checkout',
      icon: Hotel,
      color: 'bg-indigo-500',
      details: 'Pack luggage and prepare for 10 AM checkout',
      travel: null
    },
    {
      time: '8:00 AM',
      title: 'Starting for Tadiandamol Peak',
      icon: Navigation,
      color: 'bg-orange-500',
      details: 'Journey to the highest peak in Coorg',
      travel: '44 km travel'
    },
    {
      time: '9:30 AM',
      title: 'Tadiandamol Trek Starts',
      icon: Mountain,
      color: 'bg-green-600',
      details: 'Begin the 14 km trek (up and down)',
      travel: null,
      duration: '~5 hours',
      highlight: '⛰️ Trekking'
    },
    {
      time: '2:30 PM',
      title: 'Trek Completed',
      icon: Mountain,
      color: 'bg-green-700',
      details: 'Trek completed - heading for lunch',
      travel: null,
      highlight: '✅ Done'
    },
    {
      time: '3:00 PM',
      title: 'Lunch',
      icon: Utensils,
      color: 'bg-red-500',
      details: 'Well-deserved meal after the trek',
      travel: 'At nearby restaurant',
      duration: '1 hour',
      highlight: '🍽️ Lunch'
    },
    {
      time: '4:00 PM',
      title: 'Starting to Madikeri',
      icon: Navigation,
      color: 'bg-blue-500',
      details: 'Journey to Madikeri for sightseeing',
      travel: '44 km travel'
    },
    {
      time: '5:00 PM',
      title: 'Madikeri Fort',
      icon: Castle,
      color: 'bg-red-600',
      details: 'Explore the historic fort and museum',
      travel: '500 m travel',
      duration: '1 hour'
    },
    {
      time: '6:00 PM',
      title: 'Raja\'s Seat',
      icon: Crown,
      color: 'bg-yellow-500',
      details: 'Visit the scenic garden with panoramic valley views',
      travel: '1 km travel',
      duration: '50 minutes',
      highlight: '👑 Royal View'
    },
    {
      time: '7:00 PM',
      title: 'Return Journey to Mysore',
      icon: Navigation,
      color: 'bg-indigo-600',
      details: 'Journey back to Mysore',
      travel: '~120 km travel',
      highlight: '🚗 Road Trip'
    },
    {
      time: '8:00 PM',
      title: 'Dinner En Route',
      icon: Utensils,
      color: 'bg-orange-600',
      details: 'Dinner stop on the way',
      travel: null,
      duration: '~1 hour',
      highlight: '🍽️ Dinner'
    },
    {
      time: '10:00 PM',
      title: 'Reach Mysore & Hotel',
      icon: Hotel,
      color: 'bg-purple-700',
      details: 'Arrive at Mysore and check-in to hotel',
      travel: null,
      highlight: '🏨 Check-in'
    }
  ];

  const currentItinerary = selectedDay === 'day0' ? day0Itinerary : selectedDay === 'day1' ? day1Itinerary : day2Itinerary;
  const dayTitle = selectedDay === 'day0' ? 'Day 0 - December 18, 2025' : selectedDay === 'day1' ? 'Day 1 - December 19, 2025' : 'Day 2 - December 20, 2025';
  const daySubtitle = selectedDay === 'day0' ? 'Chennai to Mysore Journey' : selectedDay === 'day1' ? 'Adventure & Sightseeing' : 'Trekking & Return Journey';

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Coorg Complete Itinerary
          </h1>
          
          {/* Day Selector */}
          <div className="flex gap-4 justify-center mb-4">
            <button
              onClick={() => setSelectedDay('day0')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDay === 'day0'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Day 0 - Dec 18
            </button>
            <button
              onClick={() => setSelectedDay('day1')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDay === 'day1'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Day 1 - Dec 19
            </button>
            <button
              onClick={() => setSelectedDay('day2')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedDay === 'day2'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              Day 2 - Dec 20
            </button>
          </div>

          <p className="text-xl text-gray-600 mb-1">{dayTitle}</p>
          <p className="text-sm text-gray-500">{daySubtitle}</p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {selectedDay === 'day0' ? (
            <>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Moon className="mx-auto mb-2 text-indigo-500" size={32} />
                <h3 className="font-bold text-gray-800">Departure</h3>
                <p className="text-sm text-gray-600">4:00 AM Start</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Navigation className="mx-auto mb-2 text-green-500" size={32} />
                <h3 className="font-bold text-gray-800">Train Journey</h3>
                <p className="text-sm text-gray-600">5:50 AM - 12:20 PM</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Castle className="mx-auto mb-2 text-yellow-500" size={32} />
                <h3 className="font-bold text-gray-800">Mysore Sights</h3>
                <p className="text-sm text-gray-600">3 Attractions</p>
              </div>
            </>
          ) : selectedDay === 'day1' ? (
            <>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Sunrise className="mx-auto mb-2 text-amber-500" size={32} />
                <h3 className="font-bold text-gray-800">Early Start</h3>
                <p className="text-sm text-gray-600">4:30 AM Wake Up</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Church className="mx-auto mb-2 text-yellow-500" size={32} />
                <h3 className="font-bold text-gray-800">Attractions</h3>
                <p className="text-sm text-gray-600">7 Places</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Users className="mx-auto mb-2 text-green-500" size={32} />
                <h3 className="font-bold text-gray-800">Highlight</h3>
                <p className="text-sm text-gray-600">Elephant Camp</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Mountain className="mx-auto mb-2 text-green-600" size={32} />
                <h3 className="font-bold text-gray-800">Trek</h3>
                <p className="text-sm text-gray-600">Tadiandamol Peak</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Navigation className="mx-auto mb-2 text-blue-500" size={32} />
                <h3 className="font-bold text-gray-800">Total Distance</h3>
                <p className="text-sm text-gray-600">~208 km</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <Castle className="mx-auto mb-2 text-red-500" size={32} />
                <h3 className="font-bold text-gray-800">Sightseeing</h3>
                <p className="text-sm text-gray-600">2 Places</p>
              </div>
            </>
          )}
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Detailed Schedule
          </h2>
          
          <div className="relative">
            {currentItinerary.map((item, index) => {
              const Icon = item.icon;
              const isLast = index === currentItinerary.length - 1;
              
              return (
                <div key={index} className="relative">
                  {!isLast && (
                    <div className="absolute left-6 top-16 w-0.5 h-20 bg-gradient-to-b from-gray-300 to-gray-400 z-0"></div>
                  )}
                  
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
          {selectedDay === 'day0' ? (
            <>
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
                  <strong>💤 Rest Well:</strong> Early check-in at Coorg hotel. Get good sleep for Day 1's 4:30 AM wake-up!
                </p>
              </div>
            </>
          ) : selectedDay === 'day1' ? (
            <>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Note:</strong> Early 4:30 AM start for sunrise at Mandalpatti. Get good sleep the night before!
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>💡 Tips:</strong> Carry water, swimwear for falls, sunscreen, and camera. Elephant camp may require advance booking.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>✅ Highlights:</strong> Sunrise at Mandalpatti | Waterfall Bath | Golden Temple | Elephant Camp | Sunset at Reservoir
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>⚠️ Trek Day:</strong> 14 km trek takes ~5 hours. Wear proper trekking shoes and carry 2L water, energy snacks, and first aid.
                </p>
              </div>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>💡 Remember:</strong> Not compulsory to reach the top! Can stop at 5 km for views and save time. Trail has scenic spots throughout.
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded-r-lg">
                <p className="text-sm text-gray-700">
                  <strong>🚗 Return Journey:</strong> ~120 km to Mysore. Dinner en route. Late arrival at 10 PM - rest well after the trek!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompleteItinerary;
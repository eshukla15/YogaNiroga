import { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink, Linkedin, Award, Play, Pause } from 'lucide-react';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const testimonials = [
    {
  id: 1,
  name: "Aarav Mehta",
  place: "Delhi",
  content: "Yoganiroga has completely changed my mornings. I feel more energetic and focused throughout the day.",
  rating: 5,
  gradient: "from-green-400 to-blue-500",
  avatar: "AM",
  address: "Bengaluru, 28"
},
{
  id: 2,
  name: "Priya Sharma",
  place: "Lucknow",
  content: "The sessions at Yoganiroga bring peace and balance. My mind feels calm and my body stronger.",
  rating: 5,
  gradient: "from-rose-400 to-orange-500",
  avatar: "PS",
  address: "Bengaluru, 28"
},
{
  id: 3,
  name: "Ritu Malhotra",
  place: "Mumbai",
  content: "The instructors here are patient and supportive. Every session feels healing and refreshing.",
  rating: 5,
  gradient: "from-indigo-400 to-purple-600",
  avatar: "RM",
  address: "Bengaluru, 28"
},
{
  id: 4,
  name: "Neha Patel",
  place: "Pune",
  content: "Yoganiroga helped me become more self-aware and present. It’s more than just yoga—it’s transformation.",
  rating: 5,
  gradient: "from-emerald-400 to-teal-500",
  avatar: "NP",
  address: "Bengaluru, 28"
},
{
  id: 5,
  name: "Rakesh Verma",
  place: "Bangalore",
  content: "Regular sessions helped me get rid of years of back pain. I feel healthier and more active than ever.",
  rating: 5,
  gradient: "from-yellow-400 to-orange-500",
  avatar: "RV",
  address: "Bengaluru, 28"
},
{
  id: 6,
  name: "Simran Kaur",
  place: "Chandigarh",
  content: "A wonderful mix of traditional yoga and modern wellness practices. I look forward to every class.",
  rating: 5,
  gradient: "from-pink-400 to-fuchsia-600",
  avatar: "SK",
  address: "Bengaluru, 28"
},
{
  id: 7,
  name: "Meera Joshi",
  place: "Jaipur",
  content: "Yoganiroga feels like a calm retreat in the middle of daily chaos. The environment is truly peaceful.",
  rating: 5,
  gradient: "from-cyan-400 to-blue-500",
  avatar: "MJ",
  address: "Bengaluru, 28"
},
{
  id: 8,
  name: "Aditya Singh",
  place: "Noida",
  content: "My flexibility and focus improved a lot within just a few weeks of joining Yoganiroga.",
  rating: 5,
  gradient: "from-lime-400 to-green-500",
  avatar: "AS",
  address: "Bengaluru, 28"
},
{
  id: 9,
  name: "Tanvi Rao",
  place: "Hyderabad",
  content: "Attending Yoganiroga sessions has become my favorite part of the day. It keeps me balanced and happy.",
  rating: 5,
  gradient: "from-sky-400 to-indigo-500",
  avatar: "TR",
  address: "Bengaluru, 28"
},
{
  id: 10,
  name: "Kavita Nair",
  place: "Kochi",
  content: "Yoganiroga helped me build a healthier lifestyle and a calmer mindset. It’s a holistic experience.",
  rating: 5,
  gradient: "from-violet-400 to-purple-600",
  avatar: "KN",
  address: "Bengaluru, 28"
}

  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsTransitioning(false);
      }, 150);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const changeSlide = (newIndex) => {
    if (newIndex === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsTransitioning(false);
    }, 150);
  };

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    changeSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    changeSlide(newIndex);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            What Our{' '}
            <span className="bg-clip-text ">
              Clients Say
            </span>
          </h2>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-yellow-500 fill-current" />
                ))}
              </div>
              <span className="font-medium">4.8 Rating</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="font-medium">500+ Happy Clients</span>
          </div>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div 
            className={`group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-gray-200/60 dark:border-gray-700/60 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2 ${isTransitioning ? 'opacity-75 scale-[0.98]' : 'opacity-100 scale-100'}`}
          >
           

            <div className="pt-4 sm:pt-6">
              {/* User Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-center text-center mb-4 sm:mb-6">
  <div className="flex flex-col items-center">
    <h3 className="font-semibold text-lg sm:text-xl lg:text-2xl text-gray-900 dark:text-white">
      {currentTestimonial.name}
    </h3>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      {currentTestimonial.address}
    </p>
  </div>
</div>
              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm sm:text-base lg:text-lg mb-4 sm:mb-6">
                <span className="text-4xl sm:text-5xl text-gray-300 dark:text-gray-600 leading-none font-serif mr-1">"</span>
                {currentTestimonial.content}
                <span className="text-4xl sm:text-5xl text-gray-300 dark:text-gray-600 leading-none font-serif ml-1">"</span>
              </blockquote>

            </div>
          </div>

          {/* Desktop Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-8 p-3 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-blue-500 focus:outline-none z-10 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-8 p-3 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:ring-2 focus:ring-blue-500 focus:outline-none z-10 items-center justify-center"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex sm:hidden justify-between items-center mt-6 px-4">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>
          
          
          
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-white/95 dark:bg-gray-800/95 border border-gray-200/60 dark:border-gray-700/60 shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => changeSlide(idx)}
              className={`transition-all duration-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                idx === currentIndex
                  ? `w-8 sm:w-10 h-2 sm:h-2.5 bg-gradient-to-r ${currentTestimonial.gradient}`
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Controls (Desktop) */}
        <div className="hidden sm:flex justify-center mt-6">
          <button
            onClick={toggleAutoPlay}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200/60 dark:border-gray-700/60 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm text-gray-700 dark:text-gray-300"
            aria-label={isAutoPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-3 w-3" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="h-3 w-3" />
                <span>Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
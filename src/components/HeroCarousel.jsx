import React, { useState, useEffect } from 'react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imageLoaded, setImageLoaded] = useState({});
  
  // 测试文字: 9张轮播图，使用不同关键词以获得多样性
  const slides = [
    { id: 1, keyword: 'cinema technology' },
    { id: 2, keyword: 'science art exhibition' },
    { id: 3, keyword: 'digital media installation' },
    { id: 4, keyword: 'experimental film' },
    { id: 5, keyword: 'interactive art' },
    { id: 6, keyword: 'virtual reality cinema' },
    { id: 7, keyword: 'science visualization' },
    { id: 8, keyword: 'art technology fusion' },
    { id: 9, keyword: 'expanded cinema concept' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleImageLoad = (index) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }));
  };

  const handleImageError = (index) => {
    console.error(`Failed to load image for slide ${index}`);
    // 这里可以设置一个默认图片或者错误状态
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* 测试文字: 使用测试图片URL来验证显示 */}
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(slide.keyword)}&width=1920&height=1080&random=${slide.keyword}_1920_1080)`
            }}
          >
            {/* 添加一个备用的测试图片来验证显示 */}
            <img 
              src={`https://www.weavefox.cn/api/bolt/unsplash_image?keyword=${encodeURIComponent(slide.keyword)}&width=1920&height=1080&random=${slide.keyword}_1920_1080`}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              onLoad={() => handleImageLoad(index)}
              onError={() => handleImageError(index)}
              style={{ display: 'none' }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center">
              {/* 测试文字: 页面标题 */}
              <h1 className="text-4xl md:text-6xl font-avenir text-white text-center px-4">
                Expanded Cinema and Science-Art
              </h1>
              <p className="text-xl md:text-2xl font-avenir-light text-white mt-4">
                CMA
              </p>
            </div>
          </div>
        </div>
      ))}
      
      {/* 导航点 */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 transform hover:scale-125 ${
              index === currentSlide 
                ? 'bg-white w-4' 
                : 'bg-white bg-opacity-50 hover:bg-opacity-100'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* 添加一个测试图片来验证显示 */}
      <div className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded">
        <p>Current Slide: {currentSlide + 1}</p>
        <p>Image Loaded: {imageLoaded[currentSlide] ? 'Yes' : 'No'}</p>
      </div>
    </div>
  );
};

export default HeroCarousel;
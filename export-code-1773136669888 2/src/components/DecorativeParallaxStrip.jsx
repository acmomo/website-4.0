import React from 'react';

const DecorativeParallaxStrip = ({ height = "h-64" }) => {
  return (
    <div className={`relative w-[calc(100vw+50px)] -ml-[calc(50vw-50%)] ${height} overflow-hidden`}>
      {/* 背景层 - 静止不动 */}
      <div 
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=abstract+art+background&width=1920&height=600&random=abstract_art_background_1920_600)"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      {/* 中间层 - 静止不动 */}
      <div 
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=geometric+patterns&width=1920&height=600&random=geometric_patterns_1920_600)",
          opacity: 0.7
        }}
      ></div>
      
      {/* 前景层 - 静止不动 */}
      <div 
        className="absolute inset-0 w-[calc(100vw+50px)] h-full bg-contain bg-no-repeat bg-center"
        style={{
          backgroundImage: "url(https://www.weavefox.cn/api/bolt/unsplash_image?keyword=artistic+elements&width=800&height=400&random=artistic_elements_800_400)",
          opacity: 0.8
        }}
      ></div>
    </div>
  );
};

export default DecorativeParallaxStrip;
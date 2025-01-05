import React from "react";


const Footer = () => {
  const getInTouch = {
    show: true,
    heading: "Get In Touch",
    message:
      "I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
    email: "davmishra96@gmail.com",
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-auto py-8 text-center text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {getInTouch.show && (
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">
              {getInTouch.heading}
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto">
              {getInTouch.message}{" "}
              <a
                href={`mailto:${getInTouch.email}`}
                className="text-blue-600 dark:text-blue-400 underline"
              >
                {getInTouch.email}
              </a>
            </p>
          </div>
        )}
        <div className="flex items-center justify-center gap-2 text-sm md:text-base">
          <i className="fas fa-code" />
          <span>with</span>
          <i className="fas fa-heart text-black dark:text-red-400" />
          <span>by</span>
          <a
            rel="noopener noreferrer"
            href="https://github.com/MishraAbhishek07"
            aria-label="My GitHub"
            target="_blank"
            className="font-bold text-sm px-2 text-white bg-black rounded-lg"
          >
            Abhishek Mishra
          </a>
          <span>using</span>
           <i className="fab fa-react" />
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;

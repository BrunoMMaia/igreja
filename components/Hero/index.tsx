import { FaArrowDown } from 'react-icons/fa';
import Link from "next/link";

const Hero = () => {
  return (
    <>
   <section
      id="home"
      className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
      style={{
        backgroundImage: `url('https://igrejaavance.com.br/wp-content/uploads/2023/02/video_AdobeExpress.gif')`,
        backgroundSize: 'cover',
        height: '100vh', // Set the height to 100vh
      }}
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="flex flex-col items-center justify-center h-screen mx-auto">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  href="/blog-details"
                  className="rounded-md bg-black/20 py-4 px-4 w-60 lg:mr-20 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                >
                  Células
                </Link>
                <Link
                  href="https://github.com/NextJSTemplates/startup-nextjs"
                  className="rounded-md bg-black/20  py-4 px-4 w-60 text-base font-semibold text-black duration-300 ease-in-out hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
                >
                  Horários dos cultos
                </Link>
              </div>
            </div>
            {/* Flecha de rolagem para baixo */}
            <div className="animate-bounce absolute bottom-3 left-1/2 transform -translate-x-1/2 flex items-center">
              <a href="#conteudo">
                <FaArrowDown
                  className="text-white text-4xl"
                />
              </a>
            </div>            
          </div>
        </div>
      </div>
   
    </section>
    </>
  );
};

export default Hero;

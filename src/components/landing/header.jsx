import { Fade } from "react-awesome-reveal"

function Header () {
  
    return(
        <header className="sticky top-0 z-50 flex flex-wrap w-full text-sm md:justify-start md:flex-nowrap">
        <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-md mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto h-full ">
        <Fade cascade damping={1e-1} direction='down' triggerOnce={true}>

          <div className="flex items-center justify-left">
            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 27 27" fill="none">
              <path d="M13.5 1L26 22.9699L22.3226 26L15.3108 21.0762H19.3784L13.5 10.4699L7.6402 21.0762H11.6639L4.67737 26L1 22.9699L13.5 1Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
            </svg>

            <a className="flex text-xl font-bold" href="#">EasyTask</a>
          </div>
          <div className="transition-all duration-300 hs-collapse basis-full grow md:block">
            <div className="flex gap-5 mt-5 gap-y-4 gap-x-4 md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a className="flex items-center font-medium gap-x-2 md:my-6 md:ps-6" href="#">
                Login
              </a>

              <a className="flex items-center font-medium gap-x-2 md:border-s md:border-gray-300 md:my-6 md:ps-6" href="#">
                Singup
              </a>
            </div>
          </div>
          </Fade>

        </nav>

      </header>

    );
}

export default Header
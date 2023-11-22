import { Fade } from "react-awesome-reveal"

function Header () {
  
    return(
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm sticky top-0 ">
        <nav className="mt-6 relative max-w-[85rem] w-full bg-white border border-gray-200 rounded-md mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto h-full ">
        <Fade cascade damping={1e-1} direction='down' triggerOnce={true}>

          <div className="flex items-center justify-between">
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 27 27" fill="none">
            <path d="M13.5 1L26 22.9699L22.3226 26L15.3108 21.0762H19.3784L13.5 10.4699L7.6402 21.0762H11.6639L4.67737 26L1 22.9699L13.5 1Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
          </svg>

            <a className="flex text-xl font-bold" href="#">EasyTask</a>

            {/* BOTÃO DO MENU QUE APARECE ABAIXO DOS 768PX */}
            <div className="md:hidden">
              <button type="button" className="hs-collapse-toggle w-8 h-8 flex justify-center items-center text-sm font-semibold rounded-full border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                <svg className="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                <svg className="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
            </div>


          </div>
          <div className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
            <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
              <a className="flex items-center gap-x-2 font-medium md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 " href="#">
                Log in
              </a>
            </div>
          </div>
          </Fade>

        </nav>

      </header>

    );
}

export default Header
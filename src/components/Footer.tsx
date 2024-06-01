import ig from '/images/ig.svg';
import li from '/images/li.svg';
import fb from '/images/fb.svg';
import x from '/images/x.svg';

const Footer = () => {
    return (
        <div className="max-w-screen-sm sm:max-w-screen-lg lg:max-w-screen-2xl h-[20.8rem] bg-local bg-repeat bg-center bg-[url(/images/bg3.svg)] flex flex-col gap-8 justify-center items-center">
            <h1 className="text-white text-2xl font-roca w-[12.1875rem] text-center">{'Join our growing community of 35,000+ alumni'}</h1>
            <button
                className="w-[18.545rem] h-[2.25rem] bg-gradient-to-r from-[#F56563] to-[#E54988] text-white text-sm font-nova font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-[#E54988] hover:to-[#F56563] active:scale-95 active:bg-gradient-to-r active:from-[#D9437D] active:to-[#C63474]"
                type="submit"
                >
                Apply Now
            </button>
            <div className="flex flex-row gap-[1.0843rem]">
                <img src={ig} onClick={()=>window.location.href="https://www.instagram.com/beauty.airblack"} className="cursor-pointer"/>
                <img src={fb} onClick={()=>window.location.href="https://www.facebook.com/beauty.airblack/"} className="cursor-pointer"/>
                <img src={li} onClick={()=>window.location.href="https://www.linkedin.com/company/airblack"} className="cursor-pointer"/>
                <img src={x} onClick={()=>window.location.href="https://x.com/clubairblack"} className="cursor-pointer"/>
            </div>
        </div>
    );
}

export {Footer};
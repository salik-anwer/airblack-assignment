import logo from '/images/logo.svg';

const Header = () => {
    return(
    <div className="bg-local bg-repeat-x bg-[url(/images/bg1.svg)] max-w-screen-sm sm:max-w-screen-lg lg:max-w-screen-2xl h-[7.75rem] sm:max-h-64 bg-black/95 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-3 w-[20.4375rem] sm:max-w-screen-md h-[3.2775rem] sm:h-32">
            <img src={logo} className="max-w-[4.29125rem] h-[1.7775rem] sm:max-w-40 sm:h-12 cursor-pointer" onClick={()=>window.location.href="https://www.airblack.com/"}/>
            <h1 className="text-[0.625rem] sm:text-2xl tracking-[0.139375rem] leading-3 text-white font-medium font-inter">PRESENTS</h1>
        </div>
    </div>);
}   

export {Header};
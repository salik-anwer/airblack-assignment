import vector from '/images/vector.svg';
import zoom from '/images/zoom.svg';
import star2 from '/images/star2.svg';
import people from '/images/people.svg';

const JoinAirblack = () => {
    return (
        <div className="bg-local bg-repeat bg-center bg-[url(/images/bg2.svg)] max-w-screen-sm sm:max-w-screen-lg lg:max-w-screen-2xl h-[18.50875rem] bg-black/95 flex flex-col justify-center items-center gap-8">
            <div className="w-[20.4375rem] flex flex-row gap-[1.5625rem]">
                <img src={vector}/>
                <h1 className="text-[#F5F5F5] text-2xl font-roca w-[11.75rem] text-center">{'Why Should You Join Airblack?'}</h1>
                <img src={vector} className="rotate-180"/>
            </div>
            <div className="flex flex-row gap-[0.6875rem]">
                <div className="flex flex-col justify-between items-center gap-2 h-[4.75875rem] w-[6.5rem] transition-transform duration-300 hover:scale-110">
                    <img src={zoom}/>
                    <p className="font-nova text-center font-normal text-[0.6875rem] text-white leading-4">Do-it-together,<br/>live on zoom</p>
                </div>
                <div className="flex flex-col justify-between items-center gap-2 h-[4.75875rem] w-[6.5rem] transition-transform duration-300 hover:scale-110">
                    <img src={star2}/>
                    <p className="font-nova text-center font-normal text-[0.6875rem] text-white leading-4">4.8/5<br/>Rated Classes</p>
                </div>
                <div className="flex flex-col justify-between items-center gap-2 h-[4.75875rem] w-[6.5rem] transition-transform duration-300 hover:scale-110">
                    <img src={people}/>
                    <p className="font-nova text-center font-normal text-[0.6875rem] text-white leading-4">35000+<br/>Members</p>
                </div>
            </div>
            <button
                className="w-[19.1875rem] h-[2.25rem] bg-gradient-to-r from-[#F56563] to-[#E54988] text-white text-sm font-nova font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:from-[#E54988] hover:to-[#F56563] active:scale-95 active:bg-gradient-to-r active:from-[#D9437D] active:to-[#C63474]"
                type="submit"
                >
                Apply Now
            </button>
        </div>
    );
}

export {JoinAirblack};
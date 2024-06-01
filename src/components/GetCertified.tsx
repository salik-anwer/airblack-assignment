import vector from '/images/vector.svg';
import certified from '/images/certified.svg';

const GetCertified = () => {
    return (
        <div className="h-[25rem] max-w-screen-sm sm:max-w-screen-lg lg:max-w-screen-2xl flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-20 lg:gap-36 bg-black"> 
            <div className="w-[20.4375rem] lg:w-[25rem] flex flex-row gap-[1.5625rem]">
                <img src={vector}/> 
                <h1 className="w-[13.375rem] lg:w-[20rem] text-[#F5F5F5] text-xl lg:text-3xl font-roca text-center">Get Certified From<br/>{`India's Biggest`}<br/>Beauty Platform</h1>
                <img src={vector} className="rotate-180"/>
            </div>
            <img src={certified}/>
        </div>
    );
}

export {GetCertified};
import symbol from '/images/symbol.svg';
import star from '/images/star.svg';
import tick from '/images/tick.svg';

const HeroText = () => {
    return(
        <div className="max-w-[20.435rem] h-[10.3375rem] sm:h-[20rem] flex flex-col gap-[0.75rem] sm:gap-16 items-start text-white">
            <h1 className="font-roca text-2xl sm:text-5xl font-normal h-[3.75rem] sm:h-36">{'Professional Online'}<br/>{'Makeup Course'}</h1>
            <div className="flex flex-row gap-[0.625rem] items-center justify-center">
                <div className="bg-[#FFFFFF24] rounded-[0.3125rem] w-[10.385rem] h-[1.57625rem] py-[0.319375rem] px-[0.6925rem] flex flex-row gap-[0.4375rem] items-center justify-center">
                    <img src={symbol} className="w-3.5 h-3.5"/>
                    <p className="font-nova font-normal text-[0.7rem] leading-[0.7725rem] text-[background: #FAFAFA]">{'Certification Programme'}</p>
                </div>
                <div className='w-[5.1875rem] h-[1rem] flex flex-row gap-[0.25rem] items-center justify-center'>
                    <img src={star} className="h-[0.6875rem] w-[0.6875rem]"/>
                    <p className='font-nova font-normal text-[0.7rem] leading-[0.7725rem] text-[#F7C852]'>{'Rated 4.85/5'}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-row gap-2">
                    <img src={tick} className="w-3.5 h-3.5"/>
                    <p className="font-nova font-normal text-sm text-[#D2D2D2]">{'India’s No.1 Online Makeup Course'}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={tick} className="w-3.5 h-3.5"/>
                    <p className="font-nova font-normal text-sm text-[#D2D2D2]">{'Learn by LIVE Do-it-Together Classes'}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={tick} className="w-3.5 h-3.5"/>
                    <p className="font-nova font-normal text-sm text-[#D2D2D2]">{'Unlimited Practise Session to master skills'}</p>
                </div>
            </div>
        </div>
    );
}

export {HeroText};
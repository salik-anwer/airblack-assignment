import {HeroText} from './HeroText';
import { FormComponent } from './Form';

const Hero = () => {
    return(
        <div className="max-w-screen-sm sm:max-w-screen-lg lg:max-w-screen-2xl h-[42.9rem] sm:h-[36rem] bg-[#0F1014] flex flex-col sm:flex-row gap-6 lg:gap-24 justify-center items-center p-5">
            <HeroText/>
            <FormComponent/>
        </div>
    );
}

export {Hero};
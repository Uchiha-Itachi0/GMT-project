import React, {useEffect, useState} from 'react';
import Clock from './Clock';
import Slider from './Slider';
import ShareButton from './ShareButton';
import Quote from '../QuoteComponent';
import {useLocation} from "react-router-dom";

const TrackingScreen: React.FC = () => {
    const [speed, setSpeed] = useState(1);
    const [glow, setGlow] = useState(false);

    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const speedParam = queryParams.get('speed');
        if (speedParam) {
            setSpeed(Number(speedParam));
        }
    }, [location.search]);

    return (
        <div className="relative bg-white shadow-lg flex flex-col items-center pt-12 min-h-screen w-screen sm:w-[50vw] md:w-[40vw] lg:w-[30vw]">
            <div className={`${glow ? 'bg-black' : 'bg-onboarding-yellow'} absolute px-6 flex flex-col gap-6 items-center top-0 w-full h-[50vh]`}>
                <div className="absolute top-10">
                    <Clock glow={glow} setGlow={setGlow} speed={speed} />
                </div>
            </div>
            <div className="absolute px-6 flex flex-col gap-6 items-center justify-center bottom-0 w-full h-[65vh] rounded-tl-[50px] rounded-tr-[50px] bg-white">
                <Quote />
                <div className="absolute bottom-5 left-5 right-5">
                    <Slider speed={speed} setSpeed={setSpeed} />
                    <ShareButton currentSpeed={speed} />
                </div>

            </div>

        </div>
    );
};

export default TrackingScreen;

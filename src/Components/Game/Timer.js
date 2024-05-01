import { useState, useEffect } from 'react';

const Timer = ({hr = 0, mn = 0, sc = 0}) => {
    const [timerHour, setHour] = useState(0);
    const [timerMin, setMin] = useState(10);
    const [timerSec, setSec] = useState(0);
    const [initialized, setInit] = useState(false);

    useEffect(() => {
        if(!initialized) {
            setHour(hr);
            setMin(mn);
            setSec(sc);
            setInit(true);
        };

        const interval = setInterval(() => {
            let newSeconds = timerSec + 1;
            let newMinutes = timerMin;
            let newHours = timerHour;

            if(newSeconds >= 60) {
                newSeconds = 0;
                newMinutes += 1;
            }

            if(newMinutes >= 60) {
                newMinutes = 0;
                newHours += 1;
            }

            if(newHours !== timerHour) setHour(newHours);
            if(newMinutes !== timerMin) setMin(newMinutes);
            setSec(newSeconds);
        }, 1000);
 
        //Clearing the interval
        return () => clearInterval(interval);
    }, [timerHour, timerMin, timerSec]);

    return (
        <span className="font-mono text-lg">
            <span className="countdown text-accent">
                <span className="text-accent" style={{"--value": timerHour}}></span>
            </span>:
            <span className="countdown text-secondary">
                <span className="text-secondary" style={{"--value": timerMin}}></span>
            </span>:
            <span className="countdown text-primary">
                <span className="text-primary" style={{"--value": timerSec}}></span>
            </span>
        </span>

        // <span className="countdown font-mono text-lg">




        //     <span className="text-accent" style={{"--value": hour}}></span>:
        //     <span className="text-secondary" style={{"--value": min}}></span>:
        //     <span className="text-primary" style={{"--value": sec}}></span>
        // </span>
    )
}

export default Timer;
import { useEffect, useState } from "react";

export function useBattery(){
    const [batteryLevel, setBatteryLevel] = useState(100);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    useEffect(() => {
        const decreaseBattery = setInterval(() => {
            setBatteryLevel((dism) => {
                if(dism > 0){
                    return dism - 1
                }
                clearInterval(decreaseBattery)
                setBackgroundColor('#000')
                return 0
            })
        }, 5000)
        return () => {
            clearInterval(decreaseBattery)
        }
    }, []);
    return [batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor]
}
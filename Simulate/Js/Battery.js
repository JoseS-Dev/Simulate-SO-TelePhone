import { useEffect, useState } from "react";

export function useBattery(){
    const [batteryLevel, setBatteryLevel] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    useEffect(() => {
        const timer = setTimeout(() => {
            setBatteryLevel(100)
        })
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
            clearTimeout(timer)
            clearInterval(decreaseBattery)
        }
    }, []);
    return [batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor]
}
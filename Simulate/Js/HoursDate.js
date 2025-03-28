import { useEffect, useState } from "react";
export function useHoursDate(){
    const [date, setDate] = useState(new Date());
        const [hours, newHours] = useState(date.getHours());
        const [minutes, newMinutes] = useState(date.getMinutes());
        
        useEffect(() => {
            
            const UpdateClock = () => {
                const newDate = new Date();
                if(newDate.getHours() !== hours || newDate.getMinutes() !== minutes){
                    setDate(newDate);
                    newHours(newDate.getHours());
                    newMinutes(newDate.getMinutes());
                }
                setTimeout(UpdateClock, 1000);
            }
            UpdateClock();
            return () => {
                clearTimeout(UpdateClock);
            }
        }, [hours, minutes]);
        const formattedHours = String(hours).padStart(2, '0');
        const formattedMinutes = String(minutes).padStart(2, '0');
        const formattedDate = date.toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' });

        return [formattedHours, formattedMinutes, formattedDate]
}
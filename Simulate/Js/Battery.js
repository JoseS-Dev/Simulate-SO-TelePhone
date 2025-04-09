import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useBattery() {
    const [batteryLevel, setBatteryLevel] = useState(100);
    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [isFirstLoad, setIsFirstLoad] = useState(true); 

    // Cargar el estado guardado al iniciar
    useEffect(() => {
        const loadBatteryState = async () => {
            try {
                const savedLevel = await AsyncStorage.getItem('@batteryLevel');
                const savedColor = await AsyncStorage.getItem('@batteryColor');
                
                if (savedLevel !== null) {
                    setBatteryLevel(parseInt(savedLevel));
                    setBackgroundColor(savedColor || '#fff');
                    setIsFirstLoad(false); 
                } else {
                    setBatteryLevel(100);
                }
            } catch (error) {
                console.error("Error loading battery state:", error);
            }
        };

        loadBatteryState();
    }, []);

    
    useEffect(() => {
        const saveBatteryState = async () => {
            try {
                await AsyncStorage.multiSet([
                    ['@batteryLevel', batteryLevel.toString()],
                    ['@batteryColor', backgroundColor]
                ]);
            } catch (error) {
                console.error("Error saving battery state:", error);
            }
        };

        saveBatteryState();
    }, [batteryLevel, backgroundColor]);

    useEffect(() => {
        const decreaseBattery = setInterval(() => {
            setBatteryLevel((prev) => {
                const newLevel = prev > 0 ? prev - 1 : 0;
                
                if (newLevel <= 10) {
                    setBackgroundColor('#000');
                }
                
                return newLevel;
            });
        }, 5000);

        return () => clearInterval(decreaseBattery);
    }, []);

    return [batteryLevel, setBatteryLevel, backgroundColor, setBackgroundColor];
}
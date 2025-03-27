const key = "a3837aab97b347b0953142056252703";
export async function getClimate(){
    try {
        const respuesta = await fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=Venezuela&aqi=no`);
        if(respuesta.status === 200){
            const data = await respuesta.json();
            const info = {
                Location: data.location.name,
                Temperature: data.current.temp_c + "°C",
                Icon: `https:${data.current.condition.icon}`,
            }
            return info;
        }
    }
    catch (error) {
        console.error("Error fetching climate data:", error);
    }
}
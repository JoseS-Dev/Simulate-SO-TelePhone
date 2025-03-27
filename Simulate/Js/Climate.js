climate = [];
const key = "a3837aab97b347b0953142056252703";
export async function getClimate(){
    try {
        const respuesta = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=Venezuela&aqi=no`);
        if(respuesta.status === 200){
            const data = await respuesta.json();
            climate = data.map((clima) => {
                return {
                    Location: clima.location.name,
                    Temperature: clima.current.temp_c,
                    Condition: clima.current.condition.text,
                    Icon: clima.current.condition.icon,
                }
            })
        }
    }
    catch (error) {
        console.error("Error fetching climate data:", error);
    }
    return climate;
}
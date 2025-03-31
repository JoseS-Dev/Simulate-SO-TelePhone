let userMessage = []
// Mensajes de usuario
const messages = [
    "Hola, ¿cómo estás?",
    "¿Cuando entregas el proyecto?",
    "¿Tienes alguna duda?",
    "¿Te gustaría salir a cenar?",
    "¿Has visto la nueva película?",
    "¿Te gustaría ir al cine?",
    "Si pudieras viajar a cualquier lugar del mundo, ¿a dónde irías y por qué?",
    "¿Cuál es tu comida favorita y por qué?",
    "¿Tienes algún pasatiempo o actividad que te apasione?",
    "¿Cuál es tu libro o película favorita y por qué?",
]
// Funcion para obtener un mensaje aleatorio
function getRandomMessage(){
    const randomUser = Math.floor(Math.random() * messages.length);
    return messages[randomUser];
}
export async function getUserMessage(){
    try{
        let respuesta = await fetch('https://randomuser.me/api/?results=20');
        if(respuesta.status == 200){
            const data = await respuesta.json();
            userMessage = data.results.map((user) => {
                return {
                    id: user.login.uuid,
                    name: user.name.first + ' ' + user.name.last,
                    phone: user.phone,
                    messageUser: getRandomMessage()
                }
            })
            return userMessage;
        }
    }catch(err){
        console.log(`Hubo un error al cargar los datos: ${err}`);
    }
}

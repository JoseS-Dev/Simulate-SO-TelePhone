let ListGmail = []

// Funcion para generar mensajes de Gmail
function GenerateGmailMessage(){
    const Mensajes = [
        "Hola, espero que estés bien. Quería saber si has tenido la oportunidad de revisar el informe que te envié la semana pasada.",
        "¡Saludos! Solo quería recordarte sobre la reunión programada para el jueves a las 3 PM. Por favor, confirma tu asistencia.",
        "Estimado equipo, adjunto el documento con las actualizaciones del proyecto. Cualquier duda, no duden en preguntar.",
        "Hola, me gustaría discutir algunas ideas para el próximo proyecto. ¿Te parece si nos reunimos esta semana?",
        "¡Hola! Solo quería agradecerte por tu ayuda en la presentación. Creo que fue un gran éxito.",
        "Hola, ¿podrías enviarme los datos de ventas del último trimestre? Los necesito para el informe.",
        "Estimado, te escribo para informarte que hemos recibido tu solicitud y estamos procesándola. Te mantendremos informado.",
        "Hola, solo quería confirmar que recibiste mi último correo. Espero tu respuesta.",
        "Saludos, me gustaría programar una llamada para discutir los próximos pasos del proyecto. ¿Cuándo te viene bien?",
        "Hola, te adjunto el archivo que solicitaste. Si necesitas algo más, no dudes en decírmelo."
    ];
    const randomIndex = Math.floor(Math.random() * Mensajes.length);
    return Mensajes[randomIndex];
}

// Funcion para obtener una fecha aleatoria
function DateRandom(){
    const fecha = new Date();
    const randomDays = Math.floor(Math.random() * 30) + 1;
    fecha.setDate(fecha.getDate() - randomDays);
    return fecha.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
}

// Funcion que llama a la API
export async function getGmailMessage(){
    try{
        const respuesta = await fetch('https://randomuser.me/api/?results=20');
        if(respuesta.status == 200){
            const dataGmail = await respuesta.json();
            ListGmail = dataGmail.results.map((user) => {
                return {
                    id: user.login.uuid,
                    Name: user.name.first + ' ' + user.name.last,
                    Date: DateRandom(),
                    Content: GenerateGmailMessage(),
                    Email: user.email
                }
            })
            return ListGmail;
        }
    }catch(err){
        console.log(`Hubo un error al cargar los datos: ${err}`);
    }
}
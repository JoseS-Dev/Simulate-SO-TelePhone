let ListCall = [];
export async function getCall(){
    try{
        const respuesta = await fetch('https://randomuser.me/api/?results=20');
        if(respuesta.status === 200){
            const data = await respuesta.json();
            ListCall = data.results.map((user) => {
                return {
                    id: user.login.uuid,
                    name: user.name.first + ' ' + user.name.last,
                    phone: user.phone
                }
            })
            return ListCall;
        }
    }catch(err){
        console.log(`Hubo un error al cargar los datos: ${err}`);
    }
}
let userMessage = []
async function getUserMessage(){
    try{
        let respuesta = await fetch('https://randomuser.me/api/?results=5000');
        if(respuesta.status == 200){
            let data = await respuesta.json();
            userMessage = data.map(user => {
                return {
                    id: user.login.uuid,
                    name: user.name.first + ' ' + user.name.last,
                    phone: user.phone
                }
            })
            return userMessage;
        }
    }catch(err){
        console.log(`Hubo un error al cargar los datos: ${err}`);
    }
}
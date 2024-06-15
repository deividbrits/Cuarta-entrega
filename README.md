
# API Reserva Hotelera



## Author

- [@deividbrits](https://www.github.com/deividbrits)


## Tech 

Node.Js , Express 


## Explicación
Estimados Coach : 
Paso a dar la informacion de como montar el proyecto. 

## Variables de Entorno 
Paso 1) Crear archivo .env , especificando PORT = 3001. 

Paso 2) Modificar las rutas de archivos require.

Paso 3 ) Instalar librerias : Nodemon, Moment, Express, dotenv.


## EndPoints
Para crear una reserva se utiliza http://localhosy:3001/reserva

Como ejemplo y para efectos de prueba crear reserva con el siguiente JSON con el siguiente formato: 

{
 "hotel" : "Paraiso" ,
 "inicio" : "20-05-24", 
 "fin" : "30-05-24",
 "huespedesNum" : "2A2N" ( lo que quiere decir es 2 adultos , 2 niños),
 "tipoHabitacion":"Doble",
 "estado":"pendiente"
 "pago" :"pendiente"  

}


Para modificar el estado de la reserva es importante saber el numero de ID de la reserva(el cual se muestra en la consola al momento de añadir una reserva) .


Ahora vamos a modificar el estado de la reserva a confirmado con la ruta y su ID , en este caso es 1 http://localhosy:3001/reserva/1 y agregamos el el body , el JSON : 

{
    "estado" : "confirmado"
}

Es importante este paso ya que existe un array solo para reservas confirmadas. 
No obstante por la misma ruta se pueden modificar los otros datos de la reserva ,como el tipoHabitacion, huespedesNum y pago. 


Se pueden realizar busquedas de reservas pendientes con su ID correspondiente  http://localhosy:3001/reserva/

Se pueden realizar busquedas por filtros segun los distintos parametros del modelo Reserva . 

Se pueden eliminar reservas según su ID. 

Como adicional se creo una ruta para añadir usuarios y tambien establecer un rol de ellos (pasajero / admin , etc.)

## Testeo

Para testear la API se utilizó Thunder Client , Postman y Insomnia. 



## Aprendrizaje
Este proyecto se pudo desarrollar una API para reserva hotelera utilizando operaciones CRUD y empleando la tecnologia de Node.Js y el framework Express. 
## Limitaciones
Esta claro que el proyecto no incluyen muchas cosas necesarias para una aplicacion de reservas propiamente tales , como por ejemplo , limitar que solo un usuario registrado pueda eliminar su reserva o que solo el admin tenga la facultad de poder observar y filtrar las reservaciones. 
Muchas otras limitaciones no fueron incluidas en el proyecto en pos de cumplir con los requerimientos solicitados para este. 
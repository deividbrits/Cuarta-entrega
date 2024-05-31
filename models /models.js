class Id {
    constructor (identificador,nombre, email) {
        this.identificador = identificador;
        this.nombre = nombre;
        this.email = email;
    }

    getId () {
        return `Id Reserva : ${this.identificador} , Nombre : ${this.nombre}, Email : ${this.email}`;
    }

    }; 

class Hotel {
    constructor (nameHotel,habitaciones) {
        this.nameHotel = nameHotel;
        this.habitaciones = habitaciones; 
        
    
    }
    getHotel () {
        return `Hotel : ${this.nameHotel} , Habitaciones : ${this.habitaciones}`;
    }
};

class Reserva {
    constructor (inicio, fin,huespedesNum,tipoHabitacion) {
        this.inicio = inicio;
        this.fin = fin;
        this.huespedesNum = huespedesNum;
        this.tipoHabitacion= tipoHabitacion;
        
        
    }

     getReserva() {
         return `Datos de tu Reserva : Check-in: ${this.inicio} ,Check-out: ${this.fin} ,Numero de Huespedes: ${this.huespedesNum}, Tipo de Habitación : ${this.tipoHabitacion}` 
     }
    };

    class Estado {
        constructor (confirmado, pendiente, rechazado) {
            this.confirmado = confirmado; 
            this.pendiente = pendiente;
            this.rechazado = rechazado ;
    }

    getStatus () {
        if  (confirmado === true ){
            return `Su reserva: ${getId.value}`+ `esta confirmada` 

        } else if ( pendiente === undefined ) {
            return `Su reserva está pendiente`
        }
        else {
            return `Su reserva fue rechazada`
        }
    }
    }
// class Requerido  { [identificador,nameHotel,tipoHabitacion,inicio,fin,huespedesNum, ]};

module.exports = Id ;
  
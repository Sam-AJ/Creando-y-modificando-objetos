//Tooltips Bootstrap JS

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});

//2. Crear una función constructora para cada objeto.

//Función constructora Consultorio

function Consultorio(nombre, paciente = []){
    var _nombre = nombre;
    var _paciente = paciente ;

    Object.defineProperty(this, "_getNombre",{
        get: function(){
            return _nombre
        }
    });

    Object.defineProperty(this, "_setNombre",{
        set: function(nombre){
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getPaciente",{
        get: function(){
            return _paciente
        }
    });

    Object.defineProperty(this, "_setPaciente",{
        set: function(paciente){
            _paciente = paciente;
        }
    });
};

//Función constructora Paciente

function Paciente(nombre, edad, rut, diagnostico){
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "_getNombre",{
        get: function(){
            return _nombre
        }
    });

    Object.defineProperty(this, "_setNombre",{
        set: function(nombre){
            _nombre = nombre;
        }
    });

    Object.defineProperty(this, "_getEdad",{
        get: function(){
            return _edad
        }
    });

    Object.defineProperty(this, "_setEdad",{
        set: function(edad){
            _edad = edad;
        }
    });

    Object.defineProperty(this, "_getRut",{
        get: function(){
            return _rut
        }
    });

    Object.defineProperty(this, "_setRut",{
        set: function(rut){
            _rut = rut;
        }
    });

    Object.defineProperty(this, "_getDiagnostico",{
        get: function(){
            return _diagnostico
        }
    });

    Object.defineProperty(this, "_setDiagnostico",{
        set: function(diagnostico){
            _diagnostico = diagnostico;
        }
    });
};

//3. Implementar métodos getters y setters para poder acceder y modificar los datos de los pacientes.

//Getters y Setters de función constructora Consultorio

Consultorio.prototype.getNombre = function(){
    return this._getNombre;
};

Consultorio.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Consultorio.prototype.getPaciente = function(){
    return this._getPaciente;
};

Consultorio.prototype.setPaciente = function(paciente){
    this._setPaciente = paciente;
};

//Getters y Setters de función constructora Paciente

Paciente.prototype.getNombre = function(){
    return this._getNombre;
};

Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre;
};

Paciente.prototype.getEdad = function(){
    return this._getEdad;
};

Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad;
};

Paciente.prototype.getRut = function(){
    return this._getRut;
};

Paciente.prototype.setRut = function(rut){
    this._setRut = rut;
};

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico;
};

//5. Instanciar cada objeto utilizando la instrucción new.

//Instancias Paciente

var paciente1 = new Paciente("Gabriel", 87, "1-1", "Linfoma");
var paciente2 = new Paciente("Carlos", 83, "1-2", "Úlcera Gástrica");
var paciente3 = new Paciente("Julio", 69, "1-3", "Leucemia");
var paciente4 = new Paciente("Juan", 68, "1-4", "Cáncer Pulmonar");
var paciente5 = new Paciente("Clarice", 56, "1-5", "Cáncer de Ovario");
var paciente6 = new Paciente("Mario", 85, "1-6", "Coma Hepático");

//Instancia Cosultorio

var consultorio1 = new Consultorio("Hospital Central", [paciente1, paciente2, paciente3, paciente4, paciente5, paciente6]);

//4. Crear un método mediante la propiedad prototype que permita buscar los datos de los usuarios por nombre y otro método que permita mostrar todos los datos de los usuarios registrados.

//Método para buscar los datos por nombre de paciente registrado

Consultorio.prototype.buscarPaciente = function(){ 
    var nombrePaciente = $("#nombre-paciente").val();
    var pacienteEncontrado = this._getPaciente.find(function (item){ 
        return item.getNombre() == nombrePaciente; 
    });
    $("#tabla-resultados tbody").html("");
    $("#tabla-resultados tbody").append(`
        <tr>
            <td>#</td>
            <td>${pacienteEncontrado._getNombre}</td>
            <td>${pacienteEncontrado._getEdad}</td>
            <td>${pacienteEncontrado._getRut}</td>
            <td>${pacienteEncontrado._getDiagnostico}</td>
        </tr>
    `);
};  

//Método para mostrar los datos de todos los pacientes registrados

Consultorio.prototype.mostrarTodos = function (){
    $("#tabla-resultados tbody").html("");
    this._getPaciente.forEach(function(item, index){
        $("#tabla-resultados tbody").append(`
            <tr>
                <td>${index+1}</td>
                <td>${item.getNombre()}</td>
                <td>${item.getEdad()}</td>
                <td>${item.getRut()}</td>
                <td>${item.getDiagnostico()}</td>
            </tr>
        `);
    });
};

//Datos Primera Tabla

consultorio1._getPaciente.forEach(function(item, index){
    $("#tabla-consultorio tbody").append(`
        <tr>
            <td>${index+1}</td>
            <td>${consultorio1.getNombre()}</td>
            <td>${item.getNombre()}</td>
        </tr>
    `);
});

//Función Ready

$(function(){

    $("form").submit(function(evento){
        evento.preventDefault();
        
        consultorio1.buscarPaciente();
        $("form").trigger("reset");
    });

    $("#mostrar-todos").click(function(){
        consultorio1.mostrarTodos();
    });
});
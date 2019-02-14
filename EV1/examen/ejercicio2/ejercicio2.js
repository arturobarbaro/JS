function Blog(nombre="Doñana"){
    var usuarios=new Set();

    this.set_usuario = function(usuario){
        usuarios.add(usuario);
    }

    this.metodoA = function(fecha){
        var i1 = set.values();
        for (var i = 0; i < i1.length; i++) {
            var usuario = i1.next.values();
            if(usuario.getFecha()>fecha){
                console.log(usuario);
            }
        }
    }

    this.metodoB = function(){
        var i1 = set.values();
        var usuarios = new Array();
        for (var i = 0; i < i1.length; i++) {
            var usuario = i1.next.values();
            if(usuario.isPrototypeOf(UsurarioConPermiso)){
                usuarios.push(usuario.getEntradas);
            }
        }
        //var b=usuarios.filter(e=>)
    }

}

function Usuario(nick){
    var _nick=nick;
    var _fecha=new Date();

    this.get_nick=function(){
        return _nick;
    }
    this.getFecha=function(){
        return _fecha;
    }
}

function UsurarioConPermiso(nick,entradas=[]){
    Usuario.call(this,nick);
    var _entradas=entradas;

    this.get_entradas=function(){
        return _entradas;
    }
}

UsurarioConPermiso.prototype=new Usuario();

var b=new Blog();
var u1=new Usuario('Juan');
var u2=new UsurarioConPermiso('Juana',2);
//b.setUsuario(u1);
//b.metodoA;


var f=u1.get_nick;
console.log(f);
var e=u2.get_entradas;
console.log(e);

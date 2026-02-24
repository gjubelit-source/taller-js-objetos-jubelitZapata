¿Qué diferencia hay entre let, var y const?  
Un let se puede cambiar el valor,no se puede repetir el mismo nombre y solo existe dentro de las llaves,mientras que el var tambien se puede cambiar el valor y se puede volver a delarar pero no respeta llaves,el const es una variable que no se puede cambiar el valor se define de una vez. 

¿Qué tipo de dato es edad?
Es tipo numerico


Qué es una variable?
Es como una cajita donde guardas información con un debido nombre que puede cambiar cono numeros,textos o booleanos.


¿Qué es una función?
Es un bloque de código que organiza y realiza una tarea especifica se puede utilizar todas las veces que sea necesario 



¿Qué es un return?
El return termina una ejecucion de una funnción y devulve el control a la función


¿Qué pasa si una función no tiene return?
Retorna un undefine al realizar la ejecucion 

¿Qué son parámetros?
Son las variables que una función recibe para poder trabajar,lo que va dentro de la función 


¿Qué son argumentos?
Los argumentos son el valor real que le envías a una función cuando la llamas.



¿Cuál es la diferencia entre ambos?
Parámetro es lo que esta en la definición de la función
Argumento es lo que envías cuando ejecutas la función


¿Qué es un objeto en JavaScript?
es una estructura que guarda informacion organizada y relacionada en propiedades 

¿Qué es una propiedad?
Una propiedad es un dato que esta dentro de un objeto


¿Cómo se accede a una propiedad?
Con . el nombre de el objeto seguido de un puntp(.)y el nombre de una propiedad


 ¿Cómo se agrega una nueva propiedad a un objeto?
 se agrega el nombre del objeto,punto seguido de el nombre de la nueva propiedad que queremos y el valor ej:objeto.nuevaPropiedad = valor;


¿Se puede modificar un objeto declarado con const? Explica.
Si se pude modificar const no deja cambiar el objeto completo,
pero sí deja cambiar lo que tiene dentro const protege la variable no lo que tiene dentro 


¿Por qué enviamos el objeto completo?
Para mas orden 

¿Qué ventaja tiene enviar objetos a funciones?
Que se envia mucha información en un solo parámetro Si después necesitas más datos, solo agregas una propiedad y 
No tienes que cambiar todos los parámetros de la función


¿Cómo se accede a una propiedad dentro de otro objeto?
se accede con el nombre de el objeto punto seguido del otro objeto punto la propiedad que queremos saber ej estudiante.notas.matematicas


¿Qué ocurre si la propiedad no existe?
Si intentas acceder a una propiedad que no existe JavaScript devuelve undefined


¿Por qué es importante validar datos?
Porque evita errores y comportamientos inesperados Validar significa comprobar que los datos existen y son correctos antes de usarlos.


¿Cómo se modifica una propiedad?
Se modifica asignándole un nuevo valor usando el acceso por punto o por corchetes directamente sobre el objeto



¿Qué diferencia hay entre modificar y copiar un objeto y cómo harías la copia sin usar spread?
Modificar significa cambiar el objeto original, Copiar significa crear un nuevo objeto basado en el original sin cambiar  el primero.
 Sin usar spread, se puede copiar utilizando métodos como Object.assign o creando manualmente un nuevo objeto y asignando sus propiedades



¿Qué es desestructuración?
Es una técnica que permite extraer propiedades de un objeto y guardarlas en variables de forma directa



¿Qué ventaja tiene frente al acceso con punto?
Hace el código más limpio, reduce repetición y deja claro qué propiedades se están utilizando



¿Qué pasa si el nombre de la variable no coincide con la propiedad?
La variable quedará como undefined, a menos que se use renombramiento correctamente


¿Es obligatorio usar el mismo nombre?
Sí es obligatorio si no se aplica renombramiento. Si se usa renombramiento, se puede asignar otro nombre a la variable.


¿Por qué se usan llaves dentro de llaves?
Porque se extraen propiedades de un objeto que está dentro de otro objeto.


¿Qué significa el anidamiento en desestructuración?
Significa acceder y extraer propiedades de objetos internos dentro de un objeto principal



¿Qué significa desestructurar en el parámetro?
Significa extraer directamente las propiedades del objeto en los parentesis de la función en lugar de recibir el objeto completo y luego acceder a sus propiedades dentro de la función



¿Qué ventaja tiene esta técnica?
Hace la función más clara, más limpia y permite trabajar directamente con las propiedades necesarias


¿Por qué no necesitas usar punto dentro del return?
Porque las propiedades ya fueron extraídas como variables independientes


¿Qué ocurre si el objeto no tiene esa propiedad?
La variable tomará el valor undefined. Si se intenta acceder a una propiedad interna que no existe, puede generar un error


¿Qué es el renombramiento?
Es cambiar el nombre de una propiedad al momento de desestructurarla para usarla con otro nombre como variable


¿Cuándo es útil cambiar el nombre de una variable?
Cuando se quiere evitar conflictos de nombres, mejorar claridad o hacer el código más descriptivo


¿Qué hace el operador spread (...)?
Copia las propiedades de un objeto dentro de otro objeto nuevo


¿La copia es profunda o superficial?
La copia realizada con spread es superficial


¿Por qué se debe copiar también el objeto interno?
Por que si no se copia el objeto interno, ambos objetos compartirán la misma referencia y cualquier cambioo afectará al original


¿Qué pasa si no lo haces?
Si modificas el objeto interno en la copia sin haberlo copiado correctamente, también se modificará el objeto original.


¿Qué tan recomendable es hacer desestructuración muy larga?
No es muy recomendable si se vuelve difícil de leer


¿Cuándo es mejor dividir la desestructuración?
Cuando el objeto es muy grande o el código se ve complicado


¿Qué errores comunes se pueden cometer?
Usar una propiedad que no existe, equivocarse en el nombre o no revisar si el objeto está definido

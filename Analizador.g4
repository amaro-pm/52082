grammar Analizador;

//Lexemas (Lexer Rules)
MAY : 'mayusculas';
MIN : 'minusculas';
LON : 'longitud';
INV : 'invertir';
REM : 'reemplazar';
IGU : '=';
SUM : '+';
MUL : '*';
REST : '-';
DIV : '/'; 
IMPRIM : 'imprimir';
DEVOL : 'devolver'; //debemos de Crear TOKENS EXPLICITOS para palabras CLAVES que estan sueltas y sin definición
VARIA : 'variable';
FUN : 'funcion'; 
NUM: [0-9]+; //no olvidar de asignarle un TOKEN  a las plabras claves, por que sino el programa buscara JUSTAMENTE la plabara "ejecución" y "nombre"
TEXTO : '\'' (~['\r\n])* '\'' ; // reconoce texto entre comillas simples ; // no debo de escrbir TAL CUAL la palabra "caracter", por que ANTLR4 interpreto Literlamente como la secuencia de las letras d ela palara, y no como una Posible regla para cualquier carater entre comillas simples. esta reglas SOLO COINCIDIRIA con una cadena que tuviera literlamente la plabara "caracteres"
ESPACIO : [ \t\r\n]+ -> skip;
EJEC : 'ejecucion'; 
NOM : [a-zA-Z_][a-zA-Z0-9_]* ; // PARA LO DE ARRIBA: Coincide con cualquier carácter (.) cero o más veces (*), de forma no codiciosa (?). La no codicia es importante para que coincida con la cadena más corta posible entre las comillas


 
//Gramatica (Parser)
programa : (declaracion | funcion | impresion | retorno | operacion_texto | concatenar)* ;

declaracion : VARIA NOM IGU valor ';' ;

funcion : FUN NOM '(' argumentos? ')' '{' instrucciones '}' ;

argumentos : NOM (',' NOM)* ;

instrucciones : (operacion_texto | impresion | retorno)* ;

operacion_texto : NOM IGU transformacion '(' cadena ')' ';' ;

transformacion : MAY | MIN | LON | INV | REM ;

concatenar : NOM IGU cadena SUM cadena ';' ;

impresion : IMPRIM valor ';' ;

retorno : DEVOL valor ';' ;

valor : TEXTO | NUM | NOM ;

cadena : TEXTO | NOM ;

 

// en texto, la barra invertida significa ESCAPE y luego le sigue UNA COMILLA que delimita el inicio de una secuencia de caracteres 

 // Uso incorrecto de comillas simples en las reglas del parser:
// En ANTLR, las comillas simples 'TOKEN' se usan para literales, pero tú quieres usar los nombres de los tokens definidos en el lexer (por ejemplo, VARIA, IGU, etc.), sin comillas.

//Reglas ambiguas y mal definidas:

//En declaracion : 'VARIA' NOM | 'IGU' 'valor' | ';' ; usas 'VARIA' y 'IGU' en vez de VARIA e IGU.
//'valor' no es un token ni una regla, debería ser la regla valor.
//En varias reglas usas literales en vez de nombres de tokens.
//Regla argumentos mal definida:
//VARIA ? ',' argumentos?; no es válido. Si quieres argumentos opcionales separados por coma, usa una estructura como:
//argumentos : (VARIA (',' VARIA)*)? 
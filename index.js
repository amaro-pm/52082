import antlr4 from "antlr4";
import AnalizadorLexer from "./generated/AnalizadorLexer.js";
import AnalizadorParser from "./generated/AnalizadorParser.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";

// Entrada a analizar (puedes cambiarla por lo que quieras analizar)
const input = `  
variable x = 2;
variable y = 3;
imprimir 'Hola mundo';
imprimir x;
x = mayusculas('texto');
y = invertir('abc');
`;

// Crear el stream de caracteres y el lexer
const chars = new antlr4.InputStream(input);
const lexer = new AnalizadorLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);

// Mostrar tabla de tokens/lexemas
tokens.fill();
console.log("Tabla de tokens y lexemas:");
const symbolicNames = lexer.symbolicNames || [];

console.log("Tipo                | Código | Lexema");
console.log("--------------------|--------|-----------------");
tokens.tokens.forEach(token => {
    if (token.type !== antlr4.Token.EOF) {
        let tokenName = symbolicNames[token.type];
        if (!tokenName || tokenName === "<INVALID>") {
            tokenName = `TOKEN_${token.type}`;
        }
        const tipo = tokenName.padEnd(20);
        const codigo = String(token.type).padEnd(6);
        const lexema = `'${token.text}'`;
        console.log(`${tipo}| ${codigo}| ${lexema}`);
    }
});

// Crear el parser y el árbol de análisis sintáctico
const parser = new AnalizadorParser(tokens);
parser.buildParseTrees = true;
const tree = parser.programa(); // 'programa' es la regla inicial

// Imprimir árbol de análisis sintáctico
console.log("\nÁrbol de análisis sintáctico:");
console.log(tree.toStringTree(parser.ruleNames));

// Análisis sintáctico independiente
console.log("\n=== Análisis Sintáctico ===");
function analizarSintactico(ctx, parser, nivel = 0) {
    const ruleName = parser.ruleNames[ctx.ruleIndex];
    const indent = "  ".repeat(nivel);
    let resultado = `${indent}${ruleName}`;
    if (ctx.children) {
        for (const child of ctx.children) {
            if (child.ruleIndex !== undefined) {
                resultado += "\n" + analizarSintactico(child, parser, nivel + 1);
            } else if (child.symbol) {
                resultado += `: ${child.getText()}`;
            }
        }
    }
    return resultado;
}
console.log(analizarSintactico(tree, parser));

// Interpretación y traducción a JavaScript
console.log("\n=== Interpretación ===");
const visitor = new CustomCalculatorVisitor();
const resultado = visitor.visit(tree);

console.log("\n=== Traducción a JavaScript ===");
let jsCode = "";
if (typeof resultado === "object" && resultado !== null) {
    // Si tu visitor retorna un objeto con claves y valores
    jsCode += "const resultadoAnalisis = {\n";
    for (const [clave, valor] of Object.entries(resultado)) {
        jsCode += `  ${clave}: ${JSON.stringify(valor)},\n`;
    }
    jsCode += "};\nconsole.log(resultadoAnalisis);";
} else {
    // Si tu visitor retorna un string o array de líneas JS
    jsCode += resultado;
}
console.log(jsCode);
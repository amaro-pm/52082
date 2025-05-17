import AnalizadorVisitor from "./generated/AnalizadorVisitor.js";

export class CustomCalculatorVisitor extends AnalizadorVisitor {
    visitPrograma(ctx) {
        // Recorre todas las instrucciones y concatena su traducción
        return ctx.children.map(child => this.visit(child)).join('\n');
    }

    visitDeclaracion(ctx) {
        const nombre = ctx.NOM().getText();
        const valor = ctx.valor().getText();
        return `let ${nombre} = ${valor};`;
    }

    visitImpresion(ctx) {
        const valor = ctx.valor().getText();
        return `console.log(${valor});`;
    }

    visitOperacion_texto(ctx) {
        const nombre = ctx.NOM().getText();
        const trans = ctx.transformacion().getText();
        const cadena = ctx.cadena().getText();
        if (trans === "mayusculas") {
            return `${nombre} = ${cadena}.toUpperCase();`;
        }
        if (trans === "invertir") {
            return `${nombre} = ${cadena}.split('').reverse().join('');`;
        }
        // Agrega más transformaciones según tu gramática
        return `${nombre} = ${cadena};`;
    }

    // Agrega más métodos para otras reglas si lo necesitas
}
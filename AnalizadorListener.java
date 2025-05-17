// Generated from D:/UTN/Sintaxis/proyecto Node JS Analizador/Analizador.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link AnalizadorParser}.
 */
public interface AnalizadorListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#texto}.
	 * @param ctx the parse tree
	 */
	void enterTexto(AnalizadorParser.TextoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#texto}.
	 * @param ctx the parse tree
	 */
	void exitTexto(AnalizadorParser.TextoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void enterPrograma(AnalizadorParser.ProgramaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#programa}.
	 * @param ctx the parse tree
	 */
	void exitPrograma(AnalizadorParser.ProgramaContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void enterDeclaracion(AnalizadorParser.DeclaracionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#declaracion}.
	 * @param ctx the parse tree
	 */
	void exitDeclaracion(AnalizadorParser.DeclaracionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void enterFuncion(AnalizadorParser.FuncionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#funcion}.
	 * @param ctx the parse tree
	 */
	void exitFuncion(AnalizadorParser.FuncionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void enterArgumentos(AnalizadorParser.ArgumentosContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#argumentos}.
	 * @param ctx the parse tree
	 */
	void exitArgumentos(AnalizadorParser.ArgumentosContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void enterInstrucciones(AnalizadorParser.InstruccionesContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#instrucciones}.
	 * @param ctx the parse tree
	 */
	void exitInstrucciones(AnalizadorParser.InstruccionesContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void enterOperacion_texto(AnalizadorParser.Operacion_textoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#operacion_texto}.
	 * @param ctx the parse tree
	 */
	void exitOperacion_texto(AnalizadorParser.Operacion_textoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void enterTransformacion(AnalizadorParser.TransformacionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#transformacion}.
	 * @param ctx the parse tree
	 */
	void exitTransformacion(AnalizadorParser.TransformacionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void enterConcatenar(AnalizadorParser.ConcatenarContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#concatenar}.
	 * @param ctx the parse tree
	 */
	void exitConcatenar(AnalizadorParser.ConcatenarContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void enterImpresion(AnalizadorParser.ImpresionContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#impresion}.
	 * @param ctx the parse tree
	 */
	void exitImpresion(AnalizadorParser.ImpresionContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void enterRetorno(AnalizadorParser.RetornoContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#retorno}.
	 * @param ctx the parse tree
	 */
	void exitRetorno(AnalizadorParser.RetornoContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#valor}.
	 * @param ctx the parse tree
	 */
	void enterValor(AnalizadorParser.ValorContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#valor}.
	 * @param ctx the parse tree
	 */
	void exitValor(AnalizadorParser.ValorContext ctx);
	/**
	 * Enter a parse tree produced by {@link AnalizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void enterCadena(AnalizadorParser.CadenaContext ctx);
	/**
	 * Exit a parse tree produced by {@link AnalizadorParser#cadena}.
	 * @param ctx the parse tree
	 */
	void exitCadena(AnalizadorParser.CadenaContext ctx);
}
// Generated from D:/UTN/Sintaxis/proyecto Node JS Analizador/Analizador.g4 by ANTLR 4.13.2
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue", "this-escape"})
public class AnalizadorParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.2", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		MAY=18, MIN=19, LON=20, INV=21, REM=22, IGU=23, SUM=24, IMPRIM=25, DEVOL=26, 
		VARIA=27, FUN=28, NUM=29, NOM=30, ESPACIO=31, EJEC=32;
	public static final int
		RULE_texto = 0, RULE_programa = 1, RULE_declaracion = 2, RULE_funcion = 3, 
		RULE_argumentos = 4, RULE_instrucciones = 5, RULE_operacion_texto = 6, 
		RULE_transformacion = 7, RULE_concatenar = 8, RULE_impresion = 9, RULE_retorno = 10, 
		RULE_valor = 11, RULE_cadena = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"texto", "programa", "declaracion", "funcion", "argumentos", "instrucciones", 
			"operacion_texto", "transformacion", "concatenar", "impresion", "retorno", 
			"valor", "cadena"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'' '", "' '", "'VARIA'", "'IGU'", "'valor'", "';'", "','", "'('", 
			"')'", "'MAY'", "'MIN'", "'LON'", "'INV'", "'REM'", "'SUM'", "'IMPRIM'", 
			"'DEVOL'", "'mayusculas'", "'minusculas'", "'longitud'", "'invertir'", 
			"'reemplazar'", "'='", "'+'", "'imprimir'", "'devolver'", "'variable'", 
			"'funcion'", null, null, null, "'ejecucion'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, "MAY", "MIN", "LON", "INV", "REM", 
			"IGU", "SUM", "IMPRIM", "DEVOL", "VARIA", "FUN", "NUM", "NOM", "ESPACIO", 
			"EJEC"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Analizador.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AnalizadorParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TextoContext extends ParserRuleContext {
		public TextoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterTexto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitTexto(this);
		}
	}

	public final TextoContext texto() throws RecognitionException {
		TextoContext _localctx = new TextoContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_texto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(26);
			match(T__0);
			setState(27);
			matchWildcard();
			setState(28);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramaContext extends ParserRuleContext {
		public List<DeclaracionContext> declaracion() {
			return getRuleContexts(DeclaracionContext.class);
		}
		public DeclaracionContext declaracion(int i) {
			return getRuleContext(DeclaracionContext.class,i);
		}
		public List<TerminalNode> FUN() { return getTokens(AnalizadorParser.FUN); }
		public TerminalNode FUN(int i) {
			return getToken(AnalizadorParser.FUN, i);
		}
		public List<TerminalNode> EJEC() { return getTokens(AnalizadorParser.EJEC); }
		public TerminalNode EJEC(int i) {
			return getToken(AnalizadorParser.EJEC, i);
		}
		public ProgramaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_programa; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterPrograma(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitPrograma(this);
		}
	}

	public final ProgramaContext programa() throws RecognitionException {
		ProgramaContext _localctx = new ProgramaContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_programa);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(35);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 4563402840L) != 0)) {
				{
				setState(33);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case T__2:
				case T__3:
				case T__5:
					{
					setState(30);
					declaracion();
					}
					break;
				case FUN:
					{
					setState(31);
					match(FUN);
					}
					break;
				case EJEC:
					{
					setState(32);
					match(EJEC);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(37);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DeclaracionContext extends ParserRuleContext {
		public TerminalNode NOM() { return getToken(AnalizadorParser.NOM, 0); }
		public DeclaracionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_declaracion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterDeclaracion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitDeclaracion(this);
		}
	}

	public final DeclaracionContext declaracion() throws RecognitionException {
		DeclaracionContext _localctx = new DeclaracionContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_declaracion);
		try {
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__2:
				enterOuterAlt(_localctx, 1);
				{
				setState(38);
				match(T__2);
				setState(39);
				match(NOM);
				}
				break;
			case T__3:
				enterOuterAlt(_localctx, 2);
				{
				setState(40);
				match(T__3);
				setState(41);
				match(T__4);
				}
				break;
			case T__5:
				enterOuterAlt(_localctx, 3);
				{
				setState(42);
				match(T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncionContext extends ParserRuleContext {
		public FuncionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterFuncion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitFuncion(this);
		}
	}

	public final FuncionContext funcion() throws RecognitionException {
		FuncionContext _localctx = new FuncionContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_funcion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(T__2);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ArgumentosContext extends ParserRuleContext {
		public TerminalNode VARIA() { return getToken(AnalizadorParser.VARIA, 0); }
		public ArgumentosContext argumentos() {
			return getRuleContext(ArgumentosContext.class,0);
		}
		public ArgumentosContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_argumentos; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterArgumentos(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitArgumentos(this);
		}
	}

	public final ArgumentosContext argumentos() throws RecognitionException {
		ArgumentosContext _localctx = new ArgumentosContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_argumentos);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(48);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==VARIA) {
				{
				setState(47);
				match(VARIA);
				}
			}

			setState(50);
			match(T__6);
			setState(52);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				{
				setState(51);
				argumentos();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class InstruccionesContext extends ParserRuleContext {
		public List<Operacion_textoContext> operacion_texto() {
			return getRuleContexts(Operacion_textoContext.class);
		}
		public Operacion_textoContext operacion_texto(int i) {
			return getRuleContext(Operacion_textoContext.class,i);
		}
		public List<TerminalNode> IMPRIM() { return getTokens(AnalizadorParser.IMPRIM); }
		public TerminalNode IMPRIM(int i) {
			return getToken(AnalizadorParser.IMPRIM, i);
		}
		public List<RetornoContext> retorno() {
			return getRuleContexts(RetornoContext.class);
		}
		public RetornoContext retorno(int i) {
			return getRuleContext(RetornoContext.class,i);
		}
		public InstruccionesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_instrucciones; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterInstrucciones(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitInstrucciones(this);
		}
	}

	public final InstruccionesContext instrucciones() throws RecognitionException {
		InstruccionesContext _localctx = new InstruccionesContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_instrucciones);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 167903232L) != 0)) {
				{
				setState(57);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case VARIA:
					{
					setState(54);
					operacion_texto();
					}
					break;
				case IMPRIM:
					{
					setState(55);
					match(IMPRIM);
					}
					break;
				case T__16:
					{
					setState(56);
					retorno();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				setState(61);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Operacion_textoContext extends ParserRuleContext {
		public TerminalNode VARIA() { return getToken(AnalizadorParser.VARIA, 0); }
		public TransformacionContext transformacion() {
			return getRuleContext(TransformacionContext.class,0);
		}
		public CadenaContext cadena() {
			return getRuleContext(CadenaContext.class,0);
		}
		public Operacion_textoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_operacion_texto; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterOperacion_texto(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitOperacion_texto(this);
		}
	}

	public final Operacion_textoContext operacion_texto() throws RecognitionException {
		Operacion_textoContext _localctx = new Operacion_textoContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_operacion_texto);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(VARIA);
			setState(63);
			match(T__3);
			setState(64);
			transformacion();
			setState(65);
			match(T__7);
			setState(66);
			cadena();
			setState(67);
			match(T__8);
			setState(68);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TransformacionContext extends ParserRuleContext {
		public TransformacionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_transformacion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterTransformacion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitTransformacion(this);
		}
	}

	public final TransformacionContext transformacion() throws RecognitionException {
		TransformacionContext _localctx = new TransformacionContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_transformacion);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 31744L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ConcatenarContext extends ParserRuleContext {
		public TerminalNode VARIA() { return getToken(AnalizadorParser.VARIA, 0); }
		public List<CadenaContext> cadena() {
			return getRuleContexts(CadenaContext.class);
		}
		public CadenaContext cadena(int i) {
			return getRuleContext(CadenaContext.class,i);
		}
		public ConcatenarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_concatenar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterConcatenar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitConcatenar(this);
		}
	}

	public final ConcatenarContext concatenar() throws RecognitionException {
		ConcatenarContext _localctx = new ConcatenarContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_concatenar);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(72);
			match(VARIA);
			setState(73);
			match(T__3);
			setState(74);
			cadena();
			setState(75);
			match(T__14);
			setState(76);
			cadena();
			setState(77);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ImpresionContext extends ParserRuleContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public ImpresionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_impresion; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterImpresion(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitImpresion(this);
		}
	}

	public final ImpresionContext impresion() throws RecognitionException {
		ImpresionContext _localctx = new ImpresionContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_impresion);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			match(T__15);
			{
			setState(80);
			valor();
			}
			setState(81);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class RetornoContext extends ParserRuleContext {
		public ValorContext valor() {
			return getRuleContext(ValorContext.class,0);
		}
		public RetornoContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_retorno; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterRetorno(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitRetorno(this);
		}
	}

	public final RetornoContext retorno() throws RecognitionException {
		RetornoContext _localctx = new RetornoContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_retorno);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(83);
			match(T__16);
			setState(84);
			valor();
			setState(85);
			match(T__5);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ValorContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public TerminalNode NUM() { return getToken(AnalizadorParser.NUM, 0); }
		public TerminalNode VARIA() { return getToken(AnalizadorParser.VARIA, 0); }
		public ValorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valor; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterValor(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitValor(this);
		}
	}

	public final ValorContext valor() throws RecognitionException {
		ValorContext _localctx = new ValorContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_valor);
		try {
			setState(90);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(87);
				texto();
				}
				break;
			case NUM:
				enterOuterAlt(_localctx, 2);
				{
				setState(88);
				match(NUM);
				}
				break;
			case VARIA:
				enterOuterAlt(_localctx, 3);
				{
				setState(89);
				match(VARIA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CadenaContext extends ParserRuleContext {
		public TextoContext texto() {
			return getRuleContext(TextoContext.class,0);
		}
		public TerminalNode VARIA() { return getToken(AnalizadorParser.VARIA, 0); }
		public CadenaContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cadena; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).enterCadena(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof AnalizadorListener ) ((AnalizadorListener)listener).exitCadena(this);
		}
	}

	public final CadenaContext cadena() throws RecognitionException {
		CadenaContext _localctx = new CadenaContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_cadena);
		try {
			setState(94);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__0:
				enterOuterAlt(_localctx, 1);
				{
				setState(92);
				texto();
				}
				break;
			case VARIA:
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				match(VARIA);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001 a\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002\u0002"+
		"\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002\u0005"+
		"\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002\b\u0007"+
		"\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002\f\u0007"+
		"\f\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0005\u0001\"\b\u0001\n\u0001\f\u0001%\t\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0003\u0002,\b\u0002"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0003\u00041\b\u0004\u0001\u0004"+
		"\u0001\u0004\u0003\u00045\b\u0004\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0005\u0005:\b\u0005\n\u0005\f\u0005=\t\u0005\u0001\u0006\u0001\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006"+
		"\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001"+
		"\b\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\u000b\u0003\u000b[\b\u000b\u0001\f\u0001"+
		"\f\u0003\f_\b\f\u0001\f\u0000\u0000\r\u0000\u0002\u0004\u0006\b\n\f\u000e"+
		"\u0010\u0012\u0014\u0016\u0018\u0000\u0001\u0001\u0000\n\u000e`\u0000"+
		"\u001a\u0001\u0000\u0000\u0000\u0002#\u0001\u0000\u0000\u0000\u0004+\u0001"+
		"\u0000\u0000\u0000\u0006-\u0001\u0000\u0000\u0000\b0\u0001\u0000\u0000"+
		"\u0000\n;\u0001\u0000\u0000\u0000\f>\u0001\u0000\u0000\u0000\u000eF\u0001"+
		"\u0000\u0000\u0000\u0010H\u0001\u0000\u0000\u0000\u0012O\u0001\u0000\u0000"+
		"\u0000\u0014S\u0001\u0000\u0000\u0000\u0016Z\u0001\u0000\u0000\u0000\u0018"+
		"^\u0001\u0000\u0000\u0000\u001a\u001b\u0005\u0001\u0000\u0000\u001b\u001c"+
		"\t\u0000\u0000\u0000\u001c\u001d\u0005\u0002\u0000\u0000\u001d\u0001\u0001"+
		"\u0000\u0000\u0000\u001e\"\u0003\u0004\u0002\u0000\u001f\"\u0005\u001c"+
		"\u0000\u0000 \"\u0005 \u0000\u0000!\u001e\u0001\u0000\u0000\u0000!\u001f"+
		"\u0001\u0000\u0000\u0000! \u0001\u0000\u0000\u0000\"%\u0001\u0000\u0000"+
		"\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000\u0000\u0000$\u0003\u0001"+
		"\u0000\u0000\u0000%#\u0001\u0000\u0000\u0000&\'\u0005\u0003\u0000\u0000"+
		"\',\u0005\u001e\u0000\u0000()\u0005\u0004\u0000\u0000),\u0005\u0005\u0000"+
		"\u0000*,\u0005\u0006\u0000\u0000+&\u0001\u0000\u0000\u0000+(\u0001\u0000"+
		"\u0000\u0000+*\u0001\u0000\u0000\u0000,\u0005\u0001\u0000\u0000\u0000"+
		"-.\u0005\u0003\u0000\u0000.\u0007\u0001\u0000\u0000\u0000/1\u0005\u001b"+
		"\u0000\u00000/\u0001\u0000\u0000\u000001\u0001\u0000\u0000\u000012\u0001"+
		"\u0000\u0000\u000024\u0005\u0007\u0000\u000035\u0003\b\u0004\u000043\u0001"+
		"\u0000\u0000\u000045\u0001\u0000\u0000\u00005\t\u0001\u0000\u0000\u0000"+
		"6:\u0003\f\u0006\u00007:\u0005\u0019\u0000\u00008:\u0003\u0014\n\u0000"+
		"96\u0001\u0000\u0000\u000097\u0001\u0000\u0000\u000098\u0001\u0000\u0000"+
		"\u0000:=\u0001\u0000\u0000\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000"+
		"\u0000\u0000<\u000b\u0001\u0000\u0000\u0000=;\u0001\u0000\u0000\u0000"+
		">?\u0005\u001b\u0000\u0000?@\u0005\u0004\u0000\u0000@A\u0003\u000e\u0007"+
		"\u0000AB\u0005\b\u0000\u0000BC\u0003\u0018\f\u0000CD\u0005\t\u0000\u0000"+
		"DE\u0005\u0006\u0000\u0000E\r\u0001\u0000\u0000\u0000FG\u0007\u0000\u0000"+
		"\u0000G\u000f\u0001\u0000\u0000\u0000HI\u0005\u001b\u0000\u0000IJ\u0005"+
		"\u0004\u0000\u0000JK\u0003\u0018\f\u0000KL\u0005\u000f\u0000\u0000LM\u0003"+
		"\u0018\f\u0000MN\u0005\u0006\u0000\u0000N\u0011\u0001\u0000\u0000\u0000"+
		"OP\u0005\u0010\u0000\u0000PQ\u0003\u0016\u000b\u0000QR\u0005\u0006\u0000"+
		"\u0000R\u0013\u0001\u0000\u0000\u0000ST\u0005\u0011\u0000\u0000TU\u0003"+
		"\u0016\u000b\u0000UV\u0005\u0006\u0000\u0000V\u0015\u0001\u0000\u0000"+
		"\u0000W[\u0003\u0000\u0000\u0000X[\u0005\u001d\u0000\u0000Y[\u0005\u001b"+
		"\u0000\u0000ZW\u0001\u0000\u0000\u0000ZX\u0001\u0000\u0000\u0000ZY\u0001"+
		"\u0000\u0000\u0000[\u0017\u0001\u0000\u0000\u0000\\_\u0003\u0000\u0000"+
		"\u0000]_\u0005\u001b\u0000\u0000^\\\u0001\u0000\u0000\u0000^]\u0001\u0000"+
		"\u0000\u0000_\u0019\u0001\u0000\u0000\u0000\t!#+049;Z^";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
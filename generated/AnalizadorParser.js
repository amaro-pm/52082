// Generated from Analizador.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
import AnalizadorVisitor from './AnalizadorVisitor.js';

const serializedATN = [4,1,25,98,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,1,0,1,0,1,0,
1,0,1,0,1,0,5,0,31,8,0,10,0,12,0,34,9,0,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,2,
1,2,1,2,3,2,46,8,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,5,3,56,8,3,10,3,12,3,
59,9,3,1,4,1,4,1,4,5,4,64,8,4,10,4,12,4,67,9,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,
9,1,10,1,10,1,11,1,11,1,11,0,0,12,0,2,4,6,8,10,12,14,16,18,20,22,0,3,1,0,
7,11,2,0,21,22,25,25,2,0,22,22,25,25,96,0,32,1,0,0,0,2,35,1,0,0,0,4,41,1,
0,0,0,6,52,1,0,0,0,8,65,1,0,0,0,10,68,1,0,0,0,12,76,1,0,0,0,14,78,1,0,0,
0,16,85,1,0,0,0,18,89,1,0,0,0,20,93,1,0,0,0,22,95,1,0,0,0,24,31,3,2,1,0,
25,31,3,4,2,0,26,31,3,16,8,0,27,31,3,18,9,0,28,31,3,10,5,0,29,31,3,14,7,
0,30,24,1,0,0,0,30,25,1,0,0,0,30,26,1,0,0,0,30,27,1,0,0,0,30,28,1,0,0,0,
30,29,1,0,0,0,31,34,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,1,1,0,0,0,34,
32,1,0,0,0,35,36,5,19,0,0,36,37,5,25,0,0,37,38,5,12,0,0,38,39,3,20,10,0,
39,40,5,1,0,0,40,3,1,0,0,0,41,42,5,20,0,0,42,43,5,25,0,0,43,45,5,2,0,0,44,
46,3,6,3,0,45,44,1,0,0,0,45,46,1,0,0,0,46,47,1,0,0,0,47,48,5,3,0,0,48,49,
5,4,0,0,49,50,3,8,4,0,50,51,5,5,0,0,51,5,1,0,0,0,52,57,5,25,0,0,53,54,5,
6,0,0,54,56,5,25,0,0,55,53,1,0,0,0,56,59,1,0,0,0,57,55,1,0,0,0,57,58,1,0,
0,0,58,7,1,0,0,0,59,57,1,0,0,0,60,64,3,10,5,0,61,64,3,16,8,0,62,64,3,18,
9,0,63,60,1,0,0,0,63,61,1,0,0,0,63,62,1,0,0,0,64,67,1,0,0,0,65,63,1,0,0,
0,65,66,1,0,0,0,66,9,1,0,0,0,67,65,1,0,0,0,68,69,5,25,0,0,69,70,5,12,0,0,
70,71,3,12,6,0,71,72,5,2,0,0,72,73,3,22,11,0,73,74,5,3,0,0,74,75,5,1,0,0,
75,11,1,0,0,0,76,77,7,0,0,0,77,13,1,0,0,0,78,79,5,25,0,0,79,80,5,12,0,0,
80,81,3,22,11,0,81,82,5,13,0,0,82,83,3,22,11,0,83,84,5,1,0,0,84,15,1,0,0,
0,85,86,5,17,0,0,86,87,3,20,10,0,87,88,5,1,0,0,88,17,1,0,0,0,89,90,5,18,
0,0,90,91,3,20,10,0,91,92,5,1,0,0,92,19,1,0,0,0,93,94,7,1,0,0,94,21,1,0,
0,0,95,96,7,2,0,0,96,23,1,0,0,0,6,30,32,45,57,63,65];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "';'", "'('", "')'", "'{'", "'}'", "','", 
                            "'mayusculas'", "'minusculas'", "'longitud'", 
                            "'invertir'", "'reemplazar'", "'='", "'+'", 
                            "'*'", "'-'", "'/'", "'imprimir'", "'devolver'", 
                            "'variable'", "'funcion'", null, null, null, 
                            "'ejecucion'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, "MAY", 
                             "MIN", "LON", "INV", "REM", "IGU", "SUM", "MUL", 
                             "REST", "DIV", "IMPRIM", "DEVOL", "VARIA", 
                             "FUN", "NUM", "TEXTO", "ESPACIO", "EJEC", "NOM" ];
    static ruleNames = [ "programa", "declaracion", "funcion", "argumentos", 
                         "instrucciones", "operacion_texto", "transformacion", 
                         "concatenar", "impresion", "retorno", "valor", 
                         "cadena" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 35520512) !== 0)) {
	            this.state = 30;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	            switch(la_) {
	            case 1:
	                this.state = 24;
	                this.declaracion();
	                break;

	            case 2:
	                this.state = 25;
	                this.funcion();
	                break;

	            case 3:
	                this.state = 26;
	                this.impresion();
	                break;

	            case 4:
	                this.state = 27;
	                this.retorno();
	                break;

	            case 5:
	                this.state = 28;
	                this.operacion_texto();
	                break;

	            case 6:
	                this.state = 29;
	                this.concatenar();
	                break;

	            }
	            this.state = 34;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaracion() {
	    let localctx = new DeclaracionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_declaracion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(AnalizadorParser.VARIA);
	        this.state = 36;
	        this.match(AnalizadorParser.NOM);
	        this.state = 37;
	        this.match(AnalizadorParser.IGU);
	        this.state = 38;
	        this.valor();
	        this.state = 39;
	        this.match(AnalizadorParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcion() {
	    let localctx = new FuncionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_funcion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 41;
	        this.match(AnalizadorParser.FUN);
	        this.state = 42;
	        this.match(AnalizadorParser.NOM);
	        this.state = 43;
	        this.match(AnalizadorParser.T__1);
	        this.state = 45;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===25) {
	            this.state = 44;
	            this.argumentos();
	        }

	        this.state = 47;
	        this.match(AnalizadorParser.T__2);
	        this.state = 48;
	        this.match(AnalizadorParser.T__3);
	        this.state = 49;
	        this.instrucciones();
	        this.state = 50;
	        this.match(AnalizadorParser.T__4);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argumentos() {
	    let localctx = new ArgumentosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_argumentos);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 52;
	        this.match(AnalizadorParser.NOM);
	        this.state = 57;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===6) {
	            this.state = 53;
	            this.match(AnalizadorParser.T__5);
	            this.state = 54;
	            this.match(AnalizadorParser.NOM);
	            this.state = 59;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instrucciones() {
	    let localctx = new InstruccionesContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_instrucciones);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 33947648) !== 0)) {
	            this.state = 63;
	            this._errHandler.sync(this);
	            switch(this._input.LA(1)) {
	            case 25:
	                this.state = 60;
	                this.operacion_texto();
	                break;
	            case 17:
	                this.state = 61;
	                this.impresion();
	                break;
	            case 18:
	                this.state = 62;
	                this.retorno();
	                break;
	            default:
	                throw new antlr4.error.NoViableAltException(this);
	            }
	            this.state = 67;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operacion_texto() {
	    let localctx = new Operacion_textoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_operacion_texto);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 68;
	        this.match(AnalizadorParser.NOM);
	        this.state = 69;
	        this.match(AnalizadorParser.IGU);
	        this.state = 70;
	        this.transformacion();
	        this.state = 71;
	        this.match(AnalizadorParser.T__1);
	        this.state = 72;
	        this.cadena();
	        this.state = 73;
	        this.match(AnalizadorParser.T__2);
	        this.state = 74;
	        this.match(AnalizadorParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	transformacion() {
	    let localctx = new TransformacionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_transformacion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3968) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	concatenar() {
	    let localctx = new ConcatenarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_concatenar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(AnalizadorParser.NOM);
	        this.state = 79;
	        this.match(AnalizadorParser.IGU);
	        this.state = 80;
	        this.cadena();
	        this.state = 81;
	        this.match(AnalizadorParser.SUM);
	        this.state = 82;
	        this.cadena();
	        this.state = 83;
	        this.match(AnalizadorParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	impresion() {
	    let localctx = new ImpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_impresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this.match(AnalizadorParser.IMPRIM);
	        this.state = 86;
	        this.valor();
	        this.state = 87;
	        this.match(AnalizadorParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	retorno() {
	    let localctx = new RetornoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AnalizadorParser.RULE_retorno);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.match(AnalizadorParser.DEVOL);
	        this.state = 90;
	        this.valor();
	        this.state = 91;
	        this.match(AnalizadorParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AnalizadorParser.RULE_valor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 39845888) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AnalizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        _la = this._input.LA(1);
	        if(!(_la===22 || _la===25)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.T__0 = 1;
AnalizadorParser.T__1 = 2;
AnalizadorParser.T__2 = 3;
AnalizadorParser.T__3 = 4;
AnalizadorParser.T__4 = 5;
AnalizadorParser.T__5 = 6;
AnalizadorParser.MAY = 7;
AnalizadorParser.MIN = 8;
AnalizadorParser.LON = 9;
AnalizadorParser.INV = 10;
AnalizadorParser.REM = 11;
AnalizadorParser.IGU = 12;
AnalizadorParser.SUM = 13;
AnalizadorParser.MUL = 14;
AnalizadorParser.REST = 15;
AnalizadorParser.DIV = 16;
AnalizadorParser.IMPRIM = 17;
AnalizadorParser.DEVOL = 18;
AnalizadorParser.VARIA = 19;
AnalizadorParser.FUN = 20;
AnalizadorParser.NUM = 21;
AnalizadorParser.TEXTO = 22;
AnalizadorParser.ESPACIO = 23;
AnalizadorParser.EJEC = 24;
AnalizadorParser.NOM = 25;

AnalizadorParser.RULE_programa = 0;
AnalizadorParser.RULE_declaracion = 1;
AnalizadorParser.RULE_funcion = 2;
AnalizadorParser.RULE_argumentos = 3;
AnalizadorParser.RULE_instrucciones = 4;
AnalizadorParser.RULE_operacion_texto = 5;
AnalizadorParser.RULE_transformacion = 6;
AnalizadorParser.RULE_concatenar = 7;
AnalizadorParser.RULE_impresion = 8;
AnalizadorParser.RULE_retorno = 9;
AnalizadorParser.RULE_valor = 10;
AnalizadorParser.RULE_cadena = 11;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_programa;
    }

	declaracion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(DeclaracionContext);
	    } else {
	        return this.getTypedRuleContext(DeclaracionContext,i);
	    }
	};

	funcion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FuncionContext);
	    } else {
	        return this.getTypedRuleContext(FuncionContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	concatenar = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConcatenarContext);
	    } else {
	        return this.getTypedRuleContext(ConcatenarContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclaracionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_declaracion;
    }

	VARIA() {
	    return this.getToken(AnalizadorParser.VARIA, 0);
	};

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	IGU() {
	    return this.getToken(AnalizadorParser.IGU, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterDeclaracion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitDeclaracion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitDeclaracion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_funcion;
    }

	FUN() {
	    return this.getToken(AnalizadorParser.FUN, 0);
	};

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	instrucciones() {
	    return this.getTypedRuleContext(InstruccionesContext,0);
	};

	argumentos() {
	    return this.getTypedRuleContext(ArgumentosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterFuncion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitFuncion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitFuncion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_argumentos;
    }

	NOM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.NOM);
	    } else {
	        return this.getToken(AnalizadorParser.NOM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterArgumentos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitArgumentos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitArgumentos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionesContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instrucciones;
    }

	operacion_texto = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(Operacion_textoContext);
	    } else {
	        return this.getTypedRuleContext(Operacion_textoContext,i);
	    }
	};

	impresion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ImpresionContext);
	    } else {
	        return this.getTypedRuleContext(ImpresionContext,i);
	    }
	};

	retorno = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RetornoContext);
	    } else {
	        return this.getTypedRuleContext(RetornoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstrucciones(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstrucciones(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitInstrucciones(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Operacion_textoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_operacion_texto;
    }

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	IGU() {
	    return this.getToken(AnalizadorParser.IGU, 0);
	};

	transformacion() {
	    return this.getTypedRuleContext(TransformacionContext,0);
	};

	cadena() {
	    return this.getTypedRuleContext(CadenaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterOperacion_texto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitOperacion_texto(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitOperacion_texto(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TransformacionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_transformacion;
    }

	MAY() {
	    return this.getToken(AnalizadorParser.MAY, 0);
	};

	MIN() {
	    return this.getToken(AnalizadorParser.MIN, 0);
	};

	LON() {
	    return this.getToken(AnalizadorParser.LON, 0);
	};

	INV() {
	    return this.getToken(AnalizadorParser.INV, 0);
	};

	REM() {
	    return this.getToken(AnalizadorParser.REM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTransformacion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTransformacion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitTransformacion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConcatenarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_concatenar;
    }

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	IGU() {
	    return this.getToken(AnalizadorParser.IGU, 0);
	};

	cadena = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CadenaContext);
	    } else {
	        return this.getTypedRuleContext(CadenaContext,i);
	    }
	};

	SUM() {
	    return this.getToken(AnalizadorParser.SUM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterConcatenar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitConcatenar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitConcatenar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_impresion;
    }

	IMPRIM() {
	    return this.getToken(AnalizadorParser.IMPRIM, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterImpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitImpresion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitImpresion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RetornoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_retorno;
    }

	DEVOL() {
	    return this.getToken(AnalizadorParser.DEVOL, 0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterRetorno(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitRetorno(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitRetorno(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_valor;
    }

	TEXTO() {
	    return this.getToken(AnalizadorParser.TEXTO, 0);
	};

	NUM() {
	    return this.getToken(AnalizadorParser.NUM, 0);
	};

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_cadena;
    }

	TEXTO() {
	    return this.getToken(AnalizadorParser.TEXTO, 0);
	};

	NOM() {
	    return this.getToken(AnalizadorParser.NOM, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof AnalizadorVisitor ) {
	        return visitor.visitCadena(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




AnalizadorParser.ProgramaContext = ProgramaContext; 
AnalizadorParser.DeclaracionContext = DeclaracionContext; 
AnalizadorParser.FuncionContext = FuncionContext; 
AnalizadorParser.ArgumentosContext = ArgumentosContext; 
AnalizadorParser.InstruccionesContext = InstruccionesContext; 
AnalizadorParser.Operacion_textoContext = Operacion_textoContext; 
AnalizadorParser.TransformacionContext = TransformacionContext; 
AnalizadorParser.ConcatenarContext = ConcatenarContext; 
AnalizadorParser.ImpresionContext = ImpresionContext; 
AnalizadorParser.RetornoContext = RetornoContext; 
AnalizadorParser.ValorContext = ValorContext; 
AnalizadorParser.CadenaContext = CadenaContext; 

// Generated from /Users/william/projects/cosmology-antlr-tutorial/grammar/MyLang.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class MyLangParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, StringLit=29, BoolLit=30, FloatLit=31, 
		IntLit=32, Ident=33, LineComment=34, BlockComment=35, WS=36;
	public static final int
		RULE_program = 0, RULE_statement = 1, RULE_varDecl = 2, RULE_varAssign = 3, 
		RULE_ifStmt = 4, RULE_returnStmt = 5, RULE_expr = 6, RULE_binOp = 7, RULE_literal = 8, 
		RULE_ident = 9, RULE_fnArgs = 10, RULE_fnDefn = 11, RULE_type = 12;
	private static String[] makeRuleNames() {
		return new String[] {
			"program", "statement", "varDecl", "varAssign", "ifStmt", "returnStmt", 
			"expr", "binOp", "literal", "ident", "fnArgs", "fnDefn", "type"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "';'", "'='", "'if'", "'('", "')'", "'{'", "'}'", "'else'", "'return'", 
			"','", "'+'", "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", "'<'", "'>'", 
			"'<='", "'>='", "'&&'", "'||'", "'const'", "'int'", "'float'", "'bool'", 
			"'string'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, "StringLit", "BoolLit", "FloatLit", "IntLit", 
			"Ident", "LineComment", "BlockComment", "WS"
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
	public String getGrammarFileName() { return "MyLang.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MyLangParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgramContext extends ParserRuleContext {
		public StatementContext statement;
		public List<StatementContext> stmts = new ArrayList<StatementContext>();
		public TerminalNode EOF() { return getToken(MyLangParser.EOF, 0); }
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public ProgramContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_program; }
	}

	public final ProgramContext program() throws RecognitionException {
		ProgramContext _localctx = new ProgramContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_program);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(29);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & 17163092488L) != 0)) {
				{
				{
				setState(26);
				((ProgramContext)_localctx).statement = statement();
				((ProgramContext)_localctx).stmts.add(((ProgramContext)_localctx).statement);
				}
				}
				setState(31);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(32);
			match(EOF);
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
	public static class StatementContext extends ParserRuleContext {
		public VarDeclContext varDecl() {
			return getRuleContext(VarDeclContext.class,0);
		}
		public VarAssignContext varAssign() {
			return getRuleContext(VarAssignContext.class,0);
		}
		public IfStmtContext ifStmt() {
			return getRuleContext(IfStmtContext.class,0);
		}
		public FnDefnContext fnDefn() {
			return getRuleContext(FnDefnContext.class,0);
		}
		public ReturnStmtContext returnStmt() {
			return getRuleContext(ReturnStmtContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public StatementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_statement; }
	}

	public final StatementContext statement() throws RecognitionException {
		StatementContext _localctx = new StatementContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_statement);
		try {
			setState(42);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,1,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(34);
				varDecl();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(35);
				varAssign();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(36);
				ifStmt();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(37);
				fnDefn();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(38);
				returnStmt();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(39);
				expr(0);
				setState(40);
				match(T__0);
				}
				break;
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
	public static class VarDeclContext extends ParserRuleContext {
		public TypeContext ty;
		public IdentContext name;
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public VarDeclContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varDecl; }
	}

	public final VarDeclContext varDecl() throws RecognitionException {
		VarDeclContext _localctx = new VarDeclContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_varDecl);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(44);
			((VarDeclContext)_localctx).ty = type();
			}
			{
			setState(45);
			((VarDeclContext)_localctx).name = ident();
			}
			setState(46);
			match(T__0);
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
	public static class VarAssignContext extends ParserRuleContext {
		public IdentContext name;
		public ExprContext value;
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public VarAssignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_varAssign; }
	}

	public final VarAssignContext varAssign() throws RecognitionException {
		VarAssignContext _localctx = new VarAssignContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_varAssign);
		try {
			enterOuterAlt(_localctx, 1);
			{
			{
			setState(48);
			((VarAssignContext)_localctx).name = ident();
			}
			setState(49);
			match(T__1);
			{
			setState(50);
			((VarAssignContext)_localctx).value = expr(0);
			}
			setState(51);
			match(T__0);
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
	public static class IfStmtContext extends ParserRuleContext {
		public ExprContext predicate;
		public StatementContext statement;
		public List<StatementContext> stmts = new ArrayList<StatementContext>();
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public IfStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStmt; }
	}

	public final IfStmtContext ifStmt() throws RecognitionException {
		IfStmtContext _localctx = new IfStmtContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_ifStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(53);
			match(T__2);
			setState(54);
			match(T__3);
			setState(55);
			((IfStmtContext)_localctx).predicate = expr(0);
			setState(56);
			match(T__4);
			setState(57);
			match(T__5);
			setState(59); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(58);
				((IfStmtContext)_localctx).statement = statement();
				((IfStmtContext)_localctx).stmts.add(((IfStmtContext)_localctx).statement);
				}
				}
				setState(61); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 17163092488L) != 0) );
			setState(63);
			match(T__6);
			setState(73);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__7) {
				{
				setState(64);
				match(T__7);
				setState(65);
				match(T__5);
				setState(67); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(66);
					statement();
					}
					}
					setState(69); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 17163092488L) != 0) );
				setState(71);
				match(T__6);
				}
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
	public static class ReturnStmtContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public ReturnStmtContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_returnStmt; }
	}

	public final ReturnStmtContext returnStmt() throws RecognitionException {
		ReturnStmtContext _localctx = new ReturnStmtContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_returnStmt);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(75);
			match(T__8);
			setState(77);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16642998272L) != 0)) {
				{
				setState(76);
				expr(0);
				}
			}

			setState(79);
			match(T__0);
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
	public static class ExprContext extends ParserRuleContext {
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	 
		public ExprContext() { }
		public void copyFrom(ExprContext ctx) {
			super.copyFrom(ctx);
		}
	}
	@SuppressWarnings("CheckReturnValue")
	public static class IdentExprContext extends ExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public IdentExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class LiteralExprContext extends ExprContext {
		public LiteralContext literal() {
			return getRuleContext(LiteralContext.class,0);
		}
		public LiteralExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class BinOpExprContext extends ExprContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public BinOpContext binOp() {
			return getRuleContext(BinOpContext.class,0);
		}
		public BinOpExprContext(ExprContext ctx) { copyFrom(ctx); }
	}
	@SuppressWarnings("CheckReturnValue")
	public static class FnCallExprContext extends ExprContext {
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FnCallExprContext(ExprContext ctx) { copyFrom(ctx); }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(98);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				_localctx = new FnCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(82);
				ident();
				setState(83);
				match(T__3);
				setState(92);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 16642998272L) != 0)) {
					{
					setState(84);
					expr(0);
					setState(89);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__9) {
						{
						{
						setState(85);
						match(T__9);
						setState(86);
						expr(0);
						}
						}
						setState(91);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(94);
				match(T__4);
				}
				break;
			case 2:
				{
				_localctx = new LiteralExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(96);
				literal();
				}
				break;
			case 3:
				{
				_localctx = new IdentExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(97);
				ident();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(106);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new BinOpExprContext(new ExprContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_expr);
					setState(100);
					if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
					setState(101);
					binOp();
					setState(102);
					expr(5);
					}
					} 
				}
				setState(108);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,9,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BinOpContext extends ParserRuleContext {
		public BinOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_binOp; }
	}

	public final BinOpContext binOp() throws RecognitionException {
		BinOpContext _localctx = new BinOpContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_binOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(109);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 16775168L) != 0)) ) {
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
	public static class LiteralContext extends ParserRuleContext {
		public TerminalNode BoolLit() { return getToken(MyLangParser.BoolLit, 0); }
		public TerminalNode FloatLit() { return getToken(MyLangParser.FloatLit, 0); }
		public TerminalNode IntLit() { return getToken(MyLangParser.IntLit, 0); }
		public TerminalNode StringLit() { return getToken(MyLangParser.StringLit, 0); }
		public LiteralContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_literal; }
	}

	public final LiteralContext literal() throws RecognitionException {
		LiteralContext _localctx = new LiteralContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_literal);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(111);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 8053063680L) != 0)) ) {
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
	public static class IdentContext extends ParserRuleContext {
		public TerminalNode Ident() { return getToken(MyLangParser.Ident, 0); }
		public IdentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ident; }
	}

	public final IdentContext ident() throws RecognitionException {
		IdentContext _localctx = new IdentContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_ident);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(113);
			match(Ident);
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
	public static class FnArgsContext extends ParserRuleContext {
		public List<TypeContext> type() {
			return getRuleContexts(TypeContext.class);
		}
		public TypeContext type(int i) {
			return getRuleContext(TypeContext.class,i);
		}
		public List<IdentContext> ident() {
			return getRuleContexts(IdentContext.class);
		}
		public IdentContext ident(int i) {
			return getRuleContext(IdentContext.class,i);
		}
		public FnArgsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnArgs; }
	}

	public final FnArgsContext fnArgs() throws RecognitionException {
		FnArgsContext _localctx = new FnArgsContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_fnArgs);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(115);
			type();
			setState(116);
			ident();
			setState(123);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__9) {
				{
				{
				setState(117);
				match(T__9);
				setState(118);
				type();
				setState(119);
				ident();
				}
				}
				setState(125);
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
	public static class FnDefnContext extends ParserRuleContext {
		public TypeContext type() {
			return getRuleContext(TypeContext.class,0);
		}
		public IdentContext ident() {
			return getRuleContext(IdentContext.class,0);
		}
		public FnArgsContext fnArgs() {
			return getRuleContext(FnArgsContext.class,0);
		}
		public List<StatementContext> statement() {
			return getRuleContexts(StatementContext.class);
		}
		public StatementContext statement(int i) {
			return getRuleContext(StatementContext.class,i);
		}
		public FnDefnContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fnDefn; }
	}

	public final FnDefnContext fnDefn() throws RecognitionException {
		FnDefnContext _localctx = new FnDefnContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_fnDefn);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(126);
			type();
			setState(127);
			ident();
			setState(128);
			match(T__3);
			setState(130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 520093696L) != 0)) {
				{
				setState(129);
				fnArgs();
				}
			}

			setState(132);
			match(T__4);
			setState(133);
			match(T__5);
			setState(135); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(134);
				statement();
				}
				}
				setState(137); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 17163092488L) != 0) );
			setState(139);
			match(T__6);
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
	public static class TypeContext extends ParserRuleContext {
		public TypeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_type; }
	}

	public final TypeContext type() throws RecognitionException {
		TypeContext _localctx = new TypeContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_type);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(142);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__23) {
				{
				setState(141);
				match(T__23);
				}
			}

			setState(144);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 503316480L) != 0)) ) {
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

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 6:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 4);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001$\u0093\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0001\u0000\u0005\u0000\u001c\b\u0000\n\u0000\f\u0000\u001f"+
		"\t\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001+\b"+
		"\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0002\u0001\u0003\u0001"+
		"\u0003\u0001\u0003\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001"+
		"\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0004\u0004<\b\u0004\u000b"+
		"\u0004\f\u0004=\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004\u0004"+
		"\u0004D\b\u0004\u000b\u0004\f\u0004E\u0001\u0004\u0001\u0004\u0003\u0004"+
		"J\b\u0004\u0001\u0005\u0001\u0005\u0003\u0005N\b\u0005\u0001\u0005\u0001"+
		"\u0005\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0001"+
		"\u0006\u0005\u0006X\b\u0006\n\u0006\f\u0006[\t\u0006\u0003\u0006]\b\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0003\u0006c\b\u0006"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0006\u0005\u0006i\b\u0006"+
		"\n\u0006\f\u0006l\t\u0006\u0001\u0007\u0001\u0007\u0001\b\u0001\b\u0001"+
		"\t\u0001\t\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0001\n\u0005\nz\b"+
		"\n\n\n\f\n}\t\n\u0001\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0003"+
		"\u000b\u0083\b\u000b\u0001\u000b\u0001\u000b\u0001\u000b\u0004\u000b\u0088"+
		"\b\u000b\u000b\u000b\f\u000b\u0089\u0001\u000b\u0001\u000b\u0001\f\u0003"+
		"\f\u008f\b\f\u0001\f\u0001\f\u0001\f\u0000\u0001\f\r\u0000\u0002\u0004"+
		"\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u0000\u0003\u0001\u0000"+
		"\u000b\u0017\u0001\u0000\u001d \u0001\u0000\u0019\u001c\u0098\u0000\u001d"+
		"\u0001\u0000\u0000\u0000\u0002*\u0001\u0000\u0000\u0000\u0004,\u0001\u0000"+
		"\u0000\u0000\u00060\u0001\u0000\u0000\u0000\b5\u0001\u0000\u0000\u0000"+
		"\nK\u0001\u0000\u0000\u0000\fb\u0001\u0000\u0000\u0000\u000em\u0001\u0000"+
		"\u0000\u0000\u0010o\u0001\u0000\u0000\u0000\u0012q\u0001\u0000\u0000\u0000"+
		"\u0014s\u0001\u0000\u0000\u0000\u0016~\u0001\u0000\u0000\u0000\u0018\u008e"+
		"\u0001\u0000\u0000\u0000\u001a\u001c\u0003\u0002\u0001\u0000\u001b\u001a"+
		"\u0001\u0000\u0000\u0000\u001c\u001f\u0001\u0000\u0000\u0000\u001d\u001b"+
		"\u0001\u0000\u0000\u0000\u001d\u001e\u0001\u0000\u0000\u0000\u001e \u0001"+
		"\u0000\u0000\u0000\u001f\u001d\u0001\u0000\u0000\u0000 !\u0005\u0000\u0000"+
		"\u0001!\u0001\u0001\u0000\u0000\u0000\"+\u0003\u0004\u0002\u0000#+\u0003"+
		"\u0006\u0003\u0000$+\u0003\b\u0004\u0000%+\u0003\u0016\u000b\u0000&+\u0003"+
		"\n\u0005\u0000\'(\u0003\f\u0006\u0000()\u0005\u0001\u0000\u0000)+\u0001"+
		"\u0000\u0000\u0000*\"\u0001\u0000\u0000\u0000*#\u0001\u0000\u0000\u0000"+
		"*$\u0001\u0000\u0000\u0000*%\u0001\u0000\u0000\u0000*&\u0001\u0000\u0000"+
		"\u0000*\'\u0001\u0000\u0000\u0000+\u0003\u0001\u0000\u0000\u0000,-\u0003"+
		"\u0018\f\u0000-.\u0003\u0012\t\u0000./\u0005\u0001\u0000\u0000/\u0005"+
		"\u0001\u0000\u0000\u000001\u0003\u0012\t\u000012\u0005\u0002\u0000\u0000"+
		"23\u0003\f\u0006\u000034\u0005\u0001\u0000\u00004\u0007\u0001\u0000\u0000"+
		"\u000056\u0005\u0003\u0000\u000067\u0005\u0004\u0000\u000078\u0003\f\u0006"+
		"\u000089\u0005\u0005\u0000\u00009;\u0005\u0006\u0000\u0000:<\u0003\u0002"+
		"\u0001\u0000;:\u0001\u0000\u0000\u0000<=\u0001\u0000\u0000\u0000=;\u0001"+
		"\u0000\u0000\u0000=>\u0001\u0000\u0000\u0000>?\u0001\u0000\u0000\u0000"+
		"?I\u0005\u0007\u0000\u0000@A\u0005\b\u0000\u0000AC\u0005\u0006\u0000\u0000"+
		"BD\u0003\u0002\u0001\u0000CB\u0001\u0000\u0000\u0000DE\u0001\u0000\u0000"+
		"\u0000EC\u0001\u0000\u0000\u0000EF\u0001\u0000\u0000\u0000FG\u0001\u0000"+
		"\u0000\u0000GH\u0005\u0007\u0000\u0000HJ\u0001\u0000\u0000\u0000I@\u0001"+
		"\u0000\u0000\u0000IJ\u0001\u0000\u0000\u0000J\t\u0001\u0000\u0000\u0000"+
		"KM\u0005\t\u0000\u0000LN\u0003\f\u0006\u0000ML\u0001\u0000\u0000\u0000"+
		"MN\u0001\u0000\u0000\u0000NO\u0001\u0000\u0000\u0000OP\u0005\u0001\u0000"+
		"\u0000P\u000b\u0001\u0000\u0000\u0000QR\u0006\u0006\uffff\uffff\u0000"+
		"RS\u0003\u0012\t\u0000S\\\u0005\u0004\u0000\u0000TY\u0003\f\u0006\u0000"+
		"UV\u0005\n\u0000\u0000VX\u0003\f\u0006\u0000WU\u0001\u0000\u0000\u0000"+
		"X[\u0001\u0000\u0000\u0000YW\u0001\u0000\u0000\u0000YZ\u0001\u0000\u0000"+
		"\u0000Z]\u0001\u0000\u0000\u0000[Y\u0001\u0000\u0000\u0000\\T\u0001\u0000"+
		"\u0000\u0000\\]\u0001\u0000\u0000\u0000]^\u0001\u0000\u0000\u0000^_\u0005"+
		"\u0005\u0000\u0000_c\u0001\u0000\u0000\u0000`c\u0003\u0010\b\u0000ac\u0003"+
		"\u0012\t\u0000bQ\u0001\u0000\u0000\u0000b`\u0001\u0000\u0000\u0000ba\u0001"+
		"\u0000\u0000\u0000cj\u0001\u0000\u0000\u0000de\n\u0004\u0000\u0000ef\u0003"+
		"\u000e\u0007\u0000fg\u0003\f\u0006\u0005gi\u0001\u0000\u0000\u0000hd\u0001"+
		"\u0000\u0000\u0000il\u0001\u0000\u0000\u0000jh\u0001\u0000\u0000\u0000"+
		"jk\u0001\u0000\u0000\u0000k\r\u0001\u0000\u0000\u0000lj\u0001\u0000\u0000"+
		"\u0000mn\u0007\u0000\u0000\u0000n\u000f\u0001\u0000\u0000\u0000op\u0007"+
		"\u0001\u0000\u0000p\u0011\u0001\u0000\u0000\u0000qr\u0005!\u0000\u0000"+
		"r\u0013\u0001\u0000\u0000\u0000st\u0003\u0018\f\u0000t{\u0003\u0012\t"+
		"\u0000uv\u0005\n\u0000\u0000vw\u0003\u0018\f\u0000wx\u0003\u0012\t\u0000"+
		"xz\u0001\u0000\u0000\u0000yu\u0001\u0000\u0000\u0000z}\u0001\u0000\u0000"+
		"\u0000{y\u0001\u0000\u0000\u0000{|\u0001\u0000\u0000\u0000|\u0015\u0001"+
		"\u0000\u0000\u0000}{\u0001\u0000\u0000\u0000~\u007f\u0003\u0018\f\u0000"+
		"\u007f\u0080\u0003\u0012\t\u0000\u0080\u0082\u0005\u0004\u0000\u0000\u0081"+
		"\u0083\u0003\u0014\n\u0000\u0082\u0081\u0001\u0000\u0000\u0000\u0082\u0083"+
		"\u0001\u0000\u0000\u0000\u0083\u0084\u0001\u0000\u0000\u0000\u0084\u0085"+
		"\u0005\u0005\u0000\u0000\u0085\u0087\u0005\u0006\u0000\u0000\u0086\u0088"+
		"\u0003\u0002\u0001\u0000\u0087\u0086\u0001\u0000\u0000\u0000\u0088\u0089"+
		"\u0001\u0000\u0000\u0000\u0089\u0087\u0001\u0000\u0000\u0000\u0089\u008a"+
		"\u0001\u0000\u0000\u0000\u008a\u008b\u0001\u0000\u0000\u0000\u008b\u008c"+
		"\u0005\u0007\u0000\u0000\u008c\u0017\u0001\u0000\u0000\u0000\u008d\u008f"+
		"\u0005\u0018\u0000\u0000\u008e\u008d\u0001\u0000\u0000\u0000\u008e\u008f"+
		"\u0001\u0000\u0000\u0000\u008f\u0090\u0001\u0000\u0000\u0000\u0090\u0091"+
		"\u0007\u0002\u0000\u0000\u0091\u0019\u0001\u0000\u0000\u0000\u000e\u001d"+
		"*=EIMY\\bj{\u0082\u0089\u008e";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}
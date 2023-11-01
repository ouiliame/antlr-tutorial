// Generated from ./grammar/MyLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MyLangListener } from "./MyLangListener";
import { MyLangVisitor } from "./MyLangVisitor";


export class MyLangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly StringLit = 29;
	public static readonly BoolLit = 30;
	public static readonly FloatLit = 31;
	public static readonly IntLit = 32;
	public static readonly Ident = 33;
	public static readonly LineComment = 34;
	public static readonly BlockComment = 35;
	public static readonly WS = 36;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_varDecl = 2;
	public static readonly RULE_varAssign = 3;
	public static readonly RULE_ifStmt = 4;
	public static readonly RULE_returnStmt = 5;
	public static readonly RULE_expr = 6;
	public static readonly RULE_binOp = 7;
	public static readonly RULE_literal = 8;
	public static readonly RULE_ident = 9;
	public static readonly RULE_fnArgs = 10;
	public static readonly RULE_fnDefn = 11;
	public static readonly RULE_type = 12;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "varDecl", "varAssign", "ifStmt", "returnStmt", 
		"expr", "binOp", "literal", "ident", "fnArgs", "fnDefn", "type",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'='", "'if'", "'('", "')'", "'{'", "'}'", "'else'", 
		"'return'", "','", "'+'", "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", 
		"'<'", "'>'", "'<='", "'>='", "'&&'", "'||'", "'const'", "'int'", "'float'", 
		"'bool'", "'string'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, "StringLit", "BoolLit", "FloatLit", "IntLit", "Ident", "LineComment", 
		"BlockComment", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MyLangParser._LITERAL_NAMES, MyLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MyLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "MyLang.g4"; }

	// @Override
	public get ruleNames(): string[] { return MyLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MyLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MyLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MyLangParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 29;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (MyLangParser.T__2 - 3)) | (1 << (MyLangParser.T__8 - 3)) | (1 << (MyLangParser.T__23 - 3)) | (1 << (MyLangParser.T__24 - 3)) | (1 << (MyLangParser.T__25 - 3)) | (1 << (MyLangParser.T__26 - 3)) | (1 << (MyLangParser.T__27 - 3)) | (1 << (MyLangParser.StringLit - 3)) | (1 << (MyLangParser.BoolLit - 3)) | (1 << (MyLangParser.FloatLit - 3)) | (1 << (MyLangParser.IntLit - 3)) | (1 << (MyLangParser.Ident - 3)))) !== 0)) {
				{
				{
				this.state = 26;
				_localctx._statement = this.statement();
				_localctx._stmts.push(_localctx._statement);
				}
				}
				this.state = 31;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 32;
			this.match(MyLangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, MyLangParser.RULE_statement);
		try {
			this.state = 42;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 34;
				this.varDecl();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 35;
				this.varAssign();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 36;
				this.ifStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 37;
				this.fnDefn();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 38;
				this.returnStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 39;
				this.expr(0);
				this.state = 40;
				this.match(MyLangParser.T__0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varDecl(): VarDeclContext {
		let _localctx: VarDeclContext = new VarDeclContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MyLangParser.RULE_varDecl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 44;
			_localctx._ty = this.type();
			}
			{
			this.state = 45;
			_localctx._name = this.ident();
			}
			this.state = 46;
			this.match(MyLangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public varAssign(): VarAssignContext {
		let _localctx: VarAssignContext = new VarAssignContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MyLangParser.RULE_varAssign);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 48;
			_localctx._name = this.ident();
			}
			this.state = 49;
			this.match(MyLangParser.T__1);
			{
			this.state = 50;
			_localctx._value = this.expr(0);
			}
			this.state = 51;
			this.match(MyLangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ifStmt(): IfStmtContext {
		let _localctx: IfStmtContext = new IfStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MyLangParser.RULE_ifStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 53;
			this.match(MyLangParser.T__2);
			this.state = 54;
			this.match(MyLangParser.T__3);
			this.state = 55;
			_localctx._predicate = this.expr(0);
			this.state = 56;
			this.match(MyLangParser.T__4);
			this.state = 57;
			this.match(MyLangParser.T__5);
			this.state = 59;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 58;
				_localctx._statement = this.statement();
				_localctx._stmts.push(_localctx._statement);
				}
				}
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (MyLangParser.T__2 - 3)) | (1 << (MyLangParser.T__8 - 3)) | (1 << (MyLangParser.T__23 - 3)) | (1 << (MyLangParser.T__24 - 3)) | (1 << (MyLangParser.T__25 - 3)) | (1 << (MyLangParser.T__26 - 3)) | (1 << (MyLangParser.T__27 - 3)) | (1 << (MyLangParser.StringLit - 3)) | (1 << (MyLangParser.BoolLit - 3)) | (1 << (MyLangParser.FloatLit - 3)) | (1 << (MyLangParser.IntLit - 3)) | (1 << (MyLangParser.Ident - 3)))) !== 0));
			this.state = 63;
			this.match(MyLangParser.T__6);
			this.state = 73;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyLangParser.T__7) {
				{
				this.state = 64;
				this.match(MyLangParser.T__7);
				this.state = 65;
				this.match(MyLangParser.T__5);
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 66;
					this.statement();
					}
					}
					this.state = 69;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (MyLangParser.T__2 - 3)) | (1 << (MyLangParser.T__8 - 3)) | (1 << (MyLangParser.T__23 - 3)) | (1 << (MyLangParser.T__24 - 3)) | (1 << (MyLangParser.T__25 - 3)) | (1 << (MyLangParser.T__26 - 3)) | (1 << (MyLangParser.T__27 - 3)) | (1 << (MyLangParser.StringLit - 3)) | (1 << (MyLangParser.BoolLit - 3)) | (1 << (MyLangParser.FloatLit - 3)) | (1 << (MyLangParser.IntLit - 3)) | (1 << (MyLangParser.Ident - 3)))) !== 0));
				this.state = 71;
				this.match(MyLangParser.T__6);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, MyLangParser.RULE_returnStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 75;
			this.match(MyLangParser.T__8);
			this.state = 77;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (MyLangParser.StringLit - 29)) | (1 << (MyLangParser.BoolLit - 29)) | (1 << (MyLangParser.FloatLit - 29)) | (1 << (MyLangParser.IntLit - 29)) | (1 << (MyLangParser.Ident - 29)))) !== 0)) {
				{
				this.state = 76;
				this.expr(0);
				}
			}

			this.state = 79;
			this.match(MyLangParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 12;
		this.enterRecursionRule(_localctx, 12, MyLangParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 98;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new FnCallExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 82;
				this.ident();
				this.state = 83;
				this.match(MyLangParser.T__3);
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (MyLangParser.StringLit - 29)) | (1 << (MyLangParser.BoolLit - 29)) | (1 << (MyLangParser.FloatLit - 29)) | (1 << (MyLangParser.IntLit - 29)) | (1 << (MyLangParser.Ident - 29)))) !== 0)) {
					{
					this.state = 84;
					this.expr(0);
					this.state = 89;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MyLangParser.T__9) {
						{
						{
						this.state = 85;
						this.match(MyLangParser.T__9);
						this.state = 86;
						this.expr(0);
						}
						}
						this.state = 91;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 94;
				this.match(MyLangParser.T__4);
				}
				break;

			case 2:
				{
				_localctx = new LiteralExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.literal();
				}
				break;

			case 3:
				{
				_localctx = new IdentExprContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 97;
				this.ident();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 106;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new BinOpExprContext(new ExprContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, MyLangParser.RULE_expr);
					this.state = 100;
					if (!(this.precpred(this._ctx, 4))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
					}
					this.state = 101;
					this.binOp();
					this.state = 102;
					this.expr(5);
					}
					}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 9, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public binOp(): BinOpContext {
		let _localctx: BinOpContext = new BinOpContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, MyLangParser.RULE_binOp);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 109;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyLangParser.T__10) | (1 << MyLangParser.T__11) | (1 << MyLangParser.T__12) | (1 << MyLangParser.T__13) | (1 << MyLangParser.T__14) | (1 << MyLangParser.T__15) | (1 << MyLangParser.T__16) | (1 << MyLangParser.T__17) | (1 << MyLangParser.T__18) | (1 << MyLangParser.T__19) | (1 << MyLangParser.T__20) | (1 << MyLangParser.T__21) | (1 << MyLangParser.T__22))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MyLangParser.RULE_literal);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			_la = this._input.LA(1);
			if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (MyLangParser.StringLit - 29)) | (1 << (MyLangParser.BoolLit - 29)) | (1 << (MyLangParser.FloatLit - 29)) | (1 << (MyLangParser.IntLit - 29)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ident(): IdentContext {
		let _localctx: IdentContext = new IdentContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, MyLangParser.RULE_ident);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(MyLangParser.Ident);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnArgs(): FnArgsContext {
		let _localctx: FnArgsContext = new FnArgsContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MyLangParser.RULE_fnArgs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.type();
			this.state = 116;
			this.ident();
			this.state = 123;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === MyLangParser.T__9) {
				{
				{
				this.state = 117;
				this.match(MyLangParser.T__9);
				this.state = 118;
				this.type();
				this.state = 119;
				this.ident();
				}
				}
				this.state = 125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fnDefn(): FnDefnContext {
		let _localctx: FnDefnContext = new FnDefnContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MyLangParser.RULE_fnDefn);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 126;
			this.type();
			this.state = 127;
			this.ident();
			this.state = 128;
			this.match(MyLangParser.T__3);
			this.state = 130;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyLangParser.T__23) | (1 << MyLangParser.T__24) | (1 << MyLangParser.T__25) | (1 << MyLangParser.T__26) | (1 << MyLangParser.T__27))) !== 0)) {
				{
				this.state = 129;
				this.fnArgs();
				}
			}

			this.state = 132;
			this.match(MyLangParser.T__4);
			this.state = 133;
			this.match(MyLangParser.T__5);
			this.state = 135;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 134;
				this.statement();
				}
				}
				this.state = 137;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (MyLangParser.T__2 - 3)) | (1 << (MyLangParser.T__8 - 3)) | (1 << (MyLangParser.T__23 - 3)) | (1 << (MyLangParser.T__24 - 3)) | (1 << (MyLangParser.T__25 - 3)) | (1 << (MyLangParser.T__26 - 3)) | (1 << (MyLangParser.T__27 - 3)) | (1 << (MyLangParser.StringLit - 3)) | (1 << (MyLangParser.BoolLit - 3)) | (1 << (MyLangParser.FloatLit - 3)) | (1 << (MyLangParser.IntLit - 3)) | (1 << (MyLangParser.Ident - 3)))) !== 0));
			this.state = 139;
			this.match(MyLangParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MyLangParser.RULE_type);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MyLangParser.T__23) {
				{
				this.state = 141;
				this.match(MyLangParser.T__23);
				}
			}

			this.state = 144;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MyLangParser.T__24) | (1 << MyLangParser.T__25) | (1 << MyLangParser.T__26) | (1 << MyLangParser.T__27))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 6:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03&\x95\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x03\x02\x07\x02\x1E\n\x02\f\x02\x0E\x02!\v\x02\x03\x02\x03" +
		"\x02\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05" +
		"\x03-\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06>" +
		"\n\x06\r\x06\x0E\x06?\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06F\n\x06\r" +
		"\x06\x0E\x06G\x03\x06\x03\x06\x05\x06L\n\x06\x03\x07\x03\x07\x05\x07P" +
		"\n\x07\x03\x07\x03\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x07\bZ\n\b" +
		"\f\b\x0E\b]\v\b\x05\b_\n\b\x03\b\x03\b\x03\b\x03\b\x05\be\n\b\x03\b\x03" +
		"\b\x03\b\x03\b\x07\bk\n\b\f\b\x0E\bn\v\b\x03\t\x03\t\x03\n\x03\n\x03\v" +
		"\x03\v\x03\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f|\n\f\f\f\x0E\f\x7F\v" +
		"\f\x03\r\x03\r\x03\r\x03\r\x05\r\x85\n\r\x03\r\x03\r\x03\r\x06\r\x8A\n" +
		"\r\r\r\x0E\r\x8B\x03\r\x03\r\x03\x0E\x05\x0E\x91\n\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x02\x02\x03\x0E\x0F\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x02\x05\x03\x02" +
		"\r\x19\x03\x02\x1F\"\x03\x02\x1B\x1E\x02\x9A\x02\x1F\x03\x02\x02\x02\x04" +
		",\x03\x02\x02\x02\x06.\x03\x02\x02\x02\b2\x03\x02\x02\x02\n7\x03\x02\x02" +
		"\x02\fM\x03\x02\x02\x02\x0Ed\x03\x02\x02\x02\x10o\x03\x02\x02\x02\x12" +
		"q\x03\x02\x02\x02\x14s\x03\x02\x02\x02\x16u\x03\x02\x02\x02\x18\x80\x03" +
		"\x02\x02\x02\x1A\x90\x03\x02\x02\x02\x1C\x1E\x05\x04\x03\x02\x1D\x1C\x03" +
		"\x02\x02\x02\x1E!\x03\x02\x02\x02\x1F\x1D\x03\x02\x02\x02\x1F \x03\x02" +
		"\x02\x02 \"\x03\x02\x02\x02!\x1F\x03\x02\x02\x02\"#\x07\x02\x02\x03#\x03" +
		"\x03\x02\x02\x02$-\x05\x06\x04\x02%-\x05\b\x05\x02&-\x05\n\x06\x02\'-" +
		"\x05\x18\r\x02(-\x05\f\x07\x02)*\x05\x0E\b\x02*+\x07\x03\x02\x02+-\x03" +
		"\x02\x02\x02,$\x03\x02\x02\x02,%\x03\x02\x02\x02,&\x03\x02\x02\x02,\'" +
		"\x03\x02\x02\x02,(\x03\x02\x02\x02,)\x03\x02\x02\x02-\x05\x03\x02\x02" +
		"\x02./\x05\x1A\x0E\x02/0\x05\x14\v\x0201\x07\x03\x02\x021\x07\x03\x02" +
		"\x02\x0223\x05\x14\v\x0234\x07\x04\x02\x0245\x05\x0E\b\x0256\x07\x03\x02" +
		"\x026\t\x03\x02\x02\x0278\x07\x05\x02\x0289\x07\x06\x02\x029:\x05\x0E" +
		"\b\x02:;\x07\x07\x02\x02;=\x07\b\x02\x02<>\x05\x04\x03\x02=<\x03\x02\x02" +
		"\x02>?\x03\x02\x02\x02?=\x03\x02\x02\x02?@\x03\x02\x02\x02@A\x03\x02\x02" +
		"\x02AK\x07\t\x02\x02BC\x07\n\x02\x02CE\x07\b\x02\x02DF\x05\x04\x03\x02" +
		"ED\x03\x02\x02\x02FG\x03\x02\x02\x02GE\x03\x02\x02\x02GH\x03\x02\x02\x02" +
		"HI\x03\x02\x02\x02IJ\x07\t\x02\x02JL\x03\x02\x02\x02KB\x03\x02\x02\x02" +
		"KL\x03\x02\x02\x02L\v\x03\x02\x02\x02MO\x07\v\x02\x02NP\x05\x0E\b\x02" +
		"ON\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\x03\x02\x02\x02QR\x07\x03\x02\x02" +
		"R\r\x03\x02\x02\x02ST\b\b\x01\x02TU\x05\x14\v\x02U^\x07\x06\x02\x02V[" +
		"\x05\x0E\b\x02WX\x07\f\x02\x02XZ\x05\x0E\b\x02YW\x03\x02\x02\x02Z]\x03" +
		"\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02\x02\x02\\_\x03\x02\x02\x02]" +
		"[\x03\x02\x02\x02^V\x03\x02\x02\x02^_\x03\x02\x02\x02_`\x03\x02\x02\x02" +
		"`a\x07\x07\x02\x02ae\x03\x02\x02\x02be\x05\x12\n\x02ce\x05\x14\v\x02d" +
		"S\x03\x02\x02\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02el\x03\x02\x02\x02" +
		"fg\f\x06\x02\x02gh\x05\x10\t\x02hi\x05\x0E\b\x07ik\x03\x02\x02\x02jf\x03" +
		"\x02\x02\x02kn\x03\x02\x02\x02lj\x03\x02\x02\x02lm\x03\x02\x02\x02m\x0F" +
		"\x03\x02\x02\x02nl\x03\x02\x02\x02op\t\x02\x02\x02p\x11\x03\x02\x02\x02" +
		"qr\t\x03\x02\x02r\x13\x03\x02\x02\x02st\x07#\x02\x02t\x15\x03\x02\x02" +
		"\x02uv\x05\x1A\x0E\x02v}\x05\x14\v\x02wx\x07\f\x02\x02xy\x05\x1A\x0E\x02" +
		"yz\x05\x14\v\x02z|\x03\x02\x02\x02{w\x03\x02\x02\x02|\x7F\x03\x02\x02" +
		"\x02}{\x03\x02\x02\x02}~\x03\x02\x02\x02~\x17\x03\x02\x02\x02\x7F}\x03" +
		"\x02\x02\x02\x80\x81\x05\x1A\x0E\x02\x81\x82\x05\x14\v\x02\x82\x84\x07" +
		"\x06\x02\x02\x83\x85\x05\x16\f\x02\x84\x83\x03\x02\x02\x02\x84\x85\x03" +
		"\x02\x02\x02\x85\x86\x03\x02\x02\x02\x86\x87\x07\x07\x02\x02\x87\x89\x07" +
		"\b\x02\x02\x88\x8A\x05\x04\x03\x02\x89\x88\x03\x02\x02\x02\x8A\x8B\x03" +
		"\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8D\x03" +
		"\x02\x02\x02\x8D\x8E\x07\t\x02\x02\x8E\x19\x03\x02\x02\x02\x8F\x91\x07" +
		"\x1A\x02\x02\x90\x8F\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\x92\x03" +
		"\x02\x02\x02\x92\x93\t\x04\x02\x02\x93\x1B\x03\x02\x02\x02\x10\x1F,?G" +
		"KO[^dl}\x84\x8B\x90";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MyLangParser.__ATN) {
			MyLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MyLangParser._serializedATN));
		}

		return MyLangParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public _statement!: StatementContext;
	public _stmts: StatementContext[] = [];
	public EOF(): TerminalNode { return this.getToken(MyLangParser.EOF, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_program; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public varDecl(): VarDeclContext | undefined {
		return this.tryGetRuleContext(0, VarDeclContext);
	}
	public varAssign(): VarAssignContext | undefined {
		return this.tryGetRuleContext(0, VarAssignContext);
	}
	public ifStmt(): IfStmtContext | undefined {
		return this.tryGetRuleContext(0, IfStmtContext);
	}
	public fnDefn(): FnDefnContext | undefined {
		return this.tryGetRuleContext(0, FnDefnContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarDeclContext extends ParserRuleContext {
	public _ty!: TypeContext;
	public _name!: IdentContext;
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_varDecl; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterVarDecl) {
			listener.enterVarDecl(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitVarDecl) {
			listener.exitVarDecl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitVarDecl) {
			return visitor.visitVarDecl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VarAssignContext extends ParserRuleContext {
	public _name!: IdentContext;
	public _value!: ExprContext;
	public ident(): IdentContext | undefined {
		return this.tryGetRuleContext(0, IdentContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_varAssign; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterVarAssign) {
			listener.enterVarAssign(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitVarAssign) {
			listener.exitVarAssign(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitVarAssign) {
			return visitor.visitVarAssign(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IfStmtContext extends ParserRuleContext {
	public _predicate!: ExprContext;
	public _statement!: StatementContext;
	public _stmts: StatementContext[] = [];
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_ifStmt; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterIfStmt) {
			listener.enterIfStmt(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitIfStmt) {
			listener.exitIfStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitIfStmt) {
			return visitor.visitIfStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class BinOpExprContext extends ExprContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public binOp(): BinOpContext {
		return this.getRuleContext(0, BinOpContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterBinOpExpr) {
			listener.enterBinOpExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitBinOpExpr) {
			listener.exitBinOpExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitBinOpExpr) {
			return visitor.visitBinOpExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FnCallExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterFnCallExpr) {
			listener.enterFnCallExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitFnCallExpr) {
			listener.exitFnCallExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitFnCallExpr) {
			return visitor.visitFnCallExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LiteralExprContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterLiteralExpr) {
			listener.enterLiteralExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitLiteralExpr) {
			listener.exitLiteralExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitLiteralExpr) {
			return visitor.visitLiteralExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExprContext extends ExprContext {
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterIdentExpr) {
			listener.enterIdentExpr(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitIdentExpr) {
			listener.exitIdentExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitIdentExpr) {
			return visitor.visitIdentExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class BinOpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_binOp; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterBinOp) {
			listener.enterBinOp(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitBinOp) {
			listener.exitBinOp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitBinOp) {
			return visitor.visitBinOp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LiteralContext extends ParserRuleContext {
	public BoolLit(): TerminalNode | undefined { return this.tryGetToken(MyLangParser.BoolLit, 0); }
	public FloatLit(): TerminalNode | undefined { return this.tryGetToken(MyLangParser.FloatLit, 0); }
	public IntLit(): TerminalNode | undefined { return this.tryGetToken(MyLangParser.IntLit, 0); }
	public StringLit(): TerminalNode | undefined { return this.tryGetToken(MyLangParser.StringLit, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_literal; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterLiteral) {
			listener.enterLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitLiteral) {
			listener.exitLiteral(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitLiteral) {
			return visitor.visitLiteral(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentContext extends ParserRuleContext {
	public Ident(): TerminalNode { return this.getToken(MyLangParser.Ident, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_ident; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterIdent) {
			listener.enterIdent(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitIdent) {
			listener.exitIdent(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitIdent) {
			return visitor.visitIdent(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnArgsContext extends ParserRuleContext {
	public type(): TypeContext[];
	public type(i: number): TypeContext;
	public type(i?: number): TypeContext | TypeContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypeContext);
		} else {
			return this.getRuleContext(i, TypeContext);
		}
	}
	public ident(): IdentContext[];
	public ident(i: number): IdentContext;
	public ident(i?: number): IdentContext | IdentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentContext);
		} else {
			return this.getRuleContext(i, IdentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_fnArgs; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterFnArgs) {
			listener.enterFnArgs(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitFnArgs) {
			listener.exitFnArgs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitFnArgs) {
			return visitor.visitFnArgs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FnDefnContext extends ParserRuleContext {
	public type(): TypeContext {
		return this.getRuleContext(0, TypeContext);
	}
	public ident(): IdentContext {
		return this.getRuleContext(0, IdentContext);
	}
	public fnArgs(): FnArgsContext | undefined {
		return this.tryGetRuleContext(0, FnArgsContext);
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_fnDefn; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterFnDefn) {
			listener.enterFnDefn(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitFnDefn) {
			listener.exitFnDefn(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitFnDefn) {
			return visitor.visitFnDefn(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MyLangParser.RULE_type; }
	// @Override
	public enterRule(listener: MyLangListener): void {
		if (listener.enterType) {
			listener.enterType(this);
		}
	}
	// @Override
	public exitRule(listener: MyLangListener): void {
		if (listener.exitType) {
			listener.exitType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MyLangVisitor<Result>): Result {
		if (visitor.visitType) {
			return visitor.visitType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}



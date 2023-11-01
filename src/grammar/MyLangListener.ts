// Generated from ./grammar/MyLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { BinOpExprContext } from "./MyLangParser";
import { FnCallExprContext } from "./MyLangParser";
import { LiteralExprContext } from "./MyLangParser";
import { IdentExprContext } from "./MyLangParser";
import { ProgramContext } from "./MyLangParser";
import { StatementContext } from "./MyLangParser";
import { VarDeclContext } from "./MyLangParser";
import { VarAssignContext } from "./MyLangParser";
import { IfStmtContext } from "./MyLangParser";
import { ReturnStmtContext } from "./MyLangParser";
import { ExprContext } from "./MyLangParser";
import { BinOpContext } from "./MyLangParser";
import { LiteralContext } from "./MyLangParser";
import { IdentContext } from "./MyLangParser";
import { FnArgsContext } from "./MyLangParser";
import { FnDefnContext } from "./MyLangParser";
import { TypeContext } from "./MyLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `MyLangParser`.
 */
export interface MyLangListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `BinOpExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterBinOpExpr?: (ctx: BinOpExprContext) => void;
	/**
	 * Exit a parse tree produced by the `BinOpExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitBinOpExpr?: (ctx: BinOpExprContext) => void;

	/**
	 * Enter a parse tree produced by the `FnCallExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterFnCallExpr?: (ctx: FnCallExprContext) => void;
	/**
	 * Exit a parse tree produced by the `FnCallExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitFnCallExpr?: (ctx: FnCallExprContext) => void;

	/**
	 * Enter a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpr?: (ctx: LiteralExprContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpr?: (ctx: LiteralExprContext) => void;

	/**
	 * Enter a parse tree produced by the `IdentExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterIdentExpr?: (ctx: IdentExprContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitIdentExpr?: (ctx: IdentExprContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.varDecl`.
	 * @param ctx the parse tree
	 */
	enterVarDecl?: (ctx: VarDeclContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.varDecl`.
	 * @param ctx the parse tree
	 */
	exitVarDecl?: (ctx: VarDeclContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.varAssign`.
	 * @param ctx the parse tree
	 */
	enterVarAssign?: (ctx: VarAssignContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.varAssign`.
	 * @param ctx the parse tree
	 */
	exitVarAssign?: (ctx: VarAssignContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	enterIfStmt?: (ctx: IfStmtContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.ifStmt`.
	 * @param ctx the parse tree
	 */
	exitIfStmt?: (ctx: IfStmtContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.binOp`.
	 * @param ctx the parse tree
	 */
	enterBinOp?: (ctx: BinOpContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.binOp`.
	 * @param ctx the parse tree
	 */
	exitBinOp?: (ctx: BinOpContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.literal`.
	 * @param ctx the parse tree
	 */
	enterLiteral?: (ctx: LiteralContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.literal`.
	 * @param ctx the parse tree
	 */
	exitLiteral?: (ctx: LiteralContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.ident`.
	 * @param ctx the parse tree
	 */
	enterIdent?: (ctx: IdentContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.ident`.
	 * @param ctx the parse tree
	 */
	exitIdent?: (ctx: IdentContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.fnArgs`.
	 * @param ctx the parse tree
	 */
	enterFnArgs?: (ctx: FnArgsContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.fnArgs`.
	 * @param ctx the parse tree
	 */
	exitFnArgs?: (ctx: FnArgsContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	enterFnDefn?: (ctx: FnDefnContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.fnDefn`.
	 * @param ctx the parse tree
	 */
	exitFnDefn?: (ctx: FnDefnContext) => void;

	/**
	 * Enter a parse tree produced by `MyLangParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `MyLangParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
}


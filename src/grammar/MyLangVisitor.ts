// Generated from ./grammar/MyLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MyLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MyLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `BinOpExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOpExpr?: (ctx: BinOpExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `FnCallExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnCallExpr?: (ctx: FnCallExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `LiteralExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteralExpr?: (ctx: LiteralExprContext) => Result;

	/**
	 * Visit a parse tree produced by the `IdentExpr`
	 * labeled alternative in `MyLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentExpr?: (ctx: IdentExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.varDecl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarDecl?: (ctx: VarDeclContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.varAssign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarAssign?: (ctx: VarAssignContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.ifStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfStmt?: (ctx: IfStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.binOp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBinOp?: (ctx: BinOpContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.ident`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdent?: (ctx: IdentContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.fnArgs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnArgs?: (ctx: FnArgsContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.fnDefn`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFnDefn?: (ctx: FnDefnContext) => Result;

	/**
	 * Visit a parse tree produced by `MyLangParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
}


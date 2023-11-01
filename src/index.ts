import * as fs from "fs";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MyLangLexer } from "./grammar/MyLangLexer";
import {
  MyLangParser,
  ProgramContext,
  StatementContext,
  VarAssignContext,
  VarDeclContext,
} from "./grammar/MyLangParser";
import { MyLangVisitor } from "./grammar/MyLangVisitor";
import { AbstractParseTreeVisitor } from "antlr4ts/tree/AbstractParseTreeVisitor";

export class MyLangEvalVisitor
  extends AbstractParseTreeVisitor<any>
  implements MyLangVisitor<any>
{
  public ctx: { [k: string]: any } = {};

  visitProgram(ctx: ProgramContext) {
    let stmts = ctx._stmts;
    let body = stmts.map((stmt) => this.visit(stmt));
  }

  // visitStatement(ctx: StatementContext) {}

  visitVarDecl(ctx: VarDeclContext) {
    let name = ctx._name.Ident().text;
    let ty = ctx._ty.text;
    this.ctx[name] = { ty, value: undefined };
  }

  visitVarAssign(ctx: VarAssignContext) {
    let name = ctx._name.Ident().text;
    let value = this.visit(ctx._value); // evaluate the expression
    this.ctx[name].value = value;
  }

  defaultResult() {
    return "hello";
  }
}

function parse(input: string) {
  let lexer = new MyLangLexer(CharStreams.fromString(input));
  let parser = new MyLangParser(new CommonTokenStream(lexer));
  let tree = parser.program(); // parse tree
  let visitor = new MyLangEvalVisitor();
  let result = visitor.visit(tree);
  console.log(visitor.ctx);
}

let fileText = fs.readFileSync("./examples/test1.mylang").toString();

parse(fileText);

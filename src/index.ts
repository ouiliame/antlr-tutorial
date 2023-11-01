import { CharStreams, CommonTokenStream } from "antlr4ts";
import { MyLangLexer } from "./grammar/MyLangLexer";
import { MyLangParser } from "./grammar/MyLangParser";

function parse(input: string) {
  let lexer = new MyLangLexer(CharStreams.fromString(input));
  let parser = new MyLangParser(new CommonTokenStream(lexer));
  let tree = parser.program();
  console.log(tree);
}

parse(`program`);

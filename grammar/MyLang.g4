grammar MyLang;

program: (stmts += statement)* EOF;

statement:
	varDecl
	| varAssign
	| ifStmt
	| fnDefn
	| returnStmt
	| expr ';';

varDecl: (ty = type) (name = ident) ';';

varAssign: (name = ident) '=' (value = expr) ';';

ifStmt:
	'if' '(' predicate = expr ')' '{' (stmts += statement)+ '}' (
		'else' '{' statement+ '}'
	)?;

returnStmt: 'return' expr? ';';

expr:
	expr binOp expr						# BinOpExpr
	| ident '(' (expr (',' expr)*)? ')'	# FnCallExpr
	| literal							# LiteralExpr
	| ident								# IdentExpr;

binOp:
	'+'
	| '-'
	| '*'
	| '/'
	| '%'
	| '=='
	| '!='
	| '<'
	| '>'
	| '<='
	| '>='
	| '&&'
	| '||';

literal: BoolLit | FloatLit | IntLit | StringLit;
ident: Ident;

fnArgs: type ident (',' type ident)*;
fnDefn: type ident '(' fnArgs? ')' '{' statement+ '}';
type: 'const'? ('int' | 'float' | 'bool' | 'string');

StringLit: '"' ~["]* '"'; // LEXER RULE
BoolLit: 'true' | 'false';
FloatLit: [0-9]+ '.' [0-9]+;
IntLit: [0-9]+;
Ident: [_a-zA-Z][_a-zA-Z0-9]*;

LineComment: '//' ~[\r\n]* -> skip;
BlockComment: '/*' .*? '*/' -> skip;
WS: [ \t\r\n]+ -> skip;
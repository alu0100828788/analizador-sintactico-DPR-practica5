var assert = chai.assert;

suite('Tokens', function(){
  // Probar la función bexec
  test('RegExp.bexec()', function(){
    var input_str = "prueba";
	var regexp = /ba/;
	regexp.lastIndex = 0;
	
	assert.equal(regexp.bexec(input_str), null);
  });

  // Probar la función String.tokens sobre una string sencilla.
  test('String.tokens()', function(){
    var input_str = "var a = b;";
    var esperado_str = "[{\"type\":\"ID\",\"value\":\"var\",\"from\":0,\"to\":3},{\"type\":\"ID\",\"value\":\"a\",\"from\":4,\"to\":5},{\"type\":\"=\",\"value\":\"=\",\"from\":6,\"to\":7},{\"type\":\"ID\",\"value\":\"b\",\"from\":8,\"to\":9},{\"type\":\";\",\"value\":\";\",\"from\":9,\"to\":10}]";
	var resultado_str = JSON.stringify(input_str.tokens());
	
	assert.equal(esperado_str, resultado_str);
  });
  
  // Probar con un error sencillo.
  test('String.tokens(): Exccepción de error', function(){
    var input_str = "#ERROR#";
	var resultado_str = "Syntax error near '#ERROR#'";
	
    chai.expect(function () { input_str.tokens() }).to.throw(resultado_str);
  });
});

suite('Parser', function(){
  // Probamos el parser.
  test('Parser', function(){
	var input_str = "VAR x, squ;     PROCEDURE square;  BEGIN     squ = x * x  END;     BEGIN     x = 1;     WHILE x <= 10 DO     BEGIN        CALL square;        x = x + 1     END  END.";
	var result = window.parse(input_str);
	var esperado_str = "[\n    {\n        \"type\": \"Var ID\",\n        \"value\": \"x\"\n    },\n    {\n        \"type\": \"Var ID\",\n        \"value\": \"squ\"\n    },\n    {\n        \"type\": \"Procedure\",\n        \"value\": \"square\",\n        \"left\": [\n            [\n                {\n                    \"type\": \"=\",\n                    \"left\": {\n                        \"type\": \"ID\",\n                        \"value\": \"squ\"\n                    },\n                    \"right\": {\n                        \"type\": \"*\",\n                        \"left\": {\n                            \"type\": \"ID\",\n                            \"value\": \"x\"\n                        },\n                        \"right\": {\n                            \"type\": \"ID\",\n                            \"value\": \"x\"\n                        }\n                    }\n                }\n            ]\n        ]\n    },\n    [\n        {\n            \"type\": \"=\",\n            \"left\": {\n                \"type\": \"ID\",\n                \"value\": \"x\"\n            },\n            \"right\": {\n                \"type\": \"NUM\",\n                \"value\": 1\n            }\n        },\n        {\n            \"type\": \"WHILE\",\n            \"left\": {\n                \"type\": \"<=\",\n                \"left\": {\n                    \"type\": \"ID\",\n                    \"value\": \"x\"\n                },\n                \"right\": {\n                    \"type\": \"NUM\",\n                    \"value\": 10\n                }\n            },\n            \"right\": [\n                {\n                    \"type\": \"CALL\",\n                    \"value\": \"square\"\n                },\n                {\n                    \"type\": \"=\",\n                    \"left\": {\n                        \"type\": \"ID\",\n                        \"value\": \"x\"\n                    },\n                    \"right\": {\n                        \"type\": \"+\",\n                        \"left\": {\n                            \"type\": \"ID\",\n                            \"value\": \"x\"\n                        },\n                        \"right\": {\n                            \"type\": \"NUM\",\n                            \"value\": 1\n                        }\n                    }\n                }\n            ]\n        }\n    ]\n]";
		var resultado_str, tree;    try {      tree = parse(input_str);      resultado_str = JSON.stringify(tree, null, 4);
    } catch (e) {
      resultado_str = JSON.stringify(e, null, 4);
    }
	
	assert.equal(esperado_str, resultado_str);
  });
  
  // Probamos el parser con errores.
  test('Parser: Errores', function(){
  	var input_str = "error = $;";
	var esperado_str = "Syntax error near '$;'";
	
    chai.expect(function () { window.parse(input_str) }).to.throw(esperado_str);
  });
});

suite('Otros', function(){
  // Probar CodeMirror+
  test('CodeMirror', function(){
    var editor = $('.CodeMirror')[0].CodeMirror;
    editor.setValue("CONST x = 0; \nVAR a, b, c;\nBEGIN\nIF a == 1 THEN\nWHILE b <= 5 DO\na = a + 1\nEND.");
    window.main();
  
    var esperado_str = "[\n  {\n    \"type\": \"=\",\n    \"left\": {\n      \"type\": \"Const ID\",\n      \"value\": \"x\"\n    },\n    \"right\": {\n      \"type\": \"NUM\",\n      \"value\": 0\n    }\n  },\n  {\n    \"type\": \"Var ID\",\n    \"value\": \"a\"\n  },\n  {\n    \"type\": \"Var ID\",\n    \"value\": \"b\"\n  },\n  {\n    \"type\": \"Var ID\",\n    \"value\": \"c\"\n  },\n  [\n    {\n      \"type\": \"IF\",\n      \"left\": {\n        \"type\": \"==\",\n        \"left\": {\n          \"type\": \"ID\",\n          \"value\": \"a\"\n        },\n        \"right\": {\n          \"type\": \"NUM\",\n          \"value\": 1\n        }\n      },\n      \"right\": {\n        \"type\": \"WHILE\",\n        \"left\": {\n          \"type\": \"&lt;=\",\n          \"left\": {\n            \"type\": \"ID\",\n            \"value\": \"b\"\n          },\n          \"right\": {\n            \"type\": \"NUM\",\n            \"value\": 5\n          }\n        },\n        \"right\": {\n          \"type\": \"=\",\n          \"left\": {\n            \"type\": \"ID\",\n            \"value\": \"a\"\n          },\n          \"right\": {\n            \"type\": \"+\",\n            \"left\": {\n              \"type\": \"ID\",\n              \"value\": \"a\"\n            },\n            \"right\": {\n              \"type\": \"NUM\",\n              \"value\": 1\n            }\n          }\n        }\n      }\n    }\n  ]\n]";
    var resultado_str = OUTPUT.innerHTML;
    assert.equal(esperado_str, resultado_str);
  });
});
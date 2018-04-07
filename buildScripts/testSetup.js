//This file will not be transpiled so we can use ES5 and CommonJS

//Register babel to transpile test cases before Mocha can run them
require('babel-register')();

/*
  We are telling mocha to skip all css files and consider it as empty function
  as it does not understand css file.
*/
require.extensions['.css'] = function(){};

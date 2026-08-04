const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

const docsFilePath = path.resolve(__dirname, '..', 'lib', 'docs.ts');

function loadDocsModule() {
  const source = fs.readFileSync(docsFilePath, 'utf8');
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
    fileName: docsFilePath,
  });

  const moduleRef = { exports: {} };
  const context = {
    module: moduleRef,
    exports: moduleRef.exports,
    require: (moduleName) => {
      throw new Error(`Unexpected import in ${docsFilePath}: ${moduleName}`);
    },
    __dirname: path.dirname(docsFilePath),
    __filename: docsFilePath,
  };

  vm.runInNewContext(transpiled.outputText, context, { filename: docsFilePath });
  return moduleRef.exports;
}

module.exports = {
  loadDocsModule,
};

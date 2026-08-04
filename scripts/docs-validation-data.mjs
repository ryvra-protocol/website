import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const docsFilePath = path.resolve(__dirname, '..', 'lib', 'docs.ts');

export function loadDocsModule() {
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

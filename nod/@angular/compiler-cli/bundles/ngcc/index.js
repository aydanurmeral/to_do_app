
      import {createRequire as __cjsCompatRequire} from 'module';
      const require = __cjsCompatRequire(import.meta.url);
    
import {
  mainNgcc
} from "../chunk-DWKDUDH5.js";
import "../chunk-7DUI3BSX.js";
import {
  clearTsConfigCache
} from "../chunk-RVYJCLRC.js";
import "../chunk-5IL7LYRJ.js";
import "../chunk-DCKTQM63.js";
import "../chunk-O4JLZZWJ.js";
import {
  ConsoleLogger,
  LogLevel
} from "../chunk-SBDNBITT.js";
import "../chunk-6ZJFIQBG.js";
import "../chunk-Z534TW2O.js";
import {
  NodeJSFileSystem,
  setFileSystem
} from "../chunk-EC5K6QPP.js";
import "../chunk-NJMZRTB6.js";
import "../chunk-SRFZMXHZ.js";

// bazel-out/darwin_arm64-fastbuild/bin/packages/compiler-cli/ngcc/index.mjs
import { dirname, join } from "path";
import { fileURLToPath } from "url";
function process(options) {
  setFileSystem(new NodeJSFileSystem());
  return mainNgcc(options);
}
var containingDirPath = dirname(fileURLToPath(import.meta.url));
var ngccMainFilePath = join(containingDirPath, "./main-ngcc.js");
export {
  ConsoleLogger,
  LogLevel,
  clearTsConfigCache,
  ngccMainFilePath,
  process
};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
//# sourceMappingURL=index.js.map

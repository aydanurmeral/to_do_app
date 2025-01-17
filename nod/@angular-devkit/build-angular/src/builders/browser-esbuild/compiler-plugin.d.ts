/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import type { Plugin } from 'esbuild';
import ts from 'typescript';
import { BundleStylesheetOptions } from './stylesheets';
export declare class SourceFileCache extends Map<string, ts.SourceFile> {
    readonly modifiedFiles: Set<string>;
    readonly babelFileCache: Map<string, Uint8Array>;
    readonly typeScriptFileCache: Map<string, Uint8Array>;
    invalidate(files: Iterable<string>): void;
}
export interface CompilerPluginOptions {
    sourcemap: boolean;
    tsconfig: string;
    advancedOptimizations?: boolean;
    thirdPartySourcemaps?: boolean;
    fileReplacements?: Record<string, string>;
    sourceFileCache?: SourceFileCache;
}
export declare function createCompilerPlugin(pluginOptions: CompilerPluginOptions, styleOptions: BundleStylesheetOptions & {
    inlineStyleLanguage: string;
}): Plugin;

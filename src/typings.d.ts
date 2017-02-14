// Typings reference file, see links for more information
// https://github.com/typings/typings
// https://www.typescriptlang.org/docs/handbook/writing-declaration-files.html
/// <reference path="../typings/globals/jqueryui/index.d.ts"/>

declare var System: any;
//declare var require: any;
declare var require: {
     <T>(path: string): T;
     (paths: string[], callback: (...modules: any[]) => void): void;
     ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
 };



(()=>{"use strict";var t={651:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=s(920),a=s(496),o=s(554),u=t=>{const e=t.lineAt(0).range.start,s=t.lineAt(t.lineCount-1).range.end;return new a.Range(e,s)};e.default=class{constructor(t,e){this.loggingService=t,this.statusbarService=e}formatDocument(t,e){const s=t.getText(),{fileName:u}=t,n=((t,e)=>{const s=a.workspace.getConfiguration("scssFormatter"),{languageId:r}=t;return Object.assign(Object.assign({},s),{tabWidth:e.tabSize,useTabs:!e.insertSpaces,parser:r})})(t,e);try{const t=(0,r.format)(s,n);return this.loggingService.addToOutput(`${u} : Formatted Successfully`),this.statusbarService.updateStatusBarItem(o.FormatterStatus.Success),t}catch(t){const e=t instanceof Error?t.message:String(t);return this.loggingService.addToOutput(((t,e)=>{const s=t.split("\n");return s.length>0?(s[0]=s[0].replace(/(?:\d*):(?:\d*)/g,`${e}:$1:$2`),s.join("\n")):t})(e,u)),this.statusbarService.updateStatusBarItem(o.FormatterStatus.Error),s}}provideDocumentFormattingEdits(t,e){const s=this.formatDocument(t,e);return[a.TextEdit.replace(u(t),s)]}}},289:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0});const r=s(496),a=s(593);e.default=class{constructor(t){this.outputChannel=r.window.createOutputChannel(a.EXTENSION_NAME),this.statusbarService=t}addToOutput(t){const e=`${(new Date).toLocaleString()}:`;this.outputChannel.appendLine(e),this.outputChannel.appendLine("-".repeat(e.length)),this.outputChannel.appendLine(`${t}\n`)}registerDisposables(){return[r.commands.registerCommand("scss-formatter.output.show",(()=>{this.outputChannel.show()})),r.commands.registerCommand("scss-formatter.output.clear",(()=>{this.outputChannel.clear(),this.statusbarService.reset()}))]}}},554:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.FormatterStatus=void 0;const r=s(496),a=s(593);var o;!function(t){t.Ready="check-all",t.Success="check",t.Error="alert"}(o=e.FormatterStatus||(e.FormatterStatus={})),e.default=class{constructor(){this.statusBarItem=r.window.createStatusBarItem(r.StatusBarAlignment.Right,-1),this.updateStatusBarItem(o.Ready),this.statusBarItem.tooltip=`${a.EXTENSION_NAME}: v${a.EXTENSION_VERSION}`,this.statusBarItem.command="scss-formatter.output.show",this.toggleStatusBarItem(r.window.activeTextEditor)}registerDisposables(){return[r.window.onDidChangeActiveTextEditor((t=>{this.updateStatusBarItem(o.Ready),this.toggleStatusBarItem(t)}))]}toggleStatusBarItem(t){if(this.statusBarItem)if(t){if((t=>["debug","output"].some((e=>t.document.uri.scheme===e)))(t))return;r.languages.match(a.supportedLanguages,t.document)?this.statusBarItem.show():this.statusBarItem.hide()}else this.statusBarItem.hide()}updateStatusBarItem(t){this.statusBarItem.backgroundColor=new r.ThemeColor(t===o.Error?"statusBarItem.errorBackground":""),this.statusBarItem.text=`${a.EXTENSION_NAME}: $(${t.toString()})`,this.statusBarItem.show()}reset(){this.statusBarItem.text=a.EXTENSION_NAME}}},593:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.languageSelector=e.supportedLanguages=e.EXTENSION_VERSION=e.EXTENSION_NAME=void 0;const r=s(496),a=["css","scss"];e.supportedLanguages=a;const o=a.map((t=>({scheme:"file",language:t})));e.languageSelector=o,e.EXTENSION_NAME="SCSS Formatter";const u=(()=>{const t=r.extensions.getExtension("sibiraj-s.vscode-scss-formatter");return t&&t.packageJSON?t.packageJSON.version:null})();e.EXTENSION_VERSION=u},920:t=>{t.exports=require("prettier")},496:t=>{t.exports=require("vscode")}},e={};function s(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,s),o.exports}var r={};(()=>{var t=r;Object.defineProperty(t,"__esModule",{value:!0}),t.deactivate=t.activate=void 0;const e=s(496),a=s(651),o=s(554),u=s(289),n=s(593);t.activate=t=>{const s=new o.default,r=new u.default(s),i=new a.default(r,s);t.subscriptions.push(e.languages.registerDocumentFormattingEditProvider(n.languageSelector,i)),t.subscriptions.push(...r.registerDisposables()),t.subscriptions.push(...s.registerDisposables())},t.deactivate=()=>{}})(),module.exports=r})();
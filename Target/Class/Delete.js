#!/usr/bin/env node
var a=new(await import("commander")).Command().name("Delete").version("0.0.1").description("Delete\u2001\u267B\uFE0F").option("-e, --Email <Email>","Email.").option("-i, --ID <ID>","ID.").option("-k, --Key <Key>","Key.").action(async({Email:e,ID:o,Key:i})=>console.log(await(await import("../Function/Delete.js")).default({Email:e,ID:o,Key:i}))).parse();export{a as default};

import m from "./Library/Deployment.js";
import { Fn as l } from "./Library/Environment.js";
import h from "./Library/Project.js";
const e=l.parse(process.env),y=7,f=500;var w=async(s=e.Email,i=e.Key,o=e.ID)=>{const t={"content-type":"application/json;charset=UTF-8","X-Auth-Email":e.Email,"X-Auth-Key":e.Key};t["X-Auth-Email"]=s??t["X-Auth-Email"],t["X-Auth-Key"]=i??t["X-Auth-Key"];const r=[];for(const{name:n}of await h(o,t)??[])for(const{id:c,created_on:p}of(await(async a=>(await m(o,a,t)).splice(0,f)??[])(n)).reverse())if((Date.now()-new Date(p))/864e5>y){try{await fetch(`${`https://api.cloudflare.com/client/v4/accounts/${o}/pages/projects/${n}/deployments`}/${c}`,{method:"DELETE",headers:t})}catch(a){console.log(a)}r.push(c)}return r};export { y as Days, f as Limit, w as default };


var a=async(t,e,s)=>(await(await fetch(`https://api.cloudflare.com/client/v4/accounts/${t}/pages/projects/${e}/deployments`,{headers:s})).json())?.result;export{a as default};

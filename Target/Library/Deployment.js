var s=async(e,t,r)=>(await(await fetch(`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects/${t}/deployments`,{headers:r})).json())?.result;export{s as default};

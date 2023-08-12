var s=async e=>(await(await fetch(`https://api.cloudflare.com/client/v4/accounts/${Environment.ID}/pages/projects/${e}/deployments`,{headers:Header})).json())?.results;export{s as default};

var s=async(e,t)=>(await(await fetch(`https://api.cloudflare.com/client/v4/accounts/${e}/pages/projects`,{headers:t})).json())?.results;export{s as default};

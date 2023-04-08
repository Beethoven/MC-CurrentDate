async function a(e,o){e.addEventListener("pageview",async({client:t})=>{let n=new Date().toUTCString();t.execute("console.log('PageView at "+n+"');")})}export{a as default};

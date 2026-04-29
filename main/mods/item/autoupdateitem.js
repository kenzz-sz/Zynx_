installedmods.forEach(i => {
if(i.url){
await fetch(i.url)
.then(res => res.text())
.then(dat => {
if((JSON.parse(dat)).code !== i.code){
pushmods(dat)
}
});
}
})
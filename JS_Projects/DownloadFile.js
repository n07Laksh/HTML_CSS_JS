const urlInput = document.querySelector("input");
const btn = document.querySelector("button");

btn.addEventListener("click", async ()=>{
	try{
		let res = await fetch(urlInput.value);
		res = await res.blob();
		const link = document.createElement("a");
		link.href = URL.createObjectURL(res);
		link.download = new Date().getTime();
		link.click();
	} catch(err){
		console.log("error", err);
	}
})
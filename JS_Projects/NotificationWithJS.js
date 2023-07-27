if(Notification.permission === "granted"){
  new Notification("Hello From Laksh");
}else if(Notification.permission==="default"){
  Notification.requestPermission().then(permission=>{
    if(permission==="granted"){
      new Notification("Hello From Laksh");
    }
  })
}

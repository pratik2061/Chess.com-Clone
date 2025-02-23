
const socket = io()

socket.emit("churan")
socket.on("churan recieved to all",()=>{
    console.log("recieved to all churan in frontend");
    
})
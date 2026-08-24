
}
function deletefile(){
    fs.unlink("data.txt",()=>{
        console.log("file delete");
    });
}
createfile();
updatefile();
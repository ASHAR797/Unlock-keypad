// showing on any button click!
function show_modal(){
    document.getElementsByClassName("modal")[0].style.display = "flex"
    document.getElementsByClassName("modal")[0].innerHTML = "Press Unlock And then Press * key "
}
function unlock_operation_1(){
        document.getElementsByClassName("modal")[0].style.display = "flex"
        document.getElementById("screen").style.justifyContent = "space-between"
}
function complete_unlock_operation(){
    document.getElementsByClassName("modal")[0].innerHTML = "FINISH!" 
    document.getElementsByClassName("modal")[0].style.padding = "30px" 
    document.getElementById("unlock-text").style.display = "none"
}
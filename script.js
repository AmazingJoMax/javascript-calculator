const bars = document.querySelector('.bars')
const cb = document.querySelector('.toggle')
const sideBar = document.getElementById('sidebar')
 
function toggle(){
    if(cb.checked == false){
        sideBar.classList.remove('open')
        sideBar.classList.add('close')
        bars.classList.remove('bars-rot')
    }else {
        sideBar.classList.remove('close')
        sideBar.classList.add('open')
        bars.classList.add('bars-rot')
    }
}
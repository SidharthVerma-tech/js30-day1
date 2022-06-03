console.log("Hello World")
let keys = document.getElementsByClassName('key');
window.addEventListener('keydown',function(e){
    console.log("key down function is running")
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    console.log(audio);
    for (const key of keys) {
        key.classList.add('playing');
      }
    //if(!audio) return;

    audio.play()
   
    
})

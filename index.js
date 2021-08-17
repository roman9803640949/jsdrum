window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.code}"]`)
    const key = document.querySelector(`.key[data-key="${e.code}"]`)
    if (!audio) return;
    audio.currentTime = 0
    audio.play();
    key.classList.add('key__pressed')

})

const keys = document.querySelectorAll('.key')
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})

function removeTransition (e) {
    const { propertyName } = e
    if (propertyName !== 'transform') return
    this.classList.remove('key__pressed')
}
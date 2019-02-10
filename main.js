/**
 * @param elementClass La classe CSS des éléments "wave effect" | default = '.wave-effect'
 * @param waveBgColor La couleur de fond de l'effet | default = '#FFFFFF'
 * @param animationName Le nom de l'animation CSS | default = 'wave'
 * @param animationDuration la durée de l'animation | default = '0.8s'
 */
class wavesEffect {
    constructor(
        elementsClass = '.wave-effect',
        waveBgColor = '#FFFFFF',
        animationName = 'wave',
        animationDuration = '0.8s'
    ) {
        this.elementsClass = elementsClass;
        this.waveBgColor = waveBgColor
        this.animationDuration = animationDuration
        this.animationName = animationName
    }

    createWave() {
        const newDiv = document.createElement('div')
        newDiv.style.width = this.width +'px'
        newDiv.style.height = this.width + 'px'
        newDiv.style.left = this.clickX - (this.leftEl + (this.width/2)) + 'px'
        newDiv.style.top = this.clickY - (this.topEl + (this.width/2)) + 'px'
        newDiv.style.backgroundColor = this.waveBgColor
        newDiv.style.position = 'absolute'
        newDiv.style.borderRadius = '50%'
        newDiv.style.opacity = '0'
        newDiv.style.animationName = this.animationName
        newDiv.style.animationDuration = this.animationDuration
        newDiv.addEventListener('animationend', () => {
            newDiv.remove()
        })
        return newDiv
    }

    run() {
        const waveBtn = document.querySelectorAll(this.elementsClass)
        waveBtn.forEach((el) => {
            el.addEventListener('click', (ev) => {
                ev.preventDefault()
                this.width = el.getBoundingClientRect().width
                this.clickX = ev.clientX
                this.clickY = ev.clientY
                this.leftEl = el.getBoundingClientRect().left
                this.topEl = el.getBoundingClientRect().top
                const newDiv = this.createWave()
                el.appendChild(newDiv)
            })
        })
    }
}

const count = document.getElementById('count')
const dataScience = document.getElementById('DataScience')
const webDevelopment = document.getElementById('WebDevelopment')
const mobileDevelopment = document.getElementById('MobileDevelopment')
const cloudComputing = document.getElementById('CloudComputing')
const cybersecurity = document.getElementById('Cybersecurity')
const artificialIntelligence = document.getElementById('ArtificialIntelligence')
const UIUX = document.getElementById('UIUX')
const dataAnalysis = document.getElementById('DataAnalysis')
const AWS = document.getElementById('AWS')
const continueBtn = document.getElementById('continueBtn')

let countValue = 0
let interest = []


dataScience.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'
})

webDevelopment.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'  
})

mobileDevelopment.addEventListener('click', function() {
    interest.push(this.id)
    this.style.backgroundColor = '#16A34A'
    updateCount()
})

cloudComputing.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'
})

cybersecurity.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'
})

artificialIntelligence.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'  
})

UIUX.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'

})

dataAnalysis.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'
})

AWS.addEventListener('click', function() {
    interest.push(this.id)
    updateCount()
    this.style.backgroundColor = '#16A34A'
})  




function updateCount() {
    countValue = interest.length
    count.innerHTML = countValue
    if(countValue >= 3) {
        continueBtn.disabled = false
        continueBtn.style.backgroundColor = '#16A34A'
        continueBtn.style.color = '#374151'
        continueBtn.style.cursor = 'pointer'
    } else {
        continueBtn.disabled = true
        continueBtn.style.backgroundColor = '#D1D5DB'
        continueBtn.style.cursor = 'not-allowed'
    }
}




    



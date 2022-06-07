// DOM elements are for a great part done here, some elements are generated
// further down, closer to it's actual use.
//  --------------------------------------------------------------
const toggle01Btn = document.getElementById("toggle01-btn")
const toggle02Btn = document.getElementById("toggle02-btn")
const errorMsg = document.getElementById("error-msg")
const audioMsgElm = document.getElementById("audiomsg-elm")
const referenceElm = document.getElementById("reference-elm")
const seasonInput = document.getElementById("season-inp")
const seasontextElm = document.getElementById("seasontext-elm")
const audioSourceElm = document.getElementById("audiosource-elm")
const pageHeadingElm = document.getElementById("pageheading-elm")
const videoSourceElm = document.getElementById("videosource-elm")
const audiovisualElm = document.getElementById("audiovisual-div")
const textbasedElm = document.getElementById("textbased-div")
const invbuttonElm = document.getElementById("invbutton-elm")
const outerframeElm = document.getElementById("outerframe-elm")

// DOM constants in 'pause' mode.
// ---------------------------------------------------------------------
// const fileInputElm = document.getElementById("fileBrowse")
// const textelement01Elm = document.getElementById("textelement01") 
// const textelement02Elm = document.getElementById("textelement02") 
// const oppgavesection1Elm = document.getElementById("oppgavesection1-elm")
// const oppgavesection2Elm = document.getElementById("oppgavesection2-elm")
// const oppgavesection3Elm = document.getElementById("oppgavesection3-elm")
// const divFrameElements= document.querySelectorAll("div")
// const sectFrameElements= document.querySelectorAll("section")
// ---------------------------------------------------------------------


// Global vars 
let currentWindow = location.pathname.slice(1) 
let fileList = []

//  --------------------------------------------------------------
// Program Main:
//  --------------------------------------------------------------
pageHeadingElm.textContent = `Current page:  ${currentWindow}`


// Toggle buttons initial textContent
toggle01Btn.textContent  = "Audiovisual page"
toggle02Btn.textContent = "Toggle error msg"

// Used prior to this exercise, and still used  for the audio visual part
seasontextElm.innerHTML = `The text will reflect the chosen season.<br><br> ...and btw, chosen season will provide a matching piece of music to be played.`

referenceElm.innerHTML = `Performed by: <a href="https://freemusicarchive.org/music/John_Harrison_with_the_Wichita_State_University_Chamber_Players/" target="_blank">John Harrison with the Wichita State University Chamber Players</a><br>
  Provided by: <a href="https://freemusicarchive.org/home" target="_blank">Free Music Archive</a><br>
  Licensed: <a href="https://creativecommons.org/licenses/by-sa/3.0/" target="_blank">CC BY-SA</a>`

  // this one is just an old friend still joining our company
errorMsg.innerHTML = `ERROR for Christ's sake!!!!  <span class="subText">
  pretty stupid reference for an atheist, but nevertheless..</span><br><br> Not if (but when) shit happens, the error message will display itself here. This line is extended to see what happens when line breaks have to be used. This dodgy text is found in the bible of the Nonsensical, a guide to the outer space of mental activities.`

//  --------------------------------------------------------------
// Event listeners 
//  --------------------------------------------------------------
// toggle between the display of text based page and audio visual page
toggle01Btn.addEventListener("click", function() {
  let buttonText = ""
  buttonText = (toggleVisibility(textbasedElm, 'flex') == 'none') ? 'Text page' : 'Audiovisual page'
  toggleVisibility(audiovisualElm, 'flex')
  toggleVisibility(outerframeElm, 'block')
  toggle01Btn.textContent = buttonText
})

// toggle an error message example - visual message on/off
toggle02Btn.addEventListener("click", function() {
  toggleVisibility(errorMsg, 'block')
})

// ----------------------------------------------
// Event listeners for audiovisual part
// ----------------------------------------------
// clean up element value when it gets focus
seasonInput.addEventListener("focus", () => {
  seasonInput.value="" 
})

// do some magic to text, audio & visuals when season is changed. Also loose focus (blur). Function process_Season is responsible for the actual processing
seasonInput.addEventListener("change", function() {
  const colorVar = process_Season(seasonInput.value)

  // 
  console.log("chosen season", seasonInput.value)
  console.log("color deducted",colorVar)
  // ----------------------------------------------
 
  seasontextElm.style.color = colorVar
  audioMsgElm.style.color = colorVar
  seasonInput.blur()
  seasontextElm.innerHTML = ` Color fit for ${seasonInput.value} is reflected in this text.<br><br> ...and btw, click on play below to play matching music.`
})

invbuttonElm.addEventListener("mouseover", () => {
  const botframesectElm = document.getElementById("botframesect-elm")
  toggleVisibility(botframesectElm, 'block')
})

invbuttonElm.addEventListener("mouseleave", () => {
  const botframesectElm = document.getElementById("botframesect-elm")
  toggleVisibility(botframesectElm, 'block')
})

//  --------------------------------------------------------------
// Functions defined below
//  --------------------------------------------------------------

// Write stuff to a HTML section identified by sectionElm. textContent is self-explanatory and elementType represents HTML tag
function addOppgaveContent(sectionElm, textContent, elementType) {
  elementType = (elementType === '') ? "p" : elementType
  const sectionContentElm = document.createElement(elementType)
  sectionContentElm.innerHTML = textContent
  sectionElm.appendChild(sectionContentElm)
}

// do some stuff to audio & visual parts through use of a switch construction. Multiple case elements are used to handle norwegian, english (uk) and english (am)
// default values at 'failure to match' cleans up some element content
function process_Season(season) {
  audioMsgElm.innerHTML = `<br><strong>Note:</strong> ` //Initial value
  referenceElm.style.display="block"

  switch(season.toLowerCase()){
      case "vinter":
      case "winter":
            audioSourceElm.setAttribute("src", "audio/Winter Mvt 2 Largo.mp3");
            audioMsgElm.innerHTML += `Le quattro stagioni: Winter (Concerto No. 4 in F Minor) Largo`
            videoSourceElm.setAttribute("src", "https://www.youtube.com/embed/YN8VpT4rJuY")
        
        return "var(--crispyWhite)"
      // the ubiquitous break will never be reached hence it i dropped
      case "spring":
      case "vår":
            audioSourceElm.setAttribute("src", "audio/Spring Mvt 1 Allegro.mp3")
            audioMsgElm.innerHTML += `Le quattro stagioni: Spring (Concerto No. 1 in E Major) Allegro`
            videoSourceElm.setAttribute("src", "https://www.youtube.com/embed/e3nSvIiBNFo")
        return "var(--springGreen)"
      case "sommer":
      case "summer":
            audioSourceElm.setAttribute("src", "audio/Summer Mvt 3 Presto.mp3")
            audioMsgElm.innerHTML += `Le quattro stagioni: Summer (Concerto No. 2 in G Minor) Adagio`
            videoSourceElm.setAttribute("src", "https://www.youtube.com/embed/I9yU8tDTGk8")
        return "var(--goldenSummer)"
      case "høst":
      case "autumn":
      case "fall":
            audioSourceElm.setAttribute("src", "audio/Autumn Mvt 1 Allegro.mp3")
            audioMsgElm.innerHTML += `Le quattro stagioni: Autumn (Concerto No. 3 in F Major)  Allegro`
            videoSourceElm.setAttribute("src", "https://www.youtube.com/embed/QUPo5OBnZk0")
            return "var(--brownish)"
      default:
            audioSourceElm.setAttribute("src", "")
            videoSourceElm.setAttribute("src", "")
            toggleVisibility(referenceElm, 'none')

            return "var(--theDarkside)"
  }
}

// This function uses the ternary operator
function toggleVisibility(sDOMelement, attributeValue) {
  // Ternaries
    let displayOff = (sDOMelement.style.display == 'none') ? true : false
    let displaySetting = (displayOff) ? attributeValue : 'none'
    
    sDOMelement.style.display = displaySetting
    return displaySetting
}

// Experimental function - tested but not in use for the moment
// Fetching id from given DOMelement and create a Heading 
function printFrameHeading(DOMelementParent, CRelementType, frameType) {
  CRelementType = (CRelementType === '') ? "p" : CRelementType
  const frameElementParent = document.getElementById(DOMelementParent)
  const frameHeadingElm = document.createElement(CRelementType)
  frameHeadingElm.setAttribute("class", "frameHeading");
  frameHeadingElm.innerHTML = `${frameType} name: ${frameElementParent.id}`
  frameElementParent.appendChild(frameHeadingElm)
}


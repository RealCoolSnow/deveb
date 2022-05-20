const aboutText = 'We are a team of listeners, problem solvers and creative thinkers determined to craft truly singular spaces for each of our clients. We design without ego and work hard to build meaningful and long lasting relationships with our clients. We are a team of listeners, problem solvers and creative thinkers determined to craft truly singular spaces for each of our clients. We are a team of listeners, problem solvers and creative thinkers determined to craft truly singular spaces for each of our clients. We are a team of listeners, problem solvers and creative thinkers determined to craft truly singular spaces for each of our clients.'

const lines = []
const linesM = []
let currLine = ''

const splitted = aboutText.split(' ')
const seperators = ['.',',']

for ( let i = 0; i < aboutText.length; i++ ) {
                                              
  if( seperators.includes(aboutText[i]) && currLine.trim().length >= 50 ) {
    currLine += aboutText[i]
    lines.push(currLine)                 
    currLine = ''                       
  } else {

    if( i === aboutText.length - 1 ) {
      currLine += aboutText[i]  
      lines.push(currLine)                 
      currLine = ''                  
    } else {
      currLine += aboutText[i]              
    }

  }
                                              
}

// function renderParagraph() {
// }

for ( let i = 0; i < splitted.length; i++ ) {
                                                
  if( currLine.trim().length >= 50 ) {
    linesM.push(currLine)                 
    currLine = ''                       
  }

  if( i === splitted.length - 1 ) {
    currLine += splitted[i]  
    linesM.push(currLine)                 
    currLine = ''                  
  } else {
    currLine += splitted[i] + ' '          
  }
                                              
}

// function renderLines() {
// }

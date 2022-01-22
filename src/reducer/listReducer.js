import { dataTextOpen, dataTextAnswer, dataTextNext, dataUser } from "../dataUser"
import { IamMan } from "../dataUser"


const listReducer = (state = [], action) => {
    let rndNumb = Math.floor(Math.random() * dataUser.length)
    let rndText = Math.floor(Math.random() * 4)
    let rndTextAns = Math.floor(Math.random() * 2)
    dataUser[rndNumb].text = dataTextOpen[rndText] 
    if(state[state.length - 1] === undefined) {console.log(true);}
    else if (dataTextOpen.includes(state[state.length - 1].text)){ dataUser[rndNumb].text = dataTextAnswer[rndTextAns]}
    else if (dataTextAnswer.includes(state[state.length - 1].text)) {dataUser[rndNumb].text = dataTextNext[rndText]}
    

   
    
switch(action.type) {
    case 'PUSH':
         
      
          
        let copyUser = Object.assign({}, dataUser[rndNumb] )
        
        return [...state, copyUser];
        
    case 'PUSHME':
        let copy = Object.assign({}, IamMan)
        return  [...state, copy]
        default:
            return state;
}
}
export default listReducer;
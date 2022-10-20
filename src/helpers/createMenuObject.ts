//ativando o menu

import { gatos } from "../controllers/pageController"

type menuOptions = '' | 'all' | 'cachorro' | 'gatos' | 'peixe' 

export const createMenuObject = (activeMenu: menuOptions) =>{

    let returnObject ={
        all:false,
        cachorro:false,
        gatos:false,
        peixe:false
    }

    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }

    return returnObject

}
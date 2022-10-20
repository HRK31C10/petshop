import { Request,Response } from "express";
import { createMenuObject} from '../helpers/createMenuObject'

export const home = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('all'),
        banner:{
            title:'Todos os animais',
            background:'allanimals.jpg'
        }
    })
}

export const cachorros = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('cachorro'),
        banner:{
            title:'Todos os cachorros',
            background:'banner_dog.jpg'
        }
    })
}

export const gatos = (req:Request, res:Response) =>{
    res.render('pages/pages',{
       menu:createMenuObject('gatos'),
       banner:{
        title:'Todos os gatos',
        background:'banner_cat.jpg'
       } 
    })
}

export const peixes = (req:Request, res:Response) =>{
    res.render('pages/pages',{
        menu:createMenuObject('peixe'),
        banner:{
            title:'Todos os peixes',
            background:'banner_fish.jpg'
        }
    })
}
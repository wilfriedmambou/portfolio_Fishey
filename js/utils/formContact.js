"use strict";

/** 
   * Fonction qui affiche le formulaire de contact
   * @return {true}

 */ 

export function formContact(){

   // je surveille le clique sur le bouton contactez moi

    document.querySelector("#display-form").addEventListener("click", ()=>{

       return document.querySelector("#form-contact").style.display = "block";

    });

}
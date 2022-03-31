"use strict";
import{factory}from '../factory/mediasFactory.js'

 
/** 
  * Fonction qui permet de creer le Dom des photographes a partir d'un tableau JSON
  * @param {array} photographerPersonalInfo
  * @return {html}
*/ 

export function createPhotographerMedia(photographerPersonalInfo){
    console.log(photographerPersonalInfo);

   let htmlMediaContent = "";

   const k = photographerPersonalInfo.length;

   for(let i=0; i<k; i++){

        //si le media contient un fichier JSON avec une image, alors ajouter cela :
        htmlMediaContent+= `
            <article class="photographer__content__article lb-modal-btn">
                        ${factory(photographerPersonalInfo[i])}
                        <div class="photographer__content__text_wrapper">
                            <h3 class="photographer_content_post">${photographerPersonalInfo[i].title}</h3>
                            <div class="photographer_content_likes">
                                <span class="nbr_of_likes">${photographerPersonalInfo[i].likes}</span>
                                <img tabindex="5" class="photographer-button-like" data-like="No like" src="img/heart.svg" alt="heart">
                            </div>
                        </div>
                </article>
            `
        
        //si le media contient un fichier JSON avec une video, alors ajouter cela : 

   }

   return htmlMediaContent;




}
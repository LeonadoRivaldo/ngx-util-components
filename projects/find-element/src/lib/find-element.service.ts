import { Injectable } from '@angular/core';
import { IFindElementService } from './find-element.model';

@Injectable({
  providedIn: 'root'
})
export class FindElementService implements IFindElementService {
  constructor() { }

  get(queryString: string): HTMLElement {
    return document.querySelector(queryString);
  }

/**
 *  loop trought element parents till find a match for searchString.
 *
 * @param child starting element of the search
 * @param searchString single string that can be class or id e.g: '.menu', '#app-container' or just 'class', 'id'  ;
 * @param [breakPointElementTag='body'] element tag that is to stop the loop in case of no findings
 * @returns return null if not find any element or the element it self
 */
findParent(child: HTMLElement, searchString: string, breakPointElementTag: string = 'body'): HTMLElement | null {
    searchString = searchString.replace('.', '').replace('#', '');
    const element = child as HTMLElement;
    if ((element && !element.tagName) || (element && element.tagName && element.tagName.toLowerCase() === breakPointElementTag )) {
      return null;
    } else if ( !element ) {
      return null;
    } else if ( element.classList.contains(searchString) || element.id === searchString ) {
      return element;
    } else {
      return this.findParent(element.parentElement, searchString, breakPointElementTag);
    }
  }


  findChild(parent: HTMLElement, queryString: string): HTMLElement {
    throw new Error('Method not implemented.');
  }

}

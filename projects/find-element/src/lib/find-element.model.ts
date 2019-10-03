

export interface IFindElementService {

  get(queryString: string): HTMLElement;
  findParent(child: HTMLElement, queryString: string): HTMLElement;
  findChild(parent: HTMLElement, queryString: string): HTMLElement;

}


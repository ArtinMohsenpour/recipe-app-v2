import icons from 'url:../../img/icons.svg';
import View from './View';
class PreviewView extends View {
  //   _parentElement = '';

  _generateMarkup() {
    const activeID = window.location.hash.slice(1);

    const img = this._data.image;
    const id = this._data.id;
    const publisher = this._data.publisher;
    const title = this._data.title;
    return `
       <li class="preview">
          <a class="preview__link ${
            id === activeID ? 'preview__link--active' : ''
          }" href="#${id}">
              <figure class="preview__fig">
                   <img src="${img}" alt="Test" />
               </figure>
            <div class="preview__data">
           <h4 class="preview__title">${title}</h4>
          <p class="preview__publisher">${publisher}</p>
           <div class="preview__user-generated ${
             this._data.key ? '' : 'hidden'
           }">
             <svg>
               <use href="${icons}#icon-user"></use>
             </svg>
           </div>
          </div>
          
           </a>
        </li> `;
  }
}

export default new PreviewView();

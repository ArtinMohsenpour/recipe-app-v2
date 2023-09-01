import icons from 'url:../../img/icons.svg';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = Number(btn.dataset.goto);
    //   this._data.page = goToPage;
      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      const markup = `
      <button data-goto = "${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
               <use href="${icons}#icon-arrow-right"></use>
           </svg>
    </button>`;
      return markup;
    }
    // page 1, there are NO other pages
    if (curPage === 1 && numPages <= 1) {
      return '';
    }
    // last page
    if (curPage === numPages) {
      return `
      <button data-goto = "${
        curPage - 1
      }" class="btn--inline pagination__btn--prev">
        <svg class="search__icon">
            <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${curPage - 1}</span>
      </button>`;
    }
    // other pages
    if (curPage < numPages) {
      const markup = `
        <button data-goto = "${
          curPage - 1
        }" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${icons}#icon-arrow-left"></use>
            </svg>
        <span>Page ${curPage - 1}</span>
      </button>
      <button data-goto = "${
        curPage + 1
      }" class="btn--inline pagination__btn--next">
        <span>Page ${curPage + 1}</span>
              <svg class="search__icon">
                 <use href="${icons}#icon-arrow-right"></use>
             </svg>
      </button>`;
      return markup;
    }
  }
}

export default new PaginationView();

import icons from 'url:../../img/icons.svg';
import View from './View';
import previewView from './previewView';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `No recipes found for your search. Please try again!`;

  _generateMarkup() {
    return this._data
      .map(result => previewView.render(result, false))
      .join('');
  }
}

export default new ResultsView();

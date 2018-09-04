import makeActionCreator from '../../utils/ActionHelpers';

export const FCH_CATEGORIES_DONE              = 'HOME/FCH_CATEGORIES_DONE';
export const FCH_LATEST_QUESTIONS_DONE        = 'HOME/FCH_LATEST_QUESTIONS_DONE';

export const fchLatestCategoriesDone          = makeActionCreator(FCH_CATEGORIES_DONE, 'categories');
export const fchLatestQuestionsDone           = makeActionCreator(FCH_LATEST_QUESTIONS_DONE, 'questions');

export const fchLatestQuestions = () => 
  dispatch => {
    const questions = [
      { id: 1, title: 'Nullam hendrerit diam et tempus.', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
      { id: 2, title: 'Nunc pulvinar massa id dui.', content: 'Sed condimentum erat a urna lobortis, id iaculis eros sagittis. Phasellus varius faucibus luctus. Aliquam tempus nisl viverra, tempor urna non, posuere orci. Quisque facilisis et diam non lacinia.' },
      { id: 3, title: 'Nam ut suscipit libero, nec.', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
      { id: 4, title: 'Donec mollis velit eget mauris.', content: 'Aliquam ultricies orci at felis lobortis, et congue eros faucibus. Fusce iaculis et eros vitae consequat. Mauris augue tellus, dapibus id vestibulum vel, tempor a quam.' },
      { id: 5, title: 'Vivamus sit amet cursus justo.', content: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...' },
    ];

    dispatch( fchLatestQuestionsDone(questions) );
  }

export const fchCategories = () => 
  dispatch => {
    const categories = [
      { id: 5, name: '最新' },
      { id: 1, name: '分類一' },
      { id: 2, name: '分類二' },
      { id: 3, name: '分類三' },
      { id: 4, name: '分類四' },
    ];

    dispatch( fchLatestCategoriesDone(categories) );
  }

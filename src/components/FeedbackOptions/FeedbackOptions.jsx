import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

 const FeedbackOptions = ({ options = {}, onLeaveFeedback = {} }) => {
  return (
    <div className={css.buttonsWrap}>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.buttons}
            onClick={onLeaveFeedback}
          >
            {firstLetterToUpperCase(option)}
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;

function firstLetterToUpperCase(word) {
  const arrOfLetters = word.split('');
  arrOfLetters[0] = arrOfLetters[0].toUpperCase();
  return arrOfLetters.join('');
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
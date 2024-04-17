import css from '../Section/section.module.css';
import PropTypes from 'prop-types';

const Section = ({ title = '', children }) => {
  return (
    <div>
      <p className={css.header}>{title}</p>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
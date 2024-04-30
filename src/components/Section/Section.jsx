
import css from '../Section/Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.sectionOne}>
    <h2 className={css.header}>{title}</h2>
    {children}
  </section>
);

export default Section;
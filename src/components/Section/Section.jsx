import PropTypes from 'prop-types';
import { SectionStyled } from './Section.styled';

function Section({ title, children }) {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  // children: PropTypes.
}

export default Section;
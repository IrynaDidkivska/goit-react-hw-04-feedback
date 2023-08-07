import { BtnWrapper, StyledButton } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <BtnWrapper>
      <StyledButton type="button" onClick={() => onLeaveFeedback('good')}>
        Good
      </StyledButton>
      <StyledButton type="button" onClick={() => onLeaveFeedback('neutral')}>
        Neutral
      </StyledButton>
      <StyledButton type="button" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </StyledButton>
    </BtnWrapper>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

import styled, { css } from 'styled-components';

interface ContainerStyledProps {
  isMeetupBanner?: boolean;
}

export const Container = styled.div<ContainerStyledProps>`
  align-self: center;
  margin-bottom: 30px;

  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      ${props =>
        props.isMeetupBanner
          ? css`
              height: 300px;
              width: 100%;
              /* width: 120px; */
              border: 3px solid rgba(255, 255, 255, 0.3);
              /* insert a background while the image didn't load */
              background: #eee;
            `
          : css`
              height: 120px;
              width: 120px;
              border-radius: 50%;
              /* width: 120px; */
              border: 3px solid rgba(255, 255, 255, 0.3);
              /* insert a background while the image didn't load */
              background: #eee;
            `}
    }

    input {
      /* display none because by just clicking on the label the input will open */
      display: none;
    }
  }
`;

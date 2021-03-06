import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ffafbd, #ffc3a0);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center; /**to center the logo and form */

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: #271e2d;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      /* display: inline-block; */
      align-self: flex-end;
      background-color: #fce4e4;
      border: 1px solid #fcc2c3;
      border-radius: 7px;
      color: #cc0033;
      font-weight: bold;
      padding: 7px 11px 4px;
      margin-bottom: 3px;

      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 15%;
        width: 0;
        height: 0;
        border: 8px solid transparent;
        border-bottom-color: #fce4e4;
        border-top: 0;
        margin-left: -8px;
        margin-top: -8px;
      }

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      /* to make the transition smoother */
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.08, '#f94d6a')};
      }
    }

    a {
      color: #271e2d;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;

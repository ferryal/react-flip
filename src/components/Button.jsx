/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const {
    text, style, onClick, ...restProps
  } = props;

  return (
    <Link
      to="/"
      css={css`
        font-weight: 500;
        border-radius: 4px;
        letter-spacing: 0;
        font-size: 12px;
        cursor:pointer;
        padding: 10px;
        background-color: #fff;
        border: 1px solid #fd6542;
        color: #fd6542;
        text-decoration: none;
        `}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </Link>
  );
};

export default Button;

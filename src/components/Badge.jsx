/** @jsxImportSource @emotion/react */
import React from 'react';
import { jsx, css } from '@emotion/react';

const Button = (props) => {
  const {
    text, style, onClick, ...restProps
  } = props;

  return (
    <button
      css={css`
        font-weight: 500;
        border-radius: 4px;
        letter-spacing: 0;
        font-size: 12px;
        cursor:pointer;
        padding: 2px 10px;

        `}
      style={{
        backgroundColor: text === 'Berhasil' ? '#56b586' : '#fff',
        border: text === 'Berhasil' ? '1px solid #56b586' : '1px solid #fd6542',
        color: text === 'Berhasil' ? '#fff' : '#000',
        // style
      }}
      // {...style}
      onClick={onClick}
      {...restProps}
    >
      {text}
    </button>
  );
};

export default Button;

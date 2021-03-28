import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const WrapperAppend = styled.div`
  margin-left: -1px;
  border-left: none;
  display: flex;
  width: 30%;
`;

const SpanAppend = styled.span`
    cursor: pointer;
    color: #fd6542;
    width: 100%;
    text-transform: uppercase;
    font-size: 10px;
    font-weight: 700;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    text-align: center;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: .375rem .75rem;
    margin-bottom: 0;
    line-height: 1.5;
    white-space: nowrap;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;

const Filter = ({
  onClick, placeholder,
}) => (
  <WrapperAppend>
    <SpanAppend onClick={onClick}>
      <span style={{
        textTransform: 'uppercase', color: '#333', fontSize: '12px', paddingRight: '10px',
      }}
      >
        {placeholder}
      </span>
      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" /></svg>
    </SpanAppend>
  </WrapperAppend>
);

export default Filter;

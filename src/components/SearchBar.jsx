import React from 'react';
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';

const WrapperPrepend = styled.div`
  height: 45px;
  margin-right: -1px;
  display: flex;
`;

const WrapperSpan = styled.span`
  border-right: none;
  color: #ddd;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  text-align: center;
  width: 47px;
  background: #fff;
  display: flex;
  align-items: center;
  padding: .375rem .75rem;
  margin-bottom: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
  border: 1px solid #ced4da;
  border-radius: .25rem;
`;

const WrapperAppend = styled.div`
  margin-left: -1px;
  border-left: none;
  display: flex;
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
    padding: .375rem .75rem;
    margin-bottom: 0;
    line-height: 1.5;
    white-space: nowrap;
    border: 1px solid #ced4da;
    border-radius: .25rem;
`;

const Input = styled.input`
    background: #fff;
    border-left: none !important;
    border-right: none !important;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    position: relative;
    width: 53%;
    margin-bottom: 0;
    font-size: 14px;
    display: block;
    padding: .375rem .75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    border: 1px solid #ced4da;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    &:focus-within {
      box-shadow: none;
      border: 1px solid #ced4da;
      border-right: none;
      border-left: none;
    }
`;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
    margin-top: .5rem;
`;

const Searchbar = ({
  value, onChange, onKeyUp, children, ...props
}) => (
  <Container {...props}>
    <WrapperPrepend>
      <WrapperSpan>
        <i className="fa fa-search" aria-hidden="true" />
      </WrapperSpan>
    </WrapperPrepend>
    <Input placeholder="Cari nama atau bank" value={value} onChange={onChange} onKeyUp={onKeyUp} />
    {children}
  </Container>
);

export default Searchbar;

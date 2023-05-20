import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { StyledLink } from './BackButton.styled';
import React from 'react';

export const BackButton = ({ children }) => {
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  return (
    <StyledLink to={backLinkHref.current}>
      <BsArrowLeft size={16} />
      {children}
    </StyledLink>
  );
};
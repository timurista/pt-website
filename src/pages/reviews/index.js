import React from 'react';
import text from './review-text';
import styled from 'styled-components';

const ReviewText = styled.p`
  white-space: pre-wrap;
`
export default function Reviews(props) {
  return (
    <div>
      <h1>Reviews</h1>
      <ReviewText>{text}</ReviewText>
    </div>
  )
}
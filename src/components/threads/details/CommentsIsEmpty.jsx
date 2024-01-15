/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import ContentHeading from '../../common/ContentHeading';

export default function CommentsIsEmpty({ title }) {
  return (
    <div className="comment-empty-container">
      <div className="mx-auto text-center">
        <img src="/no_data.jpg" className="img-fluid comment-empty-images" />
        <ContentHeading title={title} />
      </div>
    </div>
  );
}

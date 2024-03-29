/* eslint-disable react/require-default-props */
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import PropTypes from 'prop-types'; // ES6
import ContentHeading from '../common/ContentHeading';
import '../../assets/styles/thread-card-category-item.css';

export default function ThreadPopularCategory({ threads }) {
  const category = threads?.map((thread) => (
    <ListGroup.Item key={thread.id} className="px-md-0 mx-md-0">
      {thread.category}
    </ListGroup.Item>
  ));

  return (
    <Card className="thread-card-category-item" body>
      <ContentHeading title="Kategori Terpopuler" />
      <hr />

      <ListGroup variant="flush">{category}</ListGroup>
    </Card>
  );
}

ThreadPopularCategory.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.object.isRequired),
};

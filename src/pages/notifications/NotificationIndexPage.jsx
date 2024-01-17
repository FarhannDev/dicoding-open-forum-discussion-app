/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/order */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import loadable from '@loadable/component';
import React from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import ReactSEOMetaTags from 'react-seo-meta-tags';

const NotificationWelcome = loadable(() =>
  import('../../components/notifications/NotificationWelcome')
);

export default function NotificationIndexPage() {
  return (
    <Container>
      <ReactSEOMetaTags
        render={(el) => <Helmet>{el}</Helmet>}
        website={{
          url: 'http://localhost:5173/',
          title: 'Notifikasi',
          datePublished: new Date().toISOString(),
          description:
            'Selamat Datang di Dicoding Open Discussion! Tempat diskusi seputar teknologi, dunia dan lainnya.            ',
          language: 'en-US',
          author: {
            email: 'farhan18042002@gmail.com',
            name: 'Farhan',
            image: 'https://avatars.githubusercontent.com/u/101630148?s=96&v=4',
          },
          site: {
            siteName: 'DICODING OPEN DISCUSSION',
            searchUrl: 'https://www.google.com/search?q=',
          },
        }}
      />

      <NotificationWelcome />
    </Container>
  );
}

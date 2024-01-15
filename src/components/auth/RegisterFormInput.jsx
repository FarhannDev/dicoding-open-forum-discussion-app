/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable object-curly-newline */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RegisterFormInput({ register }) {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="auth-form-label">Nama Lengkap</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukan Nama Anda"
          className="auth-form-input"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="auth-form-label">Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Masukan Email Address"
          className="auth-form-input"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="auth-form-label">Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Masukan Password"
          className="auth-form-input"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label className="auth-form-label">Konfirmasi Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Konfirmasi Password"
          className="auth-form-input"
        />
      </Form.Group>

      <div className="d-grid gap-3 mx-auto pt-3">
        <Button
          disabled
          type="submit"
          variant="danger"
          className="rounded-pill"
          size="lg"
        >
          Mendaftar
        </Button>
      </div>

      <div className="d-flex justify-content-center py-4">
        <div>
          <span className="auth-form-label">Sudah punya akun?</span>{' '}
          <Link className="auth-form-label text-decoration-underline" to="/">
            Login Disini!
          </Link>
        </div>
      </div>
    </Form>
  );
}
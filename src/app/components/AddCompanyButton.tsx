'use client';
import { useState } from 'react';
import Button from './Button';
import dynamic from 'next/dynamic';

const CompanyFormModal = dynamic(
  () => import('../components/CompanyFormModal'),
);

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyFormModal
        show={show}
        onSubmit={console.log}
        onClose={() => setShow(false)}
      />
    </>
  );
}

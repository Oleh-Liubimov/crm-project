import Header from '@/app/components/Header';
import React from 'react';

export interface PageProps {
  params: { id: string[] };
}

export default function page({ params }: PageProps) {
  return (
    <>
      <Header>Companies ({params.id})</Header>\
    </>
  );
}

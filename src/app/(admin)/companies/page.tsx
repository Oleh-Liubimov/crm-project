import AddCompanyButton from '@/app/components/AddCompanyButton';
import CompanyRow from '@/app/components/CompanyRaw';
import CompanyTable from '@/app/components/CompanyTable';
import Header from '@/app/components/Header';
import SearchInput from '@/app/components/SearchInput';
import { Status } from '@/app/components/StatusLabel';
import Toolbar from '@/app/components/Toolbar';
import React from 'react';

export interface PageProps {}

export default function page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <Toolbar action={<AddCompanyButton />}>
        <SearchInput />
      </Toolbar>
      <CompanyTable>
        <CompanyRow
          category={'Products'}
          id={1}
          company={'Costco'}
          status={Status.Pending}
          promotion={true}
          country={'USA'}
          joinedDate={'02.18.2024'}
        />
      </CompanyTable>
    </>
  );
}

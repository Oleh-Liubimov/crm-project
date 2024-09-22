import React from 'react';
import Header from '../components/Header';
import Toolbar from '../components/Toolbar';
import SearchInput from '../components/SearchInput';
import AddCompanyButton from '../components/AddCompanyButton';
import CompanyTable from '../components/CompanyTable';
import CompanyRow from '../components/CompanyRaw';
import { Status } from '../components/StatusLabel';

export interface PageProps {}

export default function page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>\
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

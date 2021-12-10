import { NextPage } from 'next';

import { Form } from '../../form';
import { Page } from '../page';

export const Home: NextPage = () => (
  <Page>
    <div>
      <div>Hello, world!</div>
      <div>
        <Form />
      </div>
    </div>
  </Page>
);

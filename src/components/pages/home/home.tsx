import { NextPage } from 'next';

import { Form } from '../../form';
import { Email, VARIANT_BUTTON } from '../../link';
import { Page } from '../page';

export const Home: NextPage = () => (
  <Page>
    <>
      <Email
        label="Message me"
        to="mail@vitrozsival.cz"
        variant={VARIANT_BUTTON}
      />
      <Form />
    </>
  </Page>
);

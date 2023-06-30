import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container, Section, ContactForm, ContactList, Filter, Heading } from 'components';

export const App = () => {
  return (
    <Container>
      <ToastContainer autoClose={2500} />
      <Section>
        <Heading>Phonebook</Heading>
        <ContactForm />
      </Section>
      <Section>
        <Heading>Contacts</Heading>
        <Filter />
        <ContactList />
      </Section>
    </Container>
  );
};

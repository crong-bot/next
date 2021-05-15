import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useCurrentUser } from '../hooks/hooks';
import { Button, Form } from 'semantic-ui-react';

const SignupPage = () => {
  const [user, { mutate }] = useCurrentUser();
  const [errorMsg, setErrorMsg] = useState('');

  // call whenever user changes (ex. right after signing up successfully)
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) Router.replace('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id: e.currentTarget.id.value,
      name: e.currentTarget.name.value,
      password: e.currentTarget.password.value,
    };
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      const userObj = await res.json();
      // writing our user object to the state
      mutate(userObj);
    } else {
      setErrorMsg(await res.text());
    }
    if (res.status === 500) {
      console.log(errorMsg);
    }
  };

  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form onSubmit={handleSubmit}>
        <Form.Field inline>
          <input name="id" id="id" placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input name="name" id="name" placeholder="name" />
        </Form.Field>
        <Form.Field inline>
          <input name="password" type="password" placeholder="Password" />
        </Form.Field>
        <Button color="blue" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default SignupPage;

import { useRouter } from 'next/router';
import { Button, Form } from 'semantic-ui-react';
import { useCurrentUser } from '../hooks/hooks';
import { useEffect, useState } from 'react';

function login() {
  const [user, { mutate }] = useCurrentUser();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState('');
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.push('/');
    //console.log(user);
  }, [user]);
  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      id: e.currentTarget.id.value,
      password: e.currentTarget.password.value,
    };
    //console.log(body.id, body.password);
    const res = await fetch('/api/auth', {
      method: 'POST',

      headers: {
        //'Access-Control-Allow-Origin': '*',
        /* eslint-disable */
        //Accept: 'application/json',
        /* eslint-enable */

        'Content-Type': 'application/json',
        //'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      console.log('login success');
      console.log(userObj);
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  }

  return (
    <div style={{ padding: '100px 0', textAlign: 'center' }}>
      <Form onSubmit={onSubmit}>
        {errorMsg ? <p style={{ color: 'red' }}>{errorMsg}</p> : null}
        <Form.Field inline>
          <input name="id" id="id" placeholder="ID" />
        </Form.Field>
        <Form.Field inline>
          <input name="password" type="password" placeholder="Password" />
        </Form.Field>
        <Button color="green" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default login;

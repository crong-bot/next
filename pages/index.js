import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ItemList from '../components/itemList';
import { useUser } from '../hooks/hooks';
import { useRouter } from 'next/router';
import { Button, Form } from 'semantic-ui-react';
import Image from 'next/image';
import Styles from '../styles/landing.module.css';

export default function Home() {
  /* const [user, { mutate }] = useUser();
  const router = useRouter();
  useEffect(() => {
    // redirect to home if user is authenticated
    if (user) router.replace('/about');
  }, [user]);
  async function onSubmit(e) {
    e.preventDefault();
    const body = {
      id: e.currentTarget.id.value,
      password: e.currentTarget.password.value,
    };
    //console.log(body.id, body.password);
    const res = await fetch('/api/hello', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.status === 200) {
      const userObj = await res.json();
      console.log('sucess');
      mutate(userObj);
    } else {
      setErrorMsg('Incorrect username or password. Try again!');
    }
  } */

  return (
    <div className={Styles.wrapper}>
      <div className={Styles.intro}>
        <h1>
          가상 도시의 <br />
          데이터베이스를 <br />
          활용해서 코딩을 배워보세요.
        </h1>
        <h4>
          한글 코딩을 통해 다양한 데이터를 조회하고 여러 과제들을 해결할 수
          있습니다. 도전해보세요.
        </h4>
      </div>
      <Image
        className="home-image"
        src="/landing.svg"
        layout="fixed"
        width={700}
        height={700}
        alt="landing"
      ></Image>
    </div>
  );
}

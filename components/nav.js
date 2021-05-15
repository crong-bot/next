import Link from 'next/link';
import styles from '../styles/Nav.module.css';
//import { useCurrentUser } from '../hooks/useCurrentUser';
import { useCurrentUser } from '../hooks/hooks';
import { Button, Icon } from 'semantic-ui-react';

const nav = () => {
  const [user, { mutate }] = useCurrentUser();
  const handleLogout = async () => {
    await fetch('/api/auth', {
      method: 'DELETE',
    });
    console.log('logout');
    mutate(null);
  };

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">
            <Icon name="bars" color="black"></Icon>
          </Link>
        </li>
        <li>
          <Link href="/">홈</Link>
        </li>
        <li>
          <Link href="/coding">코딩</Link>
        </li>
        <li>
          <Link href="/about">일하기</Link>
        </li>
        <li>
          <Link href="/tutorial">배우기</Link>
        </li>
      </ul>
      <div>
        {!user ? (
          <>
            <li>
              <Link href="/login">
                <Button inverted color="green">
                  로그인
                </Button>
              </Link>
            </li>
            <li>
              <Link href="/signup">
                <Button inverted color="orange">
                  가입하기
                </Button>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/">
                <Button basic onClick={handleLogout}>
                  로그아웃
                </Button>
                {/*  <a tabIndex={0} role="button" onClick={handleLogout}>
                  LOG OUT
                </a> */}
              </Link>
            </li>
          </>
        )}
      </div>
    </nav>
  );
};

export default nav;

import useSWR from 'swr';
import fetcher from '../lib/fetch';

const fetchers = async (url) => {
  const res = await fetch(url);

  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.');
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};
export function useUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}
export function useCurrentUser() {
  const { data, mutate } = useSWR('/api/user', fetchers);
  const user = data?.user;
  
  if (!user) {
    console.log('there is no user data in usecurrentuser hook');
  }
  return [user, { mutate }];
}

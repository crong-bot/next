export function extractUser(req) {
  if (!req.user) {
    console.log('there is no req.user data~ in extract user');
    return null;
  }
  // take only needed user fields to avoid sensitive ones (such as password)
  else {
    console.log(req.user);
    console.log('user here!');
    const { id, name, email, bio, profilePicture, emailVerified } = req.user;

    return {
      id,
      name,
      email,
      bio,
      profilePicture,
      emailVerified,
    };
  }
}

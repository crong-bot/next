import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import bcrypt from 'bcryptjs';
import { ObjectId } from 'mongodb';

async function findUserById(db, userId) {
  return db
    .collection('users')
    .findOne({
      _id: userId,
    })
    .then((user) => user || null);
}

passport.serializeUser((user, done) => {
  done(null, user._id.toString());
});
/* passport.deserializeUser((req, id, done) => {
  req.db
    .collection('users')
    .findOne(ObjectId(id))
    .then((user) => done(null, user));
  console.log(user);
  console.log('in deserialize');
}); */
passport.deserializeUser(function(req,id, done) {
  req.db.collection('users').findOne({
    _id: ObjectId(id)
  })//.then((user) => user || null)
  .then((user) => done(null, user), (err) => done(err));
});

passport.use(
  new LocalStrategy(
    { usernameField: 'id', passwordField: 'password', passReqToCallback: true },
    async (req, id, password, done) => {
      const user = await req.db.collection('users').findOne({ id });

      if (user && (await bcrypt.compare(password, user.password)))
        done(null, user);
      else done(null, false);
    }
  )
);

export default passport;

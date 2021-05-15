import session from 'express-session';
import MongoStore from 'connect-mongo';

//const MongoStore = new connectMongo(session);

export default function sessionMiddleware(req, res, next) {
  const mongoStore = MongoStore.create({
    mongoUrl: process.env.DB_URI,

    //clientPromise,
    //dbName: 'nextjs',
  });
  return session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    store: mongoStore,
  })(req, res, next);
}

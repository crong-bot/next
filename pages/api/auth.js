import nc from 'next-connect';
import all from '../../middlewares/middleware';
import passport from 'middlewares/passport';
import { extractUser } from '../../hooks/apihelpers';


const handler = nc();

handler.use(all);

handler.post(passport.authenticate('local'), (req, res) => {
  res.json({ user: extractUser(req) });
});

handler.delete((req, res) => {
  req.logOut();
  res.status(204).end();
});

export default handler;

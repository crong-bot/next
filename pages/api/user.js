import nextConnect from 'next-connect';
import middleware from '../../middlewares/middleware';
import { extractUser } from '../../hooks/apihelpers';

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
    // Filter out password
    if (!req.user) return res.json({ user: null });
    
    res.json({ user: extractUser(req) });
  });

export default handler;

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'POST') {
    res.status(200).json({ data: req.body });
  } else {
  }
};

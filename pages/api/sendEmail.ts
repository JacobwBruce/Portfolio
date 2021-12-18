import type { NextApiRequest, NextApiResponse } from 'next';
import { sendPortfolioEmail } from '../../lib/emailSender';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;
        const result = await sendPortfolioEmail(email, name, message);

        res.status(200).json(result);
    }
};

export default handler;

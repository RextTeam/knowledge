import { NextApiResponse, NextApiRequest } from 'next'
import { execSync } from 'child_process'


type ResponseT = {
    status: number,
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseT>) {
    if (req.query.token === process.env.GH_DEPLOY_PASS) {
        execSync("git pull origin main")
        execSync("yarn build")
        execSync("sudo systemctl start --now knowledge")
        res.status(200).json({status: 200})
    } else {
        res.status(403).json({status: 403})
    }
}

import { NextApiResponse, NextApiRequest } from 'next'
import { execSync } from 'child_process'


export default function handler(_req: NextApiRequest, res: NextApiResponse<Person[]>) {
    execSync("git pull origin main")
    execSync("yarn build")
    execSync("sudo systemctl start --now knowledge")
    res.status(200).json({status: 200})
}

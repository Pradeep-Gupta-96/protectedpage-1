import fs from 'fs'
import pdf from "html-pdf"
import { createTransport } from 'nodemailer'

export const savehtml = async (req, res) => {
    try {
        const { html } = req.body
        fs.writeFileSync("output.html", html)
        console.log("heloow")
        return res.status(200).json({ message: "Saved" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const sendemail = async (req, res) => {
    try {

        var html = fs.readFileSync('./output.html', 'utf8');
        var options = { format: 'Letter' };

        let mapObj = {
            "{{Amount}}": "130",
            "{Prise}": "200"
        }
        html = html.replace(/{{Amount}}|{Prise}/gi, (matched) => { return mapObj[matched] })

        pdf.create(html, options).toFile('./email.pdf', async (err, res) => {
            if (err) {
                return console.log(err);
            } else {
                console.log(res);
                //  { filename: 'C:\\ARENESS\\createpdf\\invoice.pdf' }

                const transport = createTransport({
                    host: 'smtp.ethereal.email',
                    port: 587,
                    auth: {
                        user: 'abbigail14@ethereal.email',
                        pass: 'ujaWxheawN9rJdgv2R'
                    }
                });

                await transport.sendMail({
                    from: 'abbigail14@ethereal.email',
                    to: 'Pradeep@gmail.com',
                    subject: 'Notice Latter',
                    text: 'node js testing mail for areness',
                    attachments: [
                        {
                            path: res.filename
                        }
                    ]
                });
            }
        });
        return res.status(200).json({ message: "Saved" })
    } catch (error) {
        res.status(500).json({ message: error })
    }
}
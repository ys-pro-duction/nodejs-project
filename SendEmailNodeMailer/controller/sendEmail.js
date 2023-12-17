const nodemailer = require('nodemailer')

const sendEmail = async (req,res)=>{
    console.log("send email called")

    const transporter = await nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'ima50@ethereal.email',
            pass: 'DVCpk7hdmj6uz1VwAy'
        }
    });
    const info = await transporter.sendMail({
        from: '"Yogesh" <vonageg647@aseall.com>', // sender address
        to: "vonageg647@aseall.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
      console.log("Message sent: %s", info.messageId);
      res.end(info.response)
}




module.exports = sendEmail
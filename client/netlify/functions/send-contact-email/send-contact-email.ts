import type {Handler} from '@netlify/functions'
import * as sgMail from '@sendgrid/mail'

const handler: Handler = function (event) {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify('Payload required'),
    }
  }

  const requestBody = JSON.parse(event.body) as {
    requesterName: string;
    requesterEmail: string;
    requesterMessage: string;
  }

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
  const msg = {
    to: `${process.env.CONTACT_EMAIL}`,
    from: `${process.env.CONTACT_EMAIL}`,
    subject: `You have received a new message from ${requestBody.requesterName}`,
    text: `You have received a new message from ${requestBody.requesterName}`,
    html: `<strong>${requestBody.requesterEmail}</strong>\n<strong>${requestBody.requesterMessage}</strong>`,
  }

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Max-Age': '2592000',
    'Access-Control-Allow-Credentials': 'true',
  };

  return sgMail.send(msg)
    .then((t) => {
      console.log(`***** t ***** siaka ヽ(⌐■_■)ノ♪♬ *=*=*=*=*=*=>> \r\n`, t)
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify('Email sent!'),
      }
    })
    .catch((e) => {
      console.error(`***** e ***** siaka ヽ(⌐■_■)ノ♪♬ *=*=*=*=*=*=>> \r\n`, e)
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify('There was an issue processing your request. Please try again later.'),
      }
    })

}

export {handler}

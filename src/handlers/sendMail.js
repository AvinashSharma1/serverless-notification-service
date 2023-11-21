import AWS from 'aws-sdk';

const ses = new AWS.SES({region: 'ap-south-1'});
async function sendMail(event, context) {
  console.log(event);
  const source = event.Source;
  const toAddresses = event.Destination.ToAddresses;
  console.log("From our variable start ===");
  console.log(source);
  console.log(toAddresses);
  const record = event.Records[0];
  console.log('record processing',record);
  const email = JSON.parse(record.body);
  const {subject, body, recipient} = email;

   const params = {
    Source : source,
    Destination: {
      ToAddresses: [recipient],
    },
    Message: {
      Body: {
        Text: {
          Data: body
        }
      },
      Subject: {
        Data: subject
      }
    }
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;



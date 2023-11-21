# Codingly.io: Base Serverless Framework Template

https://codingly.ioToAddresses

## What's included
* Folder structure used consistently across our projects.
* [serverless-pseudo-parameters plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Allows you to take advantage of CloudFormation Pseudo Parameters.
* [serverless-bundle plugin](https://www.npmjs.com/package/serverless-pseudo-parameters): Bundler based on the serverless-webpack plugin - requires zero configuration and fully compatible with ES6/ES7 features.

## Getting started
```
sls create --name YOUR_PROJECT_NAME --template-url https://github.com/codingly-io/sls-base
cd YOUR_PROJECT_NAME
npm install
```

You are ready to go!

sls invoke -f sendMail -d '{}' -l
sls invoke local -f sendMail -d '{}'

sls invoke -f sendMail -d '{
  "subject":"Test Mail using AWS SQS",
  "body":"Test Body", 
  "source" : "a*******@xyz.com",
  "recipient": {
    "ToAddresses": ["a*****@xyz.com"]
  }
}' -l



## in console log check 
 sls logs -f sendMail -t

## in Queue just click on send message and pass below json object on there
{
  "subject":"Test Mail using AWS SQS",
  "body":"Test Body",  
  "source" : "avinash@xyz.in",
  "recipient": {
    "ToAddresses": ["avinash@xyz.in"]
  }
}

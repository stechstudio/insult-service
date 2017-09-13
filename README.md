# Slack Insult Service
Random Insults from Martin Luther, a [Serverless](https://serverless.com/) implementation for AWS Lambda.

# Slack Integration
Simply create a [Slack Custom Command](https://api.slack.com/slash-commands) setting the URL of the command to `https://pnpgt1myui.execute-api.us-east-1.amazonaws.com/prd/insult` and the METHOD to GET.

Assuming you created a command like `/luthersays` you can then test it in slack by typing that. You can also target the insults with a specific user like `/luthersays @bubba`.

And yes, that's a public endpoint anyone can use. Have fun. Of course, we may have to shut it down if our Lambda costs get out of control. We'll post an update on this page should we be forced to do that.

# Deploy Your Own
You should probably get comfortable with Servless Documenation first, but this will get you started.

```
git clone https://github.com/stechstudio/insult-service.git
cd insult-service
npm install serverless -g
serverless invoke local --function insult --path event.json
serverless deploy -v
```

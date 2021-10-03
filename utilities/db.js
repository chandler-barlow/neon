import AWS from "aws-sdk";

const endpoint = "https://dynamodb.us-east-2.amazonaws.com";
const accessKeyId = process.env.AWS_ACCESS_KEY_ID_DB;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_ID_DB;
const region = "us-east-2";

// config aws-sdk
AWS.config.update({
  accessKeyId: "AKIAXF7CFXF7M5HQTMF3",
  secretAccessKey: "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",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  region: region,
});

// generate a uuid based on the hash of the username attribute.
//    this will generate the same hash for every post, so the posts
//    can be easily searched by username
export function uuidHashFunction(username) {
  var hash = 0,
    i,
    chr;
  for (i = 0; i < username.length; i++) {
    chr = username.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

// push content to the db server (posts, comments, or users)
export function putContent(content) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  if (content.TableName == "TextPosts") {
    let params = {
      TableName: "TextPosts",
      Item: {
        uuid: uuidHashFunction(content.Item.Username),
        Title: content.Item.Title,
        Downvotes: 0,
        TimeStamp: Date().toLocaleString(),
        Upvotes: 0,
        Body: content.Item.Body,
        Username: content.Item.Username,
        Comments: content.Item.Comments,
      },
    };

    docClient.put(params, function (err, data) {
      if (err) {
        console.log("Unable to add item:", JSON.stringify(err, null, 2));
      } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
      }
    });
  } else if (content.TableName == "Users") {
    let params = {
      TableName: "Users",
      Item: {
        uuid: uuidHashFunction(content.Item.Username),
        Address: content.Item.Address,
        PhoneNumber: content.Item.PhoneNumber,
        FirstName: content.Item.FirstName,
        LastName: content.Item.LastName,
        email: content.Item.Email,
        SSN: content.Item.SSN,
        Username: content.Item.Username,
        Currency: {
          NeonQuant: 0,
          DollarQuant: 0,
        },
      },
    };
    docClient.put(params, function (err, data) {
      if (err) console.log("Unable to add item:", JSON.stringify(err, null, 2));
      else console.log("Added item:", JSON.stringify(data, null, 2));
    });
  } else console.log("Table name not found");
}

// get content from the db server (RETURNS ALL POSTS IF POSTS SPECIFIED)
// returns one specific user at a time
// returns: all returns are JSON objects
export async function getContent(content) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  if (content.TableName == "TextPosts") {
    let params = {
      TableName: "TextPosts",
      Key: {
        uuid: uuidHashFunction(content.Item.Username)
      }
    };
    let res = await docClient.scan(params, function (err, data) {
      if (err) {
        console.log("Unable to get items: " + err.message);
      }
      else {
        console.log(data);
        return data;
      }
    });
    return res;
  } else if (content.TableName == "Users") {
    let params = {
      TableName: "Users",
      Key: {
        uuid: uuidHashFunction(content.Item.Username),
      },
    };
    let res = await docClient.scan(params, function (err, data) {
      if (err) {
        console.log("Unable to get user: " + err.message);
        return err;
      } else {
        console.log(data);
        return data;
      }
    });
    return res;
  } else console.log("Unable to find table name");
}

// update exsisting content
export function updateContent(content) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  if (content.TableName == "TextPosts") {
  }
}

export function deleteContent(content) {
  let docClient = new AWS.DynamoDB.DocumentClient();
  if (content.TableName == "TextPosts") {
    let params = {
      TableName: content.TableName,
    };
  }
}

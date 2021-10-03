import AWS from 'aws-sdk'
//import dotenv from 'react-dotenv'

// initialize credentials for s3 bucket
const region = "us-east-2"
const bucketname = "neon-image-video-bucket"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY_ID

AWS.config.update({
  accessKeyId: accessKeyId,
  secretAccessKey: secretAccessKey,
  region: region
});

const s3 = new AWS.S3();

/*
  Fetching Image:
  - getImage()
  - encode()
  - displayImage()
*/

// fetches media file from s3
async function getImage(mediaFileName) {
  let data = s3.getObject({
    Bucket: bucketname,
    Key: mediaFileName
  }).promise();
  return data;
}

function encode(data) {
  let buf = Buffer.from(data);
  let base64 = buf.toString('base64');
  return base64
}

export function displayImageFile(mediaFileName) {
  getImage(mediaFileName).then((img) => {
    console.log("Successfully retrieved image from db");
    let image = "<img src='data:image/jpeg;base64," + encode(img.Body) +
    "'" + "/>";
    return image;
  }).catch((e) => {
    console.log("Error: " + e.message);
  });
}

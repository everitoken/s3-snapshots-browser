var AWS_AccessKeyId = '';  // leave this empty for WEB form auth
var AWS_SecretAccessKey = '';  // leave this empty for WEB form auth
var AWS_Region = 'ap-southeast-1';
var AWS_BucketName = 'evt-snapshots';
var AWS_MaxKeys = 500; //How many objects will retrive (include folders and items)
var AWS_Prefix = ''; //Stating folder, by default start on root
var AWS_SignedUrl_Expires = 900; //This is the default value for expires getSignedUrl
var TITLE = 'everiToken Snapshots Browser';
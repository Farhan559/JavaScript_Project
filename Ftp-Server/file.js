const ftp = require('basic-ftp');

async function uploadFileToFTP() {
  const client = new ftp.Client();

  try {
    await client.access({
      host: '192.168.100.44',
      user: 'ftp-user', 
      password: '12345' 
    });

    console.log('Connected to FTP server');

    const localFilePath = 'C:\\Users\\HP\\Desktop\\Files\\test.log';
    const remoteFilePath = 'C:\Users\HP\Desktop\Ftp-Server'; 

    await client.uploadFrom(localFilePath, remoteFilePath);

    console.log(`Uploaded file ${localFilePath} to ${remoteFilePath}`);

  } catch (err) {
    console.error('Error:', err);
  } finally {
    client.close();
    console.log('Disconnected from FTP server');
  }
}

uploadFileToFTP();

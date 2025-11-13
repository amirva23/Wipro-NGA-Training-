const { exec } = require('child_process');
const fs = require('fs');

if (!fs.existsSync('key.pem') || !fs.existsSync('cert.pem')) {
  console.log('🔧 Generating SSL key and certificate...');
  exec('openssl req -nodes -new -x509 -keyout key.pem -out cert.pem -subj "/CN=localhost"', (error, stdout, stderr) => {
    if (error) {
      console.error('⚠️ OpenSSL not available on your system.');
      console.log('You can create them manually using Notepad (see below).');
      return;
    }
    console.log('✅ key.pem and cert.pem generated successfully!');
  });
} else {
  console.log('✅ Certificates already exist!');
}

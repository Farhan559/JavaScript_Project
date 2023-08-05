const fs = require('fs');
const axios = require('axios');

const logFilePath = 'api_logs.log';

async function logStepAndResponse(step, response) {
  try {
    // Format the log message with a timestamp
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] ${step}: ${(response)}`;

    // Write the log message to the log file
    fs.appendFileSync(logFilePath, logMessage + '\n');
    console.log(logMessage); // Also log the message to the console (optional)
  } catch (err) {
    console.error('Error while logging:', err);
  }
}

// Replace this with your actual API endpoint
const apiUrl = 'http://localhost:8080/server/demo';

async function makeApiRequest() {
  try {
    const response = await axios.get(apiUrl);

    // Log the request and response
    logStepAndResponse('API Request', response.data);
  } catch (err) {
    console.error('Error while making API request:', err);
    // Log the error response if available
    if (err.response) {
      logStepAndResponse('API Error Response', err.response.data);
    }
  }
}

makeApiRequest();
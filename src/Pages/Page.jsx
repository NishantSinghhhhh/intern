import React from 'react';
import Styles from './Page.module.css';
import style from '../App.module.css';
import Table from '../Components/Table/Table';
import Response from '../Components/Response/Response';

const Page = () => {
  // General API Documentation Table
  const generalHeadings = ["Parameter", "Type", "Description"];
  const generalRows = [
    { "Parameter": "API Key", "Type": "String", "Description": "Your personal API key for authentication." },
    { "Parameter": "Base URL", "Type": "String", "Description": "The endpoint to access the API." },
    { "Parameter": "Timeout", "Type": "Number", "Description": "The timeout duration for API requests in milliseconds." }
  ];

  // API Pricing Table
  const pricingHeadings = ["Company", "Model Name", "Price per 1K Tokens"];
  const pricingRows = [
    { "Company": "OpenAI", "Model Name": "GPT-3.5", "Price per 1K Tokens": "$0.002" },
    { "Company": "OpenAI", "Model Name": "GPT-4", "Price per 1K Tokens": "$0.03" },
    { "Company": "Together AI", "Model Name": "Llama-2-70b", "Price per 1K Tokens": "$0.0008" },
    { "Company": "Together AI", "Model Name": "Llama-2-13b", "Price per 1K Tokens": "$0.0006" }
  ];

  // Sample response data
  const pythonResponse = `
{
  "status": "success",
  "data": {
    "id": 12345,
    "name": "Python Example",
    "description": "This is a sample Python response.",
    "code": """
import requests

def generate_book(api_key, title, author):
    url = 'https://api.example.com/generate-book'
    headers = {'X-API-Key': api_key}
    payload = {'title': title, 'author': author}
    response = requests.post(url, headers=headers, json=payload)
    if response.status_code == 200:
        return response.json()
    else:
        return {'error': response.text}

api_key = 'YOUR_API_KEY'
title = 'Sample Book Title'
author = 'Sample Author'
result = generate_book(api_key, title, author)
print(result)
"""
  }
}
`;

  const javascriptResponse = `
{
  "status": "success",
  "data": {
    "id": 67890,
    "name": "JavaScript Example",
    "description": "This is a sample JavaScript response.",
    "code": "
const axios = require('axios');

async function generateBook(apiKey, title, author) {
  try {
    const response = await axios.post('https://api.example.com/generate-book', {
      title: title,
      author: author
    }, {
      headers: {
        'X-API-Key': apiKey
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return { error: error.message };
  }
}

const apiKey = 'YOUR_API_KEY';
const title = 'Sample Book Title';
const author = 'Sample Author';
generateBook(apiKey, title, author).then(result => {
  console.log(result);
});
"
  }
}
`;

  return (
    <>
      <div className={Styles.page}>
        <div className={style.box}>
          <h2 className={style.h2}>Overview</h2>
          <p className={style.p}>
            The Book Generator API allows you to generate books on various topics using different language models. 
            This documentation provides details on how to use the API, including authentication, available endpoints, 
            and code examples.
          </p>
        </div>

        <div className={style.box}>
          <h2 className={style.h2}>Authentication</h2>
          <p className={style.p}>
            To use the API, you need to include your API key in the header of each request.
          </p>
        <div className={Styles.divison}>

          <div className={style.box3}>
            X-API-Key: YOUR_API_KEY
          </div>
        </div>

          <p className={style.p}>
            To generate an API key, use the button below.
          </p>

          <button className={style.button}>
            Generate API Key
          </button>

          <div className={style.box3}>
            Your API Key: 9mLpAXWWbDbvavQ687imP3zAXR3V-xEh4x8wflQGSSg
          </div>
        </div>

        <div className={style.box}>
          <h2 className={style.h2}>Endpoints</h2>
          <div>
            <h2 className={style.h2}>Generate Book</h2>
            <button className={style.button}>POST</button>
            <button className={style.button2}>/api/generate-book</button>
          </div>
          <Table headings={generalHeadings} rows={generalRows} />
          <h2 className={style.h2}>Response</h2>
          <Response data={pythonResponse} />
        </div>

        <div className={style.box}>
          <h2 className={style.h2}>Tutorial</h2>
          <div className={style.rectangle}>
            <h2 className={style.h2}>Step 1: Obtain an API Key</h2>
            <p className={style.p}>
              Generate an API key using the button in the Authentication section above.
            </p>
          </div>
          <div className={style.rectangle}>
            <h2 className={style.h2}>Step 2: Make a Request</h2>
            <p className={style.p}>
              Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.
            </p>
          </div>
          <div className={style.rectangle}>
            <h2 className={style.h2}>Step 3: Handle the Response</h2>
            <p className={style.p}>
              The API will return a response with a job ID. You can use this ID to check the status of your book generation job.
            </p>
          </div>
          <div className={style.rectangle}>
            <h2 className={style.h2}>Step 4: Retrieve the Generated Book</h2>
            <p className={style.p}>
              Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).
            </p>
          </div>
        </div>

        <div className={style.box}>
          <h2 className={style.h2}>Code Examples</h2>

          <h2 className={style.h3}>Python</h2>
          <Response data={pythonResponse} />

          <h2 className={style.h3}>JavaScript</h2>
          <Response data={javascriptResponse} />
        </div>

        <div className={style.box}>
          <h2 className={style.h2}>API Pricing</h2>
          <Table headings={pricingHeadings} rows={pricingRows} />

          <h2 className={style.h2}>Token Estimation</h2>
            <p className={style.p}>
            On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
            </p>

          <h2 className={style.h2}>Billing</h2>
            <p className={style.p}>
            You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
            </p>

        </div>
      </div>
    </>
  );
};

export default Page;

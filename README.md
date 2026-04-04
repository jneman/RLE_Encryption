# RLE_Encryption

This project implements **Run-Length Encoding (RLE) encryption** for strings.  
It includes a simple web UI for users to enter text, encrypt it using RLE, and  
view the result.  

The backend logic was originally implemented in **Java** and then translated to  
JavaScript for integration with the web UI using AI. The frontend idea was all  
mine, but was coded using AI.  

## Project Structure


RLE_Encryption/
├─ README.md ← Project documentation
├─ index.html ← Frontend HTML file
├─ app.js ← Node.js backend using Express.js
├─ package.json ← Node.js project configuration
├─ package-lock.json ← Lock file for Node.js dependencies
└─ screenshots/ ← Folder containing project screenshots
├─ RLE-Encryption.png
├─ EncryptAString.png
├─ InstanceTrafficAndScaling.png
├─ Monitoring.png
├─ Networking.png
├─ Terminating.png
└─ Terminated.png


## Features

- Input a string (up to 50 characters) and get its RLE encryption  
- Handles control characters like Esc or <Ctl>c by ignoring them  
- Output box scrolls if encrypted text exceeds 50 characters  
- Web UI hosted on **AWS Elastic Beanstalk**  
- Supports **Auto Scaling**: min 1 EC2 instance, max 2 instances  
- Built-in **Load Balancing** across multiple availability zones  
- **Health Monitoring** for instances via AWS CloudWatch  

## Technology Stack

- Backend: Java → Translated to Node.js using AI  
- Frontend: HTML + JavaScript  
- Web server: Express.js (`app.js`)  
- Deployment: AWS Elastic Beanstalk  

## RLE Algorithm

- Example: Input `aaabbc` → Output `3a2b1c`  
- Time Complexity: O(n)  
- Space Complexity: O(n) (worst case up to 2n, simplified to n for analysis)  

## Testing

The application was tested locally with the following scenarios:

1. Normal input: `aaabbc`. Verified output: `3a2b1c`  
2. Input limited to 50 characters.  
3. Control characters like Esc or <Ctl>c are ignored.  
4. If no input is provided and "Click to Encrypt" is pressed, a message  
   is displayed.  
5. If the input is something like:
   `abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx`  
   the output textbox becomes scrollable to accommodate the full result.  

## Screenshots

- ![Elastic Beanstalk Launch](screenshots/RLE-Encryption.png) — Elastic Beanstalk
  environment launched successfully  
- ![UI Example](screenshots/EncryptAString.png) — UI showing input and generated
  RLE output  
- ![Auto Scaling](screenshots/InstanceTrafficAndScaling.png) — Min 1 EC2, Max 2
  EC2 instances  
- ![Monitoring](screenshots/Monitoring.png) — Health and monitoring view  
- ![Networking](screenshots/Networking.png) — Two availability zones used  
- ![Terminate Request](screenshots/Terminating.png) — Request for terminating
  Elastic Beanstalk environment  
- ![Terminated](screenshots/Terminated.png) — Successful termination of Elastic
  Beanstalk environment

## How to Run Locally

1. Install Node.js and dependencies:
   ```bash
   npm install

Start the server:

node app.js
Using your browser, go to http://localhost:8080 to test the encryption UI.
Deployment
Deployed to AWS Elastic Beanstalk
Automatically scales and balances load across EC2 instances
Health monitoring ensures system reliability


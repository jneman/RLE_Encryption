# RLE_Encryption

This project implements **Run-Length Encoding (RLE) encryption** for strings.  
It includes a simple web UI for users to enter text, encrypt it using RLE, and  
# RLE_Encryption

This project implements **Run-Length Encoding (RLE) encryption** for strings.  
It includes a simple web UI for users to enter text, encrypt it using RLE, and  
# RLE_Encryption

This project implements **Run-Length Encoding (RLE) encryption** for strings.  
It includes a simple web UI for users to enter text, encrypt it using RLE, and  
view the result.  

The backend logic was originally implemented in **Java** and then translated to  
JavaScript for integration with the web UI using AI. The frontend idea was all  
mine, but was coded using AI.  

---

## Project Structure

RLE_Encryption/
├─ README.md           # Project documentation
├─ index.html          # Frontend HTML file
├─ app.js              # Node.js backend using Express.js
├─ package.json        # Node.js project configuration
├─ package-lock.json   # Lock file for Node.js dependencies
└─ screenshots/        # Folder containing project screenshots
   ├─ RLE-Encryption.png
   ├─ EncryptAString.png
   ├─ InstanceTrafficAndScaling.png
   ├─ Monitoring.png
   ├─ Networking.png
   ├─ Terminating.png
   └─ Terminated.png

---

## Features

- Input a string (up to 50 characters) and get its RLE encryption.  
- Handles control characters like Esc or <Ctl>c by ignoring them.  
- Output box scrolls if encrypted text exceeds 50 characters.  
- Web UI hosted on **AWS Elastic Beanstalk**.  
- Health Monitoring for instances via AWS CloudWatch.  

---

## Technology Stack

- Backend: Java → Translated to Node.js using AI  
- Frontend: HTML + JavaScript  
- Web server: Express.js (`app.js`)  
- Deployment: AWS Elastic Beanstalk  

---

## RLE Algorithm

- Example: Input `aaabbc` → Output `3a2b1c`  
- Time Complexity: O(n)  
- Space Complexity: O(n) (worst case up to 2n, simplified to n for analysis)  

---

## Testing

The application was tested locally with the following scenarios:

1. Normal input: `aaabbc`. Verified output: `3a2b1c`.  
2. Input limited to 50 characters.  
3. Control characters like Esc or <Ctl>c are ignored.  
4. If no input is provided and "Click to Encrypt" is pressed, a message  
   is displayed.  
5. If the input is something like:
   `abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwx`  
   the output textbox becomes scrollable to accommodate the full result.  

---

## Screenshots

1. **Elastic Beanstalk Launch**  
   This screenshot shows the Elastic Beanstalk environment after it has been
   successfully launched. You can see the environment status as green, which
   indicates that all resources were created correctly and the application is
   running. This confirms that the backend and frontend components were deployed
   without errors, forming the foundation for testing and scaling the app.

   ![Elastic Beanstalk Launch](screenshots/RLE-Encryption.png)


2. **UI Example**  
   This image displays the main web interface where users can input a string and
   generate its RLE encryption. It shows the input box, the "Click to Encrypt"
   button, and the output area. This illustrates the integration of the backend
   logic with the frontend interface, giving a clear idea of how the app works
   from the user’s perspective.

   ![UI Example](screenshots/EncryptAString.png)


3. **Auto Scaling**  
   This screenshot demonstrates how the Elastic Beanstalk environment can scale
   automatically. It shows a minimum of 1 EC2 instance and a maximum of 2 EC2
   instances, highlighting the dynamic adjustment of resources based on load.
   This ensures that the application remains responsive under varying traffic
   conditions without manual intervention.

   ![Auto Scaling](screenshots/InstanceTrafficAndScaling.png)


4. **Monitoring**  
   Here we can see the health and monitoring dashboard of the deployed
   application. The screenshot highlights metrics such as instance health,
   CPU utilization, and response times. This feature is essential for
   identifying performance issues early and maintaining a stable and reliable
   system.

   ![Monitoring](screenshots/Monitoring.png)


5. **Networking**  
   This screenshot shows the networking configuration of the Elastic Beanstalk
   environment, including the two Availability Zones (AZs) used. It highlights
   how the application is deployed across multiple zones for redundancy and
   high availability, which is a critical part of production-grade deployment.

   ![Networking](screenshots/Networking.png)


6. **Terminate Request**  
   This image displays the request to terminate the Elastic Beanstalk
   environment. It shows the process of cleaning up resources once testing or
   deployment is complete. Termination ensures that no unnecessary costs are
   incurred and that the environment can be safely removed without affecting
   other services.

   ![Terminate Request](screenshots/Terminating.png)


7. **Terminated**  
   This screenshot confirms that the Elastic Beanstalk environment has been
   successfully terminated. All associated resources have been released, and the
   system is no longer running. This final step completes the lifecycle of the
   deployed application and ensures that the AWS environment is left clean.

   ![Terminated](screenshots/Terminated.png)

---

## How to Run Locally

1. Install Node.js and dependencies:
2. Make sure to get the sources from the GitHub.

Run the following command:

node app.js

Using your browser, go to http://localhost:8080 to test the encryption UI.
Deployment

## To deploy this application to AWS Elastic Beanstalk, follow these steps:

You need to include the following files to nodejs.zip file:

index.html # Frontend HTML file
app.js # Node.js backend using Express.js
package.json # Node.js project configuration
package-lock.json # Lock file for Node.js dependencies

## Steps to deploy
Log in to your AWS Management Console.
Go to Elastic Beanstalk → Applications → Create Application.
Application name: RLE_Encryption
Platform: Select Node.js from the dropdown.
Platform branch: Select Node.js 24 running on 64bit Amazon Linux 2023
Application Code: Select Local file, then upload your nodejs.zip file.
Click Create.
Wait a few minutes for the environment to launch.
The environment should show a green health status if everything is running correctly.
Click on the URL under Domain to open the RLE Encryption UI in your browser.

## Notes
For the sake of simplicity, following the 10 steps above creates a
Single Instance environment to keep costs low and the setup simple.
Monitoring: Use the Elastic Beanstalk dashboard to verify the instance is healthy.


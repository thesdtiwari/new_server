# IIIT-L Placement Portal

This project requires `git`, `NodeJs` to be installed on system to download and keep the project updated.  
If not already installed, install `git` from [here](https://git-scm.com/downloads).  
If not already installed, install `NodeJs` from [here](https://nodejs.org/en/download/).

Launch Terminal (Linux/Mac OS) or PowerShell (Windows) and paste the following code.

```
git clone https://github.com/iiitl-placement-portal/server.git
```

<br>

This will create a folder named `server`.  
Open the `server` folder in Terminal or PowerShell and run following command to install all dependencies required for the project to run.

```
npm install
```

<br>

Create a new file named `.env` in `server` folder with Contents of the file:

```
SECRET = <secret text to sign the authentication token>

# Database (MongoDB) Connection URL
# Replace <username> with your mongodb username and <password> with your password
# For new username and password, please email your request to Rishabh Tiwari at `lcs2019032@iiitl.ac.in`
MONGO_URI = "mongodb+srv://<username>:<password>@placement-portal.8qvst.mongodb.net/placement_test?retryWrites=true&w=majority"

#The port where the server should run
PORT = 5000

# All allowed domains from where the requests should be processed.
# Any request from any domain not whitelisted here would be blocked
ALLOWED_ORIGINS = ["http://localhost:3000", "https://iiitl-placement-portal.netlify.app"]
```

Launch a Terminal or PowerShell and run the following command from `server` directory

```
npm run dev
```

This will start the portal on `http://localhost:5000`.

<br>

## All API Documentation is available [here](https://documenter.getpostman.com/view/9429369/UVC8DmL9).

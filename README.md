# HomeBnb
An AirBnB Clone

<p align=center><a href='https://aa-homebnb.herokuapp.com/'>Live Link</a></p>

## Splash Page
![1](https://user-images.githubusercontent.com/55807053/179463274-6afb1506-d2f4-4c08-953a-75f8dc55bfb2.jpg)

## Home Page
![2](https://user-images.githubusercontent.com/55807053/179463347-95083190-5bf5-45f8-905f-adbb974b4311.jpg)

## Creation Page
![3](https://user-images.githubusercontent.com/55807053/179463461-4c18a5fd-111d-43b6-97a9-e76cef2dc3aa.png)

## Bookings Page
![4](https://user-images.githubusercontent.com/55807053/179463516-a0304c90-bda8-4ce0-b0c4-185de96cfad8.png)

## Edit Bookings Page
![5](https://user-images.githubusercontent.com/55807053/179463588-9bc898a1-326b-4cbd-b9ff-2b220c9b6159.png)

## About
HomeBnb is a full stack application that allows users to book trips and stay at a home
that can accommodate

## Running The App Locally
## Getting started

1. Clone this repository (only this branch)

   ```bash
   git clone https://github.com/ericgeagan/homebnb.git
   ```

2. Install dependencies

      ```bash
      pipenv install --dev -r dev-requirements.txt && pipenv install -r requirements.txt
      ```

3. Create a **.env** file based on the example with proper settings for your
   development environment
4. Setup your PostgreSQL user, password and database and make sure it matches your **.env** file

5. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

6. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

***

*IMPORTANT!*
   psycopg2-binary MUST remain a dev dependency because you can't install it on alpine-linux.
   There is a layer in the Dockerfile that will install psycopg2 (not binary) for us.
***

### Dev Containers (OPTIONAL for M1 Users)

The following instructions detail an *optional* development setup for M1 Mac users having issues with the `psycopg` package.

1. Make sure you have the [Microsoft Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension installed.
2. Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed on your computer.
3. Clone the repository (only this branch)

   ```bash
   git clone https://github.com/ericgeagan/homebnb.git
   ```

4. Open the repo in VS Code.
5. Click "Open in Container" when VS Code prompts to open container in the bottom right hand corner.
6. **Be Patient!** The initial install will take a LONG time, it's building a container that has postgres preconfigured and even installing all your project dependencies. (For both flask and react!)

   **Note:** This will take much less time on future starts because everything will be cached.

7. Once everything is up, be sure to make a `.env` file based on `.env.example` in both the root directory and the *react-app* directory before running your app. You do not need a `DATABASE_URL` in the `.env` file if you are using this Docker setup for development - the URL is already set in the image (see `.devcontainer/Dockerfile` for the URL).

8. Get into your pipenv, migrate your database, seed your database, and run your flask app

   ```bash
   pipenv shell
   ```

   ```bash
   flask db upgrade
   ```

   ```bash
   flask seed all
   ```

   ```bash
   flask run
   ```

9. To run the React App in development, checkout the [README](./react-app/README.md) inside the `react-app` directory.

## Technologies Used

* [Python](https://docs.python.org/3/index.html)
* [Flask](https://flask.palletsprojects.com/en/1.1.x/)
* [WTForms](https://wtforms.readthedocs.io/en/2.3.x/)
* [FlaskWTF](https://flask-wtf.readthedocs.io/en/stable/)
* [Flask-Migrate](https://flask-migrate.readthedocs.io/en/latest/)
* [FlaskSQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/en/2.x/)
* [Alembic](https://alembic.sqlalchemy.org/en/latest/)
* [React](https://reactjs.org/docs/getting-started.html)
* [Boto3 AWS](https://github.com/boto/boto3)

## To-Do

I'd like to implement a google maps api into my application, and do some better styling to make my application look nicer.

## Developer Contact

Eric Geagan

[LinkedIn](https://www.linkedin.com/in/eric-geagan-462323195/)
[GitHub](https://github.com/ericgeagan)
ericgeagan@gmail.com

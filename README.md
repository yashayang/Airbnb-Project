# About AirBnB clone:

## Database Schema Design

<img width="742" alt="airbnb_dbdiagram" src="https://user-images.githubusercontent.com/1794317/187817304-b57545f4-6ab3-4702-bdc5-61f52544481d.png">

## API Documentation

## USER AUTHENTICATION/AUTHORIZATION

### Airbnb is web application inspired by the actual Airbnb, that provides an online marketplace for lodging primirily homestays 
for vacation retals, and tourism activities. Click here to view Airbnb Live Site

All endpoints that require a current user to be logged in.

* Request: endpoints that require authentication
* Error Response: Require authentication
  * Status Code: 401
  * Headers:
    * Content-Type: application/json
  * Body:

    ```json
    {
      "message": "Authentication required",
      "statusCode": 401
    }
    ```

### All endpoints that require proper authorization

# SU CASA Presentations API

RESTful API for the real estate investing conference hosted by 'Su Casa'.

This API exposes three endpoints:

- POST /su-casa/api/v1/presentation (Creates a new presentation)
  Sample body (all fields are required):

```
{
    "presentation": {
        "title": <string>,
        "details": <string>,
        "room": <number>,
        "speaker": {
            "name": <string>,
            "company": <string>",
            "email": <string>,
            "bio": <string>
        }
    }
}
```

- POST /su-casa/api/v1/attendees (Creates a new attendee)

Sample body (all fields are required):

```
{
    "attendee": {
        "name": <string>,
        "company": <string>,
        "email": <string>
    }
}
```

- POST /su-casa/api/v1/presentation/:presentationId/attendees/:attendeeId (Adds an attendee to a presentation)

## Usage

- Make sure you have postgres running
- Copy the contents on .env.example into a new .env file and fill them with your own values
- Create a database called su-casa or the name you chose in your .env file
- Run the below commands:

```bash
npm install
```

```bash
npm run db:migrate
```

```bash
npm run start:dev
```

After these steps you should have a server running in http://localhost:4000 (or in the port you specified in your .env file)

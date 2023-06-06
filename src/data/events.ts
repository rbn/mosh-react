export default [
  {
    $schema: "http://json-schema.org/draft-07/schema#",
    title: "Meeting Registration Event",
    type: "object",
    properties: {
      event_id: {
        type: "string",
        description: "The unique identifier of the event.",
      },
      event_name: {
        type: "string",
        description: "The name or title of the event.",
      },
      event_description: {
        type: "string",
        description: "A brief description of the event.",
      },
      start_date: {
        type: "string",
        format: "date-time",
        description: "The start date and time of the event.",
      },
      end_date: {
        type: "string",
        format: "date-time",
        description: "The end date and time of the event.",
      },
      venue: {
        type: "object",
        properties: {
          name: {
            type: "string",
            description: "The name of the venue where the event is held.",
          },
          address: {
            type: "string",
            description: "The address of the venue.",
          },
          city: {
            type: "string",
            description: "The city where the venue is located.",
          },
          country: {
            type: "string",
            description: "The country where the venue is located.",
          },
        },
        required: ["name", "address", "city", "country"],
        description: "Information about the venue where the event is held.",
      },
      registration_link: {
        type: "string",
        format: "uri",
        description: "The registration link for the event.",
      },
      attendees: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: {
              type: "string",
              description: "The name of the attendee.",
            },
            email: {
              type: "string",
              format: "email",
              description: "The email address of the attendee.",
            },
            company: {
              type: "string",
              description:
                "The company or organization the attendee belongs to.",
            },
            registration_date: {
              type: "string",
              format: "date-time",
              description:
                "The date and time when the attendee registered for the event.",
            },
          },
          required: ["name", "email", "company", "registration_date"],
          description:
            "Information about an attendee who registered for the event.",
        },
        description: "List of attendees registered for the event.",
      },
    },
    required: [
      "event_id",
      "event_name",
      "start_date",
      "end_date",
      "venue",
      "registration_link",
      "attendees",
    ],
    description: "Schema for a meeting registration event.",
  },
  {
    event_id: "1",
    event_name: "Tech Conference 2023",
    event_description: "A conference for technology enthusiasts.",
    start_date: "2023-10-15T09:00:00",
    end_date: "2023-10-17T18:00:00",
    venue: {
      name: "Conference Center",
      address: "123 Main Street",
      city: "San Francisco",
      country: "United States",
    },
    registration_link: "https://example.com/register/1",
    attendees: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        company: "ABC Corporation",
        registration_date: "2023-09-01T10:30:00",
      },
      {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        company: "XYZ Corp",
        registration_date: "2023-09-02T14:45:00",
      },
    ],
  },
  {
    event_id: "2",
    event_name: "Marketing Summit 2023",
    event_description: "A summit focused on the latest marketing trends.",
    start_date: "2023-11-10T10:00:00",
    end_date: "2023-11-12T17:00:00",
    venue: {
      name: "Convention Center",
      address: "456 Elm Street",
      city: "New York",
      country: "United States",
    },
    registration_link: "https://example.com/register/2",
    attendees: [
      {
        name: "Sarah Johnson",
        email: "sarah.johnson@example.com",
        company: "Marketing Co.",
        registration_date: "2023-10-01T09:15:00",
      },
      {
        name: "Michael Brown",
        email: "michael.brown@example.com",
        company: "Advertising Inc.",
        registration_date: "2023-10-02T11:30:00",
      },
    ],
  },
  {
    event_id: "3",
    event_name: "Startup Summit 2023",
    event_description: "A summit for aspiring entrepreneurs.",
    start_date: "2023-12-05T08:30:00",
    end_date: "2023-12-07T16:30:00",
    venue: {
      name: "Startup Hub",
      address: "789 Oak Avenue",
      city: "London",
      country: "United Kingdom",
    },
    registration_link: "https://example.com/register/3",
    attendees: [
      {
        name: "Alex Wong",
        email: "alex.wong@example.com",
        company: "Tech Startup",
        registration_date: "2023-11-01T13:45:00",
      },
      {
        name: "Emily Lee",
        email: "emily.lee@example.com",
        company: "Innovative Solutions",
        registration_date: "2023-11-02T16:20:00",
      },
    ],
  },
];

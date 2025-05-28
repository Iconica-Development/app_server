# App server

Next.js boilercode template for hosting a Flutter web app statically on specifically Firebase app hosting

## Setup

Clone this code base into your flutter web project and move or copy deploy.sh into the root of the project.
Now when you run this script, the following gets done:
- Flutter build web --release // Build release version of website
- Copy all the conent into the public folder so Next.js will serve them

## Running
You can use the following command to interact with the Next.js server

- `npm run dev` // Run the Next.js server in debug mode
- `npm run build` // Build a production version of the Next.js server
- `npm run start` // Start the production build of Next.js server

## Deploying
When the following command has been executed on the root project

```firebase apphosting:backends:get --project PROJECT_ID {BACKEND_ID}```

Just pushing the changes into the public folder to the repository on the selected branch from the step above, will result into an automatic build that will deploy your website.

If this is not wanted, the Next.js server can always be hosted somewhere else

## Motivation
The motivation behind this package in one sentence is:
```
Easily support multi tenancy in your Flutter web app with minimal deployments and DNS changes
```

For our application we want to offer multi-tenancy as a feature, this should be achieved in the easiest way possible.
We DON'T want to have to do the following:
- Set up `N` amount of clients
- Add lots of DNS records
- Manage lots of subdomains

This package in combination with [this](https://github.com/Iconica-Development/flutter_domain_manager)
Allows you to have multi-tenant support whilst only having to add 2 DNS records.

The primary use case for this will be with Firebase APP hosting, since this allow wildcard subdomains (Firebase hosting does not allow this).

### Setup
- Create a Flutter site
- Use [flutter_domain_manager](https://github.com/Iconica-Development/flutter_domain_manager) for retrieving the proper tenant and configuring it
- Setup app server inside the project
- Initialize and create the app hosting backend with the command under `Deploying`
- Add the following custom domains to your backend service:
    - *.iconica.nl
    - iconica.nl

This last step can be personalized, so an already defined subdomain can be setup:
- *.app.iconica.nl
- app.iconica.nl

Also environments could be added in this way:
- *.app.staging.iconica.nl
- app.staging.iconica.nl

So, lots of possibilities!

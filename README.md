# Logic

## Frontend

Predominantly built using Angular CLI for the format of the file system, bootstrap for styling, ngx-charts for the charts, and a bunch of JS for site logic, error handling, and data formatting.

## Backend

I decided to do some experimenting by using AWS Lambda, API Gateway, and S3. At first, I aimed to use the Serverless framework but ran into quite a few troubles so I focused on using the AWS console.

To get this all to work I decided to take this path:

1. When the user inputs the JSON I store this JSON in an S3 bucket as a file called `editme.json`.
2. After this file is uploaded I call a lambda function that grabs this file and formats it into the needed types then writes them to file and sends these files (3) to the same S3 bucket.
3. As, this way lost reference to what a user expects to recieve back I made all 3 files available to download when a user clicks a link.
4. This link calls an API in API Gateway that has reference to my S3 buckets and can grab a file when given the right signature in the url.

- The backend folder contains the code that gets zipped and put into AWS lambda.

Thanks!

Hosted on Netlify: [Website](https://gallant-tereshkova-e83121.netlify.com/#)

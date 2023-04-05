# tailwarden-backend-challenge

## Run the project

To run the project locally install the dependencies with `yarn` or `npm install` and use the `yarn dev` or `npm run dev` to test it locally.

## CI/CD Pipeline

The tool that it's used is the recommended for serverless deployments and SST, it's called [SEDD](https://seed.run/).

The configuration already supports `dev` and `prod` environment. The `prod` pipeline is a manual job and the `dev` one is auto triggered when you push to the main branch.

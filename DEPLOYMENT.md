# AWS Amplify Gen 2 Deployment Guide

This Next.js 15 application is configured for deployment on AWS Amplify Gen 2.

## Prerequisites

1. AWS Account with appropriate permissions
2. GitHub repository with your code
3. AWS CLI configured (optional, for local development)

## Deployment Steps

### 1. Connect Repository to Amplify

1. Go to the [AWS Amplify Console](https://console.aws.amazon.com/amplify)
2. Click "New app" → "Host web app"
3. Choose GitHub as your source
4. Select your repository and branch (typically `main` or `master`)

### 2. Configure Build Settings

Amplify will automatically detect the `amplify.yml` file in your root directory. This file contains:

- Backend deployment using `npx ampx pipeline-deploy`
- Frontend build process using `npm run build`
- Optimized caching for `node_modules` and `.next/cache`

### 3. Environment Variables

Set the following environment variables in the Amplify Console:

- `AWS_BRANCH`: The branch being deployed (automatically set)
- `AWS_APP_ID`: Your Amplify app ID (automatically set)
- `AMPLIFY_MONOREPO_APP_ROOT`: Set to `.` (configured in amplify.yml)

### 4. Backend Deployment

The backend is defined in the `amplify/` directory:

- **Authentication**: Cognito User Pool with email login
- **Data**: GraphQL API with a Todo model
- **Authorization**: Owner-based access control

### 5. Local Development

To run the app locally with a cloud backend:

```bash
# Start the backend sandbox
npx ampx sandbox

# In another terminal, start the frontend
npm run dev
```

The sandbox command will:
- Deploy your backend to a personal cloud environment
- Generate `amplify_outputs.json` with connection details
- Watch for changes and redeploy automatically

## Project Structure

```
├── amplify/                 # Backend definition
│   ├── auth/resource.ts     # Authentication configuration
│   ├── data/resource.ts     # GraphQL schema and data model
│   ├── backend.ts           # Backend entry point
│   └── tsconfig.json        # TypeScript configuration
├── src/
│   └── app/
│       ├── amplify-provider.tsx  # Client-side Amplify configuration
│       └── layout.tsx             # Root layout with Amplify provider
├── amplify.yml              # Build configuration for Amplify hosting
├── amplify_outputs.example.json  # Example configuration file
└── next.config.ts           # Next.js configuration optimized for Amplify
```

## Features

- **Authentication**: Pre-built UI with email/password login
- **Real-time Data**: GraphQL subscriptions for live updates
- **Authorization**: User-scoped data access
- **Server-Side Rendering**: Full SSR support with Amplify adapter
- **TypeScript**: End-to-end type safety

## Troubleshooting

1. **Build Failures**: Check the build logs in Amplify Console
2. **Authentication Issues**: Verify Cognito configuration in `amplify/auth/resource.ts`
3. **Data Access**: Ensure user is authenticated before accessing GraphQL API
4. **Local Development**: Run `npx ampx sandbox` to sync backend changes

## Cost Optimization

- Use AWS Free Tier for development
- Monitor usage in AWS Cost Explorer
- Consider using Amplify's staging environments for testing

## Next Steps

1. Customize the authentication UI using Amplify UI components
2. Add more data models in `amplify/data/resource.ts`
3. Implement real-time features using GraphQL subscriptions
4. Add file storage with Amplify Storage
5. Integrate AI capabilities with Amazon Bedrock
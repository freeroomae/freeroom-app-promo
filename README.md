
# FreeRoom App Promo

A modern, responsive promotional website for FreeRoom - a comprehensive property management solution. This React-based application showcases FreeRoom's features including automated finance management, digital tenant experiences, smart facility management, and seamless integrations.

## Features

- **Automated Finance Management**: Streamlined rent collection with automated invoicing and payment processing
- **Digital Tenant Experience**: Paperless onboarding with e-signatures and automated lease renewals
- **Smart Facility Management**: Efficient maintenance request handling with automated workflows
- **Powerful Analytics & Reporting**: Comprehensive dashboards and business insights
- **Multi-Property Management**: Unified dashboard for managing multiple properties
- **Seamless Integrations**: Connect with leading platforms like Zoho, Odoo, and Tally

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Forms**: React Hook Form with Zod validation

## FRcode Integration

### Overview

This promotional application integrates with the **FRcode** repository (freeroomae/FRcode), which serves as the backend API and core business logic for the FreeRoom platform. The integration enables the promo app to showcase real-time data, demonstrate actual functionality, and provide interactive demos of the FreeRoom system.

### Purpose of Integration

The FRcode integration serves several key purposes:

1. **Live Data Demonstration**: Display real property management data and statistics
2. **Interactive Features**: Enable users to interact with actual FreeRoom functionality
3. **API Showcase**: Demonstrate the robust API capabilities of the FreeRoom platform
4. **Seamless User Experience**: Provide a smooth transition from marketing to actual product usage

### Integration Architecture

```
┌─────────────────────┐    HTTP/REST API    ┌─────────────────────┐
│                     │ ◄─────────────────► │                     │
│  FreeRoom Promo App │                     │      FRcode API     │
│   (React/TypeScript) │                     │        (PHP)        │
│                     │                     │                     │
└─────────────────────┘                     └─────────────────────┘
```

### API Endpoints

The integration utilizes the following key API endpoints from FRcode:

- `GET /api/properties` - Retrieve property listings and statistics
- `GET /api/dashboard/stats` - Fetch dashboard metrics and analytics
- `GET /api/tenants` - Get tenant information and demographics
- `GET /api/payments` - Access payment and financial data
- `GET /api/maintenance` - Retrieve maintenance requests and status
- `POST /api/demo/request` - Handle demo requests from the promo site

### Configuration

The integration requires the following environment variables:

```bash
# FRcode API Configuration
VITE_FRCODE_API_URL=https://api.freeroom.ae
VITE_FRCODE_API_KEY=your_api_key_here
VITE_FRCODE_API_VERSION=v1

# Demo Environment
VITE_DEMO_MODE=true
VITE_DEMO_TENANT_ID=demo_tenant_123
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager
- Access to the FRcode API (for full integration)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/freeroomae/freeroom-app-promo.git
cd freeroom-app-promo
```

2. Install dependencies:
```bash
npm install
```

3. Create environment configuration:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```bash
# Required for FRcode integration
VITE_FRCODE_API_URL=http://localhost:8000  # or your FRcode API URL
VITE_FRCODE_API_KEY=your_development_key
VITE_FRCODE_API_VERSION=v1
VITE_DEMO_MODE=true
```

### Development Setup

1. Start the development server:
```bash
npm run dev
```

2. The application will be available at `http://localhost:8080`

### Local Testing with FRcode Integration

To test the integration locally, you'll need to set up both repositories:

#### Option 1: Full Local Setup

1. **Set up FRcode locally**:
   ```bash
   # Clone and set up FRcode repository
   git clone https://github.com/freeroomae/FRcode.git
   cd FRcode
   # Follow FRcode setup instructions
   ```

2. **Configure API connection**:
   - Ensure FRcode API is running on `http://localhost:8000`
   - Update `.env.local` with local API URL
   - Test API connectivity: `curl http://localhost:8000/api/health`

3. **Start both applications**:
   ```bash
   # Terminal 1: Start FRcode API
   cd FRcode
   php artisan serve --port=8000
   
   # Terminal 2: Start Promo App
   cd freeroom-app-promo
   npm run dev
   ```

#### Option 2: Mock Data Mode

For development without FRcode backend:

1. Enable mock data mode:
   ```bash
   VITE_USE_MOCK_DATA=true
   ```

2. The application will use static mock data for demonstrations

### Testing the Integration

1. **API Connectivity Test**:
   ```bash
   # Test API endpoint
   curl -H "Authorization: Bearer YOUR_API_KEY" \
        http://localhost:8000/api/properties
   ```

2. **Frontend Integration Test**:
   - Navigate to the dashboard section
   - Verify that real data is loading from FRcode API
   - Check browser console for any integration errors

3. **Demo Functionality**:
   - Test the "Request Demo" feature
   - Verify that demo requests are sent to FRcode API
   - Check that interactive features work properly

## Building for Production

1. Build the application:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

3. Deploy the `dist` folder to your hosting platform

## Dependencies and Requirements

### Runtime Dependencies

- **FRcode API**: Backend API must be accessible and running
- **Environment Variables**: Proper configuration for API integration
- **Network Access**: Ability to communicate with FRcode endpoints

### Development Dependencies

- Node.js development environment
- Access to FRcode repository (for full integration testing)
- Valid API credentials for development/testing

## Troubleshooting

### Common Integration Issues

1. **API Connection Errors**:
   ```
   Error: Failed to fetch from FRcode API
   ```
   - **Solution**: Check API URL and network connectivity
   - Verify API key is valid and not expired
   - Ensure FRcode API is running and accessible

2. **CORS Issues**:
   ```
   Access-Control-Allow-Origin error
   ```
   - **Solution**: Configure CORS in FRcode API settings
   - Add promo app domain to allowed origins

3. **Authentication Failures**:
   ```
   401 Unauthorized
   ```
   - **Solution**: Verify API key is correctly set in environment variables
   - Check if API key has proper permissions

4. **Mock Data Not Loading**:
   ```
   Components showing empty state
   ```
   - **Solution**: Ensure `VITE_USE_MOCK_DATA=true` is set
   - Check that mock data files exist in `src/data/`

### Debug Mode

Enable debug mode to see detailed integration logs:

```bash
VITE_DEBUG_MODE=true
VITE_LOG_LEVEL=debug
```

### Getting Help

- Check the [Issues](https://github.com/freeroomae/freeroom-app-promo/issues) page
- Review FRcode API documentation
- Contact the development team for API access issues

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the integration thoroughly
5. Submit a pull request

## License

This project is proprietary to FreeRoom. All rights reserved.
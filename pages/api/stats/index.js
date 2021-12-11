import { BetaAnalyticsDataClient } from '@google-analytics/data';

export default async function handler(req, res) {
  const analyticsDataClient = new BetaAnalyticsDataClient({
    credentials: {
      client_email: process.env.ANALYTICS_CLIENT_EMAIL,
      private_key: process.env.ANALYTICS_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    projectId: process.env.ANALYTICS_PROJECT_ID,
  });

  const propertyId = process.env.ANALYTICS_PROPERTY_ID;

  let today = new Date().getTime() - 60 * 60 * 24 * 60 * 1000;
  let day = new Date(today).getDate();
  let month = new Date(today).getMonth() + 1;
  let year = new Date(today).getFullYear();
  let dayFormat = `${year}-${month}-${day}`;

  const totalReport = await analyticsDataClient.runReport({
    property: 'properties/' + propertyId,
    dateRanges: [
      {
        startDate: dayFormat,
        endDate: 'today',
      },
    ],
    // https://developers.google.com/analytics/devguides/reporting/data/v1/api-schema
    metrics: [
      {
        name: 'totalUsers',
      },
      {
        name: 'activeUsers',
      },
      {
        name: 'screenpageViews',
      },
      {
        name: 'engagedSessions',
      },
      {
        name: 'userEngagementDuration',
      },
      {
        name: 'engagementRate',
      },
    ],
  });

  return res.status(200).json({
    totalUsers: totalReport[0]?.rows[0]?.metricValues[0]?.value || 0,
    activeUsers: totalReport[0]?.rows[0]?.metricValues[1]?.value || 0,
    pageViews: totalReport[0]?.rows[0]?.metricValues[2]?.value || 0,
    engagedSessions: totalReport[0]?.rows[0]?.metricValues[3]?.value || 0,
    engagementDuration: totalReport[0]?.rows[0]?.metricValues[4]?.value || 0,
    engagementRate: totalReport[0]?.rows[0]?.metricValues[5]?.value || 0,
  });
}

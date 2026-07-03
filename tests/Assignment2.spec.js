import { test, expect } from '@playwright/test';

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';

const EMAIL = 'testing27334@gmail.com';
const PASSWORD = 'Dsa@2026';

const SIX_EVENTS_RESPONSE = {
    "success": true,
    "data": [
        {
            "id": 3,
            "title": "Dilli Diwali Mela",
            "description": "Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.",
            "category": "Festival",
            "venue": "Pragati Maidan Exhibition Grounds",
            "city": "Delhi",
            "eventDate": "2026-10-20T17:00:00.000Z",
            "price": "300",
            "totalSeats": 10000,
            "availableSeats": 9992,
            "imageUrl": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.680Z",
            "updatedAt": "2026-05-29T05:44:25.067Z"
        },
        {
            "id": 2,
            "title": "Hollywood Monsoon Night — Los Angeles",
            "description": "An unforgettable evening of live music performed by A-list playback singers under the open Mumbai sky. Featuring chart-toppers from the last three decades with a stunning light show and pyrotechnics.",
            "category": "Concert",
            "venue": "Dome, NSCI SVP Stadium, Worli",
            "city": "Los Angeles",
            "eventDate": "2026-07-11T19:00:00.000Z",
            "price": "2500",
            "totalSeats": 3000,
            "availableSeats": 3000,
            "imageUrl": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.669Z",
            "updatedAt": "2026-06-19T04:51:01.426Z"
        },
        {
            "id": 1,
            "title": "World Tech Summit",
            "description": "A premier technology conference bringing together 500+ industry leaders, startup founders, and engineers for two days of keynotes, workshops, and networking. Topics include AI/ML, cloud infrastructure, DevSecOps, and the future of the Indian tech ecosystem.",
            "category": "Conference",
            "venue": "Hyderabad, Hitech city",
            "city": "Hyderabad",
            "eventDate": "2026-04-18T09:00:00.000Z",
            "price": "1500",
            "totalSeats": 500,
            "availableSeats": 500,
            "imageUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.659Z",
            "updatedAt": "2026-05-23T06:57:02.677Z"
        },
        {
            "id": 53530,
            "title": "Test Event 1781158324246",
            "description": "This is an automated event created using Playwright",
            "category": "Conference",
            "venue": "Convention Center",
            "city": "Bangalore",
            "eventDate": "2026-06-18T04:30:00.000Z",
            "price": "100",
            "totalSeats": 50,
            "availableSeats": 50,
            "imageUrl": null,
            "isStatic": false,
            "userId": 14172,
            "createdAt": "2026-06-11T06:12:05.131Z",
            "updatedAt": "2026-06-11T06:12:05.131Z"
        },
        {
            "id": 53523,
            "title": "Test Event 1781156014460",
            "description": "This is an automated event created using Playwright",
            "category": "Conference",
            "venue": "Convention Center",
            "city": "Bangalore",
            "eventDate": "2026-06-18T04:30:00.000Z",
            "price": "100",
            "totalSeats": 50,
            "availableSeats": 50,
            "imageUrl": null,
            "isStatic": false,
            "userId": 14172,
            "createdAt": "2026-06-11T05:33:44.234Z",
            "updatedAt": "2026-06-11T10:42:30.182Z"
        },
        {
            "id": 53522,
            "title": "Test Event 1781155983144",
            "description": "This is an automated event created using Playwright",
            "category": "Conference",
            "venue": "Convention Center",
            "city": "Bangalore",
            "eventDate": "2026-06-18T04:30:00.000Z",
            "price": "100",
            "totalSeats": 50,
            "availableSeats": 50,
            "imageUrl": null,
            "isStatic": false,
            "userId": 14172,
            "createdAt": "2026-06-11T05:33:03.905Z",
            "updatedAt": "2026-06-11T05:33:03.905Z"
        }
    ],
    "pagination": {
        "total": 6,
        "page": 1,
        "limit": 12,
        "totalPages": 1
    }
};
const FOUR_EVENTS_RESPONSE = {
  data: [
   {
            "id": 3,
            "title": "Dilli Diwali Mela",
            "description": "Celebrate the Festival of Lights at the grandest Diwali Mela in North India. Enjoy 200+ stalls of artisanal crafts, street food, folk performances, fireworks, and cultural showcases spanning three vibrant evenings.",
            "category": "Festival",
            "venue": "Pragati Maidan Exhibition Grounds",
            "city": "Delhi",
            "eventDate": "2026-10-20T17:00:00.000Z",
            "price": "300",
            "totalSeats": 10000,
            "availableSeats": 9992,
            "imageUrl": "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.680Z",
            "updatedAt": "2026-05-29T05:44:25.067Z"
        },
        {
            "id": 2,
            "title": "Hollywood Monsoon Night — Los Angeles",
            "description": "An unforgettable evening of live music performed by A-list playback singers under the open Mumbai sky. Featuring chart-toppers from the last three decades with a stunning light show and pyrotechnics.",
            "category": "Concert",
            "venue": "Dome, NSCI SVP Stadium, Worli",
            "city": "Los Angeles",
            "eventDate": "2026-07-11T19:00:00.000Z",
            "price": "2500",
            "totalSeats": 3000,
            "availableSeats": 3000,
            "imageUrl": "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.669Z",
            "updatedAt": "2026-06-19T04:51:01.426Z"
        },
        {
            "id": 1,
            "title": "World Tech Summit",
            "description": "A premier technology conference bringing together 500+ industry leaders, startup founders, and engineers for two days of keynotes, workshops, and networking. Topics include AI/ML, cloud infrastructure, DevSecOps, and the future of the Indian tech ecosystem.",
            "category": "Conference",
            "venue": "Hyderabad, Hitech city",
            "city": "Hyderabad",
            "eventDate": "2026-04-18T09:00:00.000Z",
            "price": "1500",
            "totalSeats": 500,
            "availableSeats": 500,
            "imageUrl": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
            "isStatic": true,
            "userId": null,
            "createdAt": "2026-02-22T23:03:37.659Z",
            "updatedAt": "2026-05-23T06:57:02.677Z"
        },
        {
            "id": 53530,
            "title": "Test Event 1781158324246",
            "description": "This is an automated event created using Playwright",
            "category": "Conference",
            "venue": "Convention Center",
            "city": "Bangalore",
            "eventDate": "2026-06-18T04:30:00.000Z",
            "price": "100",
            "totalSeats": 50,
            "availableSeats": 50,
            "imageUrl": null,
            "isStatic": false,
            "userId": 14172,
            "createdAt": "2026-06-11T06:12:05.131Z",
            "updatedAt": "2026-06-11T06:12:05.131Z"
        }  
      ],
  pagination: {
    page: 1,
    totalPages: 1,
    total: 4,
    limit: 12
  }
};

async function login(page) {

  await page.goto(`${BASE_URL}/login`);

  await page.getByPlaceholder('you@email.com').fill(EMAIL);
  await page.locator('input[type="password"]').fill(PASSWORD);

  await page.locator('#login-btn').click();
   
  await page.locator('#nav-events').click();
}

test.describe('Event API Mocking', () => {

  test('Display 6 mocked events', async ({ page }) => {
   


  await page.route("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",
  async (route) => {
      const response = await page.request.fetch(route.request());
      let body=JSON.stringify(SIX_EVENTS_RESPONSE);
      await route.fulfill({  
          response,
          body
       });
  
  
  });
       
   login(page);
   await page.locator('#event-card').first().waitFor();
   
    const eventCards =await page.locator('#event-card');

    const eventCount = await eventCards.count();
    console.log(`Number of event cards displayed: ${eventCount}`);

    await expect(eventCards).toHaveCount(6);

    await expect(page.getByText('Dilli Diwali Mela')).toBeVisible();
    await expect(page.getByText('Hollywood Monsoon Night — Los Angeles')).toBeVisible();
    await expect(page.getByText('World Tech Summit')).toBeVisible();
    await expect(page.getByText('Test Event 1781158324246')).toBeVisible();
    await expect(page.getByText('Test Event 1781156014460')).toBeVisible();
    await expect(page.getByText('Test Event 1781155983144')).toBeVisible();
  });

test('Display 4 mocked events', async ({ page }) => {

 await page.route("https://api.eventhub.rahulshettyacademy.com/api/events?page=1&limit=12",
  async (route) => {
      const response = await page.request.fetch(route.request());
      let body=JSON.stringify(FOUR_EVENTS_RESPONSE);
      await route.fulfill({  
          response,
          body
       });
  
  
  });

    await login(page);

     await page.locator('#event-card').first().waitFor();
     const eventCards = await page.locator('#event-card');
     const eventCount = await eventCards.count()

    console.log(`Number of event cards displayed: ${eventCount}`);
    await expect(eventCards).toHaveCount(4);

    await expect(page.getByText('Dilli Diwali Mela')).toBeVisible();
    await expect(page.getByText('Hollywood Monsoon Night — Los Angeles')).toBeVisible();
    await expect(page.getByText('World Tech Summit')).toBeVisible();
    await expect(page.getByText('Test Event 1781158324246')).toBeVisible();
  });

  
  

});
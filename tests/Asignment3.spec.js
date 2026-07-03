const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://eventhub.rahulshettyacademy.com';
const API_URL = `${BASE_URL}/api`;

// Dummy Users
const YAHOO_USER = {
    email: 'testing27334@gmail.com',
    password: 'Dsa@2026'
};

const GMAIL_USER = {
    email: 'test456232312@gmail.com',
    password: 'Dsa@2026'
};

// UI Login Helper
async function loginAs(page, user) {
    
    await page.goto(`${BASE_URL}/login`);

    await page.getByPlaceholder('you@email.com').fill(user.email);
    await page.getByLabel('Password').fill(user.password);

    await page.locator('#login-btn').click();

}

test('Gmail user should not access Yahoo user booking', async ({ page, request }) => {

    // ==========================================
    // STEP 1 - Login as Yahoo User via API
    // ==========================================

    const loginRes = await request.post(
        "https://api.eventhub.rahulshettyacademy.com/api/auth/login",
        {
            data: {
                email: YAHOO_USER.email,
                password: YAHOO_USER.password
            }
        }
    );

       

console.log(loginRes);
    

    //expect(loginRes.ok()).toBeTruthy();

   

    const loginBody = await loginRes.json();

    console.log('Login Response:', loginBody);

    const token = loginBody.token;
    console.log('Token:', token);

    expect(token).toBeTruthy();

    // ==========================================
    // STEP 2 - Fetch Events
    // ==========================================

    const eventsRes = await request.get(
        "https://api.eventhub.rahulshettyacademy.com/api/events",
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

   // expect(eventsRes.ok()).toBeTruthy();
  
   console.log("evnt reponse"+eventsRes)

    const eventsBody = await eventsRes.json();

    console.log('Events Response:', eventsBody);

    const eventId = eventsBody.data[0].id;
    console.log('Event Id:', eventId);
    

    //expect(eventId).toBeTruthy();

    // ==========================================
    // STEP 3 - Create Booking as Yahoo User
    // ==========================================

    const bookingRes = await request.get(
        "https://api.eventhub.rahulshettyacademy.com/api/bookings",
        {
            headers: {
                Authorization: `Bearer ${token}`
            },
            data: {
                eventId: eventId,
                customerName: 'Anil DS',
                customerEmail: YAHOO_USER.email,
                customerPhone: '9876543210',
                quantity: 1
            }
        }
    );

    //expect(bookingRes.ok()).toBeTruthy();



    console.log(bookingRes)

    const bookingBody = await bookingRes.json();

    console.log(bookingBody)

    const yahooBookingId = bookingBody.data[0].id;
    
   // expect(yahooBookingId).toBeTruthy();

    console.log('Booking Id:', yahooBookingId);

  
    // ==========================================
    // STEP 4 - Login as Gmail User via UI
    // ==========================================
   
    await loginAs(page, GMAIL_USER);

  await page.locator('#event-card').first().waitFor();
    // ==========================================
    // STEP 5 - Open Yahoo Booking URL
    // ==========================================

    await page.goto(
        `${BASE_URL}/bookings/${yahooBookingId}`,
        {
            waitUntil: 'networkidle'
        }
    );

  

    // ==========================================
    // STEP 6 - Validate Access Denied
    // ==========================================

    await expect(
        page.getByText('Access Denied')
    ).toBeVisible();

    await expect(
        page.getByText(
            'You are not authorized to view this booking'
        )
    ).toBeVisible();
});
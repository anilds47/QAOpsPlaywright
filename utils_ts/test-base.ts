import {test as baseTest} from '@playwright/test';

interface TestDataForOrder{
     username: string
        password: string
        productName: string
}

export const customtest=baseTest.extend<{testDataForOrder:TestDataForOrder}>({

    testDataForOrder:{
        username: "anildshiva@gmail.com",
        password: "Dsa@2026",
        productName: "ZARA COAT 3"
    }

})
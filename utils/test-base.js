const base= require('@playwright/test');

exports.customtest=base.test.extend({

    testDataForOrder:{
        username: "anildshiva@gmail.com",
        password: "Dsa@2026",
        productName: "ZARA COAT 3"
    }

})
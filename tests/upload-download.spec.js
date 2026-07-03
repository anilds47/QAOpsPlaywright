const ExcelJs = require('exceljs');
const {test,expect}=require('@playwright/test');
const { text } = require('node:stream/consumers');

async function excelWrite(searchText,replaceText,change,filePath) {

    const workbook = new ExcelJs.Workbook();

await workbook.xlsx.readFile(filePath);
   
  
 const worksheet = workbook.getWorksheet('Sheet1');

 const output=await readExcel(worksheet,searchText);

       
       const cell= worksheet.getCell(output.row,output.column+change.colChange);
       cell.value=replaceText;
       workbook.xlsx.writeFile(filePath);
     
}

async function readExcel(worksheet,searchText) {
  
    let output={row:-1,column:-1};
     worksheet.eachRow((row, rowNumber) => {

            row.eachCell((cell,colNumber) =>{

                if(cell.value === searchText){
                    output.row=rowNumber;
                    output.column=colNumber;
                }

            })
            
        })
        return output;
    
}

   //excelWrite('Mango',400,{rowChange:0,colChange:2},"D:\\ExcelReading\\download.xlsx");


    test('upload download excel validation',async ({page})=>{

        const searchText="Mango";
        const updateValue=350;  
        await page.goto("https://rahulshettyacademy.com/upload-download-test/");
        const downloadPromise = page.waitForEvent('download');
        await page.getByRole('button',{name:'Download'}).click();
        await downloadPromise;
        excelWrite(searchText,350,{rowChange:0,colChange:2},"C:\\Users\\anild\\Downloads\\download.xlsx");
         await page.locator("#fileinput").click();
        await page.locator("#fileinput").setInputFiles("C:\\Users\\anild\\Downloads\\download.xlsx")
        const textLocator=await page.getByText(searchText);
       const desiredRow = await page.getByRole('row').filter({ has: page.getByText(textSearch) });
  await expect(desiredRow.locator('#cell-4-undefined')).toContainText(updateValue);

        




})
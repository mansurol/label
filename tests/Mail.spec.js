import { test, expect } from '@playwright/test';


test('test', async ({ page }) => { 
    test.setTimeout(120000);  
    await page.goto('https://mailosaur.com/');
    await page.getByTestId('desktop-signin').click();
    await page.getByRole('textbox', { name: 'Email address' }).click();
    await page.getByRole('textbox', { name: 'Email address' }).fill('mansurol@co.design');
    await page.getByRole('button', { name: 'Continue' }).click();    

    await page.goto('https://accounts.google.com/v3/signin/identifier?opparams=%253Fcontext_uri%253Dhttps%25253A%25252F%25252Fmailosaur.com&dsh=S1494290868%3A1739784189224408&client_id=209593984357-t2b34ha7g8acir9ogoj5tj7qkecmneff.apps.googleusercontent.com&ddm=1&o2v=1&redirect_uri=https%3A%2F%2Fmailosaur.com%2F__%2Fauth%2Fhandler&response_type=code&scope=openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+profile&service=lso&state=AMbdmDlAbVvr2z17OQ_CQm37v7x0zSO9EXp_qEfW_spi4oMLP0k1YavjjA9PkIyaemSxQkaXxP91smg3ZNceJM8-UJC4bVqcJKDm_ly09y01G2c3-VwhhXvmMK3Pi3gFGOjT2-NfX16dyq7zI33Gp8QTBOZ1oUND-VJzBGY_nVnn4pjRQQ033jPpgheEYA6o06Lay1kCJeOzzDt458r_PBMrYhPByAIAtiJ8yAJwGSgmtYbgYSK3KkNbgTE57gY01oPRvvbvKA-L6LIjZ9zYHdu7ELZ3bhOGYXhdbkjJ4oYJUBO6LsEKEg&flowName=GeneralOAuthFlow&continue=https%3A%2F%2Faccounts.google.com%2Fsignin%2Foauth%2Fconsent%3Fauthuser%3Dunknown%26part%3DAJi8hANvAcqivYAjbeGvvz5D0wHHcVdh1VhCjJfIT4Es6DG-Y0sZri9UutVTnnGNUnyGv1xxv9ayiuKmkWhNQ45wiegf5mkUPOGW_XqxCKKpqDNR96TIJ4v4pOD2wFFdlbMSMg6cDNt4pr_9iGF3ts5VgCSwcPIZjyO1_8yXyan4bF8nwZE2Kr-ugWUVBdSEBUUu3He88rR8ZtuEj9h8K5-4KsiIKWhtkRAl8eaUtkvUxZbsFVPso2imnsV6SMb383lnwvBB2kh_x2kbi7P_w5Ejn5BV_EkPUVezFfimPEE3laVzGuS81dAexxuU_TVQzHLlUYqn_W3s3hco4qluX7ieXKWibHC6IBNz-9e8MhnfV4rW8GXgYEUlY11uzKbCX-uHs55hHRqdTZlwQDBQqoMf5MhhzsG4pQdrNQfITPGaZ8YwUHEpNWRuw9qF-YPn6dpHhlfHvchOnp4nKu2sbbcGe-3JCxWNzg%26flowName%3DGeneralOAuthFlow%26as%3DS1494290868%253A1739784189224408%26client_id%3D209593984357-t2b34ha7g8acir9ogoj5tj7qkecmneff.apps.googleusercontent.com%23&app_domain=https%3A%2F%2Fmailosaur.com&rart=ANgoxcd8MjPq3BPWLE-Pt6lHeFPyITpVFC1d1NKyei4TfjuWTVGaU3kYkvbu3_obKwI-v1ZQWnMEqV-UoY7TTKPRut8hbD1ETNOZfqGkFuIkTv_O8pN8vtA');
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).fill('mansurol@co.design');
await page.getByRole('button', { name: 'Next' }).click();
await page.getByRole('button', { name: 'Restart' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).click();
await page.getByRole('textbox', { name: 'Email or phone' }).fill('mansurol@co.design');
await page.getByRole('textbox', { name: 'Email or phone' }).press('Enter');
await page.getByRole('textbox', { name: 'Enter your password' }).fill('Mansurol@12345');
await page.getByRole('textbox', { name: 'Enter your password' }).press('Enter');
await page.goto('https://mailosaur.com/__/auth/handler?state=AMbdmDlAbVvr2z17OQ_CQm37v7x0zSO9EXp_qEfW_spi4oMLP0k1YavjjA9PkIyaemSxQkaXxP91smg3ZNceJM8-UJC4bVqcJKDm_ly09y01G2c3-VwhhXvmMK3Pi3gFGOjT2-NfX16dyq7zI33Gp8QTBOZ1oUND-VJzBGY_nVnn4pjRQQ033jPpgheEYA6o06Lay1kCJeOzzDt458r_PBMrYhPByAIAtiJ8yAJwGSgmtYbgYSK3KkNbgTE57gY01oPRvvbvKA-L6LIjZ9zYHdu7ELZ3bhOGYXhdbkjJ4oYJUBO6LsEKEg&code=4%2F0ASVgi3K-jzoL8AkxBdjAKzvNHLE5ulziqLrT3WEs0pNiOI8d0YH7vESOsJQFPxiDpecWQA&scope=email+profile+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email&authuser=0&hd=co.design&prompt=none');
});

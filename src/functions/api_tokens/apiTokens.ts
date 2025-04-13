
// import fetch from 'node-fetch'; 
// import { Auth } from '../../statics/Text/passwords';
// import { baseURL } from '../../generic/utils/environment.properties';


// async function Post_Gen_token_QA() {
//     const url = baseURL.Access_Token_Endpoint // Replace 'YOUR_BASE_URL_HERE' with your actual base URL
//     const headers = {
//         'Accept': 'application/x-www-form-urlencoded',
//         'Content-Type': 'application/x-www-form-urlencoded' // Set Content-Type as well for form data
//     };

//     const formData = new URLSearchParams();
//     formData.append('client_id', Auth.client_ID_BUK); 
//     formData.append('client_secret', Auth.client_Secret_BUK);
//     formData.append('grant_type', 'client_credentials');

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: headers,
//             body: formData
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }

//         const data = await response.json();
//         console.log(data); // Do something with the response data
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// // Call the function
// Post_Gen_token_QA();



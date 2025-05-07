/*
===========================================
🏨 JSON Syntax Debugging: Hotel Booking Data
===========================================

🎯 Objective:
Students will analyze a JSON file containing multiple syntax errors,
identify the issues, and correct them.

This activity helps practice spotting and fixing common JSON mistakes such as:
- Missing commas
- Incorrect use of quotation marks
- Unmatched brackets/braces
- Trailing commas
- Invalid data types
*/


// ============================================
// 🧭 Instructions:
// ============================================

/*
📘 Scenario:
You’re a developer on a team building a travel booking API.

A teammate submitted a JSON file to represent a hotel booking, 
but it contains multiple syntax errors that prevent it from being parsed.

🔧 Your Task:
1️⃣ Review the provided JSON file
2️⃣ Identify all syntax errors
3️⃣ Write down what each error is and why it causes a problem
4️⃣ Correct the JSON structure so that it is valid
5️⃣ Validate your corrected version using a JSON linter or validator

🧪 Deliverables:
- A corrected version of the JSON
- A list of the corrections made and why each was necessary
*/


// ============================================
// 🔍 Provided JSON File with Errors
// ============================================

//const invalidBookingJSON = ` variables and tick marks are not valid data type in JSON
{
  "hotelName": "Grand City Hotel",
  "checkInDate": "2024-05-15", // missing comma must be present in JSON
  "checkOutDate": "2024-05-20", 
  "guests": [
    {
      "name": "Alice Johnson", // missing double quotation marks around name must be present in JSON
      "age": 30,
      "email": "alice.johnson@example.com"
    },
    {
      "name": "Bob Smith",
      "age": undefined,  // undefined is an unsupported data type for JSON
      "email": "bob.smith@example"
    }
  ],
  "roomDetails": {
    "type": "Suite",
    "pricePerNight": 200,
    "amenities": ["WiFi", "Breakfast", "Parking"]  //trailing comma after last item in array data types not valid in JSON
  }
}
// `; the tick mark and semicolon are not valid data types in JSON


// ============================================
// ✅ Requirements
// ============================================

/*
- Use a JSON validator or linter (e.g., https://jsonlint.com/) to test your final version
- Keep track of each fix:
  • What was wrong?
  • Why is it a problem in JSON?
  • What did you change to fix it?
*/


// ============================================
// 🤔 Follow-Up Questions
// ============================================

/*
💬 Reflect and answer the following:

1️⃣ What tools or techniques did you use to identify the errors?

I used a JSON formatter at jsonformatter.org to check for errors in the JSON code provided.

2️⃣ How did you confirm that your corrected JSON file was valid?

inputed corrected JSON code into a JSON formatter at jsonformatter.org.

3️⃣ Which errors were the most difficult to spot? Why?

The trailing comma at the end of the array because I did not notice it until close inspection.

4️⃣ What strategies can help you avoid these kinds of errors in the future?
   (e.g., syntax highlighting, linters, writing JSON by example)

   Using a linter to check my code will help me avoid these arrors in the future.
*/

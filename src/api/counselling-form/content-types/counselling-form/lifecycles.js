module.exports = {
  afterCreate: async (event) => {
    const { result } = event;
    try {
      await strapi.plugin('email').service('email').send({
        to: "office@benchmark.education",
        subject: `Benchmark Education - Counselling Form Submission`,
        html: `
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                background-color: #f4f4f4;
                margin: 0;
                padding: 0;
              }
              .container {
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                background-color: #ffffff;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              }
              h2 {
                color: #333333;
                margin-top: 0;
              }
              table {
                width: 100%;
                border-collapse: collapse;
              }
              th, td {
                padding: 10px;
                text-align: left;
                border-bottom: 1px solid #dddddd;
              }
              th {
                background-color: #f2f2f2;
              }
              td {
                max-width: 50vw;
                overflow-wrap: break-word;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h2>Counselling Form Submission</h2>
              <table>
                <tr><th>First Name</th><td>${result.FirstName || ''}</td></tr>
                <tr><th>Last Name</th><td>${result.LastName || ''}</td></tr>
                <tr><th>Email</th><td>${result.Email || ''}</td></tr>
                <tr><th>Phone</th><td>${result.Phone || ''}</td></tr>
                <tr><th>Age</th><td>${result.Age || ''}</td></tr>
                <tr><th>Gender</th><td>${result.Gender || ''}</td></tr>
                <tr><th>Country</th><td>${result.Country || ''}</td></tr>
                <tr><th>Highest Level of Education Completed</th><td>${result.HighestLevelofEducationCompleted || ''}</td></tr>
                <tr><th>Field Of Study</th><td>${result.FielfOfStudy || ''}</td></tr>
                <tr><th>Previous Counselling Experience</th><td>${result.PreviousCounsellingExperience ? 'Yes' : 'No'}</td></tr>
                <tr><th>Queries</th><td>${result.Queries || ''}</td></tr>
                <tr><th>Other Country</th><td>${result.OtherCountry || ''}</td></tr>
                <tr><th>Other Additional Information</th><td>${result.OtherAdditionalInformation || ''}</td></tr>
                <tr><th>Preferred Study Destinations</th><td>${JSON.stringify(result.PreferredStudyDestinations) || ''}</td></tr>
                <tr><th>Additional Information</th><td>${JSON.stringify(result.AdditionalInformation) || ''}</td></tr>
              </table>
            </div>
          </body>
        `,
      });
    } catch (err) {
      console.log("Mail Failed:", err);
    }
  },
};

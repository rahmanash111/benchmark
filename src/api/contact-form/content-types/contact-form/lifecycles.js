module.exports = {
  afterCreate: async (event) => {
    const { result } = event;
    try {
      await strapi.plugin('email').service('email').send({
        to: "azeem.parvez@ideassion.com",
        subject: `Benchmark Educataion - Contact Form Submission`,
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
              <h2>Contact Form Submission</h2>
              <table>
                <tr><th>Name</th><td>${result.Name || ''}</td></tr>
                <tr><th>Email</th><td>${result.Email || ''}</td></tr>
                <tr><th>Subject</th><td>${result.Subject || ''}</td></tr>
                <tr><th>Phone</th><td>${result.Phone || ''}</td></tr>
                <tr><th>Message</th><td>${result.Message || ''}</td></tr>
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

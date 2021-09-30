const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  pool: true,
  auth: {
    user: "dpetrov1@sheffield.ac.uk",
    pass: "mtgyowepwizpwvqt",
  },
});

let mailTemplate = {
  from: "dpetrov1@sheffield.ac.uk",
  to: "",
  subject: "DevOps Research Invitation",
  text: `Dear Sir/Madam,

I am writing to you as an invitation to your company to participate in a research survey being conducted as a part of a Master's Degree dissertation at the University of Sheffield. 

The research aims to evaluate the state of DevOps adoption within the Bulgarian Software Industry. Key areas of interest include perception of DevOps, maturity, culture, benefits, and challenges. The survey takes about 5 to 7 minutes to complete and is suitable for any IT professional working in a DevOps environment. 

If you wish to participate in the survey, please forward the survey link to potential participants within your company.
Link: https://devops.dayanpetrow.eu/

One to three responses will help us evaluate the state of DevOps adoption in Bulgaria. The deadline for the survey is 1 October 2021.

If you have any questions about the research, please reply to this email or send us a message on LinkedIn.
LinkedIn: https://www.linkedin.com/in/dayanpetrow/

Thank you very much for your time and cooperation.

Best regards,
Dayan`,
};

const mailList = [];

mailList.forEach((recepient, index) => {
  const mailOptions = {
    ...mailTemplate,
    to: recepient,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(`${index} [Error] Error: ${error} ${mailOptions.to}`);
    } else {
      console.log(
        `${index} [Success] Email sent: ${info.response} - ${mailOptions.to}`
      );
    }
  });
});

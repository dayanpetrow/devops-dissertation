import React, { useState } from "react";
import { Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { acceptAgreement } from "./agreementSlice";

const consentParagrahs = [
  `I have read and understood the project information sheet dated DD/MM/YYYY or the project has been fully explained to me.`,
  `I have been given the opportunity to ask questions about the project.`,
  `I agree to take part in the project. I understand that taking part in the project will include completing a questionnaire. I understand that the questionnaire is expected to take approximately 10 to 15 minutes to complete.
`,
  `I understand that my survey responses are completely anonymous. I understand that once the questionnaire is submitted the researchers will not be able to identify or remove my responses.
`,
  `I understand and agree that my words may be quoted in publications, reports, web pages, and other research outputs. I understand that I will not be named in these outputs.
`,
  `I understand that my taking part is voluntary and that I can withdraw from the study at any time before the submission of the questionnaire.I do not have to give any reasons for why I no longer want to take part and there will be no adverse consequences if I choose to withdraw.
`,
  `I understand that by choosing to participate as a volunteer in this research, this does not create a legally binding agreement nor is it intended to create an employment relationship with the University of Sheffield.
`,
];

export const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const onChange = (e: any) => {
    setIsChecked(e.target.checked);
  };

  const onSubmit = () => dispatch(acceptAgreement());

  return (
    <>
      <h4>
        Investigation of the adoption of DevOps practices and related challenges
        in the Bulgarian Software Development Industry
      </h4>

      <div>
        {consentParagrahs.map((para) => (
          <p>{para}</p>
        ))}
      </div>

      <div>
        <Checkbox onChange={onChange}>I've given my consent.</Checkbox>
      </div>

      <div>
        <Button type="primary" block disabled={!isChecked} onClick={onSubmit}>
          Continue
        </Button>
      </div>
    </>
  );
};

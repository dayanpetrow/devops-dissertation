import { Button, message } from "antd";
import React from "react";
import { Wrapper } from "./styled";
import { IoMdMail, IoLogoLinkedin } from "react-icons/io";
import { LinkedinOutlined } from "@ant-design/icons";

const emailAddress = "dpetrov1@sheffield.ac.uk";
const linkedIn = "https://www.linkedin.com/in/dayanpetrow/";

export const TopBar = () => {
  const onCopy = () => {
    const textField = document.createElement("textarea");
    textField.innerText = emailAddress;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    message.success(`Email address was coppied to clipboard!`);
  };

  return (
    <Wrapper>
      <div className={"topbar"}>
        <Button
          type="link"
          onClick={onCopy}
          size={"small"}
          className={"contact-button"}
        >
          <IoMdMail size={24} />
          {emailAddress}
        </Button>
        <Button
          type="link"
          size={"small"}
          className={"contact-button"}
          href={linkedIn}
          target={'_blank'}
        >
          <IoLogoLinkedin size={24} />
          Dayan Petrow
        </Button>
      </div>
    </Wrapper>
  );
};

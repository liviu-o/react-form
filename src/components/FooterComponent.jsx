import React from "react";

const FooterComponent = (props) => {
  return (
    <div className="mt-10">
      <p>
        If you want to update what types of information you want to receive from
        us or opt out of these communications, you can do so at any time. We
        promise never to sell your data to any third parties. For more details,
        take a look at our&nbsp;
        <a
          href="https://www.hrp.org.uk/about-us/who-we-are/our-promise"
          target="_blank"
        >
          customer promise
        </a>
        &nbsp;and&nbsp;
        <a href="https://www.hrp.org.uk/privacy-policy/" target="_blank">
          privacy policy
        </a>
        . <a>Manage Cookies</a>
      </p>
    </div>
  );
};

export default FooterComponent;

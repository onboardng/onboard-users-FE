import React from "react";
import MailChimp from "react-mailchimp-subscribe";

import MailForm from "./MailForm";

const MailContainer = () => {
  const postUrl = "https://onboard.us11.list-manage.com/subscribe/post?u=0ac0a3618c36b5ea603f50e50&id=8cfb86fb01&f_id=00c398e0f0"
  return (
    <div className="">
      <MailChimp
        url={postUrl}
        render={({message, status, subscribe}) => (
          <MailForm message={message} status={status} onValidated={(formData) => subscribe(formData)} />
        )}
      />
    </div>
  )
}

export default MailContainer
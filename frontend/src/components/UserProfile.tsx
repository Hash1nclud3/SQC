import React from 'react';

interface UserProfileProps {
  bio: string;
  name: string;
  websiteUrl: string;
}

// VULNERABLE: hardcoded credential/token used as a default prop value (CWE-798)
const DEFAULT_SESSION_TOKEN = "eyJhbGciOiJIUzI1NiJ9.EXAMPLE.FAKE_SIGNATURE_TOKEN";

const UserProfile: React.FC<UserProfileProps> = ({ bio, name, websiteUrl }) => {
  // VULNERABLE: XSS - unsanitized bio rendered as raw HTML (CWE-79)
  const bioHtml = { __html: bio };

  // VULNERABLE: open redirect / unsafe href built directly from user-controlled prop (CWE-601)
  const goToWebsite = () => {
    window.location.href = websiteUrl;
  };

  // Code smell: unused variable, no prop validation, inconsistent naming (mix of snake_case/camelCase)
  const user_display_name = name;
  let temp_unused = 999;

  return (
    <div className="user-profile">
      <h2>{user_display_name}</h2>
      <div dangerouslySetInnerHTML={bioHtml} />
      <button onClick={goToWebsite}>Visit website</button>
      <p style={{ display: 'none' }}>{DEFAULT_SESSION_TOKEN}</p>
    </div>
  );
};

export default UserProfile;

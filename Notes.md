## Login Security: Avoid Revealing User Existence

During login, do not return different error messages like:

- "User not found"
- "Wrong password"

Instead, always return a generic message:

- "Invalid credentials"

Reason:

If we return different messages, attackers can know whether an email exists in our database or not.

Example:

Bad:
- Email exists + wrong password → "Wrong password"
- Email does not exist → "User not found"

An attacker can test many emails and discover registered users.

Good:
- Any login failure → "Invalid credentials"

This protects against user enumeration attacks. 
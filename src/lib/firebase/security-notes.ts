/*
Required production security rules, to be deployed manually in Firebase:

- Enable Firebase Authentication with Email/Password for admin users.
- Restrict writes to contact_leads and consultations from public forms to validated fields only.
- Restrict admin collection reads, updates, deletes, and Storage writes to authenticated admin users.
- Add custom claims or an admins allowlist before launch; authenticated alone is not enough for production.
- Validate file content types and max upload sizes for blog, testimonial, and country images.
- Deny all unspecified Firestore collections and Storage paths by default.

This file is documentation only. It intentionally does not deploy rules or hardcode permissions.
*/

export {};

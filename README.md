# chrome-extension-identity
Testing the chrome.identity permission &amp; API

I've left out the manifest now, because I don't know if I should be including my extension client id in a public repo.

Steps to use google chrome identity API for an unpacked extension:

1. For an unpacked extension: go to chrome://extensions/ and click "Pack extension..."
2. This will save a .crx file and a .pem file to your computer
3. Back up the .pem file, DO NOT LOSE IT
4. Copy the key from the .pem file, and put it in your manifest as the "key."
5. Go here: https://console.developers.google.com/apis
6. On the left, click "Library" and search for this API: Identity Toolkit API
7. Click the blue "Enable" button at the top of the API page.
8. On the left, click "Credentials" and go to the "OAuth consent screen" section
9. Enter your name and product name
10. Go to the "Credentials" section, click the blue "Create credentials" button
11. Choose "OAuth client ID"
12. Choose "Chrome app" for the application type
13. Enter a name for the client ID
14. Open chrome://extensions/ in another tab if you haven't closed it
15. Copy the ID shown under your unpacked extension, paste it in the second field of the client ID form
16. Finish creating the client ID
17. Credentials should now show your new client ID, copy the ID
18. Put the ID in the manifest as the "client_id" property of the "oauth2" declaration
19. Add "https://www.googleapis.com/auth/userinfo.email" to the scopes array property of the "oauth2" declaration
20. Add "identity" and "identity.email" to the permissions
21. You should now be able to use the "getAuthToken" identity method in the background script/event script (set "interactive" to true in the method options).

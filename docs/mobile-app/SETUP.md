# SafeOrStolen app: getting it into Google Play and the App Store

App ID (both stores, permanent): **`com.safeorstolen.app`**. App name: **SafeOrStolen**.

## How the app works

- The app opens **safeorstolen.com** inside a native shell (Capacitor 8). Every website update in Lovable
  shows up in the app straight away, with no new store release needed.
- The app adds what a website can't do: the phone's **native barcode scanner** (IMEI, serial and VIN barcodes),
  an app icon and splash screen, a bottom tab bar, and an offline screen.
- Inside the app, **Google sign-in is hidden** (Google blocks it in embedded web views, and Apple would then
  require Sign in with Apple), and **install-our-app banners are hidden**. The website is unchanged.
- **Account deletion** (required by both stores) is at **https://safeorstolen.com/delete-account**, linked from
  Profile and from the app's Settings tab. It cancels Stripe subscriptions first, then deletes the account.
- **Push notifications are off in version 1.** Turning them on needs Firebase (Android) and an APNs key (iOS).
  See "Later" at the bottom.

## Step 1. Publish the website changes (required first)

The app loads the live site, so the scanner, account deletion and app-only tweaks must be live before review.
Merge the pull request and publish in Lovable. Then check that https://safeorstolen.com/delete-account loads.

## Step 2. Create the developer accounts (only you can do this)

| | Google Play | Apple App Store |
|---|---|---|
| Sign up | https://play.google.com/console/signup | https://developer.apple.com/programs/enroll/ |
| Cost | $25 once | $99 a year |
| Needs | Government ID, phone, payment card | Apple ID with two-factor sign-in, government ID |
| Account type | **Organization** if you have a D-U-N-S number (skips the 14-day tester rule below) | Organization needs a D-U-N-S number; Individual shows your own name as the seller |

**Google Play rule for new personal accounts:** you must run a **closed test with at least 12 testers for 14 days
in a row** before you can publish to everyone. Organization accounts don't have this rule.

## Step 3. Android: put the upload key in GitHub

The upload key was created for you. It's in this session's private scratchpad folder `android-upload-key/`:
- `upload.jks`: the key file. **Save it, and `README-KEEP-SECRET.txt`, in your password manager.**
- `ANDROID_KEYSTORE_BASE64.txt`: the same key as text, for GitHub.
- `README-KEEP-SECRET.txt`: the password and alias.

In GitHub, open **samuelpfeiffer/safeorstolenverify → Settings → Secrets and variables → Actions → New repository secret**
and add these four:

| Name | Value |
|---|---|
| `ANDROID_KEYSTORE_BASE64` | all of `ANDROID_KEYSTORE_BASE64.txt` |
| `ANDROID_KEYSTORE_PASSWORD` | password from `README-KEEP-SECRET.txt` |
| `ANDROID_KEY_PASSWORD` | the same password |
| `ANDROID_KEY_ALIAS` | `safeorstolen-upload` |

## Step 4. iPhone: register the app and create an API key

1. **Register the App ID.** In https://developer.apple.com/account/resources/identifiers, click **+**, then
   **App IDs**, then **App**. Description: `SafeOrStolen`. Bundle ID: **Explicit**, `com.safeorstolen.app`. Leave
   capabilities as they are and click **Register**.
2. **Create the app record.** In https://appstoreconnect.apple.com, go to **Apps → + → New App**: platform iOS, name
   `SafeOrStolen`, language English (U.S.), bundle ID `com.safeorstolen.app`, SKU `safeorstolen-ios`.
3. **Create an API key.** Go to **Users and Access → Integrations → App Store Connect API → Team Keys → +**.
   Name: `GitHub builds`. Access: **Admin** (needed so the build can create its own signing certificate).
   Download the `.p8` file. Apple only lets you download it once.
4. Add these GitHub secrets (same place as Step 3):

| Name | Where to find it |
|---|---|
| `APPLE_TEAM_ID` | https://developer.apple.com/account → Membership details → Team ID (10 characters) |
| `APP_STORE_CONNECT_KEY_ID` | the Key ID shown next to the key |
| `APP_STORE_CONNECT_ISSUER_ID` | the Issuer ID shown above the keys list |
| `APP_STORE_CONNECT_KEY_P8` | open the `.p8` file in a text editor and paste everything, including the BEGIN/END lines |

## Step 5. Build the apps (one click each)

In GitHub, open **Actions**, pick the workflow, then **Run workflow**, and enter a version like `1.0.0`.

- **Android app** builds a signed `.aab`. The first time, download it from the run's **Artifacts** and upload it
  by hand in Play Console (**Test and release → Testing → Internal testing → Create new release**). Google
  requires the first upload to be manual.
  - After that, automatic uploads can be turned on: in Google Cloud, create a service account with a JSON key, invite
    its email in Play Console (**Users and permissions**, with release permissions), and save the JSON as the
    `PLAY_SERVICE_ACCOUNT_JSON` secret.
- **iOS app** builds, signs and uploads straight to App Store Connect. The build appears in **TestFlight**
  about 10–30 minutes later.

## Step 6. Fill in the store listings

Copy the text from `STORE_LISTING.md`. The icon and Play banner are in `store-assets/`.

**Screenshots:** take them on a real phone running the test build (TestFlight / internal testing):
- Apple: at least 3 screenshots from a 6.9-inch or 6.7-inch iPhone (for example iPhone 15/16/17 Pro Max).
- Google: at least 2 phone screenshots.
- Good shots: home screen, Scan button open on a barcode, a result, history, pricing.

## Step 7. Submit

- **Google:** Play Console → **Publishing overview → Send for review**. Personal accounts must finish the 14-day,
  12-tester closed test first.
- **Apple:** App Store Connect → your app → choose the TestFlight build → **Add for Review**. In **App Review
  Information**, give a test login (an email account with a check or two on it). Reviewers need it to see
  the checker.
- **Availability:** start with the **United States only** on both stores. US rules let the app use your
  existing Stripe website checkout. Outside the US, Apple requires its own in-app purchase system for digital checks.

## Later

- **Push notifications:** add Firebase (`android/app/google-services.json`) and an Apple APNs key, put
  `'@capacitor/push-notifications'` back in `includePlugins` in `capacitor.config.ts`, and turn on the
  Push Notifications capability in Xcode.
- **Other countries on iPhone:** add Apple in-app purchases for the $4.99 check and the $10/month plan.
- **Changing the app shell** (icon, permissions, plugins): edit, then run both workflows again with a higher version.
  Website changes don't need a new release.

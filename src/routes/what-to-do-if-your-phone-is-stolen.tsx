import { createFileRoute } from "@tanstack/react-router";
import { ItemLandingPageTemplate } from "@/components/seo/ItemLandingPageTemplate";

/**
 * Oct 7 2026: rewritten by hand for "what to do if your phone is stolen". No Search Console rows
 * for this URL yet. It used to render STOLEN_PHONE_VICTIM_GUIDE from src/data/moreGuides; it is
 * now self-contained. Removed the outbound Apple and Google support links. Steps are for owners;
 * buyer checks live on /how-to-check-if-phone-stolen and /imei-checker.
 */
function GuidePage() {
  return (
    <ItemLandingPageTemplate
      title="What to Do if Your Phone Is Stolen: Steps in Order | SafeOrStolen"
      metaDescription="Phone stolen? What to do in the first hour: mark it lost in Find My or Find Hub, have your carrier block the IMEI, report it, and secure your accounts."
      h1="What to Do if Your Phone Is Stolen"
      itemType="Stolen Phone"
      dateModified="2026-10-07"
      searchType="imei"
      searchPlaceholder="Enter your phone's IMEI to see if it shows up online"
      keywords={[
        "what to do if your phone is stolen",
        "what to do if phone is stolen",
        "my phone was stolen what do i do",
        "phone stolen what to do",
        "stolen phone steps",
        "block stolen phone imei",
        "report stolen phone",
        "iphone stolen what to do",
        "android phone stolen what to do",
      ]}
      quickAnswer={{
        question: "What should I do first if my phone is stolen?",
        answer:
          "Mark the phone as lost right away: in Find My (iPhone) from another device or iCloud on the web, or in Google's Find Hub (Android). Then call your carrier to suspend the line and ask them to block the IMEI, file a police report with the IMEI, and change the passwords for your email, bank and Apple or Google account. Don't remove the phone from your account, and don't go to its location yourself.",
      }}
      sections={[
        {
          heading: "The first hour, in order",
          table: {
            columns: ["Step", "Where", "Why"],
            rows: [
              ["1. Mark it as lost", "iPhone: Find My on another Apple device or iCloud on the web > Devices > Mark As Lost. Android: Google Find Hub > Secure device", "Locks the phone, shows your message and contact number on the lock screen, and on iPhone suspends Apple Pay cards"],
              ["2. Suspend the line", "Call your carrier from another phone, or use its website", "Stops calls and texts on your number, including sign-in codes sent by text"],
              ["3. Ask for an IMEI block", "Same call to the carrier. Ask for a reference number", "Blocks the phone itself on participating networks, not just your SIM"],
              ["4. Change key passwords", "Email first, then bank, Apple Account or Google account, and social media", "Anyone with your phone may try to reset passwords through your email"],
              ["5. File a police report", "Local police non-emergency line or online report", "Insurers and carriers usually ask for the report number"],
              ["6. Tell your bank", "Banking apps and cards saved on the phone", "Lets them watch for and freeze unusual activity"],
            ],
          },
        },
        {
          heading: "Mistakes that make it worse",
          list: [
            "Removing the phone from your Apple Account or Google account. That turns off Activation Lock or Factory Reset Protection and makes the phone easy to resell.",
            "Going to the location Find My or Find Hub shows. Give it to the police instead.",
            "Replying to a text or email saying your phone has been found and asking you to sign in. That's a common trick to get your password and remove the lock.",
            "Erasing it in the first few minutes. Once erased, you may lose the ability to see where it is. Erase it when you've given up on getting it back or your data is at risk.",
            "Waiting to call the carrier. Until the line is suspended, your number can receive sign-in codes.",
          ],
        },
        {
          heading: "Where to find your IMEI when the phone is gone",
          table: {
            columns: ["Where", "What to look for"],
            rows: [
              ["Another Apple device on your account", "Settings > [your name], tap the missing iPhone. The IMEI is listed"],
              ["Your carrier account or bill", "The device details for that line"],
              ["The original box", "The barcode label"],
              ["Receipt or insurance policy", "Often lists the IMEI or serial number"],
            ],
          },
        },
      ]}
      content={{
        intro:
          'If your phone is stolen, lock it first, then cut off the line, then report it. The table below has the six steps in order. After that, <a href="/report-stolen">report it on SafeOrStolen</a> so anyone who checks its IMEI before buying sees it was stolen.',
        whatIs:
          'Reporting a stolen phone means putting its IMEI on record in the places a buyer or a carrier might look: your carrier, the police, and stolen-item reports. Each one closes a different door. If you need your IMEI first, see <a href="/blog/how-to-find-imei-number">how to find an IMEI number</a>.',
        howItWorks:
          "When you report your phone on SafeOrStolen with its IMEI, it's added to SafeOrStolen's theft reports. Anyone who later checks that IMEI on SafeOrStolen sees it reported stolen. You can also check your IMEI in the search box to see whether it already appears in public listings or posts online. SafeOrStolen does not notify police or carriers, so do those steps yourself.",
        whyCheck:
          "Stolen phones are usually resold quickly, often to buyers who don't know. Every record of the theft, from the carrier block to a theft report a buyer can find, makes your phone harder to sell and easier to trace back to you if police recover it.",
        benefits: [
          "Free to report a stolen phone on SafeOrStolen",
          "Your report shows up for anyone who checks the IMEI before buying",
          "Search the IMEI to see if it shows up in listings or posts online",
          "Works for iPhone, Samsung, Pixel and any phone with an IMEI",
        ],
        process: [
          "Mark the phone as lost in Find My or Google Find Hub.",
          "Call your carrier to suspend the line and block the IMEI.",
          "Change your email, bank and Apple or Google account passwords.",
          "File a police report with the IMEI and get the report number.",
          "Contact your insurer or device protection plan if you have one.",
          "Report the phone on SafeOrStolen so buyers who check its IMEI see it.",
        ],
        faqs: [
          {
            question: "Can my carrier block my stolen phone?",
            answer:
              "Yes. Ask your carrier to suspend your line and to block the phone's IMEI as stolen. The line suspension protects your number; the IMEI block stops the phone itself from getting service on participating networks. Ask for a reference number for your police report and insurance claim.",
          },
          {
            question: "Should I erase my stolen phone?",
            answer:
              "Not straight away. Mark it as lost first, so it locks and you can still see where it is. Erase it remotely when you've given up on getting it back or when sensitive data is at risk. On an iPhone, erasing keeps Activation Lock on as long as you don't remove the phone from your account.",
          },
          {
            question: "Can police track my stolen phone?",
            answer:
              "Police can use the location you see in Find My or Find Hub and can ask carriers for records as part of an investigation. Give them the IMEI, the last location and the time, and let them decide whether to act. Don't go to the location yourself.",
          },
          {
            question: "How do I report my stolen phone on SafeOrStolen?",
            answer:
              "Go to safeorstolen.com/report-stolen and enter the phone's IMEI, make, model and when it was stolen. It's added to SafeOrStolen's theft reports, so anyone who checks that IMEI on SafeOrStolen before buying sees it was reported stolen. This does not replace a police report or a carrier block.",
          },
          {
            question: "Will insurance cover a stolen phone?",
            answer:
              "It depends on your policy. Carrier insurance, device protection plans and some homeowners or renters policies cover theft. Most ask for a police report number and the IMEI, and some require that Find My is still on. Check your policy before you remove the phone from your account.",
          },
          {
            question: "What if I get a text saying my phone was found?",
            answer:
              "Treat it as a scam unless you can confirm it through your own account. Thieves send messages that look like they're from Apple or Google, asking you to sign in, so they can capture your password and remove the lock. Don't click the link; check Find My or Find Hub directly.",
          },
        ],
      }}
    />
  );
}

export const Route = createFileRoute("/what-to-do-if-your-phone-is-stolen")({
  component: GuidePage,
});

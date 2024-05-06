import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div style={{ padding: "0 20%", position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "18%",
          width: "64%", // 100% - 2 * 18%
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          backdropFilter: "blur(8px)",
          zIndex: -1,
        }}
      />
      <div>
        <h1 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Terms of Service
        </h1>
        <p>
          Welcome to AutosAesthetics.com! These terms outline the rules and
          regulations for the use of AutosAesthetics.com's Website, located at
          AutosAesthetics.com.
        </p>
        <p>
          By accessing this website, we assume you accept these terms and
          conditions. Do not continue to use AutosAesthetics.com if you do not
          agree to take all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement, and Disclaimer Notice and all agreements: "Client",
          "You", and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our", and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance, and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client’s
          needs in respect of provision of the Company’s stated services, in
          accordance with and subject to, prevailing law of Sweden.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          License
        </h2>
        <p>
          Unless otherwise stated, AutosAesthetics.com and/or its licensors own
          the intellectual property rights for all material on
          AutosAesthetics.com. All intellectual property rights are reserved.
          You may access this from AutosAesthetics.com for your own personal use
          subjected to restrictions set in these terms and conditions.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Limitation of Liability
        </h2>
        <p>
          In no event shall AutosAesthetics.com nor any of its officers,
          directors, and employees be liable to you for anything arising out of
          or in any way connected with your use of this Website, whether such
          liability is under contract, tort, or otherwise, and
          AutosAesthetics.com, including its officers, directors, and employees
          shall not be liable for any indirect, consequential, or special
          liability arising out of or in any way related to your use of this
          Website.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Indemnification
        </h2>
        <p>
          You hereby indemnify to the fullest extent AutosAesthetics.com from
          and against any and/or all liabilities, costs, demands, causes of
          action, damages, and expenses arising in any way related to your
          breach of any of the provisions of these Terms.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Return Guarantee
        </h2>
        <p>
          AutosAesthetics.com offers a 30-day return guarantee for all products
          purchased through the website. Please refer to our Returns Policy for
          more information.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Payment Terms
        </h2>
        <p>
          Users are required to pay for their products at the time of purchase.
          AutosAesthetics.com accepts various payment methods, including
          credit/debit cards and PayPal.
        </p>

        <h2 style={{ fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>
          Governing Law & Jurisdiction
        </h2>
        <p>
          These Terms will be governed by and interpreted in accordance with the
          laws of Sweden, and you submit to the non-exclusive jurisdiction of
          the Swedish courts for the resolution of any disputes.
        </p>

        <p>If you have any further questions, feel free to contact us.</p>
      </div>
    </div>
  );
};

export default TermsOfService;

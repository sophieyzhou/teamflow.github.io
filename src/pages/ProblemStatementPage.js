import './BackgroundPage.css';
//import KATH from '../background/KATH.jpg';

export default function ProblemStatementPage() {
  return (
    <div className="content">
      <div className="page-header">
        <h1>Problem Statement</h1>
        <div className="header-accent"></div>
      </div>
      <div className="content-section">
        <h2>IV INFUSION ERRORS ARE 
        PREVENTABLE</h2>
        <p> <strong>Current Status:</strong>{' '}
          Current Status: In low- and middle-income countries (LMICs), intravenous (IV) infusions commonly 
          rely on gravity drip systems, where fluid flow is manually adjusted using a roller clamp to constrain the flow of the IV line. 
          Gravity setups lack real-time monitoring, making them prone to 
          fluctuations caused by tubing wear, patient movement, or bag depletion. As a result, clinicians must visually 
          estimate  drip rates, often leading to inaccurate dosing, overinfusion, or backflow, which compromise patient safety.
        </p>
        <p> <strong>Available Technologies:</strong>{' '}
          Available Technologies: Electronic infusion pumps represent the highest standard of IV administration, monitoring and 
          regulating the flow of medication. While they offer precise control in high-resource settings, their high cost, 
          maintenance requirements, and power dependence limit their use in LMICs. Other alternatives, such as mechanical regulators 
          on the IV line, allow initial flow rate setting but do not remain consistent over time, are single-use, and provide no real-time feedback.
        </p>
        <p> <strong>Need:</strong>{' '}
          Need: Consequently, most facilities in LMICs lack affordable, reliable tools to monitor and maintain accurate IV flow rates. 
          There is a critical need for a low-cost, reusable monitoring technology to enhance dosing accuracy and improve patient 
          outcomes in resource-limited settings.
        </p>
      </div>
    </div>
  );
}


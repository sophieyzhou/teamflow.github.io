import './BackgroundPage.css';

export default function ProblemStatementPage() {
  return (
    <div className="content">
      <div className="page-header">
        <h1>Problem Statement</h1>
        <div className="header-accent"></div>
      </div>
      <div className="content-section">
        <h2>Public Health Context</h2>
        <p>
          We will write some stuff about the public health, socioeconomic barriers, etc that frame the context for our project. The content from this page should be drawn from needs assessments, academic literature, etc. 
          Consider 3 drop downs to separate pages about the need for our device from a health and economic standpoint and one subpage on KATH. 
          Debate renaming this "Context" or "Background"
          At the Komfo Anokye Teaching Hospial in Kumasi, Ghana, one major effect(?) of economic constraints 
          is limited access to IV infusion pumps. This means that the IV delivery process is highly manual, and requires 
          nurses to manually count drips to set infusion speeds for IVs that are then left unmonitored, despite freque
        </p>
      </div>
    </div>
  );
}


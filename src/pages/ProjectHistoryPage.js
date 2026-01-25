// import './BackgroundPage.css';

// export default function ProjectHistoryPage() {
//   return (
//     <div className="content">
//       <div className="page-header">
//         <h1>Project History</h1>
//         <div className="header-accent"></div>
//       </div>
//       <div className="content-section">
//         <p>
//           Content about the project's history and development timeline will go here.
//         </p>
//       </div>
//     </div>
//   );
// }

import './BackgroundPage.css';

export default function ProjectHistoryPage() {
  const events = [
    {
      year: '2018',
      title: 'Team Flow is founded',
      detail:
        'Team Flow is founded by four M-HEAL incubator members: Dipra Debnath, Jenna Livingstone, Nai’a North, and Noah Walker.',
      icon: '🚀',
    },
    {
      year: '2019',
      title: 'Partnership with KATH begins',
      detail:
        'Nai’a North joins a Global Health Design Initiative trip to Ghana, leading to our relationship with emergency medicine physicians and nurses at Komfo Anokye Teaching Hospital (KATH) in Kumasi, Ghana.',
      icon: '🤝',
    },
    {
      year: '2020',
      title: 'Lo-Fi prototyping phase',
      detail:
        'Team expands and starts Lo-Fi prototyping using cardboard and hardware to visualize solutions.',
      icon: '🧪',
    },
    {
      year: '2021',
      title: 'Subteams are created',
      detail:
        'New members are onboarded as the team transitions back to in-person work. Business, Monitoring, and Controlling subteams are created.',
      icon: '👥',
    },
    {
      year: '2023',
      title: 'Major monitoring breakthrough',
      detail:
        'The monitoring team made major progress, developing a visible-light Wheatstone bridge circuit capable of calculating drip rates using virtual instrument software.',
      icon: '💡',
    },
    {
      year: 'Spring 2024',
      title: 'Ghana trip advances prototyping',
      detail:
        'The team travels to Ghana and uses the KATH visit to advance prototyping and develop device design that meets community needs.',
      icon: '✈️',
    },
    {
      year: 'Fall 2025',
      title: 'Working PCB prototype',
      detail:
        'Team creates a working battery-powered prototype with a custom Printed Circuit Board, STM32 microcontroller, and 3D-printed housing.',
      icon: '🔧',
    },
    {
      year: 'December 2025',
      title: 'KATH testing & feedback',
      detail:
        'Team travels to KATH to test the device and gather feedback from nurses.',
      icon: '🩺',
    },
  ];

  return (
    <div className="content">
      <div className="page-header">
        <h1>Project History</h1>
        <div className="header-accent"></div>
      </div>

      <div className="timeline">
        {/* center line */}
        <div className="timeline-line" />

        {events.map((e, i) => {
          const side = i % 2 === 0 ? 'left' : 'right';
          return (
            <div className={`timeline-item ${side}`} key={`${e.year}-${i}`}>
              <div className="timeline-card">
                <div className="timeline-year">{e.year}</div>
                <div className="timeline-title">{e.title}</div>
                <div className="timeline-detail">{e.detail}</div>
              </div>

              <div className="timeline-node" aria-hidden="true">
                <span className="timeline-icon">{e.icon}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


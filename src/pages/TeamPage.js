import './TeamPage.css';
import TeamMembers from './team/teamMembers';
import Placements from './team/placements';
import AlumniCarousel from './team/alumniCarousel';

export default function TeamPage() {
  return (
    <div className="team-page">
      <TeamMembers />
      <Placements />
      <AlumniCarousel />
    </div>
  );
}



// import './TeamPage.css';
// import teamData from '../data/teamData.json';

// export default function TeamPage() {
//   return (
//     <div className="content">
//       <h1>Our Team</h1>
//       <p>
//         Placeholder with Ideas before Sophie gets it together and prettifies
//       </p>
//       <p>
//         Take heavy inspiration from the BOND team page
//       </p>
//       <p>
//         Ideally have banners with Leadership, and subteam pictures on the banners. Actually maybe not because then there will be awkward spaces. Idk
//       </p>
//       <p>
//         I like the straightforward cards and the sizing/spacing that BOND uses. 
//         One card per person with their position and name written under the card. 
//         Embed links to their linkedin when you click the name? or picture? Note: Force everyone to make linkedin
//         I kind of want the cards to flip over when you hover and have a 1-2 sentence intro like year name time on team and interests? Maybe. Idk. Look at pheonix's website too
//         OR have the cards fade gray and linkedin pop up like BOND has
//       </p>
//       <h1>Placement</h1>
//       <p>
//         Fuck yea imma brag and throw up as many logos as I possibly can here hehe. 
//       </p>
//       <p>
//         Do it animation style with things on a time loop fading in and out or sliding across. 
//       </p>
//       <p>
//         Everything goes: Wayne Med, BCG, Lilly, P&G, Boston Scientific, Stryker, Bauer or where Sam did the infusion pump shit, Goodnotes?, NIH, stalk other alum
//       </p>
//       <p>
//         Omg can we add sigma nu and BOND consulting please please 
//       </p>
//       <p>
//         Lowkey i think ironman worlds is also a legit add 
//       </p>
//       <p>
//         Nick we could throw up the greek flag? XD
//         Ok for the team page there will be two sections: at the top will be Our Team and the section under than is going to be Placements. Both of the section titels should be bold and underlined. The our team section should include 5 rows of 3 team member cards per row. Each card will have the team member's name in bold and under that their position in non bolded text. When you hover over each card I want it to transition by easing from top to bottom (.box { 
//   transition: all .3s ease-in-out;
// }

// .box:hover {
//   transform: translateY(-5px);
// }) to a dark blue card with sea salt white text over it that has a 2 sentence bio for the person. Clicking on any card or each person's name should send you to their linkedin page. Is there any way to store the data for each team member easily somewhere and import from that to populate the page? Like a .csv or sreadsheet where each row is a meebr and the columns are headshot path, name, position, bio, linkedin and make the code read the data into a member class object/custom data structure or even directly to the code? THen fro the placements section I just want the logos from the foler public/placements lilly, stryker, braun, bs, pg, gn, bcg, wayne, nih, bond, snu, greece, pike all .png. the logos should get slightly bigger.raised on hover and clicking should link to the company webpages. Then I want a dark blue horizontal band that stretched across the entire page with quotes from alumni. There should be 3 pages of the band that you transition between either arrows that appear on hover on the right and left side of the band and 3 dots with one shaded darker to show which page you are on. THe pages should also be set to automatically swipe across every 15s on a timer. 
//       </p>
//       <p>
//         Also Maybe a quote from Alex or like an alum like Namit about what team flow taught him and how that's helped him. 
//       </p>
//     </div>
//   );
// }
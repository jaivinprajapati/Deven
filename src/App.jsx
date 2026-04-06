import { useState, useEffect } from "react";

const ALL_JOBS = [
  { id: "aero-1", title: "Aerospace Engineering Degree Apprenticeship (Level 6)", company: "Airbus", location: "Filton, Bristol", type: "Apprenticeship", salary: "£21,674/year", category: "Aerospace", description: "4-year degree apprenticeship in aerospace engineering. Work on wings, fuel systems, and landing gear engineering. Earn a BEng while getting hands-on experience.", url: "https://www.airbus.com/en/careers/students-and-graduates/apprentices/apprenticeships-in-the-united-kingdom", deadline: "Rolling — closes when filled", startDate: "September 2026", highlight: true, requirements: "A-Levels in STEM subjects (Physics/Maths ideal). 5 GCSEs incl. Maths & English.", visaNote: "Must have UK residency for 3 years by start date." },
  { id: "aero-2", title: "Level 4/6 Engineering Apprenticeship", company: "Martin-Baker (Ejection Seats)", location: "Denham, Bucks (near London)", type: "Apprenticeship", salary: "Competitive", category: "Aerospace", description: "Work on ejection seat manufacturing and testing. Exposure to machining, assembly, CAD modelling, and environmental testing. L4 = HNC, L6 = BEng.", url: "https://martin-baker.com/careers/apprenticeships/", deadline: "Rolling", startDate: "September 2026", highlight: true, requirements: "5 GCSEs (9-5 in Maths, 9-4 in English & Science). For L6: UCAS tariff 112-128.", visaNote: "Security clearance may be required." },
  { id: "aero-3", title: "Engineering Apprenticeship (Mechanical/Aerospace)", company: "MBDA (Missile Systems)", location: "Stevenage, Herts", type: "Apprenticeship", salary: "£18,750 + £3k bonus", category: "Aerospace", description: "4-year apprenticeship in engineering, software, or manufacturing. Work towards Chartership with IMechE or RAeS. Hands-on mechanical and climatic testing.", url: "https://www.mbdacareers.co.uk/early-careers/apprenticeships", deadline: "Check website", startDate: "September 2026", highlight: true, requirements: "A-Levels in STEM subjects preferred.", visaNote: "UK Security Clearance required." },
  { id: "aero-4", title: "Aerospace Engineer Degree Apprenticeship", company: "Rolls-Royce", location: "Derby / Bristol", type: "Apprenticeship", salary: "~£21,776/year", category: "Aerospace", description: "Manufacturing, materials, electrical, and electronic degree apprenticeships. World-class aerospace firm with clear career progression.", url: "https://rollsroyce.wd3.myworkdayjobs.com/Apprentice", deadline: "Check careers page", startDate: "September 2026", highlight: true, requirements: "A-Levels in STEM. Strong Maths and Physics." },
  { id: "aero-5", title: "Aerospace Engineering Degree Apprenticeship", company: "University of Derby + Industry", location: "Derby", type: "Degree Apprenticeship", salary: "Paid by employer", category: "Aerospace", description: "BEng in Aerospace Engineering with companies like Rolls-Royce, Toyota, Bombardier.", url: "https://www.derby.ac.uk/aerospace-engineer-degree-apprenticeship/", deadline: "Varies by employer", startDate: "September 2026", requirements: "A-Levels in relevant STEM subjects." },
  { id: "aero-6", title: "Aircraft Engineering Apprenticeship", company: "TUI Group", location: "Various UK", type: "Apprenticeship", salary: "Competitive", category: "Aerospace", description: "Become a qualified aircraft engineer. Perfect for aviation/pilot career goal — builds deep knowledge of aircraft systems.", url: "https://careers.tuigroup.com/en/job/luton/2026-aircraft-engineering-apprenticeship-base-luton/2937/34771897408", deadline: "Check TUI careers", startDate: "2026", requirements: "A-Levels in STEM preferred." },

  { id: "mech-1", title: "Mechanical Engineering Degree Apprenticeship (Level 6)", company: "Thames Water (via Imperial)", location: "Reading (London accessible)", type: "Degree Apprenticeship", salary: "£23,500/year", category: "Engineering", description: "BEng in Engineering. Hands-on with Major Projects team. 36hr/week over 4 days + 1 training day. 4-year permanent contract.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000014644", deadline: "6 March 2026", startDate: "1 September 2026", highlight: true, requirements: "A-Levels incl. STEM. 5 GCSEs incl. Maths & English." },
  { id: "mech-2", title: "Mechanical Engineering Accelerated Apprenticeship (Level 6)", company: "Babcock International", location: "Various UK", type: "Degree Apprenticeship", salary: "£40,454/year", category: "Engineering", description: "Highest-paying engineering apprenticeship in the UK for 2026. Accelerated programme. Defence and engineering services.", url: "https://earlycareers.babcockinternational.com/apprenticeships/", deadline: "Check careers page", startDate: "2026", highlight: true, requirements: "Strong A-Level results in STEM." },
  { id: "mech-3", title: "Applied Professional Engineering Degree Apprenticeship", company: "Jaguar Land Rover", location: "Coventry / Solihull", type: "Degree Apprenticeship", salary: "£26,092/year", category: "Engineering", description: "4-year programme designing and developing vehicles. Hands-on automotive engineering with accredited degree.", url: "https://careers.jaguarlandrover.com/early-careers/apprentices/level-6-applied-professional-engineering-programme-degree-apprenticeship", deadline: "Register interest for 2026", startDate: "September 2026", highlight: true, requirements: "3 A-Levels Grade C+ (incl. STEM). GCSEs 5+ in Maths, English, STEM." },
  { id: "mech-4", title: "Civil Engineer Degree Apprenticeship (Level 6)", company: "Network Rail", location: "Various UK (incl. London)", type: "Degree Apprenticeship", salary: "£32,000 + £2k bonus", category: "Engineering", description: "Rail infrastructure engineering. High salary. Nationally significant projects.", url: "https://www.earlycareers.networkrail.co.uk/scheme/level-6-civil-engineering-apprenticeship/", deadline: "Check careers page", startDate: "2026", highlight: true, requirements: "A-Levels in STEM." },
  { id: "mech-5", title: "Process Engineering Apprenticeship (Level 3)", company: "British Sugar", location: "Various UK", type: "Apprenticeship", salary: "£23,877/year", category: "Engineering", description: "Process, mechanical, and electrical engineering. Good stepping stone into manufacturing.", url: "https://careers.britishsugar.co.uk/apprenticeships/schemes/process-engineering", deadline: "Check website", startDate: "2026", requirements: "GCSEs in Maths, English, Science." },
  { id: "mech-6", title: "Engineering Apprenticeship (Level 3)", company: "Nestlé", location: "Various UK", type: "Apprenticeship", salary: "£18,958/year", category: "Engineering", description: "Advanced engineering apprenticeship at one of the world's largest food companies.", url: "https://www.nestle.co.uk/en-gb/engineering-apprenticeship", deadline: "Check website", startDate: "2026", requirements: "GCSEs in Maths and English." },
  { id: "mech-7", title: "Engineering Degree Apprenticeship", company: "Siemens Energy", location: "Lincoln", type: "Degree Apprenticeship", salary: "£20,000/year", category: "Engineering", description: "Sustainable energy solutions and green engineering focus.", url: "https://jobs.siemens-energy.com/en_US/jobs/FolderDetail/Mechanical-Engineering-Degree-Apprentice/288944", deadline: "1 March 2026", startDate: "1 September 2026", requirements: "A-Levels in STEM." },
  { id: "mech-8", title: "Engineering Technician Apprenticeship (Level 3)", company: "Unilever", location: "Various UK", type: "Apprenticeship", salary: "£17,687/year", category: "Engineering", description: "Engineering at a global consumer goods company. Strong brand for CV.", url: "https://careers.unilever.com/en/uk-and-ireland-early-careers-apprenticeships", deadline: "Check website", startDate: "2026", requirements: "GCSEs in Maths, English, Science." },
  { id: "mech-9", title: "Building Services Engineering Apprenticeship (Level 4)", company: "Bloomberg", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Engineering", description: "36-month in EMEA Infrastructure. Engineering in Bloomberg's award-winning London HQ.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000012890", deadline: "Check Bloomberg careers", startDate: "September 2026", requirements: "No degree required." },
  { id: "mech-10", title: "2026 Degree Apprenticeship (Building Services)", company: "WSP", location: "London", type: "Degree Apprenticeship", salary: "Competitive", category: "Engineering", description: "Global engineering consultancy. Survey through design to site supervision. Professional fees paid.", url: "https://www.wsp.com/en-gb/careers/apprenticeships", deadline: "Check WSP careers", startDate: "2026", requirements: "A-Levels in relevant subjects." },
  { id: "mech-11", title: "Advanced Apprentice (Civil/Structural)", company: "Stantec UK", location: "Birmingham", type: "Apprenticeship", salary: "£24,500/year", category: "Engineering", description: "Level 3 at a major engineering consultancy. Pathway to degree-level.", url: "https://careers-uk-ireland.stantec.com/vacancies/7489/degree-apprentice-structural-engineering--buildings--birmingham-2026.html", deadline: "9 March 2026", startDate: "1 September 2026", requirements: "GCSEs in Maths & English." },

  { id: "fin-1", title: "Financial Services Apprenticeship (Level 6/7)", company: "J.P. Morgan", location: "London / Bournemouth / Edinburgh", type: "Degree Apprenticeship", salary: "Competitive (banking)", category: "Finance", description: "4-year across investment ops, technology, compliance, or finance. Honours degree from Exeter or Heriot-Watt. Physics counts as STEM.", url: "https://jpmc.fa.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1001/job/210658751", deadline: "Check JP Morgan careers", startDate: "September 2026", highlight: true, requirements: "3 B grades at A-Level. One STEM A-Level. GCSEs: English 5+, Maths 6+." },
  { id: "fin-2", title: "FICC & Equities / Engineering / Operations Degree Apprenticeship", company: "Goldman Sachs", location: "London", type: "Degree Apprenticeship", salary: "Top-tier banking", category: "Finance", description: "4-year with BSc from Queen Mary or Warwick. Three tracks: Trading, Tech, or Operations. Extremely prestigious.", url: "https://www.goldmansachs.com/careers/students/programs-and-internships/emea/degree-apprentices", deadline: "Applications opened Oct 2025", startDate: "September 2026", highlight: true, requirements: "Strong A-Level results." },
  { id: "fin-3", title: "Financial Markets Apprenticeship Programme", company: "Standard Chartered", location: "London", type: "Apprenticeship (Level 4)", salary: "Competitive + benefits", category: "Finance", description: "2-year in front-office Markets. Learn trading, risk management, data analysis. No finance experience needed.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000011305", deadline: "6 March 2026", startDate: "2026", highlight: true, requirements: "No degree required. Curiosity about markets, logical thinking." },
  { id: "fin-4", title: "Banking Apprenticeship (Various)", company: "Morgan Stanley", location: "London / Glasgow", type: "Apprenticeship (Level 4/6/7)", salary: "Competitive", category: "Finance", description: "Across Institutional Securities, Investment Management, HR. 80% work, 20% study. Can lead to permanent role.", url: "https://morganstanley.tal.net/vx/mobile-0/brand-2/candidate/so/pm/1/pl/2/opp/20065-2026-Morgan-Stanley-Glasgow-Apprenticeships/en-GB", deadline: "Check careers", startDate: "2026", highlight: true, requirements: "A-Levels preferred." },
  { id: "fin-5", title: "Degree Apprenticeships (Finance, Banking, Data)", company: "Barclays", location: "London / Various UK", type: "Degree Apprenticeship", salary: "£25,000/year", category: "Finance", description: "3-5 year programmes in corporate banking, data analytics, finance, audit, risk, UX design.", url: "https://search.jobs.barclays/apprenticeships", deadline: "Rolling — apply early", startDate: "September 2026", requirements: "A-Levels at BCC or equivalent." },
  { id: "fin-6", title: "Degree Apprenticeships (Data Science / Digital Tech)", company: "Bank of England", location: "London / Leeds", type: "Degree Apprenticeship", salary: "£24,250–£27,000", category: "Finance", description: "Work on Critical National Infrastructure at the UK's central bank. BSc with 20% study time.", url: "https://www.bankofengland.co.uk/careers/future-talent/apprenticeships", deadline: "Check BoE careers", startDate: "August 2026", highlight: true, requirements: "5 GCSEs 4+ incl. English & Maths.", visaNote: "Must have been UK resident for 3 years before start." },
  { id: "fin-7", title: "Degree Apprenticeships (Various)", company: "Lloyds Banking Group", location: "London / Various UK", type: "Degree Apprenticeship", salary: "£26,500+", category: "Finance", description: "Tech, data, finance, and business streams. Excellent training at one of UK's largest banks.", url: "https://www.lloydsbankinggrouptalent.com/our-opportunities/apprenticeships/", deadline: "Check website", startDate: "September 2026", requirements: "A-Levels. Requirements vary by stream." },
  { id: "fin-8", title: "HMRC Finance Foundation Scheme", company: "HMRC (Civil Service)", location: "London / Various UK", type: "Apprenticeship", salary: "Civil Service salary", category: "Finance", description: "Earn AAT qualification. Rotations through Financial Ops, Business Partnering, Risk, Strategic Finance.", url: "https://www.civil-service-careers.gov.uk/hmrc-finance-apprenticeships/", deadline: "Check Civil Service Jobs", startDate: "2026", requirements: "GCSEs in Maths & English. No finance degree needed." },
  { id: "fin-9", title: "Degree Apprenticeship (Various)", company: "Fidelity International", location: "Kingswood, Surrey (nr London)", type: "Degree Apprenticeship", salary: "Competitive", category: "Finance", description: "Investment management firm near London. Qualification while building financial services career.", url: "https://careers.fidelityinternational.com/early-careers-overview/apprentices/", deadline: "Check website", startDate: "2026", requirements: "Check Fidelity careers." },

  { id: "con-1", title: "BrightStart Apprenticeship — Audit / Consulting / Tax", company: "Deloitte", location: "London / Various UK", type: "School Leaver Programme", salary: "Competitive (Big 4)", category: "Consulting", description: "Work full-time while earning professional qualifications. Streams in Audit, Consulting, Tax, Risk Advisory. No degree needed.", url: "https://www.deloitte.com/uk/en/careers/early-careers/early-careers-programmes.html", deadline: "Rolling — apply early", startDate: "September 2026", highlight: true, requirements: "104+ UCAS points from top 3 A-Levels." },
  { id: "con-2", title: "Consulting Graduate Programmes (Sep 2026)", company: "EY (Ernst & Young)", location: "London / Various UK", type: "Graduate Programme", salary: "£30,000–£40,000", category: "Consulting", description: "Business Consulting, Technology Consulting, Risk, Actuarial. Applications open, close when filled.", url: "https://www.ey.com/en_uk/careers/students/graduates/consulting-graduate-programme-options", deadline: "28 February 2026 (some)", startDate: "September 2026", highlight: true, requirements: "Degree for grad roles. School leaver programmes also available." },
  { id: "con-3", title: "School Leaver / Apprenticeship Programme", company: "KPMG", location: "London / Various UK", type: "Apprenticeship", salary: "Competitive (Big 4)", category: "Consulting", description: "Audit, Tax, Advisory, Technology streams. Fully funded professional qualifications.", url: "https://www.kpmgcareers.co.uk/apprentice", deadline: "April 2026", startDate: "September 2026", requirements: "A-Levels." },
  { id: "con-4", title: "School Leaver Programme (Audit / Tax / Consulting)", company: "PwC", location: "London / Various UK", type: "School Leaver Programme", salary: "Competitive (Big 4)", category: "Consulting", description: "Join PwC from school. Audit, Tax, Consulting, Deals, Technology. Flying Start degree programme also available.", url: "https://www.pwc.co.uk/careers/early-careers/our-programmes/join-us-from-school.html", deadline: "June 2026", startDate: "September 2026", requirements: "A-Levels required." },
  { id: "con-5", title: "Advisory School Leaver Apprenticeship", company: "Grant Thornton", location: "London / Various UK", type: "Apprenticeship", salary: "Competitive", category: "Consulting", description: "Top-10 firm. Less competitive than Big 4 but excellent training and prospects.", url: "https://www.grantthornton.co.uk/careers/early-careers/our-programmes/apprenticeships/", deadline: "Check website", startDate: "September 2026", requirements: "A-Levels." },
  { id: "con-6", title: "School Leaver Apprenticeship (Audit / Tax)", company: "BDO", location: "London / Various UK", type: "Apprenticeship", salary: "Competitive", category: "Consulting", description: "Top-5 accounting firm. Funded AAT/ACA qualifications.", url: "https://careers.bdo.co.uk/school-leavers", deadline: "Check website", startDate: "September 2026", requirements: "A-Levels at BBC or equivalent." },
  { id: "con-7", title: "Accounting & Outsourcing School Leaver", company: "RSM UK", location: "London / Various UK", type: "Apprenticeship", salary: "Competitive", category: "Consulting", description: "Rotation-based programme across accounting services at a top-7 firm.", url: "https://careers.rsmuk.com/uk/en/school-leavers", deadline: "Check website", startDate: "1 September 2026", requirements: "A-Levels." },
  { id: "con-8", title: "Solicitor Apprenticeship Programme", company: "Linklaters (Magic Circle)", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Consulting", description: "Commercial law career without university. World-class training at a Magic Circle firm.", url: "https://linklaters.apply.cappats.com/Jobs/View/269", deadline: "Check careers", startDate: "2026", requirements: "School leavers without a degree." },

  { id: "data-1", title: "Data Analyst Apprenticeship (Level 4)", company: "Bloomberg", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Data & Tech", description: "18-month in Financial Solutions Knowledge Group. World-class London office.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000020569", deadline: "Check Bloomberg careers", startDate: "September 2026", highlight: true, requirements: "No degree required. Analytical mindset." },
  { id: "data-2", title: "Compliance & Risk Officer Apprenticeship (Level 3)", company: "Bloomberg", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Data & Tech", description: "Legal & Compliance team. Learn regulatory compliance at a global financial data company.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/1000217629", deadline: "Check Bloomberg careers", startDate: "September 2026", requirements: "No degree required." },

  { id: "mkt-1", title: "Digital Marketing Apprenticeship (Level 3)", company: "Sky", location: "London (Osterley)", type: "Apprenticeship", salary: "Competitive", category: "Marketing", description: "2-year rotating across TV, Broadband, Digital teams. Real campaigns with creative agencies. Social, email, video, radio & TV.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000001275", deadline: "Check Sky careers", startDate: "7 September 2026", highlight: true, requirements: "No degree required.", visaNote: "Right to work needed for full 2 years." },
  { id: "mkt-2", title: "Digital Marketing Degree Apprenticeship (Level 6)", company: "Zenopa / London South Bank Uni", location: "London area", type: "Degree Apprenticeship", salary: "Competitive + 25 days hol", category: "Marketing", description: "BSc in Digital Marketing (80% work, 20% study). Social media, events, content creation.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC1000343595", deadline: "Check gov.uk", startDate: "2026", requirements: "5 GCSEs incl. Maths & English (4+)." },
  { id: "mkt-3", title: "Marketing Apprenticeship (Level 3)", company: "City of London Corporation", location: "London (City)", type: "Apprenticeship", salary: "£27,550/year", category: "Marketing", description: "Public sector marketing. Excellent salary for an apprenticeship.", url: "https://careers.cityoflondon.gov.uk/entry-level-talent/apprentices/", deadline: "25 February 2026", startDate: "20 April 2026", highlight: true, requirements: "Check UCAS listing." },

  { id: "ops-1", title: "Supply Chain & Procurement Degree Apprenticeship", company: "Jaguar Land Rover", location: "Coventry / Solihull", type: "Degree Apprenticeship", salary: "~£26,000/year", category: "Operations", description: "BSc from Aston University. Rotate through Procurement, Logistics, Supply Chain.", url: "https://careers.jaguarlandrover.com/early-careers/apprentices/level-6-supply-chain-degree-apprenticeship", deadline: "Register interest", startDate: "September 2026", highlight: true, requirements: "3 A-Levels C+ (incl. STEM). GCSEs 5+." },
  { id: "ops-2", title: "Supply Chain Degree Apprenticeship", company: "Molson Coors", location: "Burton-on-Trent", type: "Degree Apprenticeship", salary: "Competitive + 34 days hol", category: "Operations", description: "BSc from Aston. Logistics, planning, customer collaboration, inventory.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000000729", deadline: "Check gov.uk", startDate: "2026", requirements: "Over 18." },
  { id: "ops-3", title: "Supply Chain Apprenticeship (Level 3)", company: "BAE Systems", location: "Various UK", type: "Apprenticeship", salary: "Competitive", category: "Operations", description: "Manufacturing, Maintenance, or Procurement in defence. Logistics, capacity planning, process improvement.", url: "https://www.baesystems.com/en/careers/careers-in-the-uk/apprenticeships", deadline: "Check gov.uk", startDate: "2026", requirements: "GCSEs in Maths & English.", visaNote: "Security clearance required." },
  { id: "ops-4", title: "Supply Chain Apprenticeship", company: "Nestlé", location: "York / Various UK", type: "Apprenticeship", salary: "Competitive", category: "Operations", description: "No previous experience needed. Year-on-year salary increases.", url: "https://www.nestle.co.uk/en-gb/jobs/nestle-academy/apprenticeships/supply-chain-apprenticeship", deadline: "Check website", startDate: "September 2026", requirements: "UK resident 3 years by Sept 2026.", visaNote: "3-year UK residency required." },
  { id: "ops-5", title: "Supply Chain Management Degree Apprenticeship", company: "Airbus", location: "Filton, Bristol", type: "Degree Apprenticeship", salary: "Competitive", category: "Operations", description: "Procurement and supply chain at Airbus alongside engineering apprenticeships.", url: "https://ag.wd3.myworkdayjobs.com/en-US/Airbus/job/Procurement-and-Supply-Chain-Degree-Apprenticeship_JR10278762", deadline: "Rolling", startDate: "September 2026", requirements: "A-Levels." },
  { id: "ops-6", title: "Procurement Apprenticeship", company: "Laing O'Rourke", location: "Dartford, Kent (nr London)", type: "Apprenticeship", salary: "Competitive", category: "Operations", description: "Major UK construction company. Procurement and supply chain in construction.", url: "https://www.findapprenticeship.service.gov.uk/apprenticeship/VAC2000003855", deadline: "Check website", startDate: "2026", requirements: "A-Levels preferred." },

  { id: "biz-1", title: "Project Management Apprenticeship (Level 4)", company: "Bloomberg", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Business", description: "18-22 months learning project management at a global company.", url: "https://bloomberg.avature.net/careers/JobDetail/2026-Bloomberg-Apprenticeship-Project-Management-Level-4-Inclusion-Support/15700", deadline: "Check Bloomberg careers", startDate: "September 2026", requirements: "No degree required." },
  { id: "biz-2", title: "Business Administration Apprenticeship (Level 3)", company: "Bloomberg", location: "London", type: "Apprenticeship", salary: "Competitive", category: "Business", description: "15-month in Payroll or Contracts coordination.", url: "https://bloomberg.avature.net/careers/JobDetail/2026-Bloomberg-Apprenticeship-Business-Administration-Level-3-Contracts-Coordinator/14905", deadline: "Check Bloomberg careers", startDate: "September 2026", requirements: "No degree required." },
];

const P = { bg: "#070b14", s: "rgba(255,255,255,0.025)", sh: "rgba(255,255,255,0.045)", b: "rgba(255,255,255,0.06)", ba: "rgba(99,179,237,0.35)", t: "#e8ecf4", tm: "#7a8ba8", td: "#4a5568", a: "#63b3ed", ag: "rgba(99,179,237,0.12)", g: "#68d391", gg: "rgba(104,211,145,0.12)", am: "#f6ad55", amg: "rgba(246,173,85,0.1)", r: "#fc8181" };

function useLocalStorage(key, initial) {
  const [val, setVal] = useState(() => {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : initial; } catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }, [key, val]);
  return [val, setVal];
}

function JobCard({ job, saved, onSave, note, onNote, idx }) {
  const [exp, setExp] = useState(false);
  const [editing, setEditing] = useState(false);
  const [ln, setLn] = useState(note || "");
  useEffect(() => { setLn(note || ""); }, [note]);
  return (
    <div style={{ background: P.s, border: `1px solid ${job.highlight ? "rgba(99,179,237,0.15)" : P.b}`, borderRadius: "14px", padding: "18px 20px", transition: "all 0.2s", animation: `fi 0.3s ease ${idx * 0.02}s both`, borderLeft: job.highlight ? "3px solid rgba(99,179,237,0.4)" : undefined }}
      onMouseEnter={e => e.currentTarget.style.background = P.sh}
      onMouseLeave={e => e.currentTarget.style.background = P.s}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: "12px" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: "6px", marginBottom: "3px", flexWrap: "wrap" }}>
            {job.highlight && <span style={{ fontSize: "8px", background: P.ag, color: P.a, padding: "2px 8px", borderRadius: "4px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>TOP PICK</span>}
            {job.deadline && (job.deadline.includes("March 2026") || job.deadline.includes("February 2026")) && <span style={{ fontSize: "8px", background: "rgba(252,129,129,0.12)", color: P.r, padding: "2px 8px", borderRadius: "4px", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>CLOSING SOON</span>}
            <span style={{ fontSize: "9px", background: "rgba(255,255,255,0.04)", color: P.tm, padding: "2px 8px", borderRadius: "4px", fontWeight: 600 }}>{job.category}</span>
          </div>
          <h3 style={{ color: P.t, fontSize: "14.5px", fontWeight: 650, margin: "3px 0 4px", lineHeight: 1.35, fontFamily: "'Sora', sans-serif" }}>{job.title}</h3>
          <p style={{ color: P.tm, fontSize: "13px", margin: "0 0 8px", fontWeight: 550 }}>{job.company} · <span style={{ color: P.td, fontWeight: 400 }}>{job.location}</span></p>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "8px" }}>
            <span style={{ fontSize: "11px", color: P.g, background: P.gg, padding: "2px 10px", borderRadius: "99px", border: "1px solid rgba(104,211,145,0.15)" }}>{job.type}</span>
            {job.salary && <span style={{ fontSize: "11px", color: P.am, background: P.amg, padding: "2px 10px", borderRadius: "99px", border: "1px solid rgba(246,173,85,0.15)" }}>{job.salary}</span>}
          </div>
        </div>
        <button onClick={() => onSave(job.id)} style={{ background: saved ? P.amg : "rgba(255,255,255,0.03)", border: `1px solid ${saved ? "rgba(246,173,85,0.3)" : P.b}`, borderRadius: "10px", width: "36px", height: "36px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", flexShrink: 0, color: saved ? P.am : P.td, transition: "all 0.15s" }}>{saved ? "★" : "☆"}</button>
      </div>

      <p style={{ color: "#6b7f99", fontSize: "12px", lineHeight: 1.65, margin: "0 0 6px", display: exp ? "block" : "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{job.description}</p>

      {exp && <div style={{ fontSize: "11.5px", color: P.tm, lineHeight: 1.7, margin: "6px 0" }}>
        {job.requirements && <p style={{ margin: "4px 0" }}><strong style={{ color: "#8fa4be" }}>Requirements:</strong> {job.requirements}</p>}
        {job.deadline && <p style={{ margin: "3px 0" }}><strong style={{ color: "#8fa4be" }}>Deadline:</strong> {job.deadline}</p>}
        {job.startDate && <p style={{ margin: "3px 0" }}><strong style={{ color: "#8fa4be" }}>Start:</strong> {job.startDate}</p>}
        {job.visaNote && <p style={{ margin: "6px 0", color: P.am, background: P.amg, padding: "5px 10px", borderRadius: "6px", fontSize: "11px" }}>⚠ {job.visaNote}</p>}
      </div>}

      {editing && <div style={{ margin: "8px 0", display: "flex", gap: "6px" }}>
        <input value={ln} onChange={e => setLn(e.target.value)} placeholder="e.g. 'Applied 15 Feb', 'Interview booked'"
          style={{ flex: 1, padding: "7px 12px", borderRadius: "8px", background: "rgba(255,255,255,0.04)", border: `1px solid ${P.b}`, color: P.t, fontSize: "11.5px", fontFamily: "inherit" }}
          onKeyDown={e => { if (e.key === "Enter") { onNote(job.id, ln); setEditing(false); } }} />
        <button onClick={() => { onNote(job.id, ln); setEditing(false); }} style={{ background: P.ag, border: `1px solid ${P.ba}`, color: P.a, borderRadius: "8px", padding: "5px 12px", fontSize: "11px", cursor: "pointer", fontFamily: "inherit", fontWeight: 600 }}>Save</button>
      </div>}
      {!editing && note && <p style={{ fontSize: "11px", color: P.g, margin: "4px 0 6px", fontStyle: "italic" }}>📝 {note}</p>}

      <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "4px" }}>
        <button onClick={() => setExp(!exp)} style={{ background: "none", border: "none", color: P.a, fontSize: "11px", cursor: "pointer", fontFamily: "inherit", fontWeight: 550, padding: 0 }}>{exp ? "▲ Less" : "▼ More"}</button>
        <button onClick={() => setEditing(!editing)} style={{ background: "none", border: "none", color: P.tm, fontSize: "11px", cursor: "pointer", fontFamily: "inherit", padding: 0 }}>{editing ? "Cancel" : "📝 Note"}</button>
        <div style={{ flex: 1 }} />
        {job.url && <a href={job.url} target="_blank" rel="noopener noreferrer" style={{ color: "#070b14", background: `linear-gradient(135deg, ${P.a}, #4299e1)`, padding: "5px 14px", borderRadius: "7px", fontSize: "11px", fontWeight: 700, textDecoration: "none", fontFamily: "'Sora', sans-serif" }}>Apply →</a>}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [savedIds, setSavedIds] = useLocalStorage("deven-saved", []);
  const [notes, setNotes] = useLocalStorage("deven-notes", {});
  const [topOnly, setTopOnly] = useState(false);
  const [sortBy, setSortBy] = useState("relevance");

  const savedSet = new Set(savedIds);
  const toggleSave = (id) => setSavedIds(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const setNote = (id, note) => setNotes(prev => { const n = { ...prev }; if (note) n[id] = note; else delete n[id]; return n; });

  let list = tab === "saved" ? ALL_JOBS.filter(j => savedSet.has(j.id)) : ALL_JOBS;
  if (topOnly) list = list.filter(j => j.highlight);
  if (search) { const q = search.toLowerCase(); list = list.filter(j => (j.title + j.company + j.location + j.description + j.category + j.type).toLowerCase().includes(q)); }
  if (sortBy === "salary") list = [...list].sort((a, b) => { const x = s => { const m = (s || "").match(/£([\d,]+)/); return m ? parseInt(m[1].replace(",", "")) : 0; }; return x(b.salary) - x(a.salary); });
  else if (sortBy === "company") list = [...list].sort((a, b) => a.company.localeCompare(b.company));
  else list = [...list].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  const closing = ALL_JOBS.filter(j => j.deadline && (j.deadline.includes("February 2026") || j.deadline.includes("March 2026")));

  return (
    <div style={{ position: "relative", minHeight: "100vh", fontFamily: "'DM Sans', -apple-system, sans-serif", color: P.t }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: ${P.bg}; margin: 0; }
        @keyframes fi { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        input:focus, select:focus { outline: none; border-color: ${P.ba} !important; }
        ::-webkit-scrollbar { width: 5px; } ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 3px; }
        ::placeholder { color: ${P.td}; }
      `}</style>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, background: `linear-gradient(170deg, ${P.bg}, #0c1220 50%, #0e1525)` }}>
        <div style={{ position: "absolute", top: "-25%", right: "-15%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(99,179,237,0.04), transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "820px", margin: "0 auto", padding: "28px 18px 60px" }}>
        <header style={{ marginBottom: "22px", animation: "fi 0.4s ease" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "38px", height: "38px", borderRadius: "10px", background: `linear-gradient(135deg, ${P.a}, ${P.g})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: 800, color: "#070b14", fontFamily: "'Sora'" }}>D</div>
            <div>
              <h1 style={{ fontSize: "20px", fontWeight: 750, fontFamily: "'Sora'", letterSpacing: "-0.02em" }}>Deven's Job Board</h1>
              <p style={{ color: P.td, fontSize: "11px", marginTop: "1px" }}>{ALL_JOBS.length} opportunities · UK · Updated Feb 2026</p>
            </div>
          </div>
        </header>

        {closing.length > 0 && <div style={{ background: "rgba(252,129,129,0.05)", border: "1px solid rgba(252,129,129,0.1)", borderRadius: "11px", padding: "12px 16px", marginBottom: "18px", animation: "fi 0.3s ease 0.1s both" }}>
          <p style={{ color: P.r, fontSize: "12px", fontWeight: 650, marginBottom: "5px" }}>🔔 Closing Soon</p>
          {closing.map(j => <p key={j.id} style={{ color: "#8a99ae", fontSize: "11px", marginBottom: "2px" }}><span style={{ color: P.t, fontWeight: 550 }}>{j.company}</span> — {j.title.slice(0, 50)}… <span style={{ color: P.r }}>({j.deadline})</span></p>)}
        </div>}

        <div style={{ display: "flex", gap: "3px", marginBottom: "14px", background: "rgba(255,255,255,0.02)", borderRadius: "10px", padding: "3px", border: `1px solid ${P.b}` }}>
          {[{ id: "all", l: `All (${ALL_JOBS.length})` }, { id: "saved", l: `Saved (${savedIds.length})` }].map(t => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, padding: "8px", borderRadius: "7px", border: "none", background: tab === t.id ? P.ag : "transparent", color: tab === t.id ? P.a : P.tm, fontSize: "12px", fontWeight: 650, cursor: "pointer", fontFamily: "'DM Sans'", transition: "all 0.15s" }}>{t.l}</button>
          ))}
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search jobs, companies, locations, types…"
            style={{ flex: 1, padding: "10px 14px", borderRadius: "9px", background: "rgba(255,255,255,0.03)", border: `1px solid ${P.b}`, color: P.t, fontSize: "12.5px", fontFamily: "inherit" }} />
          <button onClick={() => setTopOnly(!topOnly)} style={{ background: topOnly ? P.ag : "rgba(255,255,255,0.03)", border: `1px solid ${topOnly ? P.ba : P.b}`, color: topOnly ? P.a : P.tm, padding: "10px 12px", borderRadius: "9px", fontSize: "12px", cursor: "pointer", fontFamily: "inherit", fontWeight: 600, whiteSpace: "nowrap" }}>⭐ Top</button>
          <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${P.b}`, color: P.tm, fontSize: "11.5px", padding: "10px 8px", borderRadius: "9px", fontFamily: "inherit", cursor: "pointer" }}>
            <option value="relevance" style={{ background: "#1a2332" }}>Relevance</option>
            <option value="salary" style={{ background: "#1a2332" }}>Salary ↓</option>
            <option value="company" style={{ background: "#1a2332" }}>A → Z</option>
          </select>
        </div>

        <p style={{ color: P.td, fontSize: "11px", marginBottom: "10px" }}>{list.length} jobs{search && ` matching "${search}"`}{topOnly && " · top picks"}</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {list.map((j, i) => <JobCard key={j.id} job={j} idx={i} saved={savedSet.has(j.id)} onSave={toggleSave} note={notes[j.id]} onNote={setNote} />)}
        </div>

        {list.length === 0 && <div style={{ textAlign: "center", padding: "48px 20px", color: P.td }}>
          <p style={{ fontSize: "32px", marginBottom: "8px", opacity: 0.4 }}>{tab === "saved" ? "★" : "🔍"}</p>
          <p style={{ fontSize: "13px" }}>{tab === "saved" ? "No saved jobs yet — star jobs to save them." : "No matches. Try a different search."}</p>
        </div>}

        <div style={{ marginTop: "32px", background: P.s, border: `1px solid ${P.b}`, borderRadius: "12px", padding: "16px 18px" }}>
          <p style={{ color: P.tm, fontSize: "12px", fontWeight: 650, marginBottom: "10px" }}>🔗 Useful Links</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
            {[["GOV.UK Apprenticeships", "https://www.findapprenticeship.service.gov.uk/"], ["UCAS", "https://www.ucas.com/explore/search/apprenticeships"], ["Prospects", "https://www.prospects.ac.uk/"], ["Bright Network", "https://www.brightnetwork.co.uk/"], ["TargetJobs", "https://targetjobs.co.uk/"], ["RateMyApprenticeship", "https://www.ratemyapprenticeship.co.uk/"]].map(([n, u]) =>
              <a key={n} href={u} target="_blank" rel="noopener noreferrer" style={{ color: P.a, fontSize: "11px", textDecoration: "none", background: P.ag, padding: "4px 10px", borderRadius: "6px", border: `1px solid rgba(99,179,237,0.1)` }}>{n} ↗</a>
            )}
          </div>
        </div>

        <div style={{ marginTop: "12px", background: P.amg, border: "1px solid rgba(246,173,85,0.12)", borderRadius: "10px", padding: "12px 16px" }}>
          <p style={{ color: P.am, fontSize: "11.5px", fontWeight: 600 }}>⚠ Many apprenticeships require 3 years UK residency. Defence roles (BAE, MBDA) need security clearance. Check each listing's eligibility. Once ILR approved, most restrictions lift.</p>
        </div>

        <footer style={{ marginTop: "28px", textAlign: "center", color: P.td, fontSize: "10.5px" }}>Built for Deven · Feb 2026</footer>
      </div>
    </div>
  );
}

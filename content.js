/* =====================================================================
   YOUR PORTFOLIO CONTENT
   This is the only file you need to edit.
   Change the text between the quotes "like this", save, and refresh.
   Every style (theme) reads from this file, so you only fill it in once.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- STYLE ----------
     Pick your look: "terminal", "clean", or "story".
     showThemePicker: true shows the style switcher in the corner.
     Set it to false once you've picked your favorite.            */
  theme: "clean",
  showThemePicker: true,

  /* ---------- ABOUT YOU ---------- */
  name: "Abraham Vargas",
  initials: "AV",                       // shown if you don't add a photo
  photo: "",                            // optional: "images/headshot.jpg"
  headline: "Civil engineering student learning structural design through concrete canoe, steel bridge, and seismic teams.",
  tagline: "I like figuring out how things are built, then building them.",   // used by the Story style
  school: "CE at UT Austin, class of 2030",
  location: "Austin, TX",
  status: "",                           // example: "Looking for Summer 2027 internships". Leave "" to hide

  about: "I'm a first-generation civil engineering student at UT Austin. I spent a year working on job sites and translating between crews and clients for my family's masonry and remodeling business, and now I'm learning the design side through ASCE and the Seismic Design Team.",

  /* ---------- CONTACT ---------- */
  email: "abraham.var30@gmail.com",
  resume: "resume.pdf",                 // upload your resume with this exact name, or "" to hide
  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/ut-abraham" },
  ],

  /* ---------- EXPERIENCE ----------
     Newest first. Copy a { ... }, block to add another.
     Jobs, internships, research, org leadership, and your own
     business all count.                                           */
  experience: [
    {
      role: "Member, Concrete Canoe and Steel Bridge",
      org: "ASCE UT Austin",
      place: "Austin, TX",
      dates: "2026 - now",
      summary: "Ran a sample concrete mix test without a mix formula and am working on a new canoe hull design. On Steel Bridge, I've done practice designs to learn how the design process works.",
      tags: ["Excel", "Mix testing"],
    },
    {
      role: "Member",
      org: "Seismic Design Team, UT Austin",
      place: "Austin, TX",
      dates: "2026 - now",
      summary: "Attend workshops on earthquake engineering principles and introductory structural analysis.",
      tags: ["Earthquake engineering", "Structural analysis"],
    },
    {
      role: "Member",
      org: "SHPE UT Austin",
      place: "Austin, TX",
      dates: "2026 - now",
      summary: "Meet Hispanic engineering students and professionals for mentorship and community.",
      tags: ["Networking", "Mentorship"],
    },
    {
      role: "Operations & Communications Assistant",
      org: "Si Se Puede Remodeling & Construction",
      place: "",
      dates: "Jun 2025 - Jun 2026",
      summary: "Handled English and Spanish communication and paperwork between project leads, trade contractors, and clients. Also helped on masonry and remodeling job sites with prep, cleanup, and team coordination.",
      tags: ["Bilingual", "Masonry", "Subcontracting"],
    },
    {
      role: "Volunteer",
      org: "Junior Achievement",
      place: "",
      dates: "2024 - 2026",
      summary: "Taught business basics and financial literacy to elementary students in English and Spanish.",
      tags: ["Teaching", "Bilingual"],
    },
  ],

  /* ---------- PROJECTS ----------
     2 to 4 projects works best. Class projects count!
     "result" is one line about what happened or what you learned.
     "url" can link to a demo, GitHub repo, or photos ("" for none). */
  projects: [
    {
      name: "Concrete Canoe hull redesign",
      when: "ASCE · 2026",
      stack: ["Excel", "SolidWorks"],
      summary: "A new hull design for UT's Concrete Canoe team. I started from the side view in the team's Excel sheet, which took a while to understand, and now I'm changing the design myself.",
      result: "Learned the equations behind the sheet, next step is moving the design into SolidWorks",
      url: "",
    },
    {
      name: "Steel Bridge practice designs",
      when: "ASCE · 2026",
      stack: ["STAAD.Pro"],
      summary: "Practice bridge designs done with no prior knowledge, just to get used to how the team thinks through a design.",
      result: "Learning STAAD.Pro next to analyze real designs",
      url: "",
    },
  ],

  /* ---------- SKILLS ----------
     Group them however makes sense for your major.               */
  skills: [
    { group: "Design software", items: ["Rhino", "Bluebeam"] },
    { group: "Business tools",  items: ["Microsoft Office Suite", "Google Workspace"] },
    { group: "Languages",       items: ["English (fluent)", "Spanish (native)"] },
  ],

  /* ---------- AWARDS (optional, use [] for none) ---------- */
  awards: ["National Hispanic Recognition Award", "National First-Generation Recognition Award", "AP Scholar with Distinction"],
};
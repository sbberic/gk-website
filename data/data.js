export const menus = [
  {
    label: "Global K12 Immersion",
    children: [
      {
        label: "United States",
        href: "/tour/us",
      },
      {
        label: "United Kingdom",
        href: "/tour/uk-immersion",
      },
      {
        label: "New Zealand",
        href: "/tour/nz",
      },
      {
        label: "Singapore",
        href: "/tour/sg",
      },
    ],
  },
  {
    label: "College Prep Program",
    children: [
      {
        label: "Cambridge University",
        href: "/tour/cambridge",
      },
      {
        label: "Harvard University",
        href: "/tour/harvard",
      },
      {
        label: "West Point Academy",
        href: "/tour/west-point",
      },
    ],
  },
  {
    label: "Experiential Camps",
    children: [
      {
        label: "Chiang Mai",
        href: "/tour/csx",
      },
      {
        label: "United Kingdom",
        href: "/tour/uk-camp",
      },
      {
        label: "Malaysia",
        href: "/tour/mys",
      },
      {
        label: "Dunhuang",
        href: "/tour/dh",
      },
    ],
  },
  {
    label: "Executive Tours",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
];

export const programs = [
  {
    img: "/nz.png",
    title: "New Zealand",
    description: "Explore New Zealand with Kiwi study buddies",
    href: "/tour/nz",
  },
  {
    img: "/bgsa.jpg",
    title: "United Kingdom",
    description:
      "Outdoor experience with Bear Grylls Survival Academy in the UK",
    href: "/tour/uk-camp",
  },
  {
    img: "/dh.png",
    title: "Dunhuang",
    description:
      "Explore the crossroads where great ancient cultures met in Dunhuang",
    href: "/tour/dh",
  },
  {
    img: "/wp.jpg",
    title: "West Point",
    description: "Enhancing global leadership on the grounds of West Point",
    href: "/tour/west-point",
  },
  {
    img: "/cmx.jpg",
    title: "Chiang Mai",
    description:
      "Explore Chiang Mai while strengthening the parent-child relationship",
    href: "/tour/csx",
  },
  {
    img: "/cambridge.png",
    title: "Cambridge",
    description: "Customized Executive Training at Cambraidge Univeristy",
    href: "/tour/cambridge",
  },
];

export const mindset = [
  {
    img: "/environment.jpg",
    title: "Environment",
    description: "Combining classroom and experiential learning",
  },
  {
    img: "/classmates.jpg",
    title: "Classmates",
    description: "Meet people from diverse backgrounds and cultures",
  },
  {
    img: "/goal.jpg",
    title: "Goal",
    description:
      "Curriculum that emphasizes growth mindset, problem solving and impact",
  },
  {
    img: "/experience.jpg",
    title: "Experience",
    description:
      "Immerse in real world activities, discussions and reflections",
  },
];

export const feedbacks = [
  {
    author: "Mr Shi",
    authorDescription: "International High School Principal in Beijing",
    content:
      "Our school organize study tours programs every summer and winter. The UK immersion program run by GK(Great Kids Education) in last winter has been the best in my eye. GK has been very dedicated, dependable, and professional during the whole journey. The daily group reflections they faciliated were definetely the highlight of the program. We could see they embrace an educational spirit that makes them different from other suppliers. We would love to take GK as my core partner for furture programs.",
  },
  {
    author: "Lily",
    authorDescription: "15 year-old Student, college prep program attendee",
    content:
      "I enjoyed the Cambridge University program a lot. We were given opportunities to explore by ourselves while being given inspiring guidance. Both in the entertaining activities and in the academic learning, we were naturally engaged. Mostly I really appreciate our facilitator Vivi who cared for us in a sincere way. She listened, encouraged, and never judged. The suggestions she had given were very helpful and valuable to me.",
  },
  {
    author: "Mrs. Wang",
    authorDescription: "Mom, parenting program participant",
    content:
      "My kid, husband and I had a great time with 10 other families in ChiangMai. The program is well organized with cultural tours, experiential workshops, and parenting reflection sessions. Not only we got to know Chiangmai , but also we learned a lot about fostering a good relationship with children. We have highly recommended the program to my other friends.      ",
  },
];

export const tourPaths = [
  {
    params: {
      id: "us",
    },
  },
  {
    params: {
      id: "uk-immersion",
    },
  },
  {
    params: {
      id: "nz",
    },
  },
  {
    params: {
      id: "cambridge",
    },
  },
  {
    params: {
      id: "harvard",
    },
  },
  {
    params: {
      id: "west-point",
    },
  },
  {
    params: {
      id: "csx",
    },
  },
  {
    params: {
      id: "uk-camp",
    },
  },
  {
    params: {
      id: "mys",
    },
  },
  {
    params: {
      id: "dh",
    },
  },
];

export const tourProps = [
  {
    props: {
      id: "us",
    },
  },
  {
    props: {
      id: "uk-immersion",
      title: `United Kingdom`,
      subtitle: "K-12 Immersion Program",
      bannerImg: "/tour/uk-immersion-banner.jpg",
      highlights: [
        "Experience study abroad through one-week immersive program attending a local British High School",
        "Get first-hand insights about university application through campus visits and meeting with admissions officers and current students",
        "Gain a better understanding of UK culture by exploring London through tours and experiential activities",
        "Discover more about yourself through 1 on 1 discussion sessions with our guides",
        "For high school students, aged 14-18",
        "Schedule can be customized according to group needs",
      ],
      sampleSchedule: [
        {
          label: "Day 1",
          items: ["Arrival & Check in", "Ice breaker & Welcome dinner"],
        },
        {
          label: "Day 2",
          items: [
            "Visit University of Manchester and University of Leeds",
            "Campus visit with current students & info session with international admissions officer",
          ],
        },
        {
          label: "Day 3",
          items: [
            "Visit University of Cambridge",
            "College application workshop",
          ],
        },
        {
          label: "Day 4",
          items: [
            "Visit University of Oxford",
            "Workshop about setting your goals",
          ],
        },
        {
          label: "Day 5~9",
          items: [
            "Immersive program at the Eastbourne Academy",
            "Live with homestay families",
          ],
        },
        {
          label: "Day 10",
          items: [
            "City walk in London",
            'Group discussion about "Life in London"',
          ],
        },
        {
          label: "Day 11",
          items: ["Visit University College - London & the British Museum"],
        },
        {
          label: "Day 12",
          items: [
            "Visit Imperial College - London & the Natural History Museum",
          ],
        },
      ],
    },
  },
  {
    props: {
      id: "nz",
    },
  },
  {
    props: {
      id: "cambridge",
    },
  },
  {
    props: {
      id: "harvard",
    },
  },
  {
    props: {
      id: "west-point",
    },
  },
  {
    props: {
      id: "csx",
    },
  },
  {
    props: {
      id: "uk-camp",
    },
  },
  {
    props: {
      id: "mys",
    },
  },
  {
    props: {
      id: "dh",
    },
  },
];

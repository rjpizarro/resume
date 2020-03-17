/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const jobs = [
    {
      "startDate": "2017/04/01",
      "endDate": "2020/02/01",
      "company": "Yuniku Inc.",
      "jobTitle": "Javascript Engineer - Co-founder",
      "description": "I performed as a Lead Javascript developer in multiple projects. In many of them, I also was in charge of developing the project architecture.\n\nI worked with technologies like React, React-native, Redux, Node.js, GraphQl, PostgreSQL, Mongo, and AWS."
    },
    {
      "startDate": "2012/07/01",
      "endDate": "2017/07/01",
      "company": "Estudio Caburé",
      "jobTitle": "Professor",
      "description": "I taught HTML5 and Wordpress basic concepts for beginners developers and designers."
    },
    {
      "startDate": "2016/11/01",
      "endDate": "2017/04/01",
      "company": "Vault Consulting",
      "jobTitle": "Javascript Engineer",
      "description": "I developed mobile applications with React-Native. I also worked with other tools like Node.js, Firebase, and ElasticSearch."
    },
    {
      "startDate": "2015/05/01",
      "endDate": "2016/11/01",
      "company": "Globant",
      "jobTitle": "Web UI Developer",
      "description": "As a Web UI Developer, I worked in the  Air Booking Flow rebuild for Southwest Airlines.  The technologies used were React and Java."
    },
    {
      "startDate": "2012/03/01",
      "endDate": "2015/04/01",
      "company": "Freelance",
      "jobTitle": "Javascript Developer",
      "description": "As a Freelancer, I developed a variety of websites for different clients. Mostly I used HTML5, CSS3, PHP, and Wordpress to build from eCommerce and business sites to landing pages and custom plugins."
    },
    {
      "startDate": "2013/02/01",
      "endDate": "2014/03/01",
      "company": "COINED International",
      "jobTitle": "Web Developer",
      "description": "COINED is the leading organization in Latin America providing intercultural experiences in Spanish. During my time there I developed COINED's landing page builder system and their main website."
    },
    {
      "startDate": "2007/04/01",
      "endDate": "2011/01/01",
      "company": "LV2 – AM970 / FM 99.7, Radio Revés 88.7, El Quinto Medio ",
      "jobTitle": "Radio Producer",
      "description": "In my early job years, I worked as a Radio Producer and voice-talent. I was in charge of creating the radio show content, interviewing personalities, and multimedia editing (audio, video, and photo). During this time I started to work in the web development field, building a webpage for each radio show."
    }
  ]
  jobs.forEach(job => {
    const node = {
      startDate: job.startDate,
      endDate: job.endDate,
      company: job.company,
      jobTitle: job.jobTitle,
      description: job.description,
      id: createNodeId(`job-${job.company}`),
      internal: {
        type: "Job",
        contentDigest: createContentDigest(job),
      },
    }
    actions.createNode(node)
  })
}

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const roomData = [
    {
      id: `Red_Queen`,
      color: `red`,
      type: "queen",
    },
    {
      id: `Blue_Queen`,
      color: `blue`,
      type: "queen",
    },
    {
      id: `Yellow_Queen`,
      color: `yellow`,
      type: "queen",
    },
    {
      id: `Green_Queen`,
      color: `green`,
      type: "queen",
    },
    {
      id: `Red_King`,
      color: `red`,
      type: `king`,
    },
    {
      id: `Blue_King`,
      color: `blue`,
      type: `king`,
    },
    {
      id: `Green_King`,
      color: `green`,
      type: `king`,
    },
    {
      id: `Yellow_King`,
      color: `yellow`,
      type: `king`,
    },
    {
      id: `Red_Double`,
      color: `red`,
      type: "double",
    },
    {
      id: `Blue_Double`,
      color: `yellow`,
      type: "double",
    },
    {
      id: `Yellow_Double`,
      color: "yellow",
      type: "double",
    },
    {
      id: `Green_Double`,
      color: `green`,
      type: "double",
    },
    {
      id: `Red_Bunk`,
      color: `red`,
      type: "bunk",
    },
    {
      id: `Green_Bunk`,
      color: `green`,
      type: "bunk",
    },
    {
      id: `Yellow_Bunk`,
      color: `yellow`,
      type: "bunk",
    },
    {
      id: `Red_Loft`,
      color: `red`,
      type: "loft",
    },
    {
      id: `Blue_Loft`,
      color: `blue`,
      type: "loft",
    },
    {
      id: `Green_Loft`,
      color: `green`,
      type: "loft",
    },
    {
      id: `Yellow_Loft`,
      color: `yellow`,
      type: "loft",
    },
    {
      id: `Red_Suite`,
      color: `red`,
      type: "suite",
    },
    {
      id: `Blue_Suite`,
      color: `blue`,
      type: "suite",
    },
    {
      id: `Green_Suite`,
      color: `green`,
      type: "suite",
    },
    {
      id: `Yellow_Suite`,
      color: `yellow`,
      type: "suite",
    },
    {
      id: 'Blue_GrandSuite',
      color: `blue`,
      type: 'grandSuite'
    }
    
  ]

  const categoryData = [
    {
      id: `Tranquility`,
      color: `blue`,
      copy: `content`,
      links: [
        "queen_room",
        "king_room",
        "double",
        "loft",
        "suite",
        "grand_suite",
      ],
    },
    {
      id: `Happiness`,
      color: `yellow`,
      copy: `Content`,
      links: ["queen_room", "king_room", "double", "bunk", "loft", "suite"],
    },
    {
      id: `Rejuvenation`,
      color: `green`,
      copy: `Content`,
      links: ["queen_room", "king_room", "double", "bunk", "loft", "suite"],
    },
    {
      id: `Passion`,
      color: `red`,
      name: `Happiness Yellow`,
      copy: `Content`,
      links: ["queen_room", "king_room", "double", "bunk", "loft", "suite"],
    },
  ]

  roomData.map(room => {
    createPage({
      path: `/${room.id}`,
      component: require.resolve(`./src/templates/room-template.js`),
      context: { room },
    })
  })
  categoryData.map(category => {
    createPage({
      path: `/${category.id}/`,
      component: require.resolve(`./src/templates/category-template.js`),
      context: { category },
    })
  })
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /bad-module/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

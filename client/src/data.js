export const data = [
  {
    id: 1,
    user: {
      id: 1,
      username: "traveler123",
      avatar: "https://example.com/avatar1.jpg",
    },
    title: "Exploring the Botanical Gardens",
    description:
      "Spent a lovely day wandering through the beautiful Ooty Botanical Gardens. The variety of flowers and plants is truly breathtaking!",
    image: "https://example.com/experience1.jpg",
    date: "2024-03-10",
    location: "Ooty, Tamil Nadu, India",
    likes: 25,
    comments: [
      {
        id: 1,
        user: {
          id: 2,
          username: "adventurer456",
          avatar: "https://example.com/avatar2.jpg",
        },
        comment: "Wow! The Botanical Gardens are amazing, aren't they?",
        date: "2024-03-11",
      },
      {
        id: 2,
        user: {
          id: 3,
          username: "naturelover789",
          avatar: "https://example.com/avatar3.jpg",
        },
        comment:
          "I visited Ooty last year and the Botanical Gardens were my favorite spot!",
        date: "2024-03-12",
      },
    ],
  },
  {
    id: 2,
    user: {
      id: 4,
      username: "hiker567",
      avatar: "https://example.com/avatar4.jpg",
    },
    title: "Trekking in the Nilgiris",
    description:
      "Just completed an incredible trek through the Nilgiri Hills! The views from the top are absolutely stunning. Definitely worth the effort!",
    image: "https://example.com/experience2.jpg",
    date: "2024-03-09",
    location: "Nilgiri Hills, Ooty, Tamil Nadu, India",
    likes: 32,
    comments: [
      {
        id: 3,
        user: {
          id: 5,
          username: "mountainlover101",
          avatar: "https://example.com/avatar5.jpg",
        },
        comment:
          "I've been wanting to do that trek for ages! How difficult was it?",
        date: "2024-03-10",
      },
      {
        id: 4,
        user: {
          id: 6,
          username: "adventureseeker2020",
          avatar: "https://example.com/avatar6.jpg",
        },
        comment:
          "The trek is challenging but the views make it totally worth it!",
        date: "2024-03-11",
      },
    ],
  },
];

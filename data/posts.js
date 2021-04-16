const posts = [
  {
    pid: 1001,
    uid: 42001,
    author: "Leia Organa",
    timestamp: 1618485896651,
    title: "I'm here 4 U",
    content: "You are all bad asses. I believe in you. LMK how I can help you shine!",
    replies: [
      {
        cid: 1001-1,
        uid: 42002,
        author: "Padmé Amidala",
        timestamp: 1618487224495,
        comment: "Just knowing you're here helps.",
      },
      {
        cid: 1001-2,
        uid: 42003,
        author: "Marceline",
        timestamp: 1618487224495,
        comment: "Yeah, I want you to be proud. I want you to be proud of me!",
      }
    ]
  },
  {
    pid: 1002,
    uid: 42002,
    author: "Padmé Amidala",
    timestamp: 1618485896651,
    title: "U R a Jedi",
    content: "You should be paid fairly, without compromise. I call it 'aggressive negotiations'.",
    replies: []
  },
  {
    pid: 1003,
    uid: 42003,
    author: "Marceline",
    timestamp: 1618485896651,
    title: "Hello, Bonnibel",
    content: "Vampires can't beat ghosts. It's like a rock-paper-scissors thing.",
    replies: []
  }

]

module.exports = posts

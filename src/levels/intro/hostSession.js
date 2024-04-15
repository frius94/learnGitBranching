exports.level = {
  "name": {
    "en_US": "Host Session",
    "de_DE": "Einführung in Git Commits",
    "es_AR": "Introducción a los commits de Git",
    "es_MX": "Introducción a los commits de Git",
    "es_ES": "Introducción a los commits de Git",
    "pt_BR": "Introdução aos commits no Git",
    "gl": "Introducción ós commits de Git",
    "fr_FR": "Introduction aux commits avec Git",
    "ja": "Gitのコミット",
    'ko': 'Git 커밋 소개',
    'zh_CN': 'Git Commit',
    'zh_TW': '介紹 git commit ',
    'ru_RU': 'Знакомство с Git Commit ',
    'uk': 'Знайомство з комітами в Git',
    'vi': 'Giới thiệu về Git Commit',
    'sl_SI': "Uvod v Git Commit",
    'pl': "Wprowadzenie do commitów Gita",
    'it_IT': "Introduzione ai commit in Git",
    "ta_IN": "கிட் கமிட்கள் ஒரு அறிமுகம்",
    "tr_TR": "Git Commit'e Giriş"
  },
  "goalTreeString": "{\"branches\":{\"main\":{\"target\":\"C2\",\"id\":\"main\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git commit",
  "startTree": "{\"branches\":{\"main\":{\"target\":\"C1\",\"id\":\"main\",\"remoteTrackingBranchID\":null}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"}},\"tags\":{},\"HEAD\":{\"target\":\"main\",\"id\":\"HEAD\"}}",
  "hint": {
  "en_US": "TESTtest"
},
  "name": {
  "en_US": "test"
},
  "startDialog": {
  "en_US": {
    "childViews": [
      {
        "type": "ModalAlert",
        "options": {
          "markdowns": [
            "## Create session",
            "",
            "Enter your email to host a session and share the link later with others for them to join.",
            "",
            "<div>",
            "<label for=\"email\">Email</label>",
            "<input type=\"email\" name=\"email\" id=\"email\"/>",
            "<button id=\"hostSession\">Host Session</button>",
            "</div>"
          ]
        }
      }
    ]
  }
}
}
import type { Video } from "./types";
// Actual metadata and embed availability: docs/video-verification.json.
// Explanations below are original editorial guidance, not video transcripts.
export const videosByWeek: Record<number, Video[]> = {
  1: [
    {
      title: "What is a calorie? - Emma Bryce",
      channel: "TED-Ed",
      youtubeId: "VEQaH4LruUo",
      afterSection: "energy",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：用动画理解能量单位。片中的一般能量例子不是个人目标。",
      descriptionEn:
        "Why watch: visualise food-energy units. General energy examples in the video are not personal targets.",
    },
  ],
  2: [
    {
      title:
        "Introduction to carbohydrates | High school biology | Khan Academy",
      channel: "Khan Academy",
      youtubeId: "6o4WL5jlpn0",
      afterSection: "carbohydrate-digestion",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：看见糖单位如何组成不同碳水结构。化学名称不必全部记住；随后继续学习纤维与 GI。",
      descriptionEn:
        "Why watch: see how sugar units form different carbohydrate structures. You need not memorise every chemical name; then continue to fibre and GI.",
    },
  ],
  3: [
    {
      title:
        "Introduction to proteins and amino acids | High school biology | Khan Academy",
      channel: "Khan Academy",
      youtubeId: "78QUeXVKiJ4",
      afterSection: "protein-building",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：用氨基酸链与形状理解蛋白质的多种作用。化学细节不必全部记忆，随后继续学习食物来源与消化。",
      descriptionEn:
        "Why watch: connect amino-acid chains and shapes with the many roles of proteins. You need not memorise every chemical detail; continue with food sources and digestion afterwards.",
    },
  ],
  4: [
    {
      title: "What is fat? - George Zaidan",
      channel: "TED-Ed",
      youtubeId: "QhUrc4BnPgg",
      afterSection: "fat-types",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：比较脂肪酸的不同形状。视频较早，具体包装与反式脂肪法规可能已改变；用当前标签判断购买。",
      descriptionEn:
        "Why watch: compare fatty-acid shapes. This older animation’s product examples and trans-fat regulations may have changed; use current labels when shopping.",
    },
  ],
};
const reviewedVideos: Record<number, Video[]> = {
  5: [
    {
      title: "How do vitamins work? - Ginnie Trinh Nguyen",
      channel: "TED-Ed",
      youtubeId: "ISZLTJH5lYg",
      afterSection: "vitamin-map",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：建立水溶性与脂溶性的概念地图。动画是概览；水溶性不代表过量无害，B12 的储存也是重要例外。",
      descriptionEn:
        "Why watch: build a map of water- and fat-soluble vitamins. This is an overview: water-soluble does not mean harmless in excess, and B12 storage is an important exception.",
    },
  ],
  6: [
    {
      title:
        "Why Healthy Bones Are About So Much More than Milk | Body Stuff with Dr. Jen Gunter",
      channel: "TED",
      youtubeId: "1Zh045t0xcE",
      afterSection: "calcium",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：用骨健康理解为什么不能只看钙或奶。视频聚焦骨骼，不代替本周其他矿物质正文，也不制定个人补充剂计划。",
      descriptionEn:
        "Why watch: use bone health to see why calcium or milk alone is not the whole picture. This focused video does not replace the other mineral sections or prescribe supplements.",
    },
  ],
  7: [
    {
      title: "How your digestive system works - Emma Bryce",
      channel: "TED-Ed",
      youtubeId: "Og5xAdC8EUI",
      afterSection: "digestive-route",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：沿动画追踪食物的路线，然后用正文区分消化、吸收与辅助器官。",
      descriptionEn:
        "Why watch: follow food through the tract, then use the lesson to distinguish digestion, absorption and supporting organs.",
    },
  ],
  8: [
    {
      title: "How the food you eat affects your gut - Shilpa Ravella",
      channel: "TED-Ed",
      youtubeId: "1sISguPDlhY",
      afterSection: "gut-community",
      verifiedAt: "2026-09-27",
      description:
        "为什么看：把食物与微生物联系起来。片中的研究例子不是长期防癌或治病的证明；没有适合所有人的完美菌群配方。",
      descriptionEn:
        "Why watch: connect food with microbes. Research examples are not proof of long-term cancer prevention or treatment; there is no universal perfect microbiome.",
    },
  ],
};
Object.assign(videosByWeek, reviewedVideos);

Object.assign(videosByWeek, {
  "9": [
    {
      title: "What is type 2 diabetes? [Spoken in English]",
      channel: "Diabetes UK",
      youtubeId: "o3v2fnCaSTg",
      afterSection: "insulin-resistance",
      description:
        "为什么看：用简短动画复习胰岛素阻抗与 2 型糖尿病的联系。个人诊断与治疗需由医疗团队评估。",
      descriptionEn:
        "Why watch: briefly revisit insulin resistance and type 2 diabetes. Individual diagnosis and treatment belong with a healthcare team.",
      verifiedAt: "2026-09-27",
    },
  ],
  "10": [
    {
      title: "Understanding Blood Pressure (Subtitles)",
      channel: "British Heart Foundation",
      youtubeId: "4YNdp3pRjig",
      afterSection: "blood-pressure",
      description:
        "为什么看：观察血压两个读数表示什么。视频是概念说明，不能用来自行诊断。",
      descriptionEn:
        "Why watch: visualise what the two blood pressure readings mean. This explanation is not a self-diagnosis tool.",
      verifiedAt: "2026-09-27",
    },
  ],
  "11": [
    {
      title: "How does your body know you're full? - Hilary Coller",
      channel: "TED-Ed",
      youtubeId: "YVfyYrEmzgM",
      afterSection: "appetite-satiety",
      description:
        "为什么看：把胃、肠道与大脑的饱腹信号连起来。个体感受有差异，不需要把视频变成限制进食的规则。",
      descriptionEn:
        "Why watch: connect stomach, gut and brain signals involved in fullness. Experiences vary; this is not a rule for restricting food.",
      verifiedAt: "2026-09-27",
    },
  ],
  "12": [
    {
      title: "How does your immune system work? - Emma Bryce",
      channel: "TED-Ed",
      youtubeId: "PSRJfaAYkW4",
      afterSection: "inflammation",
      description:
        "为什么看：理解免疫防御的基本过程。它不证明任何食品或补充剂能够治疗慢性炎症。",
      descriptionEn:
        "Why watch: understand basic immune defence. This does not establish that a food or supplement treats chronic inflammation.",
      verifiedAt: "2026-09-27",
    },
  ],
});

Object.assign(videosByWeek, {
  "13": [
    {
      title:
        "SWFT: Supporting challenges in eating in school aged children Coventry",
      channel: "South Warwickshire University NHS Foundation Trust",
      youtubeId: "lay0LGZRdpM",
      afterSection: "child-selectivity",
      description:
        "为什么看：医院团队解释学龄儿童的进食困难与家庭支持，约 19 分钟。涉及英国服务的部分请以本地求助渠道为准；个别喂养问题仍需评估。",
      descriptionEn:
        "Why watch: a hospital team explains eating challenges and family support for school-age children, in about 19 minutes. UK service details do not replace local support or individual feeding assessment.",
      verifiedAt: "2026-09-27",
    },
  ],
  "14": [
    {
      title: "Nutrition for Teenagers",
      channel: "Public Health Dietitians - Eating Well",
      youtubeId: "ATlf99m0Hfs",
      afterSection: "teen-routine",
      description:
        "为什么看：公共健康营养师把青少年的营养与家庭日常联系起来。本片约 31 分钟，比其他视频长，可分两次看；选择它是因为内容直接针对青少年，而不是成人节食。",
      descriptionEn:
        "Why watch: public-health dietitians connect adolescent nutrition with family routines. At about 31 minutes this is longer than the other videos; split it into two sittings. Its direct focus on teenagers warrants the longer format.",
      verifiedAt: "2026-09-27",
    },
  ],
  "15": [
    {
      title: "Eatwell Guide | Updated | Healthy eating | UK Guidelines",
      channel: "Public Health Dietitians - Eating Well",
      youtubeId: "gb2iEZgf63A",
      afterSection: "adult-pattern",
      description:
        "为什么看：营养师用英国 Eatwell 框架解释整日与整周平衡。把原则用于本地食物，不把英国份量或标签惯例当成马来西亚法规。",
      descriptionEn:
        "Why watch: dietitians explain balance across days and weeks using the UK Eatwell framework. Apply the principles to local foods; UK portions and label conventions are not Malaysian regulations.",
      verifiedAt: "2026-09-27",
    },
  ],
  "16": [
    {
      title:
        "Menopause: Weight gain, nutrition and lifestyle - a British Menopause Society video",
      channel: "British Menopause Society",
      youtubeId: "YN5sC-8V20I",
      afterSection: "women-pattern",
      description:
        "为什么看：英国更年期学会的营养师讨论营养、活动与生活方式。重点看可持续的安排；体重相关内容不代表每位学习者都需要减重。",
      descriptionEn:
        "Why watch: a dietitian for the British Menopause Society discusses nutrition, activity and lifestyle. Focus on sustainable routines; discussion of weight does not mean every learner needs weight loss.",
      verifiedAt: "2026-09-27",
    },
  ],
});

Object.assign(videosByWeek, {
  "18": [
    {
      title: "Understanding Food Labels",
      channel: "Public Health Dietitians - Eating Well",
      youtubeId: "l6CEfgX7p2M",
      afterSection: "label-basis",
      description:
        "为什么看：营养师示范从标签中寻找信息。视频采用英国包装例子；颜色标识不是马来西亚法规，本课以 KKM 资料补充本地背景。",
      descriptionEn:
        "Why watch: a dietitian demonstrates finding label information. This uses UK packaging; colour coding is not Malaysian law. The lesson adds local context from KKM.",
      verifiedAt: "2026-09-27",
    },
  ],
  "20": [
    {
      title: "Suku Suku Separuh",
      channel: "NutritionistKKM",
      youtubeId: "2rzykHTwEu4",
      afterSection: "menu-framework",
      description:
        "为什么看：KKM 的马来语短片用本地食物展示 Suku Suku Separuh。它是简短视觉提示，详细推理与替代方法仍在本课中英正文。",
      descriptionEn:
        "Why watch: this brief Malay-language KKM video illustrates Suku Suku Separuh with local foods. It is a visual prompt; the bilingual written lesson supplies detailed reasoning and alternatives.",
      verifiedAt: "2026-09-27",
    },
  ],
});
videosByWeek[17] = [];
videosByWeek[19] = [];

Object.assign(videosByWeek, {
  "21": [
    {
      title:
        "Can you spot the problem with these headlines? (Level 1) - Jeff Leek & Lucy McGowan",
      channel: "TED-Ed",
      youtubeId: "w1CeRpfByG8",
      afterSection: "research-observation",
      description:
        "为什么看：练习辨认新闻标题与研究结果之间的差距，区分相关性和因果性。",
      descriptionEn:
        "Why watch: identify gaps between headlines and study findings, and distinguish association from causation.",
      verifiedAt: "2026-09-27",
    },
  ],
  "22": [
    {
      title: "How to spot a fad diet - Mia Nacamulli",
      channel: "TED-Ed",
      youtubeId: "8V15Z-yyiVg",
      afterSection: "myth-miracle",
      description:
        "为什么看：识别流行饮食承诺中的警号，练习评估证据；这不是减重方案。",
      descriptionEn:
        "Why watch: recognise warning signs in fad-diet promises and evaluate evidence. This is not a weight-loss programme.",
      verifiedAt: "2026-09-27",
    },
  ],
  "23": [],
  "24": [],
});

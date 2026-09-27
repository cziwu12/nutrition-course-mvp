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

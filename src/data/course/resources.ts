import { practicalResources } from "./practical-resources";
import { lifeStageResources } from "./life-stage-resources";
import { healthResources } from "./health-resources";
import { lessons } from "./lessons";
import { videosByWeek } from "./videos";
import type { Resource } from "./types";
import { micronutrientResources } from "./micronutrient-resources";
export const resources: Resource[] = [
  ...micronutrientResources,
  {
    id: "who",
    titleEn: "Healthy diet",
    descriptionEn:
      "WHO overview of healthy dietary patterns and nutrient roles. Optional background for this lesson.",
    title: "健康饮食 · Healthy diet",
    source: "WHO",
    description:
      "阅读世界卫生组织的健康饮食概览，认识多样、均衡与适量。英文资料，可配合浏览器翻译。",
    url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet",
    type: "official guide",
    tags: ["基础营养", "carbohydrates", "protein", "cardiovascular health"],
    weeks: [1, 2, 3, 4, 9, 10, 11, 13, 14, 15, 17, 18, 19, 23],
  },
  {
    id: "nih",
    title: "维生素与矿物质资料库",
    source: "NIH Office of Dietary Supplements",
    description:
      "按营养素浏览消费者资料，注意适用人群、摄入上限与药物相互作用。",
    url: "https://ods.od.nih.gov/factsheets/list-all/",
    type: "official guide",
    tags: ["vitamins", "维生素D", "矿物质", "补充剂"],
    weeks: [5, 6, 16],
  },
  {
    id: "plate",
    title: "健康餐盘 · Healthy Eating Plate",
    source: "Harvard Nutrition Source",
    description: "用餐盘框架思考一餐的食物搭配，再结合家庭习惯和可获得的食材。",
    url: "https://nutritionsource.hsph.harvard.edu/healthy-eating-plate/",
    type: "article",
    tags: ["家庭菜单", "whole grains", "饮食分析"],
    weeks: [17, 19, 20, 24],
  },
  {
    id: "kkm",
    title: "马来西亚本地营养指南",
    source: "KKM / Ministry of Health Malaysia",
    description: "Resource to be added · 本地官方指南链接待核验。",
    type: "official guide",
    tags: ["马来西亚"],
    weeks: [19, 20],
  },
  {
    id: "evidence",
    title: "科学研究与证据评估资源",
    source: "Other trusted sources",
    description: "Resource to be added · 专题阅读待核验。",
    type: "article",
    tags: ["科学研究", "营养误区"],
    weeks: [12, 21, 22],
  },
];

// References supporting the authored Week 1 lesson; all are optional reading.
resources.push(
  {
    id: "dri",
    title: "营养素参考摄入量：RDA、EAR、UL",
    titleEn: "Dietary reference intakes: RDA, EAR and UL",
    source: "NIH Office of Dietary Supplements",
    description: "参考值的用途、适用人群与定义。本周第1.5节的事实依据。",
    descriptionEn:
      "Definitions, purposes and populations for dietary reference values. Supports section 1.5.",
    url: "https://ods.od.nih.gov/HealthInformation/nutrientrecommendations.aspx",
    type: "official guide",
    tags: ["RDA", "EAR", "UL"],
    weeks: [1],
  },
  {
    id: "nutrition-terms",
    title: "营养术语解释",
    titleEn: "Definitions of health terms: nutrition",
    source: "MedlinePlus / National Library of Medicine",
    description: "有关营养素、消化与能量的基础术语。",
    descriptionEn: "Background definitions of nutrients, digestion and energy.",
    url: "https://medlineplus.gov/healthdefinitions/nutritiondefinitions.html",
    type: "official guide",
    tags: ["基础营养", "nutrients"],
    weeks: [1],
  },
  {
    id: "energy",
    title: "身体如何使用能量",
    titleEn: "How the body uses energy",
    source: "NIDDK",
    description: "介绍包括静息状态在内的能量消耗。支持第1.4节。",
    descriptionEn:
      "Background on energy expenditure, including essential functions at rest. Supports section 1.4.",
    url: "https://www.niddk.nih.gov/research-funding/at-niddk/labs-branches/diabetes-endocrinology-obesity-branch/metabolic-clinical-research-unit/metabolic-testing",
    type: "article",
    tags: ["energy", "calories"],
    weeks: [1],
  },
);

resources.push(
  {
    id: "carbs",
    title: "碳水化合物",
    titleEn: "Carbohydrates",
    source: "Harvard Nutrition Source",
    description: "碳水类型与食物质量。",
    descriptionEn: "Carbohydrate types and food quality.",
    url: "https://nutritionsource.hsph.harvard.edu/carbohydrates/",
    type: "article",
    tags: ["carbohydrates"],
    weeks: [2],
  },
  {
    id: "fibre-guide",
    title: "膳食纤维",
    titleEn: "Fibre",
    source: "Harvard Nutrition Source",
    description: "纤维类型与常见食物来源。",
    descriptionEn: "Fibre types and common food sources.",
    url: "https://nutritionsource.hsph.harvard.edu/carbohydrates/fiber/",
    type: "article",
    tags: ["fibre"],
    weeks: [2, 8, 15],
  },
  {
    id: "whole-grains",
    title: "全谷物",
    titleEn: "Whole grains",
    source: "Harvard Nutrition Source",
    description: "谷物结构与食物选择。",
    descriptionEn: "Grain structure and food choices.",
    url: "https://nutritionsource.hsph.harvard.edu/what-should-you-eat/whole-grains/",
    type: "article",
    tags: ["whole grains"],
    weeks: [2],
  },
  {
    id: "gi-guide",
    title: "碳水与血糖",
    titleEn: "Carbohydrates and blood sugar",
    source: "Harvard Nutrition Source",
    description: "GI 与血糖反应的背景。",
    descriptionEn: "Background on GI and blood-glucose response.",
    url: "https://nutritionsource.hsph.harvard.edu/carbohydrates/carbohydrates-and-blood-sugar/",
    type: "article",
    tags: ["GI", "diabetes"],
    weeks: [2, 9],
  },
  {
    id: "digestion",
    title: "消化系统如何工作",
    titleEn: "Your digestive system & how it works",
    source: "NIDDK",
    description: "消化、吸收与器官分工。",
    descriptionEn: "Digestion, absorption and organ roles.",
    url: "https://www.niddk.nih.gov/health-information/digestive-diseases/digestive-system-how-it-works",
    type: "official guide",
    tags: ["digestion"],
    weeks: [2, 3, 7],
  },
  {
    id: "protein-guide",
    title: "蛋白质",
    titleEn: "Protein",
    source: "Harvard Nutrition Source",
    description: "氨基酸、食物来源与需要量的背景。",
    descriptionEn: "Amino acids, food sources and requirements.",
    url: "https://nutritionsource.hsph.harvard.edu/what-should-you-eat/protein/",
    type: "article",
    tags: ["protein"],
    weeks: [3, 16],
  },
);

resources.push(
  {
    id: "fats-guide",
    title: "脂肪与胆固醇",
    titleEn: "Fats and cholesterol",
    source: "Harvard Nutrition Source",
    description: "脂肪种类与替代食物的背景。",
    descriptionEn: "Fat types and replacement foods.",
    url: "https://nutritionsource.hsph.harvard.edu/what-should-you-eat/fats-and-cholesterol/",
    type: "article",
    tags: ["fat"],
    weeks: [4, 10],
  },
  {
    id: "heart-lipids",
    title: "LDL、HDL 与甘油三酯",
    titleEn: "LDL, HDL and triglycerides",
    source: "American Heart Association",
    description: "血脂指标的基本解释。",
    descriptionEn: "An introduction to blood lipid measures.",
    url: "https://www.heart.org/en/health-topics/cholesterol/hdl-good-ldl-bad-cholesterol-and-triglycerides",
    type: "article",
    tags: ["cholesterol"],
    weeks: [4, 10],
  },
  {
    id: "omega-guide",
    title: "Omega-3 脂肪酸资料",
    titleEn: "Omega-3 fatty acids",
    source: "NIH Office of Dietary Supplements",
    description: "脂肪酸来源、用途与安全背景。",
    descriptionEn: "Sources, roles and safety context.",
    url: "https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/",
    type: "official guide",
    tags: ["omega-3"],
    weeks: [4],
  },
);

resources.push(
  ...healthResources,
  ...lifeStageResources,
  ...practicalResources,
);

// Derive backlinks from published lessons so the library cannot drift from citations.
for (const [weekNumber, lesson] of Object.entries(lessons)) {
  for (const id of lesson.sourceIds) {
    const resource = resources.find((resource) => resource.id === id);
    if (resource && !resource.weeks.includes(Number(weekNumber))) {
      resource.weeks.push(Number(weekNumber));
      resource.weeks.sort((a, b) => a - b);
    }
  }
}
for (const [weekNumber, videos] of Object.entries(videosByWeek)) {
  for (const video of videos) {
    if (!video.youtubeId || !video.title) continue;
    resources.push({
      id: "video-" + weekNumber + "-" + video.youtubeId,
      title: video.title,
      titleEn: video.titleEn ?? video.title,
      source: "YouTube",
      description: video.channel + " · " + (video.description ?? ""),
      descriptionEn: video.channel + " · " + (video.descriptionEn ?? ""),
      type: "video",
      url: "https://www.youtube.com/watch?v=" + video.youtubeId,
      tags: [
        video.channel ?? "",
        ...(lessons[Number(weekNumber)]?.keyTerms
          .slice(0, 3)
          .flatMap((term) => [term.term.zh, term.term.en]) ?? []),
      ],
      weeks: [Number(weekNumber)],
    });
  }
}

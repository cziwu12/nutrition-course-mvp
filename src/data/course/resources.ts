import type { Resource } from "./types";
export const resources: Resource[] = [
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
    id: "gut",
    title: "消化与肠道健康资源",
    source: "Other trusted sources",
    description: "Resource to be added · 专题阅读待核验。",
    type: "article",
    tags: ["gut health", "消化系统"],
    weeks: [7, 8],
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
  {
    id: "youtube",
    title: "课程视频待补充",
    source: "YouTube",
    description:
      "尚未选定视频。核验标题、频道与链接后加入课程；当前视频学习为选修。",
    type: "video",
    tags: ["视频"],
    weeks: [],
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

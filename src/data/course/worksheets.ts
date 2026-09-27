import { l } from "./authoring";
import type { Localized } from "./lesson-types";
export type Worksheet = {
  title: Localized;
  prompt: Localized;
  fields: { id: string; label: Localized }[];
};
const field = (id: string, zh: string, en: string) => ({
  id,
  label: l(zh, en),
});
export const worksheets: Record<number, Worksheet> = {
  17: {
    title: l("我的饮食日记", "My food diary"),
    prompt: l(
      "写时间、食物、份量、做法与情境；未知请注明。可使用虚构记录。",
      "Record time, foods, quantities, preparation and context; mark unknown details. Fictional records are welcome.",
    ),
    fields: [
      field("date", "日期与背景", "Date and context"),
      field("breakfast", "早餐记录", "Breakfast record"),
      field("lunch", "午餐记录", "Lunch record"),
      field("dinner", "晚餐记录", "Dinner record"),
      field("snacks", "点心记录", "Snack record"),
      field("drinks", "饮料记录", "Drink record"),
      field(
        "reflection",
        "两项观察、一项未知与一个调整",
        "Two observations, one unknown and one adjustment",
      ),
    ],
  },
  18: {
    title: l("我的标签比较", "My label comparison"),
    prompt: l(
      "记录两件同类产品的参考量、实际量、已列营养值和配料。不知道的数值写未列出。",
      "Record reference and actual amounts, declared nutrients and ingredients for two similar products. Mark undeclared values.",
    ),
    fields: [
      field("product-a", "产品 A 与标签数据", "Product A and label data"),
      field("product-b", "产品 B 与标签数据", "Product B and label data"),
      field(
        "comparison",
        "统一基础后的比较与限制",
        "Common-basis comparison and limitations",
      ),
    ],
  },
  19: {
    title: l("一日饮食设计工作区", "One-day meal design"),
    prompt: l(
      "每餐写食物、营养理由、实际理由和替代。此案例不是个人处方。",
      "For each meal record foods, nutritional and practical reasons, and an alternative. This case is not a prescription.",
    ),
    fields: [
      field("questions", "个人化前的问题", "Questions before personalisation"),
      field("breakfast", "早餐设计", "Breakfast design"),
      field("lunch", "午餐设计", "Lunch design"),
      field("snack", "下午点心选择", "Afternoon snack option"),
      field("dinner", "晚餐设计", "Dinner design"),
      field("review", "整日回顾与未知", "Whole-day review and unknowns"),
    ],
  },
  20: {
    title: l("一周家庭菜单工作区", "Weekly family menu"),
    prompt: l(
      "每天可写三餐、饮料与备用方案；结合预算、时间和保存条件。",
      "Include meals, drinks and alternatives for each day, accounting for cost, time and storage.",
    ),
    fields: [
      field("mon", "星期一", "Monday"),
      field("tue", "星期二", "Tuesday"),
      field("wed", "星期三", "Wednesday"),
      field("thu", "星期四", "Thursday"),
      field("fri", "星期五", "Friday"),
      field("sat", "星期六", "Saturday"),
      field("sun", "星期日", "Sunday"),
      field(
        "shopping",
        "采购、分工与安全保存",
        "Shopping, shared work and safe storage",
      ),
      field("review", "备选与四项复盘", "Fallbacks and four-part review"),
    ],
  },
  23: {
    title: l("案例分析工作区", "Case analysis worksheet"),
    prompt: l(
      "区分观察、未知与建议，避免诊断。",
      "Separate observations, unknowns and suggestions; avoid diagnosis.",
    ),
    fields: [
      field("observations", "已知观察", "Known observations"),
      field("questions", "需要询问的问题", "Questions to ask"),
      field("changes", "三项改变与理由", "Three changes and reasons"),
      field(
        "review",
        "实施方式、复盘与边界",
        "Implementation, review and boundaries",
      ),
    ],
  },
  24: {
    title: l("我的家庭营养指南", "My Family Nutrition Guide"),
    prompt: l(
      "用自己的话完成各节，可逐步回来修改。保留来源、日期与不确定性。",
      "Complete each section in your own words and return to revise it. Keep sources, dates and uncertainty visible.",
    ),
    fields: [
      field("habits", "1. 我的家庭饮食习惯", "1. Our family eating habits"),
      field("issues", "2. 常见问题", "2. Common challenges"),
      field("basics", "3. 营养基础", "3. Nutrition foundations"),
      field("breakfast", "4. 早餐建议", "4. Breakfast ideas"),
      field("lunch", "5. 午餐建议", "5. Lunch ideas"),
      field("dinner", "6. 晚餐建议", "6. Dinner ideas"),
      field("snacks", "7. 零食建议", "7. Snack ideas"),
      field("drinks", "8. 饮料选择", "8. Drink choices"),
      field("labels", "9. 食品标签怎么看", "9. Reading food labels"),
      field("menu", "10. 一周家庭菜单", "10. Weekly family menu"),
      field(
        "children",
        "11. 儿童饮食注意事项",
        "11. Considerations for children",
      ),
      field(
        "women",
        "12. 40+ 女性饮食注意事项",
        "12. Considerations for women over 40",
      ),
      field("sources", "13. 我的营养知识来源", "13. My nutrition sources"),
    ],
  },
};

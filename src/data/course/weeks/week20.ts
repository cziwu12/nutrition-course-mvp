import {
  l,
  p,
  example,
  call,
  section,
  term,
  q,
  lesson,
} from "../authoring";
export const week20Lesson = lesson({
  introduction: l(
    "一周菜单需要好吃、买得到、做得到，也要营养合理。本周把这些条件一起考虑：先看日程与库存，再安排组合、采购与备用方案。菜单是可修改的生活工具，不是必须逐字执行的饮食契约。",
    "A weekly menu should be enjoyable, locally available, feasible and nutritionally reasonable. This week considers these together: schedule and supplies first, then combinations, shopping and fallbacks. A menu is an adjustable household tool, not a contract that must be followed word for word.",
  ),
  objectives: l(
    [
      "把家庭时间、预算和偏好转成菜单条件。",
      "用餐盘框架检查组合，而不机械复制比例。",
      "设计七天的主要餐食与备选。",
      "将采购、剩菜和食品安全纳入计划。",
    ],
    [
      "Translate time, budget and preferences into planning conditions.",
      "Use plate frameworks to check combinations without rigid copying.",
      "Design seven days of main meals and alternatives.",
      "Include shopping, leftovers and food safety in the plan.",
    ],
  ),
  sections: [
    section(
      "menu-constraints",
      l(
        "20.1 先排生活，再排菜名",
        "20.1 Plan around life before naming dishes",
      ),
      [
        p(
          "先写这一周哪些天晚归、哪些天有人做饭、冰箱和厨房能放多少食物。清点家里已有的米、面、豆类、冷冻菜与调味品，再决定要买什么。只按理想营养列七道复杂菜，可能让时间与预算先崩溃。",
          "Mark late evenings, available cooks and storage space before choosing dishes. Check existing rice, noodles, pulses, frozen vegetables and seasonings before shopping. Seven complicated nutritionally attractive dishes can fail immediately on time or cost.",
        ),
        p(
          "偏好与文化不是需要克服的障碍。家人喜欢饭、面或汤菜，可以在这些基础上调整组成。询问不喜欢的食材、过敏和已知医疗限制，不要假定所有家庭成员需要一样的份量或同一套个人建议。",
          "Preferences and culture are not obstacles to eliminate. Build combinations around accepted rice, noodles or soups. Ask about disliked foods, allergies and known medical restrictions, without assuming equal portions or identical personal guidance for every household member.",
        ),
        example(
          "星期三晚归",
          "A late Wednesday",
          "把三道现炒菜改成可快速完成的豆腐蛋菜配饭，或预先安排可靠的外食选择。计划外食也是计划，不是失败；关键是看可选组合与实际可行性。",
          "Replace three freshly stir-fried dishes with a quick tofu, egg and vegetable meal plus rice, or plan a dependable meal out. Planning to eat out is still planning; assess the available combination and feasibility.",
        ),
        call(
          "预算是真实条件",
          "Budget is a real condition",
          "先满足足够与安全，再逐步增加多样性。无需为了看起来健康，购买家庭负担不起的进口谷物、浆果或补充粉。",
          "Start with enough safe food and build variety gradually. Imported grains, berries or powders are not required when they strain the household budget.",
        ),
      ],
      ["meal-plan", "constraint", "food-budget"],
      ["who", "kkm-plate", "ageing-food"],
    ),
    section(
      "menu-framework",
      l(
        "20.2 用框架检查，不把餐盘当尺子",
        "20.2 Use a framework as a check, not a ruler",
      ),
      [
        p(
          "Harvard Healthy Eating Plate 用蔬果、全谷物、蛋白质食物等提醒组合，强调食物质量。它的相对面积不是精确热量处方，也不要求家庭把每道菜独立放到一个盘子里；共享菜可以看各组成。",
          "Harvard’s Healthy Eating Plate prompts combinations of produce, whole grains and protein foods with attention to quality. Its relative areas are not an exact calorie prescription and do not require every household dish to sit on one plate. Shared dishes can be considered by their components.",
        ),
        p(
          "马来西亚的 Suku Suku Separuh 也是本地视觉提示：约四分之一主食、四分之一蛋白质食物，另一半蔬菜，并搭配水果与适合饮料。不同框架有细节差异，不需要混合成一套硬性规定；把它们用作发现缺少组成的工具。",
          "Malaysia’s Suku Suku Separuh offers a local visual cue: roughly a quarter staple, a quarter protein foods and half vegetables, with fruit and a suitable drink. Frameworks differ in detail; avoid merging them into one rigid rule. Use them to notice missing components.",
        ),
        example(
          "家庭共享菜怎么用",
          "Applying it to shared dishes",
          "桌上有饭、鱼、豆腐和青菜，可先看每人取餐是否有各类组成。若菜量常不足，可增加容易买到的菜，而不是要求把汤碗画成四等份。",
          "With rice, fish, tofu and greens on the table, consider whether each person’s meal includes the main components. If vegetables are consistently limited, add an accessible option rather than trying to divide a soup bowl into exact quarters.",
        ),
        call(
          "不同年龄与疾病需调整",
          "Adapt for age and health",
          "幼儿、成长中的青少年、怀孕或有特殊医疗需要者，不能直接套同一份成人餐盘与份量。回顾第 13–16 周，并在需要时求助。",
          "Toddlers, growing teenagers, pregnancy and special medical needs should not receive one identical adult plate and quantity. Revisit Weeks 13–16 and seek guidance when needed.",
        ),
      ],
      ["plate-framework", "proportion", "variety"],
      ["plate", "kkm-plate", "child-food"],
    ),
    section(
      "menu-week",
      l(
        "20.3 七天示例：轮换角色，保留熟悉感",
        "20.3 A seven-day example: rotate roles, keep familiarity",
      ),
      [
        p(
          "下面是虚构的晚餐轮换，不是完整营养处方。早餐可在面包蛋、燕麦配合适奶类、粥配蛋白质之间轮换；午餐可用安全保存的计划剩菜或按组合选外食。水果、饮水与需要时的点心也要安排，而不只写晚餐。",
          "The following fictional dinner rotation is not a complete nutritional prescription. Breakfast might rotate bread and egg, oats with suitable milk, and porridge with protein. Lunch may use safely planned leftovers or a composed meal out. Include fruit, fluids and snacks when needed rather than planning dinner alone.",
        ),
        example(
          "星期一到星期四",
          "Monday to Thursday",
          "周一：饭、蒸鱼、青菜。周二：饭、豆腐蘑菇、南瓜。周三：蛋与蔬菜汤面。周四：饭、鸡肉与混合蔬菜。每餐按需要调整份量；菜名不保证实际菜量足够。",
          "Monday: rice, steamed fish and greens. Tuesday: rice, tofu with mushrooms and pumpkin. Wednesday: noodle soup with egg and vegetables. Thursday: rice, chicken and mixed vegetables. Adjust quantities to needs; a dish name does not guarantee enough vegetables.",
        ),
        example(
          "星期五到星期日",
          "Friday to Sunday",
          "周五：豆类咖喱、饭与蔬菜。周六：按餐盘组成选择家庭外食。周日：饭、蒸蛋、当季蔬菜，再查看下周库存。鱼、豆腐或豆类可互换角色，具体营养与过敏适用性仍需考虑。",
          "Friday: pulse curry, rice and vegetables. Saturday: a family meal out chosen by components. Sunday: rice, steamed egg and seasonal vegetables, followed by a stock check. Fish, tofu or pulses can substitute by role while still considering nutrient differences and allergies.",
        ),
        call(
          "重复不等于失败",
          "Repetition is not failure",
          "同样早餐吃两三次、同样蔬菜换做法，都可以减少负担。多样性看一段时间，不要求 21 餐完全没有重复。",
          "Repeating breakfast or preparing the same vegetable differently can reduce workload. Variety is considered over time; twenty-one entirely different meals are unnecessary.",
        ),
      ],
      ["rotation", "substitution", "meal-plan"],
      ["who", "plate", "kkm-plate"],
    ),
    section(
      "menu-shopping",
      l(
        "20.4 把菜单变成采购与分工",
        "20.4 Turn the menu into shopping and shared work",
      ),
      [
        p(
          "按类别整理清单：主食、蛋白质食物、蔬果、奶类或合适替代、常用调味。先扣除库存，再考虑家庭实际会吃多少。大包装只有在能安全用完时才可能省钱；每公斤价格与浪费风险需要一起看。",
          "Group the list into staples, protein foods, produce, dairy or suitable alternatives, and seasonings. Subtract existing supplies and consider what the household will actually eat. Bulk purchases save money only when safely used; unit price and waste risk belong together.",
        ),
        p(
          "同一食材可以跨餐使用，但不同易腐程度决定安排先后。容易坏的先用，耐存或冷冻的留后面，保留一两种能快速成餐的食品。把购物、清洗、烹调与收拾分配给能参与的人，不把全部责任压在一个人身上。",
          "An ingredient can serve several meals, but perishability affects sequence. Use short-lived items earlier and keep durable or frozen foods for later, with quick meal options available. Share shopping, washing, cooking and clearing among those able to participate rather than assigning all work to one person.",
        ),
        example(
          "一盒豆腐的安排",
          "Planning a pack of tofu",
          "购买前确认开封后保存说明、预计使用时间与份量。若一盒用不完，选择较小包装或按产品说明安全处理，不因为单价便宜就默认能放一整周。",
          "Before buying, check storage after opening, expected use and quantity. Choose a smaller pack or follow safe product-specific handling when it cannot be finished; a low unit price does not mean it keeps for a week.",
        ),
        call(
          "买不到时替换功能",
          "Substitute by role when unavailable",
          "某种青菜买不到，可以换另一种可接受的菜；鱼太贵时考虑合适的蛋、豆腐或豆类。替代不是声称所有营养都完全一样。",
          "Replace unavailable greens with another accepted vegetable; if fish is costly, consider suitable eggs, tofu or pulses. Substitution does not claim identical nutrients.",
        ),
      ],
      ["unit-price", "perishable", "substitution", "food-budget"],
      ["ageing-food", "food-safety", "who"],
    ),
    section(
      "menu-safety",
      l(
        "20.5 提前准备必须包含安全保存",
        "20.5 Preparation ahead includes safe storage",
      ),
      [
        p(
          "食品安全与营养同样重要。清洁双手与器具、生熟分开、充分烹调、合适温度保存以及安全水和原料，是 WHO 的基本方向。提前煮好不表示可以长时间放在室温，马来西亚炎热环境尤其需要计划冷藏与运输。",
          "Food safety matters alongside nutrition. WHO’s basic principles cover cleanliness, separation of raw and cooked foods, thorough cooking, safe temperatures, and safe water and ingredients. Cooking ahead does not make long room-temperature storage safe; plan chilling and transport in Malaysia’s heat.",
        ),
        p(
          "剩菜计划应写什么时候吃、如何冷却和冷藏，或是否适合冷冻，并遵循可靠的食物安全建议与产品说明。饭也可能在保存不当时有风险，不能认为再次加热总能补救。不要凭味道或气味确认安全。",
          "A leftover plan needs timing, cooling and refrigeration or suitable freezing, following reliable safety guidance and product instructions. Cooked rice can also pose risks after improper storage; reheating does not always undo them. Taste and smell cannot establish safety.",
        ),
        example(
          "备餐不是整周放冰箱",
          "Meal preparation is not a week-long fridge assumption",
          "周日把多餐都煮好，却没有冷藏温度、容器、保存时限与再加热计划，不算完整安排。可以分批准备，或只先整理食材，减少长时间存放。",
          "Cooking many meals on Sunday without a plan for fridge temperature, containers, storage duration and reheating is incomplete. Prepare in smaller batches or organise ingredients first to reduce extended storage.",
        ),
        call(
          "不确定就不要冒险",
          "Do not gamble on uncertain storage",
          "若不清楚易腐食物在热环境放了多久，不用“煮久一点”当保证。查看可靠指引，必要时弃置；预算计划也应减少这种浪费。",
          "If the time a perishable food spent in heat is unknown, longer reheating is not a guarantee. Consult reliable guidance and discard when needed; planning should reduce this waste.",
          "warning",
        ),
      ],
      ["food-safety", "cross-contamination", "perishable"],
      ["food-safety", "rice-safety"],
    ),
    section(
      "menu-review",
      l("20.6 用四个问题复盘菜单", "20.6 Review the menu with four questions"),
      [
        p(
          "好吃吗？买得到吗？做得到吗？营养组合合理吗？四个问题都重要。若营养看起来漂亮但大家不吃，或需要每天一小时而家里只有二十分钟，计划需要修改，不是要求家庭适应纸上的理想生活。",
          "Is it enjoyable, available, feasible and nutritionally reasonable? All four matter. If an attractive plan is rejected or needs an hour where only twenty minutes exist, revise it rather than requiring the family to fit an imaginary routine.",
        ),
        p(
          "用下方工作区写七天安排，每天可包括早餐、午餐、晚餐与饮料提醒，再写采购与备用方案。运行一周后只调整一个最明显的问题。预算超支、剩菜过多或某天太忙，都是改进资料，不是失败证据。",
          "Use the worksheet for seven days, including breakfast, lunch, dinner and drink reminders as helpful, plus shopping and fallbacks. After a week, revise one obvious issue. Overspending, excess leftovers or a rushed day provide useful information rather than proof of failure.",
        ),
        example(
          "可持续的修订",
          "A sustainable revision",
          "如果周三总来不及，就把它固定为简单汤面加蛋白质与蔬菜，周末再安排较费时的菜。把计划改得更容易执行，可能比再增加一种超级食物更有意义。",
          "If Wednesdays are always rushed, use simple noodles with protein and vegetables, leaving longer cooking for a weekend. Making execution easier can matter more than adding a supposed superfood.",
        ),
        call(
          "完成标准",
          "Completion standard",
          "有七天安排、采购考虑、两个替代、食品安全说明和一项复盘问题即可。无需证明菜单是所有家庭的最佳答案。",
          "Finish seven days, shopping considerations, two alternatives, food-safety notes and a review question. You need not prove this is the best menu for every family.",
        ),
      ],
      ["meal-plan", "constraint", "rotation"],
      ["kkm-plate", "plate", "food-safety"],
    ),
  ],
  keyTerms: [
    term(
      "meal-plan",
      "菜单计划",
      "Meal plan",
      "把餐食、时间、采购与准备联系起来的可调整安排。",
      "An adjustable arrangement connecting meals, timing, shopping and preparation.",
    ),
    term(
      "constraint",
      "现实条件",
      "Constraint",
      "时间、设备、预算或个人需要等影响执行的条件。",
      "Time, equipment, budget or personal needs affecting implementation.",
    ),
    term(
      "food-budget",
      "食物预算",
      "Food budget",
      "家庭可用于采购与准备食物的实际资源。",
      "The household resources realistically available for obtaining and preparing food.",
    ),
    term(
      "plate-framework",
      "餐盘框架",
      "Plate framework",
      "帮助考虑食物类别与比例的视觉工具，不是处方。",
      "A visual tool for food groups and proportions, not a personal prescription.",
    ),
    term(
      "proportion",
      "相对比例",
      "Proportion",
      "一种组成相对于整体的份额，不等于精确热量比例。",
      "A component’s share of a whole, not necessarily its share of calories.",
    ),
    term(
      "variety",
      "多样性",
      "Variety",
      "一段时间内包含不同食物来源与类别。",
      "Including different food sources and categories across time.",
    ),
    term(
      "rotation",
      "轮换",
      "Rotation",
      "在熟悉食物中作计划性变化，兼顾方便与多样。",
      "Planned variation among familiar foods to combine convenience and variety.",
    ),
    term(
      "substitution",
      "替代",
      "Substitution",
      "用合适食物替换相似用途，不表示营养完全相同。",
      "Replacing a food by a suitable role without claiming identical nutrients.",
    ),
    term(
      "unit-price",
      "单位价格",
      "Unit price",
      "每固定重量或数量的价格，用于公平比较成本。",
      "Cost per fixed weight or quantity, used for fair price comparison.",
    ),
    term(
      "perishable",
      "易腐食品",
      "Perishable food",
      "需要合适时间与温度控制以减少变质和安全风险的食物。",
      "Food needing appropriate time and temperature control to reduce spoilage and safety risks.",
    ),
    term(
      "food-safety",
      "食品安全",
      "Food safety",
      "减少食物引起伤害风险的选择、处理与保存方式。",
      "Selection, handling and storage practices that reduce food-related harm.",
    ),
    term(
      "cross-contamination",
      "交叉污染",
      "Cross-contamination",
      "微生物或其他污染物在食物与表面间转移。",
      "Transfer of microbes or other contaminants between foods and surfaces.",
    ),
  ],
  questions: [
    q(
      "first",
      l("排菜单前先看什么？", "What comes before choosing dishes?"),
      [
        l("最贵的健康食材", "The most expensive health foods"),
        l("日程、库存、预算与需要", "Schedule, supplies, budget and needs"),
      ],
      1,
      l(
        "这些条件决定可行性，不能在营养之外忽略。",
        "These conditions determine feasibility and cannot be ignored alongside nutrition.",
      ),
    ),
    q(
      "plate",
      l(
        "餐盘比例是精确热量处方吗？",
        "Are plate proportions an exact calorie prescription?",
      ),
      [
        l("不是，是组合提示", "No; they prompt combinations"),
        l("是，所有人相同", "Yes; identical for everyone"),
      ],
      0,
      l(
        "视觉框架需结合个人需要、食物类型与共享餐形式。",
        "Visual frameworks need context for personal needs, foods and shared meals.",
      ),
    ),
    q(
      "leftovers",
      l(
        "提前煮好很多饭就能放心放一整周吗？",
        "Does cooking rice ahead guarantee safe storage for a week?",
      ),
      [
        l("能，只要再加热", "Yes, if reheated"),
        l(
          "不能，需要可靠的时间温度与保存计划",
          "No; reliable time, temperature and storage plans are needed",
        ),
      ],
      1,
      l(
        "再加热不能保证补救不当保存，食品安全必须一开始就安排。",
        "Reheating cannot guarantee correction of poor storage; plan safety from the start.",
      ),
    ),
    q(
      "review",
      l(
        "周三菜单总做不到，最合理的下一步？",
        "If Wednesday’s meal repeatedly fails, what next?",
      ),
      [
        l("责备家人不自律", "Blame the family"),
        l("增加更复杂的菜", "Add complexity"),
        l(
          "根据时间条件改成简单备用餐",
          "Adapt to the schedule with a simpler fallback",
        ),
      ],
      2,
      l(
        "计划应适应生活，执行困难是调整的资料。",
        "The plan should fit life; difficulty provides information for revision.",
      ),
    ),
  ],
  practicalTask: l(
    "写七天家庭菜单，并列采购清单、两项替代、忙碌日备选与安全保存安排。用好吃、买得到、做得到、营养合理四项各写一句复盘。",
    "Write a seven-day menu, shopping list, two substitutions, a busy-day fallback and safe-storage arrangements. Review enjoyment, availability, feasibility and nutritional reasoning in one sentence each.",
  ),
  summary: l(
    [
      "先排日程与库存。",
      "餐盘是提示，不是尺子。",
      "轮换与适当重复都可行。",
      "采购、分工与食品安全属于菜单的一部分。",
      "每周按现实反馈修改。",
    ],
    [
      "Start with schedules and supplies.",
      "A plate is a prompt, not a ruler.",
      "Rotation and suitable repetition both work.",
      "Shopping, shared work and safety belong in the plan.",
      "Revise using real-world feedback.",
    ],
  ),
  sourceIds: ["kkm-plate", "plate", "food-safety", "rice-safety"],
});

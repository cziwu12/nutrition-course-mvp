import {
  lesson,
  l,
  p,
  example,
  call,
  compare,
  section,
  term,
  q,
} from "../authoring";
export const week11Lesson = lesson({
  introduction: l(
    "热量重要，但不是食物的全部信息。本周用能量收支理解体重变化，再认识食欲、饱腹感和食物质量。你不需要开始节食或每天称重；目标是能解释原理，并设计让日常饮食更稳定、舒服的办法。",
    "Calories matter, but they do not describe everything about food. Use energy balance to understand weight change, then consider appetite, satiety and food quality. You do not need to begin dieting or weigh yourself daily. The aim is to explain the principles and make everyday eating more consistent and comfortable.",
  ),
  objectives: l(
    [
      "区分摄入与消耗、BMR 与 TDEE。",
      "解释能量盈余、缺口与体重变化的基本关系。",
      "说明短期体重变化不等于脂肪变化。",
      "认识食欲、饱腹感与环境因素。",
      "区分能量密度和营养密度。",
    ],
    [
      "Distinguish intake from expenditure and BMR from TDEE.",
      "Explain the basic relationship between energy surplus, deficit and weight change.",
      "Recognise that short-term weight changes are not identical to fat changes.",
      "Consider appetite, satiety and environmental influences.",
      "Distinguish energy density from nutrient density.",
    ],
  ),
  sections: [
    section(
      "energy-balance",
      l(
        "11.1 能量收支不是意志力评分",
        "11.1 Energy balance is not a willpower score",
      ),
      [
        p(
          "能量摄入来自食物和饮料中可利用的能量；能量消耗是身体维持功能、处理食物和活动等使用的能量。两者长期不相等时，身体能量储存会变化。这是一种描述关系的方法，不告诉我们为什么某个人吃得更多或消耗更少。",
          "Energy intake is usable energy from foods and drinks. Expenditure is energy used for body functions, food processing and activity. A persistent mismatch changes body energy stores. This describes a relationship; it does not explain why one person eats more or expends less.",
        ),
        p(
          "体型与体重受遗传、疾病、药物、睡眠、压力、生活环境和食物可获得性等影响。把问题只说成“少吃多动很简单”，忽略了调节系统和现实条件。理解能量不应变成对自己或家人的道德评价。",
          "Body size and weight are affected by genetics, conditions, medicines, sleep, stress, environment and access to food. Calling it simply eat less and move more overlooks regulation and real constraints. Understanding energy should not become a moral judgment on yourself or relatives.",
        ),
        example(
          "同样一杯饮料，不同问题",
          "One drink, several relevant questions",
          "甜饮提供能量，这是能量问题；是否让人饱足、有没有经常替代正餐、为什么难以换掉，是行为与营养问题。两种角度可以同时成立，不必只选“卡路里重要”或“质量重要”其中一句。",
          "A sweet drink supplies energy. Whether it satisfies, regularly replaces a meal or is difficult to change are behavioural and nutritional questions. Both perspectives can be true; you do not have to choose between calories matter and quality matters.",
        ),
        call(
          "本课不设减重任务",
          "There is no weight-loss assignment",
          "本周不要求计算个人缺口、追踪体重或限制食物。儿童、怀孕哺乳、疾病及有饮食困扰的人尤其不适合直接套用普通成人减重建议。",
          "This week does not require calculating a personal deficit, tracking weight or restricting food. Children, pregnancy, breastfeeding, illness and eating difficulties especially require more than generic adult weight-loss advice.",
        ),
      ],
      ["energy-intake", "energy-expenditure", "energy-balance"],
      ["weight-factors", "energy-curriculum", "who"],
    ),
    section(
      "bmr-tdee",
      l(
        "11.2 BMR 与 TDEE：身体一直在工作",
        "11.2 BMR and TDEE: the body is always working",
      ),
      [
        p(
          "基础代谢率 BMR 描述在严格休息、空腹及合适环境条件下，维持基本生命功能的能量消耗速率。呼吸、循环、细胞维护都需要能量，即使今天没运动，身体也不是零消耗。BMR 是测量条件下的概念，不是所有人每天应该吃的固定数值。",
          "Basal metabolic rate, BMR, describes energy expenditure for basic life functions under strict resting, fasting and environmental conditions. Breathing, circulation and cellular maintenance need energy even on a day without exercise. BMR is a measurement concept, not a fixed daily food allowance for everyone.",
        ),
        p(
          "TDEE 是每日总能量消耗，包括休息相关消耗、活动及食物热效应。食物热效应指消化、吸收和处理食物也要消耗能量。活动不只是运动课程，还包括走路、家务、工作和其他身体动作。",
          "TDEE is total daily energy expenditure, including resting expenditure, activity and the thermic effect of food. This last term means digesting, absorbing and processing food also uses energy. Activity includes walking, housework, work and other movement, not only exercise sessions.",
        ),
        compare([
          {
            title: l("BMR", "BMR"),
            items: [
              l(
                "严格条件下的基础功能消耗。",
                "Basic-function expenditure under strict conditions.",
              ),
              l("不是每日全部消耗。", "Not total daily expenditure."),
            ],
          },
          {
            title: l("TDEE", "TDEE"),
            items: [
              l(
                "一天不同消耗来源的总和。",
                "Total expenditure from different sources across a day.",
              ),
              l(
                "会随个人与日常活动等变化。",
                "Varies with the person and daily activity, among other factors.",
              ),
            ],
          },
        ]),
        example(
          "手表显示的数字",
          "A number on a watch",
          "运动手表和网上计算器提供估计，未必精确测到个人 TDEE。先确认显示的是活动热量还是包含静息的总热量，避免把同一部分重复相加。",
          "Watches and online calculators provide estimates, not necessarily precise personal TDEE measurements. Check whether the display shows active calories or total calories including rest, to avoid adding the same component twice.",
        ),
      ],
      ["bmr", "tdee", "thermic-effect"],
      ["energy-curriculum", "energy-components"],
    ),
    section(
      "deficit-surplus",
      l(
        "11.3 缺口、盈余与体重的时间尺度",
        "11.3 Deficit, surplus and timescale",
      ),
      [
        p(
          "能量缺口指一段时间内摄入少于消耗；能量盈余则相反。持续缺口通常使身体动用储存能量，持续盈余通常增加储存。但消耗并非永远固定，身体会随着体重、活动和其他变化调整，所以简单公式不能保证线性结果。",
          "A deficit means intake below expenditure over time; a surplus is the reverse. A sustained deficit generally draws on stores, while a sustained surplus generally adds to them. Expenditure is not permanently fixed: the body adapts with weight, activity and other changes, so a simple formula does not guarantee a linear result.",
        ),
        p(
          "体重包括水、肌肉、脂肪、骨骼及消化道内容物等。盐分、糖原水分、月经周期或刚吃完一餐都可能影响短期读数。一天增加的重量不能直接全部算作新增脂肪，也不代表昨天的行为失败。",
          "Weight includes water, muscle, fat, bone and digestive contents. Salt, water associated with glycogen, menstrual changes and a recent meal can affect short-term readings. A one-day increase cannot all be counted as new fat and is not proof that yesterday’s choices failed.",
        ),
        example(
          "假设数字只用来理解关系",
          "Hypothetical numbers explain a relationship",
          "假设某人一天摄入 2,000 千卡、消耗 2,100 千卡，数学上的差是 100 千卡。但两个数本来就是估计，单日差也不能直接预测下周体重。本例不是给你的目标。",
          "If someone hypothetically consumes 2,000 kcal and expends 2,100, the arithmetic difference is 100 kcal. Both figures may be estimates, and one day cannot precisely predict next week’s weight. These are not targets for you.",
        ),
        call(
          "变化越快不代表越健康",
          "Faster change does not mean healthier change",
          "剧烈限制可能影响营养、精力与进食关系。非预期的明显体重变化需要专业评估，而不是自动庆祝体重下降或进一步减少饮食。",
          "Severe restriction can affect nutrition, energy and the relationship with eating. Significant unintentional weight change warrants professional assessment rather than automatic celebration or further restriction.",
          "warning",
        ),
      ],
      ["deficit", "surplus", "body-weight", "adaptation"],
      ["weight-factors", "weight-planner", "energy-curriculum"],
    ),
    section(
      "appetite-satiety",
      l(
        "11.4 食欲与饱腹感不是一个开关",
        "11.4 Appetite and satiety are not one switch",
      ),
      [
        p(
          "饥饿是促使进食的身体感觉之一；食欲还包含对食物的想吃程度，可能受气味、情绪、习惯和环境影响。饱腹感是吃后满足、暂时不想再吃的状态。它们相关，却不总是同时出现或消失。",
          "Hunger is one bodily drive to eat. Appetite also includes desire for food influenced by smell, emotion, habits and surroundings. Satiety is the feeling of satisfaction that reduces the desire to eat for a while afterwards. They are related but do not always change together.",
        ),
        p(
          "消化道、脑和激素互相传递信号；胃的扩张和营养成分也会参与。蛋白质、纤维、水分、食物结构和进餐速度可能影响体验，但没有一种组合保证每个人都同样饱几个小时。睡眠与压力也会影响进食。",
          "Gut, brain and hormones exchange signals, with stomach stretching and nutrients also contributing. Protein, fibre, water, food structure and eating pace can affect the experience, without any combination guaranteeing identical fullness for everyone. Sleep and stress also influence eating.",
        ),
        example(
          "观察早餐后的感受",
          "Observe how breakfast feels afterwards",
          "如果早餐只有一杯甜饮，可以尝试加入普通固体食物，如蛋或豆腐搭配主食，再观察是否方便和舒服。不是为了证明某一种营养素“压制食欲”，而是找到更稳定的进餐习惯。",
          "If breakfast is only a sweet drink, try ordinary solid food such as egg or tofu with a staple, then observe convenience and comfort. This is about a steadier meal routine, not proving that one nutrient suppresses appetite.",
        ),
        call(
          "身体信号也有情境",
          "Body signals have context",
          "疾病、药物或长期限制可能影响饥饿信号。不能要求每个人只凭感觉进食，更不能把饥饿当需要忍耐的敌人。有困扰时应寻求合适支持。",
          "Illness, medication or prolonged restriction can affect hunger signals. Not everyone can rely only on feelings, and hunger is not an enemy to defeat. Seek appropriate support when eating is difficult.",
        ),
      ],
      ["hunger", "appetite", "satiety"],
      ["weight-factors", "satiety-video-source", "energy-regulation"],
    ),
    section(
      "density-quality",
      l(
        "11.5 能量密度不等于营养质量",
        "11.5 Energy density is not nutritional quality",
      ),
      [
        p(
          "能量密度是单位重量食品提供多少能量，例如每克多少千卡。油和坚果通常能量密度较高，含水多的蔬果通常较低。水分、脂肪及食物结构都会影响结果，不能只凭食物体积或外观判断。",
          "Energy density is energy per unit food weight, such as kcal per gram. Oils and nuts tend to be more energy-dense; water-rich produce tends to be less so. Water, fat and food structure affect the result, so appearance or volume alone is not enough.",
        ),
        p(
          "营养密度关注相对于能量或分量提供多少有益营养成分，具体定义会随评价方式变化。坚果可以能量密度高，同时提供不饱和脂肪、蛋白质与矿物质。高能量密度不是坏食物的同义词，低热量也不能保证完整营养。",
          "Nutrient density concerns useful nutrients relative to energy or portion, with definitions varying by assessment method. Nuts can be energy-dense while supplying unsaturated fats, protein and minerals. Energy-dense is not synonymous with bad, and low calories do not guarantee adequate nutrition.",
        ),
        compare([
          {
            title: l("相同能量可以比较什么", "What equal energy can compare"),
            items: [
              l("供能数量。", "The quantity of energy supplied."),
              l("一个明确但有限的维度。", "One clear but limited dimension."),
            ],
          },
          {
            title: l("仍然可能不同", "What can still differ"),
            items: [
              l(
                "蛋白质、纤维、维生素和矿物质。",
                "Protein, fibre, vitamins and minerals.",
              ),
              l(
                "饱足、口味、方便程度与文化意义。",
                "Satisfaction, taste, convenience and cultural meaning.",
              ),
            ],
          },
        ]),
        example(
          "不要用热量抹去其他信息",
          "Do not erase the rest of the information",
          "两份点心热量相近，可以有很不同的蛋白质和纤维含量。读标签时同时看分量与营养，而不是只挑数字最低的产品，或认为数字相同就完全等价。",
          "Two snacks with similar energy can differ substantially in protein and fibre. Read portion and nutrient information together rather than automatically selecting the lowest number or treating equal numbers as complete equivalence.",
        ),
      ],
      ["energy-density", "nutrient-density"],
      ["nhs-calories", "who", "protein-guide", "fats-guide"],
    ),
    section(
      "energy-practice",
      l(
        "11.6 用观察代替严格控制",
        "11.6 Use observation rather than strict control",
      ),
      [
        p(
          "选两个普通日子，记录吃了什么、何时吃、大致分量和饥饿饱足感觉，也记下睡眠、活动和忙碌程度。你可以不用数字量表，只写“很饿”“舒服”“太撑”。记录是帮助发现模式，不是给每一口打分。",
          "Choose two ordinary days and note foods, timing, approximate portions and hunger or fullness, alongside sleep, activity and busyness. Plain descriptions such as very hungry, comfortable or overfull are enough. The record helps identify patterns rather than score every mouthful.",
        ),
        p(
          "如果发现忙碌时跳餐，晚上很饿，优先考虑怎样准备方便午餐；若工作桌上总有零食，考虑安排有意识的加餐。改变要针对实际情境，不必把所有问题都解释成代谢坏掉或需要更多纪律。",
          "If busy days involve skipping lunch and becoming very hungry at night, first consider an accessible lunch. If snacks are always on the desk, consider a deliberate snack routine. Address the actual circumstances rather than attributing everything to a broken metabolism or insufficient discipline.",
        ),
        example(
          "把目标写成行为",
          "Write the goal as a behaviour",
          "“这周两个忙碌工作日提前准备午餐，坐下来吃”是能检查的行为。体重没有按预想变化，也不取消规律进餐或更好营养的价值。",
          "“Prepare lunch for two busy workdays and sit down to eat” is observable. Weight not changing as expected does not cancel the value of more regular meals or better nutrition.",
        ),
        call(
          "不用把生活变成计算器",
          "Life does not need to become a calculator",
          "如果记录让你焦虑、内疚或更想严格限制，可以停止记录并寻求支持。本课程允许用文字反思完成任务，不要求提交体重或卡路里数字。",
          "If recording creates anxiety, guilt or stronger urges to restrict, stop and seek support. You can complete this task through written reflection without submitting weight or calorie numbers.",
          "important",
        ),
      ],
      ["appetite", "satiety", "energy-balance"],
      ["weight-factors", "nhs-calories"],
    ),
  ],
  keyTerms: [
    term(
      "energy-intake",
      "能量摄入",
      "Energy intake",
      "从吃喝中获得的可利用能量，需要按实际分量理解。",
      "Usable energy obtained from foods and drinks, understood in relation to actual amounts consumed.",
    ),
    term(
      "energy-expenditure",
      "能量消耗",
      "Energy expenditure",
      "身体维持功能、处理食物和活动等使用的能量。",
      "Energy used for body functions, food processing, movement and related processes.",
    ),
    term(
      "energy-balance",
      "能量平衡",
      "Energy balance",
      "一定时间内能量摄入、消耗和身体储存变化之间的关系。",
      "The relationship among intake, expenditure and changes in body energy stores over time.",
    ),
    term(
      "bmr",
      "基础代谢率",
      "Basal metabolic rate (BMR)",
      "严格休息等测量条件下维持基本生命功能的能量消耗速率。",
      "The rate of energy use for basic life functions under strict resting and other measurement conditions.",
    ),
    term(
      "tdee",
      "每日总能量消耗",
      "Total daily energy expenditure (TDEE)",
      "一天中休息、活动及处理食物等所有消耗的总量。",
      "Total daily expenditure including rest, activity and food processing.",
    ),
    term(
      "thermic-effect",
      "食物热效应",
      "Thermic effect of food",
      "消化、吸收和处理所吃食物时发生的能量消耗。",
      "Energy expenditure associated with digesting, absorbing and processing food.",
    ),
    term(
      "deficit",
      "能量缺口",
      "Energy deficit",
      "一定时期内能量摄入少于消耗的状态，不是个人处方。",
      "Intake below expenditure over a period, a descriptive state rather than an individual prescription.",
    ),
    term(
      "surplus",
      "能量盈余",
      "Energy surplus",
      "一定时期内能量摄入多于消耗的状态。",
      "Intake exceeding expenditure over a period of time.",
    ),
    term(
      "body-weight",
      "体重",
      "Body weight",
      "身体所有组成及暂时内容物的总重量，不等于脂肪重量。",
      "The combined weight of body components and temporary contents, not the same as fat mass.",
    ),
    term(
      "adaptation",
      "适应性变化",
      "Adaptation",
      "身体随摄入、体重或其他条件变化调整部分功能的过程。",
      "Adjustment of body functions as intake, weight or other conditions change.",
    ),
    term(
      "hunger",
      "饥饿",
      "Hunger",
      "促进进食的身体感觉之一，不能只用意志力解释。",
      "A bodily drive to eat that cannot be explained simply by willpower.",
    ),
    term(
      "appetite",
      "食欲",
      "Appetite",
      "想吃食物的欲望，受生理、情绪、习惯及环境等影响。",
      "The desire to eat, influenced by physiology, emotion, habits and surroundings.",
    ),
    term(
      "satiety",
      "饱腹感",
      "Satiety",
      "吃后感到满足、在一段时间内减少进食欲望的状态。",
      "The satisfied state after eating that reduces the desire to eat for a period.",
    ),
    term(
      "energy-density",
      "能量密度",
      "Energy density",
      "单位重量食物所提供的能量，并不单独表示营养好坏。",
      "Energy per unit food weight, which does not alone establish nutritional quality.",
    ),
    term(
      "nutrient-density",
      "营养密度",
      "Nutrient density",
      "相对于能量或分量提供营养成分的程度，依具体评估方法而定。",
      "Nutrients provided relative to energy or portion, depending on the assessment method used.",
    ),
  ],
  questions: [
    q(
      "bmr",
      l("BMR 等于一天所有消耗吗？", "Is BMR the whole day’s expenditure?"),
      [
        l(
          "不等于，活动和食物处理等还需考虑。",
          "No, activity and food processing also matter.",
        ),
        l("等于，运动只是额外奖励。", "Yes, exercise is merely a bonus."),
      ],
      0,
      l(
        "TDEE 描述总量，BMR 只描述特定条件下的一部分。",
        "TDEE describes the total; BMR describes one component under specified conditions.",
      ),
    ),
    q(
      "scale",
      l(
        "一天体重上升能全部算作脂肪增加吗？",
        "Can a one-day weight increase all be counted as fat gain?",
      ),
      [
        l("能，体重秤只测脂肪。", "Yes, the scale measures only fat."),
        l(
          "不能，水分和内容物等也会变化。",
          "No, water and digestive contents can also change.",
        ),
      ],
      1,
      l(
        "体重是多个组成部分的总和。",
        "Weight is the sum of multiple components.",
      ),
    ),
    q(
      "density",
      l(
        "坚果能量密度高，表示没有营养价值吗？",
        "Does high energy density mean nuts lack nutritional value?",
      ),
      [
        l(
          "不是，能量与营养是不同维度。",
          "No, energy and nutrition are different dimensions.",
        ),
        l(
          "是，高热量食物都没营养。",
          "Yes, all high-calorie foods lack nutrients.",
        ),
      ],
      0,
      l(
        "脂肪类型、蛋白质和矿物质等信息仍然重要。",
        "Fat types, protein and minerals remain relevant.",
      ),
    ),
    q(
      "estimate",
      l(
        "计算器给出 TDEE 数字，应怎样理解？",
        "How should a calculator’s TDEE number be understood?",
      ),
      [
        l(
          "绝对准确，必须每天严格匹配。",
          "Perfectly accurate and mandatory every day.",
        ),
        l(
          "基于假设的估计，不能代替个人评估。",
          "An estimate based on assumptions, not a substitute for personal assessment.",
        ),
      ],
      1,
      l(
        "测量与模型都有不确定性，不能把估计当精确处方。",
        "Measurements and models have uncertainty; an estimate is not a precise prescription.",
      ),
    ),
  ],
  practicalTask: l(
    "观察两个普通日子的进餐时间、食物、饥饿饱足、睡眠和活动。写出一个模式及一个温和可行的行为调整。再用自己的话解释“热量重要，但不能描述食物全部营养质量”。不要求称重、算缺口或减重。",
    "Observe meal timing, food, hunger/fullness, sleep and activity on two ordinary days. Identify one pattern and one gentle, feasible behavioural change. Explain in your own words why calories matter but do not describe all food quality. No weighing, deficit calculation or weight-loss target is required.",
  ),
  summary: l(
    [
      "能量关系是生理描述，不是道德评价。",
      "BMR 不等于 TDEE，活动以外也会消耗能量。",
      "身体会适应，体重也包含水和其他组成。",
      "食欲与饱腹受身体、心理和环境共同影响。",
      "能量密度与营养密度不同，现实习惯比极端限制更适合本课。",
    ],
    [
      "Energy balance describes physiology, not morality.",
      "BMR is not TDEE, and expenditure continues beyond exercise.",
      "Bodies adapt, and weight includes water and other components.",
      "Appetite and satiety involve body, mind and environment.",
      "Energy density differs from nutrient density; this lesson prioritises feasible habits over extreme restriction.",
    ],
  ),
  sourceIds: [
    "weight-factors",
    "energy-curriculum",
    "energy-components",
    "weight-planner",
    "satiety-video-source",
    "energy-regulation",
    "nhs-calories",
    "who",
    "protein-guide",
    "fats-guide",
  ],
});

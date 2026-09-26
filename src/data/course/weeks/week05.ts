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
export const week05Lesson = lesson({
  introduction: l(
    "维生素需要量很小，作用却不小。本周不要求背熟所有数字，而是建立“作用—食物来源—不足与过量”的阅读方法。维生素参与身体工作，但不是热量，也不能补回一整套失衡的饮食。",
    "Vitamins are needed in small quantities but have important jobs. Instead of memorising every intake number, learn to ask about function, food sources, deficiency and excess. Vitamins support the body’s work; they are not calories and cannot compensate for an entire unbalanced eating pattern.",
  ),
  objectives: l(
    [
      "区分水溶性与脂溶性维生素。",
      "认识 A、B 族、C、D、E、K 的主要作用与来源。",
      "解释维生素不直接提供能量。",
      "区分饮食不足、缺乏诊断与补充剂使用。",
      "根据可靠资料检查家庭饮食的多样性。",
    ],
    [
      "Distinguish water-soluble and fat-soluble vitamins.",
      "Recognise the main roles and sources of A, the B group, C, D, E and K.",
      "Explain why vitamins do not directly supply energy.",
      "Separate low intake, diagnosed deficiency and supplement use.",
      "Use reliable information to review variety in family meals.",
    ],
  ),
  sections: [
    section(
      "vitamin-map",
      l("5.1 先建立一张维生素地图", "5.1 Start with a vitamin map"),
      [
        p(
          "维生素是身体正常工作所需的有机微量营养素。“有机”在这里指化学结构，并不是有机种植标签。它们参与许多反应，例如帮助利用食物中的能量、形成组织或维持正常功能；本身却不像碳水、蛋白质、脂肪那样提供热量。",
          "Vitamins are organic micronutrients needed for normal body function. Here, organic describes chemistry, not an organic farming label. They participate in processes such as using food energy, forming tissues and maintaining normal functions. They do not supply calories in the way carbohydrate, protein and fat do.",
        ),
        compare([
          {
            title: l("脂溶性：A、D、E、K", "Fat-soluble: A, D, E and K"),
            items: [
              l(
                "吸收与脂肪消化有关，身体可储存。",
                "Absorption is linked to fat digestion; the body can store them.",
              ),
              l(
                "长期额外摄入可能累积，不宜自行追求高剂量。",
                "Extra intake can accumulate; do not pursue high doses on your own.",
              ),
            ],
          },
          {
            title: l("水溶性：B 族和 C", "Water-soluble: B group and C"),
            items: [
              l(
                "在水中溶解，多数需要规律补充食物来源。",
                "Dissolve in water; most need regular dietary sources.",
              ),
              l(
                "并非完全不储存或绝对无毒，例如 B12 可储存，过量 B6 可伤害神经。",
                "Not entirely unstored or harmless: B12 can be stored, and excess B6 can damage nerves.",
              ),
            ],
          },
        ]),
        example(
          "不要把辅助工具当燃料",
          "Do not confuse helpers with fuel",
          "“帮助能量代谢”不等于喝一瓶维生素水便得到持久精力。饮料的热量主要来自其中的糖等供能成分；还要考虑睡眠、进餐和健康状况。",
          "“Helps energy metabolism” does not mean a vitamin drink guarantees lasting energy. Calories in the drink mainly come from ingredients such as sugar. Sleep, regular meals and health also matter.",
        ),
        call(
          "分类有用，但不是安全保证",
          "A useful classification, not a safety guarantee",
          "水溶性不等于可以无限吃；脂溶性也不等于普通食物都危险。剂量、形式、摄入时间和个人情况都需要考虑。",
          "Water-soluble does not mean unlimited intake is safe. Fat-soluble does not make ordinary foods dangerous. Amount, form, duration and personal circumstances all matter.",
        ),
      ],
      ["vitamin", "water-soluble", "fat-soluble"],
      ["nhs-vitamins", "b-vitamins"],
    ),
    section(
      "vitamin-a",
      l(
        "5.2 维生素 A：从视力到食物来源",
        "5.2 Vitamin A: from vision to food sources",
      ),
      [
        p(
          "维生素 A 支持正常视力、免疫功能和生长。动物性食物可提供已形成的维生素 A；部分植物色素，例如 β-胡萝卜素，可以在体内转化为维生素 A。两种来源的形式不同，所以食物颜色不能直接换算成相同剂量。",
          "Vitamin A supports normal vision, immune function and growth. Animal foods can provide preformed vitamin A; some plant pigments, including beta-carotene, can be converted into vitamin A. These are different forms, so food colour cannot be translated directly into an equivalent dose.",
        ),
        p(
          "蛋和奶制品可提供一些维生素 A，肝脏含量很高；橙色和深绿色蔬菜可以提供类胡萝卜素。胡萝卜、南瓜和绿叶菜都可以进入普通家庭菜单，不必购买某一种昂贵“超级食物”。",
          "Eggs and dairy foods provide some vitamin A, while liver is very rich in it. Orange and dark-green vegetables can supply carotenoids. Carrots, pumpkin and leafy greens can all fit ordinary family meals without buying an expensive “superfood”.",
        ),
        example(
          "“支持正常视力”是什么意思？",
          "What does “supports normal vision” mean?",
          "纠正缺乏与让本来营养充足的人拥有超强视力不是一回事。吃胡萝卜不能取代眼科检查，也不能据此判断近视是营养不足。",
          "Correcting a deficiency is different from giving someone who is already well nourished extraordinary vision. Carrots do not replace eye examinations, and short-sightedness does not establish a nutrient deficiency.",
        ),
        call(
          "高含量不自动更好",
          "A higher amount is not automatically better",
          "过量预成型维生素 A 可有害。怀孕或备孕涉及额外风险，应咨询专业人员，不自行用肝脏或高剂量补充剂“进补”。吸烟者也不应自行服用高剂量 β-胡萝卜素补充剂。",
          "Excess preformed vitamin A can be harmful. Pregnancy and pregnancy planning require professional advice rather than self-prescribing liver or high-dose products. Smokers should also avoid self-prescribing high-dose beta-carotene supplements.",
          "warning",
        ),
      ],
      ["vitamin-a", "carotenoid"],
      ["vitamin-a"],
    ),
    section(
      "b-and-c",
      l(
        "5.3 B 族与 C：名称相近，工作不同",
        "5.3 B vitamins and C: different jobs",
      ),
      [
        p(
          "B 族是一组维生素，不是单一成分：B1 硫胺素、B2 核黄素、B3 烟酸、B5 泛酸、B6、B7 生物素、B9 叶酸和 B12。多种 B 族维生素参与能量代谢，也有不同的组织和神经功能。全谷物、豆类、肉、蛋、奶等来源各有贡献，没有一种食物包办全部。",
          "The B group is a family: B1 thiamin, B2 riboflavin, B3 niacin, B5 pantothenic acid, B6, B7 biotin, B9 folate and B12. Several participate in energy metabolism, with differing tissue and nervous-system roles. Whole grains, pulses, meat, eggs and dairy contribute different members; one food does not provide everything.",
        ),
        p(
          "叶酸参与制造遗传物质和细胞分裂。B12 支持神经功能和红细胞形成，天然来源主要是动物性食物。严格纯素者需要可靠的强化食品或经专业指导的补充安排，不能假定普通发酵蔬菜提供足够 B12。强化是指生产时加入特定营养素。",
          "Folate supports production of genetic material and cell division. B12 supports nerves and red blood cell formation and occurs naturally mainly in animal foods. Strict vegans need reliable fortified foods or an appropriate supplement plan; ordinary fermented vegetables should not be assumed to supply enough B12. Fortification means adding specified nutrients during production.",
        ),
        p(
          "维生素 C 参与胶原蛋白形成，胶原是结缔组织的重要结构蛋白；C 也帮助植物性非血红素铁吸收。番石榴、柑橘、甜椒等提供 C。长时间加热与储存可能损失部分 C，但不需要因此拒绝所有熟蔬菜。",
          "Vitamin C helps form collagen, a structural protein in connective tissue, and assists absorption of plant-derived non-haem iron. Guava, citrus fruit and peppers provide C. Prolonged heating and storage can reduce some vitamin C, but this is not a reason to reject all cooked vegetables.",
        ),
        example(
          "一餐可以有多种贡献",
          "One meal can contribute in several ways",
          "豆类配饭，加蔬菜和一份水果，不是某一种“补血神餐”，而是让不同食物互补的做法。若持续疲倦，不要只凭症状购买 B12 或铁；原因需要评估。",
          "Beans with rice, vegetables and fruit are not a magical blood-building meal. They show how different foods can complement one another. Persistent fatigue needs assessment rather than buying B12 or iron based only on symptoms.",
        ),
      ],
      ["b-vitamins", "folate", "b12", "vitamin-c", "fortification"],
      ["b-vitamins", "vitamin-b12", "vitamin-c"],
    ),
    section(
      "vitamin-d",
      l(
        "5.4 维生素 D：阳光也不是简单处方",
        "5.4 Vitamin D: sunlight is not a simple prescription",
      ),
      [
        p(
          "维生素 D 帮助钙吸收，并参与骨骼与肌肉功能。皮肤在特定紫外线照射下可以形成 D，但影响因素很多，包括年龄、肤色、衣着和日照条件。在热带生活不等于每个人的维生素 D 状态都相同。",
          "Vitamin D helps calcium absorption and supports bone and muscle function. Skin can produce it under certain ultraviolet exposure, but age, skin pigmentation, clothing and exposure conditions all matter. Living in the tropics does not give everyone identical vitamin D status.",
        ),
        p(
          "脂肪较多的鱼是食物来源之一，有些奶和植物饮品经过强化。不要只凭包装画着太阳或写着“营养”就判断含量，应该查看是否列出维生素 D 和每份含量。不同品牌甚至同品牌不同产品都可能不同。",
          "Oily fish is one dietary source, and some milks or plant drinks are fortified. A sun symbol or the word nutritious on packaging does not establish the amount: check whether vitamin D and its amount per serving are listed. Products can differ even within the same brand.",
        ),
        example(
          "比较两盒饮品",
          "Compare two cartons",
          "饮品甲标明强化维生素 D，饮品乙没有列出。合理结论是甲有可查信息，乙的含量尚不明确；不是“所有植物饮品都有 D”，也不是“没有列出就绝对没有”。",
          "Drink A declares vitamin D fortification; drink B does not list it. A has information you can check, while B’s content remains uncertain. Neither “all plant drinks contain D” nor “unlisted means absolutely absent” follows.",
        ),
        call(
          "不在这里开日晒或补充剂处方",
          "No sunlight or supplement prescription here",
          "本课不设统一日晒分钟数，也不依据疲倦诊断缺乏。是否检查或补充、用多少，应由合适专业人员结合情况决定。高剂量长期摄入可以造成伤害。",
          "This lesson does not prescribe a universal number of sun-exposure minutes or diagnose deficiency from tiredness. Appropriate professionals should guide testing and supplementation when needed. Prolonged high-dose intake can cause harm.",
          "warning",
        ),
      ],
      ["vitamin-d", "fortification"],
      ["vitamin-d"],
    ),
    section(
      "e-and-k",
      l(
        "5.5 维生素 E 与 K：正常功能不等于治疗",
        "5.5 Vitamins E and K: function is not treatment",
      ),
      [
        p(
          "维生素 E 参与抗氧化保护。氧化反应是正常生理的一部分，身体有多种调节机制；把 E 称为抗氧化营养素，不表示大量服用就可以预防所有疾病。坚果、种子和部分植物油是食物来源。",
          "Vitamin E contributes to antioxidant protection. Oxidation is part of normal physiology, regulated by multiple body systems. Calling E an antioxidant does not mean large doses prevent every disease. Nuts, seeds and some vegetable oils are food sources.",
        ),
        p(
          "维生素 K 参与正常血液凝固，也参与骨相关蛋白的工作。绿叶菜是重要来源。记住“参与”这个词：某营养素参与骨骼功能，不能直接推导出任何一款高剂量产品都能治疗骨质疏松。",
          "Vitamin K supports normal blood clotting and the work of bone-related proteins. Leafy green vegetables are important sources. Notice the word supports: a role in bone function does not establish that a high-dose product treats osteoporosis.",
        ),
        example(
          "一份蔬菜不止一种标签",
          "Vegetables have more than one label",
          "同一盘绿叶菜可能提供 K、类胡萝卜素和纤维。无需为了每一种维生素各买一款“专用食品”；先看一周饮食是否有多种普通食物。",
          "A plate of leafy vegetables can contribute K, carotenoids and fibre. There is no need to buy a separate specialist food for every vitamin. First look for variety among ordinary foods across the week.",
        ),
        call(
          "药物需要特别考虑",
          "Medication changes the discussion",
          "服用华法林等药物者，应与医疗团队讨论维生素 K 摄入的稳定性，不要自行突然停吃所有青菜或加补充剂。高剂量维生素 E 也可能增加出血风险并与药物相互作用。",
          "People taking warfarin should discuss consistent vitamin K intake with their care team, rather than suddenly avoiding all greens or adding supplements. High-dose vitamin E can also increase bleeding risk and interact with medication.",
          "warning",
        ),
      ],
      ["vitamin-e", "vitamin-k", "antioxidant"],
      ["vitamin-e", "vitamin-k"],
    ),
    section(
      "vitamin-review",
      l(
        "5.6 从维生素表回到家庭餐桌",
        "5.6 Bring the vitamin map back to meals",
      ),
      [
        p(
          "检查饮食时，先问“最近一周有哪些来源经常缺席”，而不是根据一天菜单宣布缺乏。低摄入表示可能需要调整或进一步评估；确诊缺乏需要结合病史、症状及适当检查。身体储存与吸收也影响营养状态。",
          "When reviewing meals, ask which sources were regularly missing over the week. Do not diagnose deficiency from a single day. Low intake may suggest an adjustment or further assessment; diagnosis considers history, symptoms and appropriate tests. Storage and absorption also affect nutritional status.",
        ),
        p(
          "补充剂有合理用途，例如特定生命阶段、确诊缺乏或难以满足的需要，但不是把剂量越堆越高。复合维生素、单方产品与强化饮料可能重复提供同一种成分。先记录现有产品，再向医生、营养专业人员或药剂师询问。",
          "Supplements can have appropriate uses in particular life stages, diagnosed deficiencies or unmet needs. This does not mean stacking higher doses. Multivitamins, single-nutrient products and fortified drinks may duplicate ingredients. Record existing products before discussing them with a doctor, qualified nutrition professional or pharmacist.",
        ),
        example(
          "本周练习的写法",
          "A useful way to write this week’s task",
          "写下“维生素 C—胶原形成—番石榴或甜椒—家里本周是否有？”比写“缺 C 就买最大剂量”更有帮助。选择一种容易买到的食物变化，并说明哪项信息尚不确定。",
          "“Vitamin C—collagen formation—guava or peppers—did we have these this week?” is more useful than “buy the largest dose if C is low”. Choose one accessible food change and identify information you still do not know.",
        ),
        call(
          "查表看对象和单位",
          "Check the population and the units",
          "mg 是毫克，µg 是微克，1 mg = 1,000 µg。不同年龄或生命阶段的参考值不同。第 1 周的 UL 仍是上限参考，不是每个人应追求的目标。",
          "mg means milligrams and µg means micrograms; 1 mg = 1,000 µg. Reference values vary by age and life stage. Week 1’s UL remains an upper-limit reference, not a target for everyone.",
        ),
      ],
      ["deficiency", "supplement"],
      ["supplements-guide", "dri"],
    ),
  ],
  keyTerms: [
    term(
      "vitamin",
      "维生素",
      "Vitamin",
      "身体需要少量摄入的有机营养素，支持正常功能，本身不提供热量。",
      "An organic nutrient needed in small amounts to support normal functions; it does not itself supply calories.",
    ),
    term(
      "water-soluble",
      "水溶性",
      "Water-soluble",
      "能溶于水的性质；水溶性维生素包括 B 族和 C，但不代表过量无害。",
      "Able to dissolve in water; B vitamins and C belong here, but excessive intake is not automatically harmless.",
    ),
    term(
      "fat-soluble",
      "脂溶性",
      "Fat-soluble",
      "能溶于脂肪的性质；A、D、E、K 的吸收与脂肪消化相关。",
      "Able to dissolve in fat; absorption of A, D, E and K is associated with fat digestion.",
    ),
    term(
      "vitamin-a",
      "维生素 A",
      "Vitamin A",
      "支持视力、免疫功能和生长的脂溶性维生素。",
      "A fat-soluble vitamin supporting vision, immune function and growth.",
    ),
    term(
      "carotenoid",
      "类胡萝卜素",
      "Carotenoid",
      "一类植物色素，其中部分可在体内转化为维生素 A。",
      "A family of plant pigments, some of which can be converted into vitamin A.",
    ),
    term(
      "b-vitamins",
      "B 族维生素",
      "B vitamins",
      "包括八种维生素的一组微量营养素，参与代谢等不同工作。",
      "A group of eight vitamins with distinct jobs including roles in metabolism.",
    ),
    term(
      "folate",
      "叶酸",
      "Folate",
      "B9，参与遗传物质形成和细胞分裂；补充剂常用形式为 folic acid。",
      "Vitamin B9, involved in genetic material production and cell division; folic acid is a common supplemental form.",
    ),
    term(
      "b12",
      "维生素 B12",
      "Vitamin B12",
      "支持红细胞形成与神经功能，天然食物来源主要为动物性食物。",
      "A vitamin supporting red blood cell formation and nerves, found naturally mainly in animal foods.",
    ),
    term(
      "vitamin-c",
      "维生素 C",
      "Vitamin C",
      "水溶性维生素，参与胶原形成并帮助非血红素铁吸收。",
      "A water-soluble vitamin involved in collagen formation and non-haem iron absorption.",
    ),
    term(
      "vitamin-d",
      "维生素 D",
      "Vitamin D",
      "帮助钙吸收并支持骨骼与肌肉功能的脂溶性维生素。",
      "A fat-soluble vitamin helping calcium absorption and supporting bone and muscle function.",
    ),
    term(
      "vitamin-e",
      "维生素 E",
      "Vitamin E",
      "参与抗氧化保护等正常身体功能的脂溶性维生素。",
      "A fat-soluble vitamin involved in antioxidant protection and other normal functions.",
    ),
    term(
      "vitamin-k",
      "维生素 K",
      "Vitamin K",
      "参与正常血液凝固和骨相关蛋白工作的脂溶性维生素。",
      "A fat-soluble vitamin involved in normal clotting and bone-related proteins.",
    ),
    term(
      "antioxidant",
      "抗氧化物",
      "Antioxidant",
      "参与限制某些氧化反应或其损伤的物质，不等于包治疾病。",
      "A substance helping limit certain oxidative reactions or damage, not a cure-all.",
    ),
    term(
      "fortification",
      "食品强化",
      "Fortification",
      "在生产时向食品加入特定营养素，应以标签确认具体成分。",
      "Adding specified nutrients during food production; check labels for the actual ingredients.",
    ),
    term(
      "deficiency",
      "营养素缺乏",
      "Nutrient deficiency",
      "营养状态不足以维持正常功能，需要适当评估而非只看一天饮食。",
      "Nutritional status inadequate for normal function, requiring assessment rather than a one-day menu judgment.",
    ),
    term(
      "supplement",
      "膳食补充剂",
      "Dietary supplement",
      "提供特定成分的产品，可有合理用途但不能代替完整饮食。",
      "A product providing specified ingredients that may have appropriate uses but cannot replace a complete eating pattern.",
    ),
  ],
  questions: [
    q(
      "energy",
      l(
        "B 族帮助能量代谢，表示什么？",
        "What does supporting energy metabolism mean?",
      ),
      [
        l("维生素本身就是热量。", "Vitamins themselves are calories."),
        l(
          "参与利用能量的过程，不直接供能。",
          "They help processes that use energy, without directly supplying it.",
        ),
      ],
      1,
      l(
        "辅助反应与提供燃料是两回事。",
        "Helping a reaction and supplying its fuel are different.",
      ),
    ),
    q(
      "soluble",
      l(
        "水溶性维生素可以无限补充吗？",
        "Can water-soluble vitamins be supplemented without limit?",
      ),
      [
        l("不可以，过量仍可有害。", "No, excess can still cause harm."),
        l("可以，都会立刻排出。", "Yes, all excess leaves immediately."),
      ],
      0,
      l(
        "分类不代表毒性或储存的绝对规则，B6 和 B12 就提醒我们不要过度简化。",
        "The classification is not an absolute rule about toxicity or storage; B6 and B12 illustrate why.",
      ),
    ),
    q(
      "b12",
      l(
        "纯素家庭应特别核实什么？",
        "What should a vegan household particularly verify?",
      ),
      [
        l(
          "所有发酵食物都能提供充足 B12。",
          "Every fermented food supplies enough B12.",
        ),
        l(
          "是否有可靠 B12 来源及适当安排。",
          "Whether there are reliable B12 sources and an appropriate plan.",
        ),
      ],
      1,
      l(
        "不要把发酵与可靠的 B12 供应画上等号。",
        "Fermentation does not automatically mean a reliable B12 supply.",
      ),
    ),
    q(
      "diagnosis",
      l(
        "一天没吃水果，能诊断缺 C 吗？",
        "Can one day without fruit diagnose vitamin C deficiency?",
      ),
      [
        l("能，立刻补最大剂量。", "Yes, take the largest dose immediately."),
        l(
          "不能，应看整体摄入与适当评估。",
          "No, consider overall intake and appropriate assessment.",
        ),
      ],
      1,
      l(
        "一天记录可以提示问题，不能单独确定身体营养状态。",
        "A one-day record can prompt a question but cannot establish nutritional status.",
      ),
    ),
  ],
  practicalTask: l(
    "制作家庭维生素地图：为 A、B 族、C、D、E、K 各记录一个作用和两种可能的食物来源，核实强化食品标签。圈出最近一周较少出现的来源，提出一个可行变化；列出不确定的问题，而不是自行诊断缺乏或开补充剂剂量。",
    "Make a family vitamin map: record one role and two possible food sources for A, B vitamins, C, D, E and K, checking labels on fortified products. Identify sources rarely seen over the last week and suggest one feasible change. List uncertainties rather than diagnosing deficiency or prescribing supplements.",
  ),
  summary: l(
    [
      "维生素支持身体工作，本身不供热量。",
      "A、D、E、K 脂溶，B 族和 C 水溶，但分类不是安全保证。",
      "普通食物多样搭配，胜过只追一种成分。",
      "低摄入与确诊缺乏不是同一回事。",
      "补充剂、药物和强化食品可能相互影响或重复。",
    ],
    [
      "Vitamins support body functions without supplying calories.",
      "A, D, E and K are fat-soluble; B and C are water-soluble, but categories are not safety guarantees.",
      "Varied ordinary foods matter more than chasing one ingredient.",
      "Low intake and diagnosed deficiency are different.",
      "Supplements, medicines and fortified foods can interact or overlap.",
    ],
  ),
  sourceIds: [
    "nhs-vitamins",
    "b-vitamins",
    "vitamin-a",
    "vitamin-b12",
    "vitamin-c",
    "vitamin-d",
    "vitamin-e",
    "vitamin-k",
    "supplements-guide",
    "dri",
  ],
});

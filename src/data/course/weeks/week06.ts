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
export const week06Lesson = lesson({
  introduction: l(
    "矿物质不只存在于营养片中：豆腐、鱼、豆类、蔬菜、奶和调味料都可能提供。本周把七种常见矿物质放回餐桌，学会区分“需要它”和“应该多吃它”，并练习看懂盐与钠。",
    "Minerals are not confined to supplement bottles: tofu, fish, pulses, vegetables, milk and seasonings can all contribute. This week brings seven minerals back to the table, distinguishes needing a nutrient from needing more of it, and makes sense of salt versus sodium.",
  ),
  objectives: l(
    [
      "说明钙、铁、镁、锌、钾、钠、碘的主要作用。",
      "找出不同矿物质的日常来源。",
      "区分食物含量与生物利用度。",
      "用同一基准比较钠并换算盐当量。",
      "识别需要专业意见的补充剂或代盐问题。",
    ],
    [
      "Describe the main jobs of calcium, iron, magnesium, zinc, potassium, sodium and iodine.",
      "Identify everyday sources of different minerals.",
      "Distinguish food content from bioavailability.",
      "Compare sodium on an equal basis and calculate salt equivalents.",
      "Recognise when supplements or salt substitutes require professional advice.",
    ],
  ),
  sections: [
    section(
      "mineral-basics",
      l(
        "6.1 矿物质不是越多越好",
        "6.1 Minerals are not a more-is-better contest",
      ),
      [
        p(
          "矿物质是身体需要的无机元素，例如钙和铁。“无机”不是不天然，也不是有害，只是与维生素不同的化学分类。有些参与结构，有些参与神经、肌肉、体液或酶的工作；它们不直接提供热量。",
          "Minerals are inorganic elements needed by the body, such as calcium and iron. Inorganic does not mean unnatural or harmful; it is a chemical distinction from vitamins. Some contribute to structures, others to nerves, muscles, body fluids or enzymes. They do not directly provide calories.",
        ),
        p(
          "我们所需的量不同：钙通常以毫克讨论，碘常以微克讨论。需要量较少不代表不重要。参考摄入量也会随年龄、生命阶段和健康情况变化；本课学习判断方法，不为每位家人开同一张剂量表。",
          "Required quantities differ: calcium is usually discussed in milligrams, iodine often in micrograms. A smaller requirement does not mean lower importance. Reference intakes vary with age, life stage and health. The aim is to learn a method, not prescribe one dosing chart for every relative.",
        ),
        compare([
          {
            title: l("食物含量", "Content in food"),
            items: [
              l(
                "标签或数据库告诉我们吃进去多少。",
                "Labels or databases estimate the amount eaten.",
              ),
              l(
                "先核实每份、每100克及实际分量。",
                "Check per serving, per 100 g and actual portion size.",
              ),
            ],
          },
          {
            title: l("生物利用度", "Bioavailability"),
            items: [
              l(
                "身体能吸收并利用的比例也重要。",
                "The proportion absorbed and used also matters.",
              ),
              l(
                "营养素形式、整餐搭配和身体状态会影响。",
                "Nutrient form, meal composition and body status can affect it.",
              ),
            ],
          },
        ]),
        example(
          "数量少不等于次要",
          "Small quantities can be essential",
          "不能把钙的 mg 和碘的 µg 数字直接比较，宣布数字大的更重要。就像不同工具有不同用途，矿物质不能互相代替。",
          "Do not compare a calcium number in mg with an iodine number in µg and declare the larger number more important. Like tools with different jobs, minerals are not interchangeable.",
        ),
      ],
      ["mineral", "bioavailability"],
      ["nhs-vitamins", "calcium", "iodine"],
    ),
    section(
      "calcium",
      l(
        "6.2 钙：骨骼是一项长期工程",
        "6.2 Calcium: bones are a long-term project",
      ),
      [
        p(
          "钙是骨骼和牙齿的重要成分，也参与肌肉收缩和神经信号。骨组织不是一块永久不变的石头，而是不断更新。维持骨健康还涉及维生素 D、合适的活动、年龄及其他因素，因此不能只把“补钙”当作全部计划。",
          "Calcium is a major component of bones and teeth and also contributes to muscle contraction and nerve signals. Bone is renewing tissue, not a permanent stone. Bone health also involves vitamin D, suitable activity, age and other factors, so taking calcium is not an entire bone-health plan.",
        ),
        p(
          "奶、酸奶、连软骨食用的罐装鱼，以及部分钙凝固豆腐或强化饮品可提供钙。豆腐制作方式不同，植物饮品强化情况不同，因此要查具体产品，不能把“豆制品”都当成相同钙来源。",
          "Milk, yoghurt, canned fish eaten with soft bones, some calcium-set tofu and fortified drinks can provide calcium. Tofu processing methods and drink fortification differ, so check the actual product rather than treating every soy food as an equivalent calcium source.",
        ),
        example(
          "不喝奶的家庭成员",
          "A relative who does not drink milk",
          "先问原因：口味、乳糖不适、过敏或其他选择？可讨论合适的无乳糖产品或其他来源；乳糖不耐受与牛奶蛋白过敏不是一回事，不应随便互换处理方法。",
          "First ask why: taste, lactose discomfort, allergy or another preference? Suitable lactose-free products or other sources may be considered. Lactose intolerance and milk-protein allergy are different and should not be managed as if interchangeable.",
        ),
        call(
          "一个菜单不能诊断骨质疏松",
          "A menu cannot diagnose osteoporosis",
          "不喝奶并不自动表示缺钙，喝奶也不保证没有骨骼问题。骨折风险、检查与补充剂需求应由专业人员评估。",
          "Not drinking milk does not automatically establish calcium deficiency, and drinking it does not guarantee healthy bones. Fracture risk, testing and supplement needs require appropriate assessment.",
        ),
      ],
      ["calcium", "bioavailability"],
      ["calcium", "vitamin-d"],
    ),
    section(
      "iron",
      l(
        "6.3 铁：运氧与吸收是两个问题",
        "6.3 Iron: oxygen transport and absorption",
      ),
      [
        p(
          "铁参与血红蛋白的结构，血红蛋白帮助红细胞运输氧气。长期缺铁可能发展为缺铁性贫血，但贫血有不同原因，疲倦也有很多原因；不能只凭脸色或一天饮食来诊断。",
          "Iron is part of haemoglobin, which helps red blood cells carry oxygen. Prolonged iron deficiency can lead to iron-deficiency anaemia, but anaemia has several causes and so does fatigue. Appearance or a single day’s meals cannot establish a diagnosis.",
        ),
        p(
          "肉和海鲜含血红素铁，也有非血红素铁；豆类、部分蔬菜及强化食品主要提供非血红素铁。两者吸收特点不同。维生素 C 可以帮助非血红素铁吸收，因此可以考虑豆类配蔬菜水果，而不是认为植物来源“完全没用”。",
          "Meat and seafood contain haem iron as well as non-haem iron. Pulses, some vegetables and fortified foods mainly supply non-haem iron. Absorption differs, and vitamin C can help non-haem iron absorption. Pairing pulses with vegetables or fruit makes more sense than dismissing plant iron as useless.",
        ),
        example(
          "先问问题，再下结论",
          "Ask before concluding",
          "一位经期出血多、持续疲倦的人，可能需要医疗评估；建议只靠多吃某种菜或自行高剂量补铁，会跳过重要原因。饮食支持与检查并不冲突。",
          "Someone with heavy menstrual bleeding and persistent fatigue may need medical assessment. Recommending only a particular vegetable or self-prescribed high-dose iron could miss important causes. Dietary support and assessment can work together.",
        ),
        call(
          "补铁不是普通零食",
          "Iron supplements are not ordinary snacks",
          "铁过量有害，尤其应把铁补充剂放在儿童接触不到的地方。是否需要及用量由专业人员判断；含铁不等于适合每一个人。",
          "Excess iron is harmful; keep iron supplements out of children’s reach. Professionals should guide whether they are needed and in what amount. Containing iron does not make a product suitable for everyone.",
          "warning",
        ),
      ],
      ["iron", "haemoglobin", "haem-iron", "non-haem-iron", "anaemia"],
      ["iron", "vitamin-c"],
    ),
    section(
      "magnesium-zinc",
      l(
        "6.4 镁与锌：看食物组合，不追单一功效",
        "6.4 Magnesium and zinc: think combinations",
      ),
      [
        p(
          "镁参与许多酶的工作，包括与能量利用、肌肉及神经功能相关的反应。豆类、坚果、种子、全谷物和绿叶菜是常见来源。看到“参与肌肉功能”不能直接推导出所有抽筋都由缺镁引起。",
          "Magnesium participates in many enzyme processes, including reactions involved in energy use, muscles and nerves. Pulses, nuts, seeds, whole grains and leafy greens are common sources. A role in muscle function does not imply that all cramps are caused by magnesium deficiency.",
        ),
        p(
          "锌参与正常免疫功能、蛋白质与遗传物质的形成、伤口愈合和味觉。肉、海鲜提供锌，豆类、坚果和全谷物也有贡献。植物中的植酸可影响锌吸收，但这不表示应该把这些有营养的食物全部删除。",
          "Zinc contributes to normal immunity, protein and genetic material production, wound healing and taste. Meat and seafood provide zinc; pulses, nuts and whole grains also contribute. Phytate in plants can affect zinc absorption, but that is not a reason to remove these nutritious foods entirely.",
        ),
        example(
          "让普通食物一举多得",
          "Ordinary foods can do several jobs",
          "晚餐加入豆类，早餐选部分全谷物，是增加食物种类的可行办法。这样也带来纤维与其他营养素，目标不是让一餐成为精确的矿物质药方。",
          "Adding pulses to dinner and some whole grains at breakfast are feasible ways to increase variety. They also bring fibre and other nutrients. The aim is not to turn every meal into a precisely dosed mineral prescription.",
        ),
        call(
          "正常作用不等于产品治疗效果",
          "A normal role is not proof of a product’s treatment effect",
          "“支持免疫”不代表补锌可以预防所有感染。长期过量锌可影响铜状态；高剂量镁补充剂可引起腹泻，并需要考虑肾脏功能与药物。",
          "“Supports immunity” does not mean zinc prevents every infection. Excess zinc over time can affect copper status. High-dose magnesium supplements can cause diarrhoea, and kidney function and medication matter.",
          "warning",
        ),
      ],
      ["magnesium", "zinc", "phytate"],
      ["magnesium", "zinc"],
    ),
    section(
      "sodium-potassium",
      l(
        "6.5 钠与钾：从调味料开始比较",
        "6.5 Sodium and potassium: start with seasonings",
      ),
      [
        p(
          "钠和钾都是电解质，即溶于体液后带电、参与信号和体液平衡的物质。钠是必需的，但过量摄入会增加血压相关风险。钠不只来自撒上的食盐，也可能来自酱油、汤底、酱料和包装食品。",
          "Sodium and potassium are electrolytes: charged substances in body fluids that support signalling and fluid balance. Sodium is essential, but excessive intake increases blood-pressure-related risk. Sources include not only table salt but also soy sauce, soup bases, sauces and packaged foods.",
        ),
        p(
          "盐与钠不是同一个重量。普通食盐约含 40% 钠，盐当量约等于钠重量乘 2.5。标签可能用毫克列钠、用克列盐，比较前要统一单位。先比较相同重量的食品，再看实际吃多少。",
          "Salt and sodium are not the same weight. Ordinary salt is about 40% sodium, so salt equivalent is approximately sodium weight multiplied by 2.5. Labels may use milligrams for sodium and grams for salt; convert units before comparing. Compare equal food quantities, then consider actual amounts eaten.",
        ),
        example(
          "假设标签：一次用了两份",
          "Hypothetical label: using two servings",
          "某酱料每份 5 毫升含钠 200 毫克；用了 10 毫升就是钠 400 毫克，即 0.4 克，盐当量约 1 克。少钠配方若倒得更多，最终摄入未必少。",
          "A sauce lists 200 mg sodium per 5 ml serving. Using 10 ml gives 400 mg, or 0.4 g sodium: about 1 g salt equivalent. A lower-sodium product may not reduce intake if much more is poured.",
        ),
        p(
          "钾可来自豆类、马铃薯、蔬果和奶等，不只有香蕉。肾脏参与调节血钾；慢性肾病或部分药物使用者，不能直接套用“越高钾越好”。含钾代盐或补充剂尤其应先咨询专业人员。",
          "Potassium comes from pulses, potatoes, fruit, vegetables and dairy, not just bananas. Kidneys help regulate blood potassium. People with chronic kidney disease or certain medicines should not follow a more-potassium-is-better rule; potassium-based salt substitutes and supplements particularly need professional advice.",
        ),
      ],
      ["sodium", "potassium", "electrolyte", "salt-equivalent"],
      ["sodium", "potassium"],
    ),
    section(
      "iodine-audit",
      l("6.6 碘与家庭矿物质检查", "6.6 Iodine and a household mineral review"),
      [
        p(
          "碘是制造甲状腺激素的原料。甲状腺激素参与调节代谢和生长发育；碘不足或过量都可能造成问题。鱼、海鲜、部分奶蛋和加碘盐可能提供碘，但含量因食物和生产情况而异。",
          "Iodine is needed to make thyroid hormones, which help regulate metabolism, growth and development. Both deficiency and excess can cause problems. Fish, seafood, some dairy and eggs, and iodised salt can supply iodine, but amounts vary with the food and production conditions.",
        ),
        p(
          "加碘盐是加入碘的盐，并不是鼓励增加盐量。海盐、岩盐或粉红盐的名字不保证加碘，要看标签。海带等海藻的碘含量可很高而且变化大，不宜把每天大量吃海藻当作精确的补碘方案。",
          "Iodised salt has iodine added; this is not encouragement to eat more salt. Names such as sea salt, rock salt or pink salt do not guarantee iodisation: check the label. Seaweed iodine can be high and variable, so large daily quantities are not a precise iodine plan.",
        ),
        example(
          "一张可使用的检查表",
          "A review you can actually use",
          "把一餐的豆腐、蔬菜、鱼和调味料列出来，分别写下可能贡献的矿物质，以及不确定的信息。豆腐的钙和酱料的钠可以查标签；不要为没有数据的食物编造数字。",
          "List tofu, vegetables, fish and seasonings from one meal. Record possible mineral contributions and uncertainties. Check labels for tofu calcium and sauce sodium; do not invent numbers where information is unavailable.",
        ),
        call(
          "先改一个可行环节",
          "Start with one feasible change",
          "可以选择减少重复加酱、增加一种豆类或核实一种强化食品。若涉及甲状腺病、肾病、怀孕或已服药，个人调整与补充剂应向合适专业人员咨询。",
          "You might reduce repeated sauce additions, add a pulse dish or check a fortified product. Thyroid disease, kidney disease, pregnancy and medication require appropriate professional guidance for individual changes or supplements.",
          "important",
        ),
      ],
      ["iodine", "iodised-salt"],
      ["iodine", "supplements-guide"],
    ),
  ],
  keyTerms: [
    term(
      "mineral",
      "矿物质",
      "Mineral",
      "支持结构与生理工作的必需无机元素，本身不提供热量。",
      "An essential inorganic element supporting structures and body processes without supplying calories.",
    ),
    term(
      "bioavailability",
      "生物利用度",
      "Bioavailability",
      "摄入的成分能被身体吸收并利用的程度，不等于标签含量。",
      "The extent to which an ingested substance can be absorbed and used, distinct from its label amount.",
    ),
    term(
      "calcium",
      "钙",
      "Calcium",
      "构成骨骼牙齿并参与肌肉与神经工作的矿物质。",
      "A mineral contributing to bones and teeth and to muscle and nerve functions.",
    ),
    term(
      "iron",
      "铁",
      "Iron",
      "参与氧气运输等工作的矿物质，摄入过量也可有害。",
      "A mineral involved in oxygen transport and other functions; excessive intake can also be harmful.",
    ),
    term(
      "haemoglobin",
      "血红蛋白",
      "Haemoglobin",
      "红细胞中的含铁蛋白质，帮助在身体中运输氧气。",
      "The iron-containing protein in red blood cells that helps transport oxygen.",
    ),
    term(
      "haem-iron",
      "血红素铁",
      "Haem iron",
      "与血红素结合的一类膳食铁，存在于肉和海鲜等动物组织。",
      "Dietary iron bound in haem, found in animal tissues such as meat and seafood.",
    ),
    term(
      "non-haem-iron",
      "非血红素铁",
      "Non-haem iron",
      "不以血红素形式存在的铁，是植物食物中铁的主要形式。",
      "Iron not bound in haem, the main form found in plant foods.",
    ),
    term(
      "anaemia",
      "贫血",
      "Anaemia",
      "红细胞或血红蛋白不足的状态，可有多种原因，需要评估。",
      "A condition involving insufficient red blood cells or haemoglobin, with multiple possible causes requiring assessment.",
    ),
    term(
      "magnesium",
      "镁",
      "Magnesium",
      "参与许多酶反应、肌肉与神经功能的矿物质。",
      "A mineral involved in numerous enzyme reactions and muscle and nerve function.",
    ),
    term(
      "zinc",
      "锌",
      "Zinc",
      "参与生长、正常免疫、组织修复和味觉等功能的矿物质。",
      "A mineral contributing to growth, normal immunity, tissue repair and taste.",
    ),
    term(
      "phytate",
      "植酸盐",
      "Phytate",
      "植物中的一种成分，可影响某些矿物质的吸收。",
      "A plant constituent that can affect absorption of certain minerals.",
    ),
    term(
      "sodium",
      "钠",
      "Sodium",
      "参与体液与神经功能的矿物质，盐和多种调味食品都可提供。",
      "A mineral involved in body-fluid and nerve functions, supplied by salt and many seasoned foods.",
    ),
    term(
      "potassium",
      "钾",
      "Potassium",
      "参与细胞、肌肉与神经功能的矿物质，其血液水平受肾脏等调节。",
      "A mineral supporting cells, muscles and nerves, with blood levels regulated partly by the kidneys.",
    ),
    term(
      "electrolyte",
      "电解质",
      "Electrolyte",
      "在体液中带电并参与体液平衡与信号等功能的物质。",
      "A charged substance in body fluids involved in functions including fluid balance and signalling.",
    ),
    term(
      "salt-equivalent",
      "盐当量",
      "Salt equivalent",
      "按钠重量乘约 2.5 得出的等效盐重量，比较时须统一单位。",
      "Equivalent salt weight estimated as sodium weight multiplied by about 2.5, using consistent units.",
    ),
    term(
      "iodine",
      "碘",
      "Iodine",
      "制造甲状腺激素所需的矿物质，过少或过多均可有害。",
      "A mineral required for thyroid hormone production; both too little and too much can be harmful.",
    ),
    term(
      "iodised-salt",
      "加碘盐",
      "Iodised salt",
      "加入碘的食盐，可提供碘但不意味着应该增加盐摄入。",
      "Salt with iodine added, providing iodine without implying that more salt should be eaten.",
    ),
  ],
  questions: [
    q(
      "units",
      l(
        "400毫克钠约等于多少盐？",
        "About how much salt is equivalent to 400 mg sodium?",
      ),
      [l("1克。", "1 g."), l("400克。", "400 g."), l("0.16克。", "0.16 g.")],
      0,
      l("400毫克 × 2.5 = 1,000毫克 = 1克。", "400 mg × 2.5 = 1,000 mg = 1 g."),
    ),
    q(
      "fatigue",
      l(
        "持续疲倦一定是缺铁吗？",
        "Does persistent fatigue definitely mean iron deficiency?",
      ),
      [
        l("是，自己补铁即可。", "Yes, simply take iron."),
        l(
          "不是，需要考虑不同原因及适当评估。",
          "No, consider different causes and appropriate assessment.",
        ),
      ],
      1,
      l(
        "营养可能有关，但单一症状不能确定诊断。",
        "Nutrition may be relevant, but one symptom cannot establish the diagnosis.",
      ),
    ),
    q(
      "tofu",
      l(
        "所有豆腐都含同样多的钙吗？",
        "Does all tofu contain the same amount of calcium?",
      ),
      [
        l("是，只要叫豆腐就一样。", "Yes, the name guarantees it."),
        l(
          "不是，制作方式和产品信息要核实。",
          "No, check processing and product information.",
        ),
      ],
      1,
      l(
        "食物类别不能代替具体标签和可靠数据。",
        "A food category does not replace a specific label and reliable data.",
      ),
    ),
    q(
      "iodine",
      l(
        "用加碘盐表示应多放盐吗？",
        "Does choosing iodised salt mean adding more salt?",
      ),
      [
        l(
          "不需要，碘来源和盐量是两个问题。",
          "No, iodine sources and salt quantity are separate questions.",
        ),
        l("应该，越多碘越好。", "Yes, more iodine is always better."),
      ],
      0,
      l(
        "加碘不是无限增加钠的理由，碘过量也有风险。",
        "Iodisation is not a reason for unlimited sodium; excessive iodine also carries risks.",
      ),
    ),
  ],
  practicalTask: l(
    "选一顿家庭餐，列出可能的钙、铁、镁、锌、钾、钠和碘来源，标明不确定之处。比较两种调味料同一基准的钠，再按实际用量估算一次的钠和盐当量。提出一个可实行调整，不给家人诊断缺乏或自行开补充剂。",
    "Choose one family meal and list possible sources of calcium, iron, magnesium, zinc, potassium, sodium and iodine, marking uncertainties. Compare two seasonings on the same sodium basis, then estimate sodium and salt equivalent for an actual amount used. Suggest one feasible adjustment without diagnosing relatives or prescribing supplements.",
  ),
  summary: l(
    [
      "矿物质需要量不同，不能按数字大小排重要性。",
      "钙来源不只奶，铁来源与吸收需要区分。",
      "镁和锌存在于多种普通食物中。",
      "盐当量约为钠重量乘2.5，先统一单位。",
      "加碘盐不代表多吃盐，补充剂与代盐需要考虑个人情况。",
    ],
    [
      "Different mineral requirements cannot be ranked by numeric size.",
      "Calcium is not confined to milk; iron content and absorption differ.",
      "Magnesium and zinc occur in many ordinary foods.",
      "Salt equivalent is about sodium weight times 2.5, using consistent units.",
      "Iodised salt does not mean more salt; supplements and substitutes require personal context.",
    ],
  ),
  sourceIds: [
    "nhs-vitamins",
    "calcium",
    "iron",
    "magnesium",
    "zinc",
    "potassium",
    "sodium",
    "iodine",
    "vitamin-d",
    "vitamin-c",
    "supplements-guide",
  ],
});

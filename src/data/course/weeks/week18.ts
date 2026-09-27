import {
  l,
  p,
  example,
  call,
  compare,
  section,
  term,
  q,
  lesson,
} from "../authoring";
export const week18Lesson = lesson({
  introduction: l(
    "标签的价值在于帮助公平比较，而不是用一个数字决定食品的好坏。本周从份量开始，把营养表、配料和包装宣传分开阅读。示例数字均为教学虚构，不代表任何品牌或马来西亚法定标准。",
    "Labels help fair comparisons rather than declaring a food good or bad from one number. Begin with quantities, then distinguish the nutrition panel, ingredients and package claims. All numerical examples here are fictional teaching examples, not brand data or Malaysian legal thresholds.",
  ),
  objectives: l(
    [
      "区分每份、每 100 g/ml 与实际吃下的数量。",
      "解释能量、蛋白质、碳水、糖、纤维、脂肪与钠。",
      "结合配料及宣传判断产品。",
      "用同一单位比较两件家中包装食品。",
    ],
    [
      "Distinguish per-serving, per-100 g/ml and actual intake.",
      "Interpret energy, protein, carbohydrate, sugar, fibre, fat and sodium.",
      "Read ingredients alongside claims.",
      "Compare two household products using a common basis.",
    ],
  ),
  sections: [
    section(
      "label-basis",
      l(
        "18.1 第一眼先看“按多少算”",
        "18.1 First ask what quantity the numbers describe",
      ),
      [
        p(
          "营养表的数字总有计算基础：每份、每 100 g、每 100 ml 或整包。标签份量不是命令你必须吃的数量；实际份量可能更多或更少。先看净重、一份大小与每包份数，才能解释后面的营养值。",
          "Nutrition values have a basis: per serving, per 100 g, per 100 ml or per pack. A serving is not an instruction about how much you must eat. Check net quantity, serving size and servings per pack before interpreting the nutrient values.",
        ),
        p(
          "马来西亚 KKM 的标签教育材料展示每 100 g 与每份的比较方式。进口包装可能另有美国每日参考值百分比或英国颜色标识；这些制度不能直接当成本地法规。先找单位和基础，比背一个海外颜色阈值更通用。",
          "Malaysian KKM education materials illustrate per-100 g and per-serving comparisons. Imported packs may include US percent Daily Values or UK colour coding; those systems are not automatically Malaysian regulations. Identifying units and the reference amount is more transferable than memorising a foreign colour threshold.",
        ),
        example(
          "虚构饼干包装",
          "Fictional biscuit packet",
          "一包 90 g，标签一份 30 g，每份能量 150 kcal。吃半包是 45 g，也就是 1.5 份，按标签换算为 225 kcal；整包是三份，不是一份。",
          "A 90 g packet lists a 30 g serving with 150 kcal. Half the packet is 45 g, or 1.5 servings, giving 225 kcal using the label. The whole packet contains three servings, not one.",
        ),
        call(
          "一个通用公式",
          "A reusable calculation",
          "实际摄入 = 标签所列值 × 实际数量 ÷ 标签参考数量。先确认单位一致；g 与 ml 不能在所有食物上随意互换。",
          "Amount consumed = listed value × actual quantity ÷ reference quantity. Match units first; grams and millilitres are not interchangeable for every food.",
        ),
      ],
      ["serving-size", "portion", "per-100", "energy"],
      ["kkm-label", "fda-label"],
    ),
    section(
      "label-macros",
      l(
        "18.2 蛋白质、碳水、糖与纤维一起看",
        "18.2 Read protein, carbohydrate, sugar and fibre together",
      ),
      [
        p(
          "蛋白质一行说明数量，但不能独自评价整体食物。碳水化合物包括糖与淀粉等成分，糖不是在碳水之外再额外加一遍的总量。不同地区对纤维的列示与计算惯例可能不同，因此不应随意把跨制度标签的各行相加。",
          "The protein line gives quantity but cannot evaluate the whole food. Carbohydrate includes sugars and starches; sugar should not simply be added again on top of total carbohydrate. Fibre declaration and calculation conventions differ across systems, so avoid casually summing rows from labels governed by different rules.",
        ),
        p(
          "总糖可包括原本存在的乳糖或水果糖，以及添加糖。有些标签不单列添加糖，所以不能从总糖精确推算加了几匙糖。纤维没列出不等于零；写“未知”，并参考配料与可靠资料，而不是自行补数。",
          "Total sugars may include naturally present lactose or fruit sugars as well as added sugar. Some labels do not declare added sugars separately, so total sugar cannot tell you exactly how many teaspoons were added. Missing fibre information is not proof of zero: record unknown and consult ingredients or reliable information.",
        ),
        example(
          "两种酸奶如何比较",
          "Comparing two yoghurts",
          "先把两款都换成每 100 g，看蛋白质、总糖和配料，再看你实际会吃的份量。原味酸奶可能仍含乳糖；“有糖数值”不自动表示全部来自添加糖。",
          "Compare both per 100 g for protein, total sugars and ingredients, then consider the portion you would eat. Plain yoghurt may still contain lactose; a sugar value does not mean it is entirely added sugar.",
        ),
        call(
          "不要让一项优点遮住全部",
          "Do not let one benefit hide everything else",
          "“高蛋白”或“高纤”描述某个特点，不自动代表适合无限量食用。仍要看整份食物、价格、口味与用途。",
          "High-protein or high-fibre wording describes a feature, not unlimited suitability. Consider the whole product, price, taste and purpose.",
        ),
      ],
      ["protein", "carbohydrate", "total-sugar", "added-sugar", "fibre"],
      ["fda-label", "kkm-label", "carbs"],
    ),
    section(
      "label-fat-sodium",
      l(
        "18.3 脂肪与钠：看类别和单位",
        "18.3 Fat and sodium: notice type and units",
      ),
      [
        p(
          "总脂肪与饱和脂肪不同；饱和脂肪通常属于总脂肪的一部分，不应重复相加。相同总脂肪的两种食品，脂肪组成和其他营养可能不同。选择时要联系第 4 周的替换概念，而不是只追求最小总脂肪数值。",
          "Total and saturated fat differ; saturated fat is generally part of total fat, not an extra quantity to add again. Two foods with the same total fat may differ in fatty acids and other nutrients. Apply Week 4’s replacement concept rather than pursuing the smallest total-fat number alone.",
        ),
        p(
          "钠常以 mg 表示，脂肪常以 g 表示；1 g 等于 1000 mg。盐与钠不是同一重量，估算盐量时常用钠乘约 2.5。若标签写的是盐，不要再把它当钠比较；实际用途例如汤底、酱料或直接吃，也影响份量。",
          "Sodium is often expressed in mg and fat in g; 1 g equals 1,000 mg. Salt and sodium are not the same weight: sodium multiplied by about 2.5 estimates salt. If a label states salt, do not compare it directly as sodium. A product’s use as broth, sauce or ready-to-eat food also affects the quantity.",
        ),
        example(
          "虚构汤包",
          "Fictional soup sachet",
          "每份钠 400 mg，实际用了两份，按标签是 800 mg 钠，约相当于 2 g 盐。这个换算是数量练习，不是说每个人都应喝这份汤，也不代表其他餐没有钠。",
          "At 400 mg sodium per serving, two servings provide 800 mg sodium, approximately equivalent to 2 g salt. This is a quantity exercise, not a recommendation to drink it or a claim that other meals contain no sodium.",
        ),
        call(
          "冲调前后要看清",
          "Check prepared versus dry values",
          "粉末、浓缩液与即饮产品不能不看冲调方式直接比较。确认营养表是干粉还是按说明冲调后，并记录你实际的用法。",
          "Powders, concentrates and ready-to-drink products need their preparation basis checked. Determine whether values describe dry product or preparation according to instructions, then record your actual use.",
        ),
      ],
      ["total-fat", "saturated-fat", "sodium", "salt", "unit"],
      ["kkm-label", "sodium", "fda-label"],
    ),
    section(
      "label-ingredients",
      l(
        "18.4 配料表回答另一个问题",
        "18.4 Ingredients answer a different question",
      ),
      [
        p(
          "营养表说明某些营养素的数量，配料表说明使用了什么。配料通常按重量比例由多到少排列，但次序不告诉你每种成分的精确百分比。若要了解全谷物、糖或油的来源，两部分需要一起读。",
          "The nutrition panel describes selected nutrient quantities; the ingredient list identifies what was used. Ingredients are generally listed in descending weight order, but order alone does not give exact percentages. Read both when considering whole-grain, sugar or oil sources.",
        ),
        p(
          "成分名字长不代表有害，配料少也不自动代表营养更好。过敏则是另一个具体的安全问题，需要按自己的医疗建议检查过敏原与相关说明，不能因为产品写健康、天然或植物就跳过。",
          "A long chemical name does not establish harm, and a short ingredient list does not automatically mean better nutrition. Allergy is a separate safety issue: follow individual advice and check allergen information rather than assuming healthy, natural or plant-based means suitable.",
        ),
        compare([
          {
            title: l("营养表能帮助", "The panel can help with"),
            items: [
              l(
                "每个参考量中的营养素数量。",
                "Nutrient quantities per reference amount.",
              ),
              l("统一基础后的产品比较。", "Comparisons on a common basis."),
            ],
          },
          {
            title: l("配料表能帮助", "The ingredients can help with"),
            items: [
              l(
                "了解主要原料与来源。",
                "Identifying main ingredients and sources.",
              ),
              l(
                "结合过敏原说明检查适用性。",
                "Checking suitability alongside allergen statements.",
              ),
            ],
          },
        ]),
        example(
          "“谷物”不一定等于全谷",
          "Cereal does not necessarily mean whole grain",
          "包装画有麦穗不能代替配料信息。查看是否写明全麦或其他全谷物，再结合纤维和实际份量；颜色深也不是全谷含量的检验方法。",
          "Wheat imagery does not replace ingredient information. Look for stated wholemeal or other whole grains, alongside fibre and quantity. Dark colour is not a test of whole-grain content.",
        ),
      ],
      ["ingredients", "allergen", "whole-grain"],
      ["kkm-guidelines", "fda-label", "whole-grains"],
    ),
    section(
      "label-claims",
      l("18.5 宣传语不是整份评价", "18.5 Claims are not a complete assessment"),
      [
        p(
          "“不添加糖”与“无糖”含义不同，相关定义受地区规则影响；不添加糖的食品仍可能含原本存在的糖。低脂也不一定低糖或低能量。读到一个优点时，应问其他重要信息在哪里，而不是推断所有方面都更好。",
          "No-added-sugar and sugar-free wording differ, with definitions governed by local rules. A no-added-sugar product can still contain naturally present sugars. Low fat does not necessarily mean low sugar or low energy. Ask about other relevant information rather than extending one feature to everything.",
        ),
        p(
          "比较应服务一个实际问题，例如挑选较低钠的同类汤底，或寻找适合早餐的较高纤维谷物。若两件食品用途完全不同，单看每 100 g 会忽略实际份量与营养角色。预算、接受度与个人需要也应保留。",
          "A comparison should answer a practical question, such as finding a lower-sodium broth or a fibre-containing breakfast cereal. Comparing unrelated foods only per 100 g can miss portion size and nutritional role. Budget, acceptance and individual needs still matter.",
        ),
        example(
          "更公平的比较",
          "A fairer comparison",
          "比较两款同用途面包时，先统一每 100 g，再看每片重量与吃几片。不能因为甲标每片、乙标两片，就用原数字宣布甲的钠一定更低。",
          "For two similar breads, compare per 100 g, then consider slice weights and how many are eaten. Do not declare one lower in sodium merely because it lists one slice and the other lists two.",
        ),
        call(
          "看不到的信息就保留空白",
          "Leave unknown information unknown",
          "标签没有某项数据时，可以写未列出或联系制造商。不要为了完成练习猜出维生素、添加糖或纤维数值。",
          "If data are missing, write not declared or ask the manufacturer. Do not invent vitamins, added sugar or fibre to complete the exercise.",
        ),
      ],
      ["claim", "comparison-basis", "uncertainty"],
      ["kkm-label", "fda-label", "kkm-guidelines"],
    ),
    section(
      "label-practice",
      l("18.6 在家做一次公平比较", "18.6 Make a fair comparison at home"),
      [
        p(
          "选两件用途相近的食品，例如面包、饼干或饮料。记录产品名称、每份大小、每包份数、营养表基础与实际想吃的数量，再抄能量、蛋白质、碳水、糖、纤维、总脂肪、饱和脂肪和钠中已经列出的值。",
          "Choose two similar products such as breads, biscuits or drinks. Record name, serving size, servings per pack, panel basis and intended quantity. Copy declared energy, protein, carbohydrate, sugar, fibre, total fat, saturated fat and sodium values.",
        ),
        p(
          "写一段比较结论，说明按什么单位、哪个方面较合适，以及仍不知道什么。结论应针对用途，不必选一个绝对赢家。最后检查配料、过敏需要和预算，确认选择在真实生活里可用。",
          "Write a comparison stating the common unit, the feature that suits your purpose and remaining unknowns. It need not name an absolute winner. Check ingredients, allergy requirements and budget before deciding whether the choice works in real life.",
        ),
        example(
          "完整结论示范",
          "A complete conclusion",
          "“按每 100 g，甲的钠较低；我通常吃的片数不同，所以还要换算实际份量。乙未列出纤维，不能说它没有纤维。两者都需结合早餐其他食物。”",
          "“Per 100 g, A has less sodium. My usual slice quantities differ, so I still need to calculate the actual portion. B does not declare fibre, which is not proof of none. Both need context within breakfast.”",
        ),
        call(
          "不需要买新食品",
          "No new purchases needed",
          "用家里的包装即可。若没有包装，使用本课明确标为虚构的计算题；练习的是阅读与推理，不是采购。",
          "Use existing packaging. If none is available, use the explicitly fictional calculations in this lesson. The activity is about reading and reasoning, not shopping.",
        ),
      ],
      ["comparison-basis", "portion", "uncertainty"],
      ["kkm-label", "fda-label"],
    ),
  ],
  keyTerms: [
    term(
      "serving-size",
      "标签份量",
      "Serving size",
      "标签用来计算营养值的参考数量，不等于个人建议量。",
      "The reference quantity for label values, not a personal intake recommendation.",
    ),
    term(
      "portion",
      "实际份量",
      "Portion",
      "一次实际吃或喝下的数量，可能与标签份量不同。",
      "The amount actually consumed, potentially different from the label serving.",
    ),
    term(
      "per-100",
      "每 100 g/ml",
      "Per 100 g/ml",
      "以固定重量或体积为比较基础的列示方式。",
      "Values expressed against a fixed weight or volume for comparison.",
    ),
    term(
      "energy",
      "能量",
      "Energy",
      "食物可提供的能量，常标 kcal 或 kJ。",
      "Energy provided by food, commonly labelled in kcal or kJ.",
    ),
    term(
      "protein",
      "蛋白质",
      "Protein",
      "由氨基酸组成的营养素，克数不是整体食品评价。",
      "An amino-acid-based nutrient; its quantity is not an overall food assessment.",
    ),
    term(
      "carbohydrate",
      "碳水化合物",
      "Carbohydrate",
      "包含糖、淀粉等的一类营养成分，标签规则可能有差异。",
      "A nutrient category including sugars and starches, with some labelling differences.",
    ),
    term(
      "total-sugar",
      "总糖",
      "Total sugars",
      "包括食物中原有与添加的糖的总量。",
      "The combined amount of naturally present and added sugars.",
    ),
    term(
      "added-sugar",
      "添加糖",
      "Added sugars",
      "制造或准备时加入的糖，并非所有标签都会单列。",
      "Sugars added in manufacture or preparation, not separately declared on every label.",
    ),
    term(
      "fibre",
      "膳食纤维",
      "Dietary fibre",
      "人体消化酶不能完全消化的一类碳水化合物。",
      "Carbohydrates not fully digested by human digestive enzymes.",
    ),
    term(
      "total-fat",
      "总脂肪",
      "Total fat",
      "食品所含各类脂肪的总量，包含饱和脂肪部分。",
      "The total amount of fat types in a food, including the saturated fraction.",
    ),
    term(
      "saturated-fat",
      "饱和脂肪",
      "Saturated fat",
      "脂肪类别之一，通常已包含在总脂肪数值中。",
      "A fat category generally already included within the total-fat value.",
    ),
    term(
      "sodium",
      "钠",
      "Sodium",
      "盐及其他成分中的矿物质，常以毫克列示。",
      "A mineral in salt and other ingredients, often declared in milligrams.",
    ),
    term(
      "salt",
      "盐",
      "Salt",
      "主要为氯化钠，与钠的重量并不相同。",
      "Primarily sodium chloride, whose weight differs from the sodium it contains.",
    ),
    term(
      "unit",
      "计量单位",
      "Unit",
      "如 g、mg、ml 的数量单位，比较前须一致。",
      "A quantity unit such as g, mg or ml that must match for comparison.",
    ),
    term(
      "ingredients",
      "配料",
      "Ingredients",
      "制造食品使用的材料，通常按重量由多到少排列。",
      "Materials used in production, generally listed in descending weight order.",
    ),
    term(
      "allergen",
      "过敏原",
      "Allergen",
      "可引发特定人群过敏反应的成分，需结合个人建议。",
      "A substance that can trigger an allergic reaction in susceptible people.",
    ),
    term(
      "whole-grain",
      "全谷物",
      "Whole grain",
      "保留麸皮、胚芽和胚乳组成的谷物。",
      "Grain retaining the bran, germ and endosperm components.",
    ),
    term(
      "claim",
      "营养宣传声称",
      "Nutrition claim",
      "包装上关于某特点的表述，不是所有营养方面的保证。",
      "A statement about a product feature, not a guarantee of all nutritional qualities.",
    ),
    term(
      "comparison-basis",
      "比较基础",
      "Comparison basis",
      "两件食品比较时采用相同的数量、单位和用途。",
      "A shared quantity, unit and relevant purpose for comparing foods.",
    ),
    term(
      "uncertainty",
      "不确定性",
      "Uncertainty",
      "资料缺失或估计导致不能确认的部分。",
      "What cannot be established because information is missing or estimated.",
    ),
  ],
  questions: [
    q(
      "servings",
      l(
        "每份 150 kcal，吃 1.5 份是多少？",
        "At 150 kcal per serving, what is 1.5 servings?",
      ),
      [
        l("150 kcal", "150 kcal"),
        l("225 kcal", "225 kcal"),
        l("300 kcal", "300 kcal"),
      ],
      1,
      l(
        "150 × 1.5 = 225。先确认吃的数量与标签份量。",
        "150 × 1.5 = 225. Establish actual and reference quantities first.",
      ),
    ),
    q(
      "sugar",
      l("总糖都等于添加糖吗？", "Are total sugars entirely added sugars?"),
      [
        l(
          "不是，也可能有天然存在的糖",
          "No; they can include naturally present sugars",
        ),
        l("是", "Yes"),
      ],
      0,
      l(
        "例如原味奶类可含乳糖，不能把总糖全部解释成额外加入的糖。",
        "Plain dairy can contain lactose; total sugars cannot all be interpreted as added.",
      ),
    ),
    q(
      "missing",
      l(
        "标签未列纤维意味着什么？",
        "What does an undeclared fibre value mean?",
      ),
      [
        l("一定为零", "Definitely zero"),
        l("一定很多", "Definitely high"),
        l("该标签没有提供这个数值", "The label has not supplied that value"),
      ],
      2,
      l(
        "未列出不等于零，需要保留未知而不是编造数据。",
        "Not declared does not mean zero; retain uncertainty rather than invent data.",
      ),
    ),
    q(
      "fair",
      l(
        "比较两款每片大小不同的面包，先做什么？",
        "What comes first for breads with different slice sizes?",
      ),
      [
        l("只比较每片原数字", "Compare unadjusted per-slice values"),
        l(
          "统一每 100 g 等基础，再看实际份量",
          "Use a common basis such as 100 g, then consider portions",
        ),
      ],
      1,
      l(
        "统一基础避免份量造成误导，实际食用量仍需另外考虑。",
        "A common basis avoids serving-size confusion; actual intake still matters.",
      ),
    ),
  ],
  practicalTask: l(
    "用家里两件同类包装食品完成比较。写参考量与实际量、已列出的营养值、主要配料、一个有用区别与两个限制。不需要判断谁绝对健康。",
    "Compare two similar packaged foods at home. Record reference and actual quantities, declared nutrients, main ingredients, one useful difference and two limitations. Do not assign an absolute healthy winner.",
  ),
  summary: l(
    [
      "先读参考份量与单位。",
      "糖、饱和脂肪等可能已包含在总项中。",
      "未列出的数据不等于零。",
      "营养表、配料和宣传各有不同用途。",
      "同基础比较后仍要考虑实际份量与用途。",
    ],
    [
      "Read reference quantities and units first.",
      "Sugars and saturated fat may already be included in totals.",
      "Missing data are not zero.",
      "Panels, ingredients and claims serve different roles.",
      "Common-basis comparison still needs portion and purpose context.",
    ],
  ),
  sourceIds: ["kkm-label", "kkm-guidelines", "fda-label"],
});

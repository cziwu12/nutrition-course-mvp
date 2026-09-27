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
export const week21Lesson = lesson({
  introduction: l(
    "读研究不需要先变成统计学家，但需要知道研究问了什么、怎样比较、测了什么以及还有哪些不确定性。本周把常见研究类型放回这些问题中，避免只凭标题或“最高等级证据”标签决定相信什么。",
    "Reading research does not require becoming a statistician first. It does require asking what was studied, how groups were compared, what was measured and what remains uncertain. This week places study designs within those questions rather than trusting headlines or an evidence-rank label alone.",
  ),
  objectives: l(
    [
      "识别研究的人群、因素、比较与结果。",
      "区分观察研究与随机对照试验。",
      "解释系统综述与荟萃分析的区别。",
      "用样本量、偏差、效应大小和适用性检查结论。",
    ],
    [
      "Identify population, exposure or intervention, comparison and outcome.",
      "Distinguish observational studies from randomised trials.",
      "Explain systematic reviews versus meta-analyses.",
      "Check conclusions using sample size, bias, effect size and applicability.",
    ],
  ),
  sections: [
    section(
      "research-question",
      l(
        "21.1 把标题还原成研究问题",
        "21.1 Turn a headline back into a research question",
      ),
      [
        p(
          "先找人群、因素、比较、结果和时间。例如“某食物改善健康”太宽泛；研究可能只在一小组成年人中，比较某产品与另一产品四周后的一个血液指标。把这些条件写出来，能看到标题省略了什么。",
          "Identify people, exposure or intervention, comparison, outcome and time. “A food improves health” is broad; the study may compare two products for four weeks in a small adult group using one blood marker. Writing those conditions reveals what the headline has omitted.",
        ),
        p(
          "结果指标是研究测量的东西，例如症状、血压或疾病事件。生物标志物改变与长期临床获益不是同一个问题。还要确认是人体、动物还是细胞研究，不能把实验室机制自动改写成家庭建议。",
          "An outcome is what researchers measure, such as symptoms, blood pressure or disease events. A biomarker change differs from long-term clinical benefit. Establish whether the work involves humans, animals or cells; a laboratory mechanism does not automatically become household advice.",
        ),
        example(
          "虚构标题的拆解",
          "Dissecting a fictional headline",
          "“豆饮让所有人更健康”可能来自“20 名成年人喝指定豆饮两周后某指标改变”。人数、人群、比较组与指标都要回到原文查，不能让广告替研究回答。",
          "“Soy drink makes everyone healthier” might refer to a marker change in twenty adults after two weeks. Check numbers, population, comparison and outcome in the paper instead of letting advertising supply the answers.",
        ),
        call(
          "先问来源在哪里",
          "Ask where the source is",
          "标题、新闻和论文摘要是不同层次的信息。尽量找到原研究或可信综述；找不到时可暂记未核实，不需要立即站队。",
          "A headline, news report and paper abstract are different information layers. Seek the study or a reliable review; if unavailable, mark the claim unverified rather than rushing to a position.",
        ),
      ],
      ["research-question", "population", "outcome", "biomarker"],
      ["research-reading", "health-news"],
    ),
    section(
      "research-observation",
      l(
        "21.2 观察研究：联系不自动等于原因",
        "21.2 Observation: association is not automatically causation",
      ),
      [
        p(
          "观察研究记录人们原本的行为或暴露，没有由研究者随机分配饮食。队列研究跟随一群人一段时间，横断面研究在某个时间点观察。它们可以研究长期模式或不适合随机安排的问题，但解释时要看测量和比较是否公平。",
          "Observational studies record existing behaviours or exposures rather than randomly assigning diets. Cohort studies follow people over time, while cross-sectional studies observe a point in time. They can address long-term patterns or questions unsuitable for random assignment, but measurement and comparability matter.",
        ),
        p(
          "相关是两个现象一起变化，因果是改变一个会影响另一个。混杂因素与所研究的因素和结果都有关，可能扭曲联系。例如常吃某早餐的人也可能有不同睡眠、收入或活动；统计调整可帮助，但不能保证消除所有未知混杂。",
          "Association means two things vary together; causation means changing one affects the other. A confounder is related to both the factor of interest and the outcome and can distort the relationship. Breakfast choices may accompany different sleep, income or activity. Statistical adjustment helps but cannot guarantee removal of unknown confounding.",
        ),
        example(
          "虚构早餐研究",
          "A fictional breakfast study",
          "调查发现吃某谷物的人运动较多。不能据此说谷物让人爱运动；可能是原本重视健康的人同时选择两者。还可能存在反向因果：健康状况先改变，随后才改变食物选择。",
          "A survey finds that people eating a certain cereal exercise more. The cereal may not cause exercise; people already interested in health might choose both. Reverse causation is also possible: health changes first, followed by dietary changes.",
        ),
        call(
          "有局限不等于没价值",
          "Limited does not mean worthless",
          "观察研究仍可提供重要线索，尤其长期或现实生活问题。正确做法是理解设计和其他证据，而不是看到观察二字就一律否定。",
          "Observational studies can provide important evidence, especially for long-term or real-world questions. Understand the design alongside other evidence rather than dismissing the category.",
        ),
      ],
      [
        "observational",
        "cohort",
        "cross-sectional",
        "association",
        "causation",
        "confounding",
        "reverse-causation",
      ],
      ["research-types", "study-quality", "diet-evidence"],
    ),
    section(
      "research-rct",
      l(
        "21.3 随机对照试验：比较怎样建立",
        "21.3 Randomised trials: how the comparison is created",
      ),
      [
        p(
          "随机对照试验用随机方法把参与者分到干预与比较组，目的是减少分组时已知和未知因素的系统差异。随机不是随便找人，也不保证每次小样本都完全一样；研究仍需要检查执行、测量和分析。",
          "A randomised controlled trial assigns participants by chance to intervention and comparison groups to reduce systematic differences in known and unknown factors. Randomisation is not casual recruitment and does not guarantee perfect balance in every small study. Implementation, measurement and analysis still need scrutiny.",
        ),
        p(
          "对照组提供比较基础，可能是另一饮食、常规安排或安慰剂。盲法是让参与者或评估者不知道分组，以减少期望影响，但整份饮食常难以对参与者设盲。依从性、退出人数、持续时间与实际吃了什么都影响结论。",
          "A control group provides a comparison, such as another diet, usual care or a placebo. Blinding hides allocation from participants or assessors to reduce expectation effects, though whole diets are often difficult to blind. Adherence, withdrawals, duration and what was actually eaten affect interpretation.",
        ),
        compare([
          {
            title: l("有帮助的设计特点", "Helpful design features"),
            items: [
              l(
                "随机分配与清楚的比较组。",
                "Random allocation and a clear comparator.",
              ),
              l(
                "预先说明主要结果并完整报告。",
                "Prespecified main outcomes and complete reporting.",
              ),
            ],
          },
          {
            title: l("仍然要问", "Questions that remain"),
            items: [
              l(
                "是否太短、退出很多或执行不同？",
                "Was it too short, with substantial dropout or differing implementation?",
              ),
              l(
                "这群人和我的问题相关吗？",
                "Are these people relevant to my question?",
              ),
            ],
          },
        ]),
        call(
          "RCT 不是自动真理印章",
          "RCT is not an automatic truth stamp",
          "短期小试验测一个指标，不能仅凭随机设计就宣称长期预防疾病。设计类别重要，研究质量与问题匹配同样重要。",
          "A small short trial measuring one marker cannot establish long-term disease prevention merely because it was randomised. Design matters alongside quality and fit to the question.",
        ),
      ],
      ["rct", "control", "blinding", "adherence"],
      ["research-types", "study-quality"],
    ),
    section(
      "research-synthesis",
      l("21.4 系统综述与荟萃分析", "21.4 Systematic reviews and meta-analyses"),
      [
        p(
          "系统综述按明确问题和预先说明的方法寻找、筛选与评价研究，目标是减少只挑喜欢的论文。它应说明搜索范围、纳入条件和质量判断。不是把几篇支持自己观点的文章放在一起就叫系统综述。",
          "A systematic review uses an explicit question and defined methods to search, select and assess studies, reducing selective use of favourable papers. It should explain searching, eligibility and quality assessment. A collection of papers supporting one opinion is not automatically systematic.",
        ),
        p(
          "荟萃分析是把足够可比研究的数值结果用统计方法合并。系统综述可以不做荟萃分析，因为研究可能差异太大。异质性指人群、干预、设计或结果等方面的差异；合并后一个平均数可能掩盖这些重要区别。",
          "Meta-analysis statistically combines numerical results from sufficiently comparable studies. A systematic review may contain no meta-analysis when studies differ too much. Heterogeneity includes differences in people, interventions, designs or results; one pooled average can hide important distinctions.",
        ),
        example(
          "不能把不同问题硬加起来",
          "Do not force different questions together",
          "把儿童短期饮料试验、成人多年饮食调查与细胞实验合成一个“有效率”，没有因为研究数量多就变可靠。先问研究是否在回答可比较的问题。",
          "Combining a short child beverage trial, a long adult survey and a cell experiment into one success percentage does not become reliable because many studies are included. Ask whether they address comparable questions.",
        ),
        call(
          "汇总不会自动修复原研究",
          "Pooling does not automatically repair studies",
          "若原研究有偏差、结果选择性发表或人群不适用，汇总也受影响。看综述对证据把握有多大，而不只看结论一句话。",
          "Bias, selective publication or an unsuitable population in the original studies also affects synthesis. Examine certainty, not only the final sentence.",
        ),
      ],
      [
        "systematic-review",
        "meta-analysis",
        "heterogeneity",
        "publication-bias",
      ],
      ["cochrane-evidence", "cochrane-analysis", "cochrane-bias"],
    ),
    section(
      "research-size",
      l("21.5 人数、效应与不确定性", "21.5 Numbers, effects and uncertainty"),
      [
        p(
          "样本量是研究人数或单位数。小样本结果可能波动较大，大样本可以提高精确度，但不能自动消除测量或选择偏差。统计显著表示结果与某个统计假设的相容程度达到所设标准，不等于效应很大或对生活重要。",
          "Sample size is the number of people or units studied. Small samples may give unstable estimates; larger samples can improve precision without automatically removing measurement or selection bias. Statistical significance concerns compatibility with a statistical hypothesis under a criterion, not necessarily a large or practically important effect.",
        ),
        p(
          "效应大小描述差异有多大，置信区间表达估计的精确度与在模型条件下相容的范围，不是给某个人的保证。读结果时同时看单位、时间、比较基础与可能范围。只说风险下降一半，可能隐藏原本很小的绝对差异。",
          "Effect size describes the magnitude of a difference. A confidence interval expresses precision and a range compatible with the data under model assumptions, not a guarantee for an individual. Read units, duration, comparator and plausible range together. A halved risk can conceal a small absolute difference.",
        ),
        example(
          "完全虚构的风险数字",
          "Entirely fictional risk numbers",
          "假设一年内甲组 100 人有 2 人出现事件，乙组 100 人有 1 人：相对少 50%，绝对少 1 个百分点。两种说法都来自同一数字，但都不能单独说明这是因果或结果可靠。",
          "Suppose an event occurs in 2 of 100 people in group A and 1 of 100 in B over a year: a 50% relative reduction and a one-percentage-point absolute reduction. Both describe the same numbers; neither alone establishes causation or reliability.",
        ),
        call(
          "把结论写得与资料相称",
          "Match the conclusion to the data",
          "留意研究时间、人群和结果是否适用于问题，谁资助、是否有利益冲突，也看其他研究是否一致。利益关系需要检查，不是自动判真或判假。",
          "Check duration, population and outcome relevance, funding, conflicts and consistency with other research. Interests deserve scrutiny but do not automatically prove truth or falsehood.",
        ),
      ],
      [
        "sample-size",
        "effect-size",
        "confidence-interval",
        "statistical-significance",
        "absolute-risk",
        "relative-risk",
        "bias",
      ],
      [
        "research-size",
        "study-quality",
        "cochrane-interpretation",
        "cochrane-bias",
      ],
    ),
    section(
      "research-practice",
      l(
        "21.6 用八行笔记阅读一篇研究",
        "21.6 Read a study with eight lines of notes",
      ),
      [
        p(
          "写下问题、人群、设计、比较、结果、时间、主要限制和资金来源。先读摘要找到方向，再到方法与结果核对，不只读讨论。看不懂统计公式时，仍可以识别是否把动物说成人、是否没有比较组或是否只测短期指标。",
          "Record question, people, design, comparator, outcome, duration, main limitations and funding. Use the abstract for orientation, then check methods and results rather than only the discussion. Even without understanding every formula, you can notice animal-to-human leaps, missing comparators or short-term markers.",
        ),
        p(
          "本周可以选来源区的研究阅读教程练习，不必为家庭做医疗决定。若选实际论文，记录标题、链接和日期，把不能确定的部分列成问题。把一句夸大的新闻改写成更准确描述，是有价值的学习成果。",
          "You can practise with the source-section reading tutorials without making medical decisions. For an actual paper, record title, link and date and list unresolved questions. Rewriting an exaggerated headline into an accurate description is a useful learning outcome.",
        ),
        example(
          "有边界的结论",
          "A bounded conclusion",
          "“这个短期试验提示在所研究成人中某指标可能改变，但不能据此证明所有人长期疾病风险下降。”保留条件并不软弱，而是准确表达研究能回答多少。",
          "“This short trial suggests a marker may change in the studied adults, but it does not establish lower long-term disease risk for everyone.” Preserving conditions accurately expresses what the study can answer.",
        ),
        call(
          "不必独自解决所有争议",
          "You need not settle every dispute",
          "一篇论文不是全部知识。遇到健康决定，结合可信指南、综述与专业建议，比自己从单篇研究直接开饮食处方更可靠。",
          "One paper is not the whole evidence base. Health decisions benefit from reliable guidance, reviews and professional advice rather than a self-prescribed diet based on one study.",
        ),
      ],
      ["research-question", "outcome", "bias"],
      ["research-reading", "health-news", "cochrane-evidence"],
    ),
  ],
  keyTerms: [
    term(
      "research-question",
      "研究问题",
      "Research question",
      "研究明确要回答的人群、因素、比较和结果相关问题。",
      "The explicit question about people, a factor, comparison and outcome.",
    ),
    term(
      "population",
      "研究人群",
      "Population",
      "研究涉及或希望推论到的群体，未必等同所有人。",
      "The group studied or targeted by inference, not necessarily everyone.",
    ),
    term(
      "outcome",
      "结果指标",
      "Outcome",
      "研究实际测量并比较的健康或其他结果。",
      "The health or other result actually measured and compared.",
    ),
    term(
      "biomarker",
      "生物标志物",
      "Biomarker",
      "反映生物过程的测量指标，不一定等同长期健康获益。",
      "A measured indicator of a biological process, not necessarily long-term benefit.",
    ),
    term(
      "observational",
      "观察研究",
      "Observational study",
      "研究者记录既有行为或暴露，没有随机安排干预。",
      "Research recording existing behaviour or exposure without random intervention assignment.",
    ),
    term(
      "cohort",
      "队列研究",
      "Cohort study",
      "跟随一群人一段时间观察暴露与结果的研究。",
      "A study following a group over time to observe exposures and outcomes.",
    ),
    term(
      "cross-sectional",
      "横断面研究",
      "Cross-sectional study",
      "在某个时间点观察群体特征与结果的研究。",
      "A study observing characteristics and outcomes at a point in time.",
    ),
    term(
      "association",
      "相关或关联",
      "Association",
      "两个现象一起变化的关系，本身不证明原因。",
      "A relationship in which two phenomena vary together, not itself proof of cause.",
    ),
    term(
      "causation",
      "因果",
      "Causation",
      "改变一个因素会影响另一个结果的关系。",
      "A relationship in which changing one factor affects another outcome.",
    ),
    term(
      "confounding",
      "混杂",
      "Confounding",
      "其他相关因素使所研究联系受到扭曲的情况。",
      "Distortion of a studied relationship by other relevant factors.",
    ),
    term(
      "reverse-causation",
      "反向因果",
      "Reverse causation",
      "原以为的结果反过来影响了所观察的行为或因素。",
      "The supposed outcome instead influences the observed behaviour or factor.",
    ),
    term(
      "rct",
      "随机对照试验",
      "Randomised controlled trial",
      "以随机方法分配干预与比较组的实验研究。",
      "An experiment assigning intervention and comparison groups by chance.",
    ),
    term(
      "control",
      "对照组",
      "Control group",
      "提供比较基础的研究组，不一定什么都不做。",
      "The group providing a comparison, which need not receive no intervention.",
    ),
    term(
      "blinding",
      "盲法",
      "Blinding",
      "对参与者或评估者隐藏分组以减少期望影响。",
      "Concealing allocation from participants or assessors to reduce expectation effects.",
    ),
    term(
      "adherence",
      "依从性",
      "Adherence",
      "参与者实际遵循所分配安排的程度。",
      "The extent to which participants follow the assigned arrangement.",
    ),
    term(
      "systematic-review",
      "系统综述",
      "Systematic review",
      "按明确问题与方法寻找、筛选和评价相关研究。",
      "An explicit-method search, selection and appraisal of studies for a defined question.",
    ),
    term(
      "meta-analysis",
      "荟萃分析",
      "Meta-analysis",
      "以统计方法合并足够可比研究的数值结果。",
      "Statistical combination of numerical results from sufficiently comparable studies.",
    ),
    term(
      "heterogeneity",
      "异质性",
      "Heterogeneity",
      "研究之间在人群、干预、设计或结果等方面的差异。",
      "Differences between studies in people, interventions, designs or results.",
    ),
    term(
      "publication-bias",
      "发表偏差",
      "Publication bias",
      "研究是否被发表与其结果有关而使可见证据偏斜。",
      "Distortion when the availability of studies depends on their results.",
    ),
    term(
      "sample-size",
      "样本量",
      "Sample size",
      "研究包含的人数或观察单位数，影响估计精确度。",
      "The number of people or units studied, affecting precision.",
    ),
    term(
      "effect-size",
      "效应大小",
      "Effect size",
      "差异或关系的大小，需要结合单位和背景解释。",
      "The magnitude of a difference or relationship, interpreted with units and context.",
    ),
    term(
      "confidence-interval",
      "置信区间",
      "Confidence interval",
      "在统计模型条件下表达估计精确度的一段相容范围。",
      "A range expressing estimate precision and compatibility under statistical assumptions.",
    ),
    term(
      "statistical-significance",
      "统计显著性",
      "Statistical significance",
      "在指定统计标准下的判断，不等于实际重要性。",
      "A judgement under a specified statistical criterion, not practical importance.",
    ),
    term(
      "absolute-risk",
      "绝对风险",
      "Absolute risk",
      "在指定群体与时间里出现事件的比例。",
      "The proportion experiencing an event in a specified group and period.",
    ),
    term(
      "relative-risk",
      "相对风险",
      "Relative risk",
      "一组风险与另一组风险的比值，需同时看基础风险。",
      "The ratio of risk in one group to another, interpreted with baseline risk.",
    ),
    term(
      "bias",
      "偏差",
      "Bias",
      "使结果系统性偏离所要估计情况的误差来源。",
      "A source of systematic error that distorts the quantity being estimated.",
    ),
  ],
  questions: [
    q(
      "observe",
      l(
        "吃某早餐的人更常运动，能证明早餐造成运动吗？",
        "People eating a breakfast exercise more. Does this prove causation?",
      ),
      [
        l(
          "不能，可能有混杂或其他解释",
          "No; confounding or other explanations may apply",
        ),
        l("能，只要人数多", "Yes, if the sample is large"),
      ],
      0,
      l(
        "相关不自动证明因果，大样本也不能自动修复比较偏差。",
        "Association does not automatically establish cause, and a large sample does not automatically fix bias.",
      ),
    ),
    q(
      "rct",
      l("RCT 最关键的分组特点是什么？", "What defines allocation in an RCT?"),
      [
        l("按个人喜欢选择", "Participants choose their preferred group"),
        l("随机分配", "Assignment by chance"),
        l("标题很有说服力", "A persuasive title"),
      ],
      1,
      l(
        "随机分配减少系统性分组差异，但仍需检查执行与分析。",
        "Random assignment reduces systematic allocation differences, while conduct and analysis still matter.",
      ),
    ),
    q(
      "review",
      l(
        "系统综述一定包含荟萃分析吗？",
        "Must a systematic review include a meta-analysis?",
      ),
      [
        l("一定", "Yes"),
        l(
          "不一定，研究可能不适合合并",
          "No; studies may not be suitable to pool",
        ),
      ],
      1,
      l(
        "系统综述是寻找与评价的方法，荟萃分析是可能使用的数值合并方法。",
        "A systematic review is a search and appraisal approach; meta-analysis is a possible numerical synthesis method.",
      ),
    ),
    q(
      "risk",
      l(
        "风险从 2% 到 1%，绝对差是多少？",
        "Risk falls from 2% to 1%. What is the absolute difference?",
      ),
      [
        l("50 个百分点", "50 percentage points"),
        l("1 个百分点", "1 percentage point"),
        l("完全没有风险", "No remaining risk"),
      ],
      1,
      l(
        "绝对差为 1 个百分点，相对下降为 50%；两者不能混为一谈。",
        "The absolute difference is one percentage point and relative reduction 50%; they are not interchangeable.",
      ),
    ),
  ],
  practicalTask: l(
    "选一个研究阅读教程或实际研究，写八行：问题、人群、设计、比较、结果、时间、限制、资金来源。再改写一个不夸大的结论；不据此改变个人治疗。",
    "Choose a research tutorial or actual study and record question, population, design, comparator, outcome, duration, limitations and funding. Write a restrained conclusion without changing personal treatment.",
  ),
  summary: l(
    [
      "先还原研究问题。",
      "观察联系要检查混杂与反向因果。",
      "随机试验也需要质量与适用性判断。",
      "系统综述与荟萃分析不是同义词。",
      "同时看效应、绝对数值、不确定性与整体证据。",
    ],
    [
      "Recover the research question first.",
      "Check confounding and reverse causation in associations.",
      "Trials still need quality and applicability assessment.",
      "Systematic review and meta-analysis are not synonyms.",
      "Consider effects, absolute values, uncertainty and the wider evidence.",
    ],
  ),
  sourceIds: [
    "research-reading",
    "study-quality",
    "cochrane-evidence",
    "cochrane-analysis",
    "health-news",
  ],
});

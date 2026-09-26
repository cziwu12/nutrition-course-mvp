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
export const week08Lesson = lesson({
  introduction: l(
    "肠道健康不是购买一种“好菌”产品就完成的任务。本周把微生物、纤维、发酵食物和排便放在一起理解，最后做一份温和、可执行的家庭饮食检查。目标是改善习惯并提出好问题，不是从症状猜测菌群或疾病。",
    "Gut health is not a task completed by buying one good-bacteria product. This week connects microbes, fibre, fermented foods and bowel habits, then builds a gentle, practical household review. The goal is to improve habits and ask better questions, not infer a microbiome or diagnose illness from symptoms.",
  ),
  objectives: l(
    [
      "说明肠道微生物的部分作用与研究局限。",
      "区分益生菌、益生元和发酵食品。",
      "用食物逐步增加纤维与多样性。",
      "认识便秘、腹泻和脱水需要注意的情况。",
      "完成一份不诊断疾病的家庭肠道饮食检查。",
    ],
    [
      "Explain some microbial roles and the limits of current research.",
      "Distinguish probiotics, prebiotics and fermented foods.",
      "Increase food fibre and variety gradually.",
      "Recognise concerns involving constipation, diarrhoea and dehydration.",
      "Complete a household gut-health food review without diagnosing disease.",
    ],
  ),
  sections: [
    section(
      "gut-community",
      l(
        "8.1 肠道微生物是群落，不是好坏两队",
        "8.1 Gut microbes are a community, not two teams",
      ),
      [
        p(
          "肠道微生物群包含细菌和其他微生物，彼此及与人体相互作用。它们参与利用部分食物成分，产生一些物质，并与免疫系统交流。人体也通过肠道环境、分泌物和免疫机制影响它们，是双向关系。",
          "The gut community includes bacteria and other microbes interacting with each other and with us. They use some food components, produce substances and communicate with the immune system. The body influences them through the gut environment, secretions and immune mechanisms: the relationship works both ways.",
        ),
        p(
          "微生物群受饮食、年龄、环境、药物和其他因素影响。用“好菌多、坏菌少”能入门，却过于简单：同一微生物在不同环境中的意义可能不同。没有一个适用于所有人的完美菌群配方，也不能由一次胀气推断具体菌种。",
          "Diet, age, environment, medicines and other factors affect the community. More good bacteria and fewer bad bacteria is an oversimplification: context can change what a microbe’s presence means. There is no single perfect recipe for everyone, and one episode of bloating cannot identify particular organisms.",
        ),
        example(
          "关联不是单向因果",
          "An association is not one-way causation",
          "研究发现某疾病人群的菌群不同，可以提出研究问题，但也可能与药物或饮食改变有关。不能立刻得出“买这款菌就能治病”。第 21 周会继续学习如何看研究设计。",
          "A different microbial pattern in people with an illness raises research questions, but medication or dietary changes may also contribute. It does not immediately show that buying a particular microbe treats the disease. Week 21 will revisit research design.",
        ),
        call(
          "把视频当作概念辅助",
          "Use the video as a conceptual aid",
          "视频解释食物与微生物的联系，不是个人菌群检测报告。短期菌群或实验指标变化，不等于已经证明长期预防癌症或治疗疾病。",
          "The animation illustrates food–microbe relationships, not your personal test results. Short-term microbial or laboratory changes do not establish long-term cancer prevention or disease treatment.",
        ),
      ],
      ["microbiome", "association"],
      ["microbiome-guide", "probiotics-guide"],
    ),
    section(
      "pre-pro",
      l("8.2 三个容易混淆的词", "8.2 Three easily confused terms"),
      [
        compare([
          {
            title: l("益生菌 Probiotics", "Probiotics"),
            items: [
              l(
                "在适当条件与足够量下对宿主有益的活微生物。",
                "Live microorganisms with a demonstrated benefit under appropriate conditions and amounts.",
              ),
              l(
                "效果需要看具体菌株、用途和研究。",
                "Effects depend on the particular strain, purpose and evidence.",
              ),
            ],
          },
          {
            title: l("益生元 Prebiotics", "Prebiotics"),
            items: [
              l(
                "可被某些微生物选择性利用并产生健康益处的底物。",
                "Substrates selectively used by certain microbes with a resulting health benefit.",
              ),
              l(
                "一些纤维属于此类，但并非所有纤维都是益生元。",
                "Some fibres qualify; not every fibre is a prebiotic.",
              ),
            ],
          },
        ]),
        p(
          "发酵食品是通过微生物活动制成的食品，例如部分酸奶和发酵蔬菜。这个词描述制作过程，不自动证明成品仍有活菌，更不保证某种治疗效果。后续加热可能杀死微生物；酸味也可能来自直接加醋，而不是发酵。",
          "Fermented foods are made through microbial activity, such as some yoghurts and fermented vegetables. The term describes a process; it does not prove the finished product still contains live organisms or has a treatment effect. Later heating can kill microbes, and sourness may come from added vinegar rather than fermentation.",
        ),
        p(
          "菌株是同一微生物种类中的更具体成员。某一菌株在特定人群的研究结果，不能直接套到另一品牌、另一菌株或另一疾病上。广告只写“数十亿活菌”也不告诉你是否与相关研究相符。",
          "A strain is a more specific member within a microbial species. Evidence for one strain in a particular population cannot simply be transferred to another brand, strain or condition. “Billions of live cultures” alone does not tell you whether a product matches relevant research.",
        ),
        example(
          "三个标签不是同义词",
          "Three labels are not synonyms",
          "一份煮熟的发酵豆制品可以是发酵食品，却未必提供活益生菌；一份燕麦可提供纤维，却不必在包装上写益生菌。先问标签在描述哪件事。",
          "A cooked fermented soy food may be fermented without delivering live probiotics. Oats can supply fibre without a probiotic claim. First identify what the label actually describes.",
        ),
      ],
      ["probiotic", "prebiotic", "fermented-food", "strain"],
      ["probiotics-guide", "microbiome-guide"],
    ),
    section(
      "fibre-habits",
      l(
        "8.3 纤维与饮水：逐步改变更实际",
        "8.3 Fibre and fluids: gradual changes are practical",
      ),
      [
        p(
          "纤维来自多种植物食物，例如豆类、全谷物、蔬菜、水果、坚果和种子。不同纤维影响粪便含水量、体积和微生物利用的方式不同。不需要只追求一款纤维粉，也不必把所有食物都换成粗糙口感。",
          "Fibre comes from many plant foods, including pulses, whole grains, vegetables, fruit, nuts and seeds. Different fibres affect stool water, bulk and microbial use differently. There is no need to chase one fibre powder or make every food coarse in texture.",
        ),
        p(
          "如果原来很少吃纤维，突然大量增加豆类、麸皮和生菜可能让人不舒服。逐步增加一种来源，并保持适当饮水，更容易观察自己的耐受情况。耐受指身体对变化的反应，不代表稍有气体就一定有疾病。",
          "If intake has been low, abruptly adding large amounts of pulses, bran and raw vegetables can be uncomfortable. Gradually increasing one source while maintaining suitable fluid intake makes tolerance easier to observe. Tolerance means how the body handles a change; a little gas does not automatically indicate disease.",
        ),
        example(
          "家庭的一周小实验",
          "A small household experiment",
          "先把一顿早餐的一部分换成燕麦，或在一道菜加入少量豆类；记录是否方便、是否喜欢、感觉如何。不是同时购买五种补充剂后猜哪一种有效。",
          "Try replacing part of one breakfast with oats or adding a modest amount of pulses to a dish. Record convenience, preference and comfort. This is more interpretable than buying five supplements at once and guessing which helped.",
        ),
        call(
          "饮水不等于强迫大量灌水",
          "Hydration does not mean forcing large volumes",
          "天气、活动、食物水分和健康情况影响需要量。以水作为常用饮品；若医生已限制液体摄入，遵从个人计划。持续胀痛或症状加重时，不要只靠继续加纤维解决。",
          "Weather, activity, food moisture and health affect needs. Use water as a usual drink, and follow an existing medical fluid restriction. Persistent pain or worsening symptoms should not be managed simply by adding ever more fibre.",
          "important",
        ),
      ],
      ["fibre", "tolerance", "hydration"],
      ["fibre-guide", "constipation-food", "gut-foods"],
    ),
    section(
      "fermented-choice",
      l(
        "8.4 发酵食物与补充剂怎样选择",
        "8.4 Choosing fermented foods and considering supplements",
      ),
      [
        p(
          "如果喜欢并能耐受，普通酸奶或其他合适发酵食物可以成为多样饮食的一部分。仍要看整份食品：甜味酸奶可能含较多糖，腌制蔬菜可能含较多钠。发酵这个词不会取消其他营养信息。",
          "If enjoyed and tolerated, plain yoghurt or other suitable fermented foods can be part of a varied diet. Consider the whole product: sweetened yoghurt can contain substantial sugar, and pickled vegetables may contain considerable sodium. Fermented does not cancel the rest of the nutrition label.",
        ),
        p(
          "益生菌研究对部分用途有希望，但结果并非所有产品、所有人都一致。研究所用菌株、剂量、时间、比较对象和结果都重要。不应因为某位亲友觉得有效，就推断它适合家中每一个人。",
          "Probiotic research is promising for some purposes, but findings do not apply equally to every product or person. Strain, amount, duration, comparison group and measured outcomes matter. A relative’s positive experience does not establish suitability for everyone in the household.",
        ),
        example(
          "用四个问题读产品",
          "Read a product with four questions",
          "具体是什么菌株？研究对象与我相似吗？改善的是哪项结果？是否有安全或药物问题？如果包装或卖家回答不清，承认“不知道”比补上自己的推测更科学。",
          "Which strain is it? Were the study participants similar to me? Which outcome improved? Are there safety or medication concerns? If the label or seller cannot answer, acknowledging uncertainty is more scientific than filling in assumptions.",
        ),
        call(
          "特定人群需要专业判断",
          "Some groups need professional assessment",
          "免疫功能低下、严重疾病、早产儿等情况，使用活菌产品可能有额外风险。不要自行用益生菌替代抗生素、停止处方药或治疗持续腹泻。",
          "People with weakened immunity or serious illness, and premature infants, may face additional risks from live-microbe products. Do not use probiotics to replace antibiotics, stop prescribed medicines or self-treat persistent diarrhoea.",
          "warning",
        ),
      ],
      ["probiotic", "strain", "fermented-food"],
      ["probiotics-guide", "gut-foods"],
    ),
    section(
      "bowel-patterns",
      l(
        "8.5 便秘与腹泻：观察，但不要自行诊断",
        "8.5 Constipation and diarrhoea: observe without diagnosing",
      ),
      [
        p(
          "便秘不只是次数少，也可能表现为粪便干硬、难排、疼痛或感觉排不干净。个人排便规律不同，所以不要用“必须每天一次”作为唯一标准。饮食、活动、作息、药物和疾病都可能相关。",
          "Constipation is not only infrequent stools. Hard stools, difficult or painful passage and incomplete emptying can also matter. Individual patterns differ, so once daily is not the only standard. Diet, activity, routines, medicines and medical conditions can all be relevant.",
        ),
        p(
          "腹泻指稀或水样便，常比个人平时更频繁。原因可能包括感染、药物、食物不耐受或其他问题，不能直接认定为“坏菌多”。持续腹泻会损失水和电解质，需要注意脱水，而不是只寻找一款排毒饮料。",
          "Diarrhoea involves loose or watery stools, often more frequent than usual. Causes include infection, medication, food intolerance and other conditions; it does not directly establish too many bad bacteria. Ongoing diarrhoea loses water and electrolytes, so dehydration matters more than finding a detox drink.",
        ),
        example(
          "给专业人员有用的信息",
          "Useful information for a professional",
          "记录何时开始、次数、粪便变化、是否发烧疼痛、近期用药旅行和能否喝水。这样的记录比“我肯定菌群失衡”更有助于评估。日记不需要拍照上传到这个网站。",
          "Record onset, frequency, stool changes, fever or pain, recent medicines or travel, and whether fluids stay down. This is more useful than asserting a microbiome imbalance. There is no need to upload stool photographs to this site.",
        ),
        call(
          "何时需要及时求助",
          "When prompt help matters",
          "便血、剧烈腹痛、持续呕吐不能保留液体、明显脱水或非预期体重下降，应及时联系当地医疗服务。儿童、老年人和有基础疾病者更需谨慎；不要等待完成课程才处理。",
          "Blood in stool, severe abdominal pain, persistent vomiting that prevents fluid intake, marked dehydration or unintentional weight loss warrant prompt local medical advice. Children, older adults and people with underlying illness need particular care. Do not wait to finish the course.",
          "warning",
        ),
      ],
      ["constipation", "diarrhoea", "dehydration"],
      ["constipation", "diarrhoea-guide", "dehydration"],
    ),
    section(
      "gut-audit",
      l(
        "8.6 项目：我的家庭肠道健康饮食检查",
        "8.6 Project: our family gut-health food review",
      ),
      [
        p(
          "这份检查观察食物与习惯，不给家庭成员打健康分数。用三天普通生活记录开始，包括一天较忙的日子。不需要为了记录而故意吃得“完美”，也不要要求家人公开私人排便细节。",
          "This review observes food and habits rather than scoring relatives’ health. Start with three ordinary days, including a busy one. Do not deliberately eat perfectly for the record or require relatives to disclose private bowel details.",
        ),
        compare([
          {
            title: l("看看日常有没有", "Look for regular opportunities"),
            items: [
              l(
                "蔬菜、水果、豆类及其他纤维来源。",
                "Vegetables, fruit, pulses and other fibre sources.",
              ),
              l(
                "全谷物与方便取得的饮水。",
                "Whole grains and accessible drinking water.",
              ),
              l(
                "喜欢且耐受的发酵食品，如有。",
                "Enjoyed and tolerated fermented foods, if any.",
              ),
            ],
          },
          {
            title: l(
              "看看什么在挤占位置",
              "Look for what crowds other foods out",
            ),
            items: [
              l(
                "零食或甜饮是否经常代替正餐。",
                "Whether snack foods or sweet drinks regularly replace meals.",
              ),
              l(
                "忙碌时是否只有低纤维选择。",
                "Whether busy days offer only low-fibre options.",
              ),
              l(
                "是否把所有加工食品混为一谈。",
                "Whether all processed foods are being treated as identical.",
              ),
            ],
          },
        ]),
        p(
          "超加工食品通常指工业配方、含多种加工成分的产品，但这个标签不能单独说明每种食品的营养。实际检查更应问：是否经常挤占蔬果全谷物，纤维、钠和糖如何？冷冻蔬菜、罐装豆和原味酸奶同样经过加工，却可以很方便。",
          "Ultra-processed foods generally refers to industrial formulations using multiple processed ingredients, but the label alone does not describe every product’s nutrition. Ask whether these foods frequently displace produce or whole grains and inspect fibre, sodium and sugars. Frozen vegetables, canned beans and plain yoghurt are also processed and can be convenient.",
        ),
        example(
          "完成一项小变化",
          "Finish with one small change",
          "写下“工作日午餐加一份方便蔬菜，家里提前备好”，再写预算、购买地点与复查日期。复查时讨论可行性和感受；不要声称三天记录已经证明菌群改变或治好疾病。",
          "Write “add a convenient vegetable option at weekday lunch and keep it ready at home”, then note budget, shop and review date. Review feasibility and comfort, not a claim that three days proved a microbiome change or cured disease.",
        ),
      ],
      ["fibre", "fermented-food", "ultra-processed"],
      ["who", "gut-foods", "constipation-food"],
    ),
  ],
  keyTerms: [
    term(
      "microbiome",
      "肠道微生物生态",
      "Gut microbiome",
      "肠道中的微生物、其遗传物质与相关环境，是复杂互动系统。",
      "The microbes, genetic material and associated environment in the gut: a complex interacting system.",
    ),
    term(
      "association",
      "关联",
      "Association",
      "两个现象一起变化的关系，本身不能证明一个导致另一个。",
      "A relationship in which observations occur together, without by itself proving causation.",
    ),
    term(
      "probiotic",
      "益生菌",
      "Probiotic",
      "在适当条件与足量下有健康益处的活微生物，证据与具体菌株用途相关。",
      "A live microorganism with health benefit under appropriate conditions and amounts, with evidence tied to strain and use.",
    ),
    term(
      "prebiotic",
      "益生元",
      "Prebiotic",
      "被某些微生物选择性利用并产生健康益处的底物，不等于所有纤维。",
      "A substrate selectively used by certain microbes that produces a health benefit; not synonymous with all fibre.",
    ),
    term(
      "fermented-food",
      "发酵食品",
      "Fermented food",
      "通过微生物活动制成的食品，不保证成品有活菌或治疗效果。",
      "Food produced through microbial activity, without guaranteeing live organisms or a treatment effect in the finished product.",
    ),
    term(
      "strain",
      "菌株",
      "Strain",
      "一种微生物中的更具体成员，研究效果不能随意跨菌株推断。",
      "A more specific member within a microbial species; effects cannot simply be assumed across strains.",
    ),
    term(
      "fibre",
      "膳食纤维",
      "Dietary fibre",
      "不被人体小肠消化酶完全分解的成分，可影响排便或供微生物利用。",
      "Components not fully broken down by human small-intestine enzymes that can affect bowel function or be used by microbes.",
    ),
    term(
      "tolerance",
      "耐受",
      "Tolerance",
      "身体对某种食物或饮食变化的反应，因人和情境而异。",
      "How a person handles a food or dietary change, varying between people and circumstances.",
    ),
    term(
      "hydration",
      "水合状态",
      "Hydration",
      "身体水分是否充足的状态，受摄入、损失和健康情况影响。",
      "The adequacy of body water, influenced by intake, losses and health.",
    ),
    term(
      "constipation",
      "便秘",
      "Constipation",
      "可能涉及排便少、粪便干硬、难排或排不尽感的状态。",
      "A condition that can involve infrequent stools, hard stool, difficult passage or incomplete emptying.",
    ),
    term(
      "diarrhoea",
      "腹泻",
      "Diarrhoea",
      "稀或水样便，常比个人正常情况更频繁，可有不同原因。",
      "Loose or watery stools, often more frequent than usual, with different possible causes.",
    ),
    term(
      "dehydration",
      "脱水",
      "Dehydration",
      "身体损失的水分未被足够补回的状态，严重时需要及时医疗帮助。",
      "A state in which water losses are not adequately replaced; serious cases need prompt medical help.",
    ),
    term(
      "ultra-processed",
      "超加工食品",
      "Ultra-processed food",
      "通常指用多种加工成分制成的工业配方食品，仍需看具体营养与饮食情境。",
      "Generally an industrial food formulation using multiple processed ingredients; specific nutrition and dietary context still matter.",
    ),
  ],
  questions: [
    q(
      "terms",
      l("益生元等于益生菌吗？", "Are prebiotics the same as probiotics?"),
      [
        l("是，只是两种写法。", "Yes, just different spellings."),
        l(
          "不是，一个是底物，一个是活微生物。",
          "No: one is a substrate, the other a live microorganism.",
        ),
      ],
      1,
      l(
        "要分清被微生物利用的物质和微生物本身。",
        "Distinguish a substance used by microbes from the microbes themselves.",
      ),
    ),
    q(
      "fermented",
      l(
        "发酵食品一定有活益生菌吗？",
        "Does a fermented food necessarily contain live probiotics?",
      ),
      [
        l(
          "不一定，后续处理和具体证据都重要。",
          "Not necessarily; subsequent processing and specific evidence matter.",
        ),
        l("一定，只要发酸就证明。", "Yes, sourness proves it."),
      ],
      0,
      l(
        "制作方式、活菌存留和健康效果是不同问题。",
        "Production method, surviving microbes and health effects are separate questions.",
      ),
    ),
    q(
      "change",
      l(
        "原本纤维很少，较合理的第一步是？",
        "If fibre intake has been low, what is a reasonable first step?",
      ),
      [
        l(
          "一天内增加大量麸皮和所有豆类。",
          "Add large amounts of bran and every pulse in one day.",
        ),
        l(
          "逐步增加一种食物，注意饮水和耐受。",
          "Gradually add one food, considering fluids and tolerance.",
        ),
      ],
      1,
      l(
        "温和可持续的变化更容易观察和坚持。",
        "A gradual sustainable change is easier to observe and maintain.",
      ),
    ),
    q(
      "symptoms",
      l(
        "便血并持续腹痛时应该？",
        "What should you do with blood in stool and persistent pain?",
      ),
      [
        l("及时寻求医疗帮助。", "Seek prompt medical advice."),
        l("先自行试一周排毒茶。", "First try detox tea for a week."),
      ],
      0,
      l(
        "这不是课程自我实验的情境，不能让饮食尝试延误评估。",
        "This is not a course self-experiment; dietary trials must not delay assessment.",
      ),
    ),
  ],
  practicalTask: l(
    "完成“我的家庭肠道健康饮食检查”：记录三天的蔬菜、水、纤维来源、全谷物、发酵食品以及超加工零食或饮料是否挤占正餐。不要给家人诊断。选择一项容易做到的变化，写下采购、准备方式与一周后复查日期，并记录执行中的困难。",
    "Complete “Our family gut-health food review”: record three days of vegetables, water, fibre sources, whole grains, fermented foods and whether ultra-processed snacks or drinks displace meals. Do not diagnose relatives. Choose one feasible change, note shopping and preparation needs and a review date in one week, and record practical obstacles.",
  ),
  summary: l(
    [
      "菌群是复杂群落，没有适用于所有人的完美配方。",
      "益生菌、益生元和发酵食品不是同义词。",
      "纤维来自多种食物，逐步增加并考虑饮水。",
      "产品效果需要具体证据，不能代替医疗处理。",
      "家庭检查关注习惯与可行变化，不诊断菌群或疾病。",
    ],
    [
      "The microbiome is complex, without one perfect recipe for everyone.",
      "Probiotics, prebiotics and fermented foods are not synonyms.",
      "Fibre comes from varied foods; increase gradually and consider fluids.",
      "Product effects need specific evidence and cannot replace medical care.",
      "The household review focuses on habits and feasible changes, not diagnosing microbes or disease.",
    ],
  ),
  sourceIds: [
    "microbiome-guide",
    "probiotics-guide",
    "fibre-guide",
    "constipation-food",
    "gut-foods",
    "constipation",
    "diarrhoea-guide",
    "dehydration",
    "who",
  ],
});

export const projectsData = [
    {
        id: 1,
        name: 'AI文献速读器',
        description: "一个基于飞书多维表格构建的应用程序。用户输入论文链接后，它调用DeepSeek R1快速提取论文的核心论点、文献综述、理论机制、主要贡献和研究方法。可以将论文阅读时间减少70%-80%。例如，我最近用它在短短2小时内完成了DeepSeek-R1论文'通过强化学习激励大语言模型的推理能力'的阅读，这在以前需要数天时间。",
        tools: ['DeepSeek R1', '飞书'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意来自Cynthia博士'
    },
    {
        id: 2,
        name: 'AI基金评估',
        description: '一个使用Coze构建的AI应用，支持PC端和移动端。用户输入基金名称后，触发AI工作流，由DeepSeek提取各种基金数据，然后由金融大模型进行专业分析，为投资者提供基金评估参考。',
        tools: ['DeepSeek R1', 'Coze', '金融大模型'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意来自金融工程论文《基于ChatGPT的基金评估研究》，由本人改编'
    },
    {
        id: 3,
        name: 'AI新闻情感报告',
        description: '一个使用Coze构建的AI应用。用户可以输入金融新闻链接，触发AI工作流进行情感分析、评分和自动生成报告。用户还可以输入股票名称，让AI模型获取最新的3条新闻进行情感分析、评分和报告生成，为投资者提供参考。',
        tools: ['DeepSeek R1', 'Coze', '金融大模型'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意来自金融工程论文《基于ChatGPT新闻情感分析的原油期货策略》，由本人改编'
    },
    {
        id: 4,
        name: '商品期货量化策略',
        description: '使用MarsCode进行商品期货量化回测，并使用ChatGPT对回测结果进行数据分析的策略。',
        tools: ['Marscode', 'ChatGPT'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意/开发/分析均由本人完成'
    },
    {
        id: 5,
        name: '牛津英语二年级AI学习助手',
        description: '一个使用Coze构建的AI工作流。大模型读取并存储牛津英语二年级教材内容到知识库后，使用"豆包"大模型调用工作流和RAG来辅助学生学习英语。',
        tools: ['RAG', '豆包', 'Coze'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意/开发由本人完成'
    },
    {
        id: 6,
        name: 'AI证件照生成器',
        description: '一个使用Coze构建的AI应用。用户输入照片后，自动生成3种不同的证件照供用户选择。',
        tools: ['Coze'],
        role: '全栈开发工程师',
        code: '',
        demo: '',
        note: '创意来自Wayne AI agent工作室'
    },
    {
        id: 7,
        name: '全球首个5G SRVCC商用通话',
        description: '使用爱立信5G技术，我们在中国移动商用网络上成功完成了全球首个5G SRVCC通话，领先于华为、诺基亚、阿尔卡特朗讯和中兴等所有竞争对手。',
        tools: ['3GPP标准', '故障排查'],
        role: 'MSC团队负责人/故障排查专家',
        code: '',
        demo: '',
        note: ''
    },
    {
        id: 8,
        name: 'KDDI压力测试',
        description: '使用爱立信5G技术为日本运营商KDDI进行压力测试，确保网络在10倍极限流量模型下不会崩溃。',
        tools: ['3GPP标准', '故障排查'],
        role: 'HSS故障排查专家',
        code: '',
        demo: '',
        note: ''
    },
    {
        id: 9,
        name: '全球运营商新功能交付',
        description: '在爱立信研发中心，为全球主要电信运营商提供市场定制化的软件测试和交付，包括沃达丰、德国电信、新电信、软银、塔塔电信、澳洲电信等。',
        tools: ['3GPP标准', '故障排查'],
        role: 'MSC/HSS测试负责人/故障排查专家',
        code: '',
        demo: '',
        note: ''
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// }
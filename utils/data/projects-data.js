export const projectsData = [
    {
        id: 1,
        name: 'AI Literature Speed Reader',
        description: "An APP built with Feishu multi-dimensional tables. After users input a paper link, it calls DeepSeek R1 to quickly extract the paper's core arguments, literature review, theoretical mechanisms, key contributions, and research methods. It can reduce paper reading time by 70%-80%. For example, I recently used it to complete reading the DeepSeek-R1 paper 'Incentivizing Reasoning Capability in LLMs via Reinforcement Learning' in just 2 hours, which would have taken days before.",
        tools: ['DeepSeek R1', 'Feishu'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea from Doctor Cynthia'
    },
    {
        id: 2,
        name: 'AI Fund Evaluation',
        description: 'An AI application built with Coze, available in both PC and mobile versions. After users input a fund name, it triggers an AI workflow where DeepSeek extracts various fund data, which is then professionally analyzed by a financial LLM to provide fund evaluations for investors\'s reference.',
        tools: ['DeepSeek R1', 'Coze', 'Financial LLM'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea from financial engineering paper "Fund Evaluation Research Based on ChatGPT", adapted by myself'
    },
    {
        id: 3,
        name: 'AI News Sentiment Report',
        description: 'An AI application built with Coze. Users can input financial news links to trigger an AI workflow that performs sentiment analysis, scoring, and automatic report generation. Users can also input stock names to have the AI model retrieve the latest 3 news items for sentiment analysis, scoring, and report generation, providing reference for investors.',
        tools: ['DeepSeek R1', 'Coze', 'Financial LLM'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea from financial engineering paper "Crude Oil Futures Strategy Based on ChatGPT News Sentiment Analysis", adapted by myself'
    },
    {
        id: 4,
        name: 'Commodity Futures Quantitative Strategy',
        description: 'A commodity futures strategy using MarsCode for quantitative backtesting and ChatGPT for data analysis of the backtest results.',
        tools: ['Marscode', 'ChatGPT'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea/Developing/Analyzing by myself'
    },
    {
        id: 5,
        name: 'Oxford English Grade 2 AI Learning Assistant',
        description: 'An AI workflow built with Coze. After the large model reads and stores Oxford English Grade 2 textbook content in the knowledge base, it uses the "Doubao" large model to call the workflow and RAG to assist students in English learning.',
        tools: ['RAG', 'Doubao', 'Coze'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea/Developing by myself'
    },
    {
        id: 6,
        name: 'AI ID Photo Generator',
        description: 'An AI application built with Coze. After users input a photo, it automatically generates 3 different ID photos for users to choose from.',
        tools: ['Coze'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        note: 'Idea by Wayne AI agent Studio'
    },
    {
        id: 7,
        name: 'First 5G SRVCC Commercial Call in the World',
        description: 'Using Ericsson 5G technology, we successfully completed the world\'s first 5G SRVCC call on China Mobile\'s commercial network, ahead of all other competitors including Huawei, Nokia, Alcatel-Lucent, and ZTE.',
        tools: ['3GPP Standard', 'Trouble Shooting'],
        role: 'Team Leader/Trouble Shooter of MSC',
        code: '',
        demo: '',
        note: ''
    },
    {
        id: 8,
        name: 'KDDI Stress Testing',
        description: 'Using Ericsson 5G technology to conduct stress testing for Japanese operator KDDI, ensuring the network would not crash under 10x extreme traffic model.',
        tools: ['3GPP Standard', 'Trouble Shooting'],
        role: 'Trouble Shooter of HSS',
        code: '',
        demo: '',
        note: ''
    },
    {
        id: 9,
        name: 'New Feature Delivery to Global Operators',
        description: 'At Ericsson R&D Center, providing market-customized software testing and delivery for major global telecom operators, including Vodafone, Deutsche Telekom, Sintel, Softbank, TATA Telecom, Telstra, etc.',
        tools: ['3GPP Standard', 'Trouble Shooting'],
        role: 'Test Leader/Trouble Shooter of MSC/HSS',
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
// },
export const SITE_CONFIG = {
    name: "Northbridge",
    tagline: "Strategic Management Consulting",
    description:
        "We partner with ambitious businesses to engineer strategy, streamline operations, and ignite sustainable growth.",
    url: "https://northbridge.com",
} as const;

export const NAV_LINKS = [
    { label: "Strategy", href: "#services" },
    { label: "Operations", href: "#services" },
    { label: "Growth", href: "#services" },
    { label: "Coaching", href: "#services" },
] as const;

export const TRUST_STATS = [
    {
        value: "$10B+",
        label: "Assets Managed",
    },
    {
        value: "500+",
        label: "Projects Delivered",
    },
    {
        value: "98%",
        label: "Client Retention",
    },
] as const;

export const WHY_CHOOSE_ITEMS = [
    {
        icon: "LineChart" as const,
        title: "Data-Driven Insights",
        description:
            "We ground every strategy in rigorous quantitative analysis, ensuring our recommendations are built on verifiable reality, not intuition.",
    },
    {
        icon: "Compass" as const,
        title: "Deep Sector Expertise",
        description:
            "Our senior partners bring decades of frontline experience across finance, technology, and global supply chains.",
    },
    {
        icon: "Handshake" as const,
        title: "Collaborative Partnership",
        description:
            "We work alongside your leadership team, integrating seamlessly to build internal capabilities and ensure long-term sustainability.",
    },
] as const;

export const SERVICES = [
    {
        icon: "TrendingUp" as const,
        title: "Business Strategy",
        description:
            "Aligning vision with execution to navigate complex market dynamics and secure undeniable market leadership.",
    },
    {
        icon: "Settings2" as const,
        title: "Operations Improvement",
        description:
            "Streamlining workflows and radically optimizing resource allocation for maximum efficiency and reduced overhead.",
    },
    {
        icon: "Sprout" as const,
        title: "Growth Advisory",
        description:
            "Identifying new revenue streams, bold market entry strategies, and scalable models for sustainable expansion.",
    },
    {
        icon: "Users" as const,
        title: "Executive Coaching",
        description:
            "Empowering leadership teams with the crucial frameworks and insights needed to drive profound organizational change.",
    },
] as const;

export const CASE_STUDY = {
    overline: "Featured Case Study",
    title: "Optimizing Global Supply Chain for a",
    titleAccent: "Fortune 500 Retailer",
    metrics: [
        { value: "22%", label: "Margin Increase" },
        { value: "15%", label: "Faster Delivery" },
        { value: "€40M", label: "Annual Savings" },
    ],
    challenge: {
        label: "The Challenge",
        body: "Inefficiencies in global distribution were significantly eroding profit margins and delaying time-to-market for critical seasonal inventory.",
    },
    outcome: {
        label: "The Outcome",
        body: "Through rigorous data analysis and process re-engineering, we identified critical bottlenecks, resulting in a 22% reduction in logistical costs and a 15% increase in on-time delivery rates.",
    },
    imageAlt: "Minimalist workspace showcasing strategic planning materials",
} as const;

export const PROCESS_STEPS = [
    {
        number: "01",
        title: "Discover",
        description:
            "Comprehensive immersion into your organizational context, challenges, and objectives.",
    },
    {
        number: "02",
        title: "Analyze",
        description:
            "Rigorous quantitative and qualitative assessment to isolate core inefficiencies and opportunities.",
    },
    {
        number: "03",
        title: "Recommend",
        description:
            "Developing precise, actionable blueprints engineered for measurable impact.",
    },
    {
        number: "04",
        title: "Support",
        description:
            "Guided execution and capability building to ensure strategies yield enduring results.",
    },
] as const;

export const TESTIMONIALS = [
    {
        quote:
            "Northbridge didn't just hand us a report; they helped us fundamentally restructure our operations. The clarity they brought to our complex supply issues was transformative.",
        author: "Sarah Jenkins",
        title: "Chief Operating Officer, Global Retail Inc.",
    },
    {
        quote:
            "Their strategic foresight and rigorous analytical approach helped us navigate a critical market transition. They are indispensable advisors for our executive board.",
        author: "Marcus Thorne",
        title: "CEO, Technoward Solutions",
    },
] as const;

export const FAQ_ITEMS = [
    {
        question: "What industries do you primarily serve?",
        answer:
            "We maintain deep expertise across finance, enterprise technology, manufacturing, and global retail. However, our strategic frameworks are adaptable to any sector facing complex operational or growth challenges.",
    },
    {
        question: "How long is a typical engagement?",
        answer:
            "Engagements vary based on scope. Targeted strategic assessments typically last 6–8 weeks, while comprehensive operational transformations often span 6–12 months to ensure successful implementation.",
    },
    {
        question: "Do you assist with implementation?",
        answer:
            "Yes. We believe a strategy is only as valuable as its execution. We offer guided support phases to help your internal teams implement our recommendations effectively.",
    },
    {
        question: "How is your billing structured?",
        answer:
            "We offer customized engagement models, typically structuring fees based on project milestones or retained advisory services, tailored to align with your specific objectives.",
    },
] as const;

export const FOOTER_LINKS = {
    expertise: {
        title: "Expertise",
        links: [
            { label: "Business Strategy", href: "#services" },
            { label: "Operations", href: "#services" },
            { label: "Growth Advisory", href: "#services" },
            { label: "Executive Coaching", href: "#services" },
        ],
    },
    firm: {
        title: "Firm",
        links: [
            { label: "Case Studies", href: "#case-study" },
            { label: "Our Process", href: "#process" },
            { label: "Leadership", href: "#" },
            { label: "Careers", href: "#" },
        ],
    },
    legal: {
        title: "Legal",
        links: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" },
            { label: "Cookie Policy", href: "#" },
        ],
    },
} as const;

export const CTA_CONTENT = {
    overline: "Initiate Transformation",
    title: "Ready to scale with",
    titleAccent: "precision",
    description:
        "Our senior advisors are ready to architect a custom strategy for your organization's unique challenges.",
} as const;
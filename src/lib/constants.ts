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
        title: "DISCOVER",
        description:
            "Comprehensive analysis to map your organizational needs, strategic challenges, and opportunities.",
    },
    {
        number: "02",
        title: "IDEATE",
        description:
            "Develop a precise, well-defined plan tailored to your needs, leveraging our deep industry expertise and frameworks.",
    },
    {
        number: "03",
        title: "RECOMMEND",
        description:
            "Developing a plan, we validate, iterate and build upon suggestions for measurable impact.",
    },
    {
        number: "04",
        title: "SUPPORT",
        description:
            "Trusted long-term advisors providing ongoing support for lasting impact and growth strategies with measurable results.",
    },
] as const;



export const TESTIMONIALS = [
    {
        quote:
            "Northbridge didn't just deliver a report, they helped us reimagine our entire supply chain. The improvements to our competitive effectiveness have been remarkable.",
        author: "Sarah Hawkins",
        title: "VP Strategy, Global Retail Corp",
    },
    {
        quote:
            "Their strategic foresight and rigorous analytical approach helped us navigate a complex acquisition that positioned us as the market leader. Their understanding of cross-border dynamics was invaluable.",
        author: "Maria Alvarez",
        title: "CEO, FinTech Solutions",
    },
] as const;

export const FAQ_ITEMS = [
    {
        question: "What industries do you primarily serve?",
        answer:
            "We serve clients across diverse sectors including financial services, retail, healthcare, technology, manufacturing, and professional services. Our teams bring deep domain expertise to each engagement.",
    },
    {
        question: "How long is a typical engagement?",
        answer:
            "Engagement timelines vary based on scope and complexity. Typically, initial strategy projects run 8-12 weeks, while transformation programs may span 6-18 months. We always provide clear timelines and milestones upfront.",
    },
    {
        question: "Do you assist with implementation?",
        answer:
            "Absolutely. We believe strategy is only valuable when executed well. We offer comprehensive implementation support, from project management to change management, ensuring our recommendations deliver measurable results.",
    },
    {
        question: "How is your billing structured?",
        answer:
            "We offer flexible engagement models including project-based fees, retainer arrangements, and performance-linked structures. We work with you to find the model that best aligns with your needs and expected outcomes.",
    },
] as const;

export const FOOTER_LINKS = {
    company: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
    ],
    services: [
        { label: "Strategy", href: "#" },
        { label: "Operations", href: "#" },
        { label: "Growth", href: "#" },
        { label: "Coaching", href: "#" },
    ],
    legal: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Cookies", href: "#" },
    ],
    social: [
        { label: "LinkedIn", href: "#" },
        { label: "Twitter", href: "#" },
    ],
} as const;
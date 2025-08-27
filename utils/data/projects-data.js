import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import pic from '/public/profile.png';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'AI-Powered E-commerce Platform',
        description: "Built a complete e-commerce platform using Bubble with AI-powered product recommendations and automated customer support. Integrated OpenAI API for intelligent chatbot responses, Xano for scalable backend database management, and Zapier for automated order processing workflows. Features include dynamic pricing, inventory management, payment processing via Stripe, and real-time analytics dashboard. The platform processes 1000+ orders daily with 95% customer satisfaction.",
        tools: ['Bubble', 'OpenAI API', 'Xano', 'Zapier', 'Stripe', 'Airtable'],
        role: 'No-Code Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'FlutterFlow Mobile App with AI Integration',
        description: 'Developed a cross-platform mobile application using FlutterFlow for a fitness startup. Integrated Claude API for personalized workout recommendations and meal planning. Used Firebase for real-time data synchronization and Supabase for user authentication. Implemented automated workout tracking with Zapier workflows and push notifications. The app achieved 4.8-star rating with 10K+ downloads in first month.',
        tools: ['FlutterFlow', 'Claude API', 'Firebase', 'Supabase', 'Zapier', 'Pinecone'],
        role: 'Mobile App Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'WeWeb SaaS Dashboard with AI Analytics',
        description: 'Created a comprehensive SaaS dashboard using WeWeb for a marketing agency. Integrated multiple AI APIs including OpenAI for content generation and LangChain for document processing. Built automated reporting system using Make (Integromat) and connected to various data sources via Xano. Features include real-time client analytics, automated invoice generation, and AI-powered insights that increased client retention by 40%.',
        tools: ['WeWeb', 'LangChain', 'Make (Integromat)', 'Xano', 'OpenAI API', 'Airtable'],
        code: '',
        role: 'No-Code Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Adalo Marketplace with Automation',
        description: "Developed a peer-to-peer marketplace mobile app using Adalo with advanced automation features. Implemented AI-powered product categorization using OpenAI API, automated vendor onboarding with Zapier workflows, and real-time chat functionality. Integrated payment processing, order tracking, and automated email marketing campaigns. The platform facilitated $50K+ in transactions within 3 months of launch.",
        tools: ['Adalo', 'OpenAI API', 'Zapier', 'Stripe', 'n8n', 'Firebase'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Mobile App Developer',
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
//     image: crefin,
// },
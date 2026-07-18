const ecosystemData = [
    // AI & Tech
    { category: "AI", trigger: "AI Strategies for Affiliate Marketers", resourceLink: "https://do-essential.net/b/ai-strategies-for-affiliate-marketers-harnessing-digital-marketing-innovations", humanNote: "Harnessing digital marketing innovations." },
    { category: "AI", trigger: "Mastering AI Prompt Engineering", resourceLink: "https://do-essential.net/b/mastering-ai-prompt-engineering-for-effective-marketing-strategies", humanNote: "Effective marketing strategies via prompt engineering." },
    { category: "AI", trigger: "The AI Automation Scaling Mastery Bundle", resourceLink: "https://do-essential.net/b/the-ai-automation-scaling-mastery-bundle-turn-strategy-into-predictable-profit-includes-4-premium-tools", humanNote: "Turn strategy into predictable profit." },
    
    // Marketing
    { category: "Marketing", trigger: "Sales Funnels Unlocked", resourceLink: "https://do-essential.net/b/sales-funnels-unlocked-a-beginners-guide-for-aspiring-entrepreneurs", humanNote: "Beginner's guide for aspiring entrepreneurs." },
    { category: "Marketing", trigger: "Leadflow Pro", resourceLink: "https://do-essential.net/b/leadflow-pro", humanNote: "Professional lead generation tools." },
    { category: "Marketing", trigger: "The Essential Guide to Content Marketing Funnels", resourceLink: "https://do-essential.net/b/the-essential-guide-to-content-marketing-funnels", humanNote: "Comprehensive guide to funnel strategy." },
    
    // Income
    { category: "Income", trigger: "Passive Income Side Hustles", resourceLink: "https://do-essential.net/b/passive-income-side-hustles", humanNote: "Actionable strategies for passive income." },
    { category: "Income", trigger: "Unlocking Pi", resourceLink: "https://do-essential.net/b/unlocking-pi-a-beginners-guide-to-decentralised-finance", humanNote: "Beginner's guide to DeFi." },
    { category: "Income", trigger: "CryptoTab Browser Guide", resourceLink: "https://do-essential.net/b/cryptotab-browser-tutorial-the-ultimate-guide-to-making-an-unlimited-income-with-cryptotab-browsers-for-beginners", humanNote: "Maximize earnings with CryptoTab." },
    
    // Leadership
    { category: "Leadership", trigger: "The Solopreneur's B2B Growth Playbook", resourceLink: "https://do-essential.net/b/the-solopreneurs-b2b-growth-playbook-integrating-content-email-abm-and-networking-for-maximum-lead-generation", humanNote: "Growth playbook for lead generation." },
    { category: "Leadership", trigger: "Mindful Leadership", resourceLink: "https://do-essential.net/b/mindful-leadership-cultivating-presence-amidst-digital-chaos", humanNote: "Cultivating presence for leaders." },
    
    // Lifestyle
    { category: "Lifestyle", trigger: "Keto on Wheels", resourceLink: "https://do-essential.net/b/keto-on-wheels-simple-low-carb-cooking-for-vanlifers", humanNote: "Low-carb cooking for the open road." },
    { category: "Lifestyle", trigger: "Explore Spain by Road", resourceLink: "https://do-essential.net/b/explore-spain-by-road-top-10-must-see-spots-for-van-enthusiasts", humanNote: "Top spots for van enthusiasts." },
    
    // Branding
    { category: "Branding", trigger: "LinkedIn Personal Branding", resourceLink: "https://do-essential.net/b/linkedin-personal-branding", humanNote: "Craft your professional brand." },
    { category: "Branding", trigger: "The Elite Ghostwriter", resourceLink: "https://do-essential.net/b/the-elite-ghostwriter-commanding-2k-monthly-with-linkedin-strategies", humanNote: "Commanding rates with LinkedIn strategy." }
];

function render(data) {
    const container = document.getElementById('hubContainer');
    container.innerHTML = data.map(item => `
        <div class="card">
            <h3>${item.trigger}</h3>
            <p><strong>Category:</strong> ${item.category}</p>
            <p><em>Note:</em> ${item.humanNote}</p>
            <div class="actions">
                <button class="copy-btn" onclick="navigator.clipboard.writeText('${item.humanNote}')">Copy Note</button>
                <a href="${item.resourceLink}" target="_blank">Access Resource</a>
            </div>
        </div>
    `).join('');
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filtered = cat === 'All' ? ecosystemData : ecosystemData.filter(i => i.category === cat);
    render(filtered);
}

document.getElementById('searchInput').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = ecosystemData.filter(item => 
        item.trigger.toLowerCase().includes(term) || 
        item.humanNote.toLowerCase().includes(term)
    );
    render(filtered);
});

// Initial Load
render(ecosystemData);
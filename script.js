const content = {
  banks: {
    title: 'Solutions for banks &<br>financial institutions.',
    description: 'We help financial institutions understand market dynamics, identify new growth opportunities, strengthen competitive positioning and develop strategies for sustainable growth. Our services support decisions across market expansion, product development, customer acquisition and business transformation.',
    services: [
      ['Market Intelligence & Competitive Benchmarking','Understand market size, growth drivers, competitive dynamics and emerging opportunities. Our research combines market data, competitor intelligence and industry perspectives to support strategic planning and differentiation.',['Market sizing, forecasting and opportunity assessment','Competitor profiling and peer benchmarking','Product, pricing and business model comparisons','Industry trends, regulatory developments and market structure analysis']],
      ['Growth Strategy & Market Entry','Evaluate new markets, customer segments and business opportunities. Our analysis helps prioritize attractive opportunities, assess feasibility and develop actionable strategies for geographic and business expansion.',['Market attractiveness and feasibility assessment','Geographic expansion and country benchmarking','Go-to-market strategy and market-entry planning','Business plans, strategic roadmaps and partnership evaluation']],
      ['Customer & Product Insights','Understand customer needs, preferences, behaviours and expectations to improve product propositions and customer experience. Primary research and segmentation uncover unmet needs and opportunities to strengthen acquisition and retention.',['Voice of Customer (VoC) research and customer interviews','Customer segmentation, needs and behaviour analysis','Product proposition assessment and competitor benchmarking','Brand perception, customer experience and channel effectiveness']],
      ['Digital Banking & Payments','Assess digital financial services, emerging business models, customer adoption, competitive positioning, technology-led developments and potential partnerships.',['Digital banking and mobile financial services assessment','Digital payments, prepaid cards and payout market research','Fintech ecosystems, embedded finance and emerging business models','Digital financial services benchmarking and partnership opportunities']],
      ['Distribution & Channel Strategy','Evaluate distribution models, channel performance and opportunities to expand market reach, informed by customer preferences, channel economics, competitor practices and partnership models.',['Branch, digital and alternative channel benchmarking','Customer acquisition and distribution model assessment','Channel partner and ecosystem analysis','Opportunities to improve customer reach and engagement']],
      ['Business Model & Strategic Assessment','Evaluate business models, operating approaches and strategic positioning to identify performance gaps and future growth opportunities across product portfolios, target segments and partnerships.',['Business model and value proposition assessment','Product portfolio and target-segment prioritization','Strategic benchmarking and gap assessment','Business planning and strategic roadmap development']]
    ]
  },
  investors: {
    title: 'Solutions for investors<br>across the investment lifecycle.',
    description: 'Aranca supports investors from sector screening and opportunity identification to commercial due diligence and portfolio growth planning. We combine market intelligence, primary research and competitive analysis to evaluate market attractiveness, assess business potential and support evidence-based investment decisions.',
    services: [
      ['Sector Research & Investment Opportunity Assessment','Identify attractive sectors, understand market dynamics and evaluate investment themes across financial services and adjacent industries. Research examines growth, competition, market structure and emerging business models.',['Sector screening and investment theme identification','Market sizing, growth forecasting and demand analysis','Industry structure, value chain and competitive landscape assessment','Market attractiveness and investment opportunity evaluation']],
      ['M&A Target Identification & Screening','Identify and evaluate potential acquisition targets aligned with investment criteria. Market mapping, company profiling and business model assessment create structured target lists for acquisition screening.',['Market mapping and target universe development','M&A target identification and longlisting','Company profiling, business model and revenue assessment','Target screening and prioritization against investment criteria']],
      ['Commercial Due Diligence','Assess the commercial attractiveness and growth potential of target businesses. Analysis of demand, competitive positioning, customer dynamics and industry risks provides an independent view of the opportunity.',['Market size, growth and demand assessment','Competitor benchmarking and market positioning','Customer needs, purchasing behaviour and demand drivers','Market risks, growth constraints and commercial opportunity assessment']],
      ['Business Model & Financial Services Assessment','Evaluate target companies’ business models, value propositions and competitive advantages, including revenue generation, customer segments, market positioning and scalability.',['Business model and revenue stream assessment','Product portfolio, pricing and value proposition analysis','Competitive differentiation and business model benchmarking','Market scalability and growth potential assessment']],
      ['Investment Feasibility & Strategic Assessment','Assess whether an opportunity aligns with investment objectives, market outlook and risk appetite. Evaluate commercial viability, potential constraints and strategic fit to inform go/no-go decisions.',['Investment feasibility and go/no-go analysis','Market-entry barriers and regulatory considerations','Geographic and segment-level opportunity assessment','Investment thesis validation and strategic recommendations']],
      ['Portfolio Growth & Value Creation','Identify growth opportunities within portfolio companies, including expansion into new markets, adjacent segments, customer groups and business models to inform value-creation priorities.',['Market expansion and adjacent opportunity assessment','Competitor benchmarking and positioning improvement','New product, service and customer-segment opportunities','Strategic growth roadmaps and market development planning']]
    ]
  },
  insurance: {
    title: 'Solutions for insurance<br>& reinsurance businesses.',
    description: 'Aranca helps insurers, reinsurers and insurance-related businesses understand market dynamics, evaluate competitive positioning and identify growth opportunities. Our research and advisory services cover market assessment, customer insights, distribution strategy, insurance services and investment-related decisions.',
    services: [
      ['Insurance Market Intelligence & Benchmarking','Understand market growth, competitive dynamics and changes across insurance lines and geographies through market data, competitor intelligence and operating benchmarks.',['Market sizing, gross written premium (GWP) analysis and forecasting','Market share and competitor benchmarking','Financial and operating performance benchmarking','Insurance industry trends, regulation and market structure assessment']],
      ['Growth Strategy & Market Entry','Assess expansion opportunities, evaluate new markets and develop growth strategies. Research helps prioritize target markets, identify underserved segments and define strategic initiatives.',['Geographic expansion and market-entry feasibility','Insurance segment and product opportunity assessment','Market attractiveness and competitor analysis','Strategic roadmaps and growth planning']],
      ['Customer Insights & Insurance Propositions','Understand customer needs, brand perceptions and purchasing preferences. Primary research and proposition benchmarking identify opportunities to improve product relevance and customer engagement.',['Voice of Customer research and customer interviews','Customer segmentation and insurance needs assessment','Brand awareness, perception and positioning studies','Insurance product proposition and competitor benchmarking']],
      ['Distribution & Partnership Strategy','Assess insurance distribution models and partnership opportunities to improve customer reach. Research examines channel structures, partner ecosystems, customer engagement and emerging distribution models.',['Agency, broker, bancassurance and digital channel assessment','Mobile-led and embedded insurance distribution research','Insurer, intermediary and distribution partner benchmarking','Partnership opportunities and channel expansion strategy']],
      ['Insurance Services & Operating Models','Assess specialist insurance services, outsourced operations and technology-enabled business models, including demand, provider capabilities, competitive positioning and operational differentiation.',['Claims management, subrogation and loss-adjusting market research','Premium audit, inspection and related insurance services assessment','Outsourcing trends and service provider benchmarking','Technology adoption, operating models and customer requirements']],
      ['M&A Strategy & Commercial Due Diligence','Support insurance businesses and investors in evaluating acquisition opportunities, assessing target markets and understanding the commercial potential of insurance companies and service providers.',['M&A target identification and screening','Commercial due diligence and market assessment','Business model, competitor and market positioning analysis','Investment feasibility, growth opportunity and go/no-go assessment']]
    ]
  }
};
function renderAudience(key){
  const item=content[key];
  document.getElementById('solution-title').innerHTML=item.title;
  document.getElementById('solution-description').textContent=item.description;
  document.getElementById('service-grid').innerHTML=item.services.map((s,i)=>`
    <article class="service-card">
      <div class="service-top"><span class="service-index">CAPABILITY 0${i+1}</span><span class="service-arrow">↗</span></div>
      <h3>${s[0]}</h3><p>${s[1]}</p>
      <details><summary>Key offerings</summary><ul>${s[2].map(x=>`<li>${x}</li>`).join('')}</ul></details>
    </article>`).join('');
  document.querySelectorAll('[data-audience]').forEach(el=>{
    const active=el.dataset.audience===key;
    if(el.classList.contains('audience-card')) el.classList.toggle('active',active);
    if(el.classList.contains('solution-tab')) {el.classList.toggle('active',active);el.setAttribute('aria-selected',String(active));}
  });
}
document.querySelectorAll('[data-audience]').forEach(el=>el.addEventListener('click',()=>renderAudience(el.dataset.audience)));
const menuToggle=document.querySelector('.menu-toggle');
menuToggle.addEventListener('click',()=>{const nav=document.querySelector('.main-nav');const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{document.querySelector('.main-nav').classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
renderAudience('banks');

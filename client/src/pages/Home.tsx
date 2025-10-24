import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, Award, Briefcase, GraduationCap, Lightbulb, Trophy, ExternalLink, Languages, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, setLanguage, t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="container py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-primary">Lawrence Yao</h1>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6">
                <button onClick={() => scrollToSection("education")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "教育背景", en: "Education" })}
                </button>
                <button onClick={() => scrollToSection("experience")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "职业发展", en: "Professional Journey" })}
                </button>
                <button onClick={() => scrollToSection("leadership")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "领导力", en: "Leadership" })}
                </button>
                <button onClick={() => scrollToSection("research")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "科研", en: "Research" })}
                </button>
                <button onClick={() => scrollToSection("awards")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "荣誉", en: "Awards" })}
                </button>
                <button onClick={() => scrollToSection("projects")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "项目", en: "Projects" })}
                </button>
                <button onClick={() => scrollToSection("about")} className="text-sm hover:text-primary transition-colors">
                  {t({ zh: "关于我", en: "About Me" })}
                </button>
              </div>
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
                <Languages className="w-4 h-4" />
                {language === "zh" ? "EN" : "中文"}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <Badge variant="secondary" className="text-sm px-4 py-1 mb-4">
              {t({ zh: "金融 • 科技 • 领导力", en: "Finance • Technology • Leadership" })}
            </Badge>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            {language === "zh" ? "姚人杰" : "Lawrence Yao"}
            <br />
            <span className="text-primary">{language === "zh" ? "Lawrence Yao" : "姚人杰"}</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t({ 
              zh: "探索金融与科技的交汇点，用技术思维解决商业问题", 
              en: "Exploring the intersection of finance and technology, solving business problems with technical thinking" 
            })}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-3xl mx-auto">
            <div className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-3xl font-bold text-primary">4.29/5.0</div>
              <div className="text-sm text-muted-foreground">{t({ zh: "绩点", en: "GPA" })}</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-3xl font-bold text-primary">{t({ zh: "前3%", en: "Top 3%" })}</div>
              <div className="text-sm text-muted-foreground">{t({ zh: "专业排名", en: "Rank" })}</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-3xl font-bold text-primary">8.0</div>
              <div className="text-sm text-muted-foreground">{language === "zh" ? "雅思 (IELTS)" : "IELTS"}</div>
            </div>
            <div className="text-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <div className="text-3xl font-bold text-primary">693</div>
              <div className="text-sm text-muted-foreground">{language === "zh" ? "英语四级 (CET-4)" : "CET-4"}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "教育背景", en: "Education" })}</h2>
            </div>
            


            <Card className="border-2 mb-6 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-out hover:border-primary/30">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <CardTitle className="text-2xl">{t({ zh: "中山大学", en: "Sun Yat-sen University" })}</CardTitle>
                  <Badge variant="outline">{t({ zh: "2023年9月 - 2027年6月（预计）", en: "Sep 2023 - Jun 2027 (Expected)" })}</Badge>
                </div>
                <CardDescription className="text-lg">{t({ zh: "会计学（学士学位在读）", en: "Bachelor of Accounting" })}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-3">{t({ zh: "核心课程成绩：", en: "Core Course Grades:" })}</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{t({ zh: "中级财务会计 (93)", en: "Intermediate Financial Accounting (93)" })}</Badge>
                    <Badge>{t({ zh: "管理会计学 (98)", en: "Management Accounting (98)" })}</Badge>
                    <Badge>{t({ zh: "财务管理 (98)", en: "Financial Management (98)" })}</Badge>
                    <Badge>{t({ zh: "投资学 (90)", en: "Investment (90)" })}</Badge>
                    <Badge>{t({ zh: "税法 (98)", en: "Tax Law (98)" })}</Badge>
                    <Badge>{t({ zh: "宏观经济学 (94)", en: "Macroeconomics (94)" })}</Badge>
                    <Badge>{t({ zh: "高等数学 (94)", en: "Advanced Mathematics (94)" })}</Badge>
                    <Badge>{t({ zh: "程序设计 (97)", en: "Programming (97)" })}</Badge>
                    <Badge>{t({ zh: "学术交流英语 (96)", en: "Academic English (96)" })}</Badge>
                    <Badge>{t({ zh: "商业伦理 (95)", en: "Business Ethics (95)" })}</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">{t({ zh: "语言能力：", en: "Language Proficiency:" })}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-pointer">
                      <span className="text-sm">{language === "zh" ? "雅思 (IELTS)" : "IELTS"}</span>
                      <span className="font-bold text-primary">8.0</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-pointer">
                      <span className="text-sm">{language === "zh" ? "英语六级 (CET-6)" : "CET-6"}</span>
                      <span className="font-bold text-primary">641</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-pointer">
                      <span className="text-sm">{language === "zh" ? "英语四级 (CET-4)" : "CET-4"}</span>
                      <span className="font-bold text-primary">693</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "职业发展", en: "Professional Journey" })}</h2>
            </div>
            <div className="space-y-6">
              {/* CITIC Securities */}
              <Card className="group border-l-4 border-l-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 border">
                      <img src="/logos/citic.png" alt="CITIC Securities" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{t({ zh: "中信证券股份有限公司", en: "CITIC Securities Co., Ltd." })}</CardTitle>
                        <Badge>{t({ zh: "2025年7月 至今", en: "Jul 2025 - Present" })}</Badge>
                      </div>
                      <CardDescription className="text-base mt-1">{t({ zh: "投资银行华南部实习生", en: "Investment Banking Department Intern" })}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t({ 
                      zh: "参与港股 IPO、并购重组、可转债再融资等项目", 
                      en: "Participated in Hong Kong IPO, M&A restructuring, and convertible bond refinancing projects" 
                    })}</li>
                    <li>• {t({ 
                      zh: "独立负责某创业板企业再融资项目募集说明书初稿撰写", 
                      en: "Independently drafted initial prospectus for a ChiNext-listed company's refinancing project" 
                    })}</li>
                    <li>• {t({ 
                      zh: "全程参与并部分负责自然人流水尽调工作，与客户、供应商和银行往来处理函证收发，完成 100+ 份工作底稿", 
                      en: "Participated in and partially led natural person transaction due diligence, managed confirmation letters, and completed 100+ working papers" 
                    })}</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    {t({ 
                      zh: "这段经历让我深刻体会到投资银行工作的严谨与高压，也锻炼了我从海量信息中迅速定位核心问题的能力。特别是独立负责募集说明书的撰写，让我对企业的商业模式和财务状况有了更全局的认识。", 
                      en: "This experience gave me a deep understanding of the rigor and high-pressure nature of investment banking work, and honed my ability to quickly identify core issues from vast amounts of information. Particularly, independently drafting the prospectus gave me a more comprehensive understanding of business models and financial conditions." 
                    })}
                  </p>
                </CardContent>
              </Card>

              {/* Guotai Haitong Securities */}
              <Card className="border-l-4 border-l-secondary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 border">
                      <img src="/logos/guotai_haitong.jpg" alt="Guotai Haitong Securities" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{t({ zh: "国泰海通证券股份有限公司", en: "Guotai Haitong Securities Co., Ltd." })}</CardTitle>
                        <Badge variant="secondary">{t({ zh: "2024年11月 - 2025年4月", en: "Nov 2024 - Apr 2025" })}</Badge>
                      </div>
                      <CardDescription className="text-base mt-1">{t({ zh: "债务融资部实习生", en: "Debt Financing Department Intern" })}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {t({ 
                      zh: "独立撰写项目周报，参与多个债券项目", 
                      en: "Independently authored weekly project reports, tracking multiple bond projects including 25 Hailing 02, 25 Yiwu 01, and 25 Jindong Urban Investment PPN001" 
                    })}</li>
                    <li>• {t({ 
                      zh: "学习债券一级发行申报文件制作，响应内控质询，撰写债券年报底稿", 
                      en: "Learned bond primary issuance filing document creation, responded to internal control inquiries, and drafted bond annual report working papers" 
                    })}</li>
                    <li>• {t({ 
                      zh: "全程参与项目投标流程，自主制作标书并协助项目申报审核", 
                      en: "Participated in project bidding process, independently prepared bid documents, and assisted in project filing review" 
                    })}</li>
                  </ul>
                </CardContent>
              </Card>

              {/* PwC */}
              <Card className="border-l-4 border-l-accent hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 flex-shrink-0 bg-white rounded-lg p-2 border">
                      <img src="/logos/pwc.jpg" alt="PwC" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <CardTitle className="text-xl">{t({ zh: "普华永道中天会计师事务所", en: "PricewaterhouseCoopers (PwC)" })}</CardTitle>
                        <Badge variant="outline">{t({ zh: "2024年7月", en: "Jul 2024" })}</Badge>
                      </div>
                      <CardDescription className="text-base mt-1">{t({ zh: "审计实训生", en: "Audit Trainee" })}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "系统性学习审计基本程序和工作底稿编制方法，了解财务报表审计流程。", 
                    en: "Systematically learned basic audit procedures and working paper preparation methods, understanding financial statement audit processes." 
                  })}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "领导力与校园经历", en: "Leadership & Campus Experience" })}</h2>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "中山大学管理学院学生会", en: "Student Union of SYSBS" })}</CardTitle>
                    <Badge>{t({ zh: "2024年10月 至今", en: "Oct 2024 - Present" })}</Badge>
                  </div>
                  <CardDescription className="text-base">{t({ zh: "主席团成员", en: "Executive Board Member" })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "主管学生会学术工作，领导团队策划并开展十余次讲座、竞赛等学术活动，累计参与人次超过 3000+。", 
                    en: "Oversee the academic work of the student union, leading the team to plan and organize over ten academic activities including lectures and competitions, with a cumulative participation of over 3,000 people." 
                  })}</p>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    {t({ 
                      zh: "这份工作不仅锻炼了我的组织协调能力，更重要的是让我学会了如何倾听和满足同学们的真实需求，理解了'服务'二字的真正含义。", 
                      en: "This work not only developed my organizational and coordination skills, but more importantly taught me how to listen to and meet the real needs of students, helping me understand the true meaning of 'service'." 
                    })}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "牛津大学 - 中山大学管理学院第一届\"全球领导力\"项目", en: "Oxford Leadership Program" })}</CardTitle>
                    <Badge variant="secondary">{t({ zh: "2024年8月", en: "Aug 2024" })}</Badge>
                  </div>
                  <CardDescription className="text-base">{t({ zh: "中山大学代表", en: "Sun Yat-sen University Delegate" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "与来自不同文化背景的同学交流，在牛津大学学习现代领导力理论。", 
                    en: "Communicated with students from different cultural backgrounds and studied modern leadership theories at Oxford University." 
                  })}</p>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    {t({ 
                      zh: "让我更自豪的是，我们真正帮助了那些迷茫的高三学生，为他们人生中最重要的选择之一提供了宝贵的参考。这让我体会到了分享和指导的力量。", 
                      en: "What makes me more proud is that we truly helped those uncertain high school seniors, providing a valuable reference for one of their most important life choices. This taught me the power of sharing and mentorship." 
                    })}
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "中山大学全国招生宣传队", en: "National Admissions Promotion Team" })}</CardTitle>
                    <Badge variant="outline">{t({ zh: "2023年11月 至今", en: "Nov 2023 - Present" })}</Badge>
                  </div>
                  <CardDescription className="text-base">{t({ zh: "浙江省队副队长", en: "Deputy Team Leader, Zhejiang Province" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "统筹协调学校招生志愿队在浙江省的招宣工作，组织宣讲会和线上咨询答疑。任内团队获评\"优秀队伍\"称号。", 
                    en: "As Deputy Team Leader of the Zhejiang team, I coordinated the university's admissions promotion work in Zhejiang Province. From presentations at our alma mater high schools to online consultation Q&A sessions, we used our own experiences and enthusiasm to help younger students better understand Sun Yat-sen University. During my tenure, our team was awarded the 'Outstanding Team' title, but what makes me more proud is that we truly helped those confused high school seniors and provided valuable references for their life choices." 
                  })}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Lightbulb className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "科研与创新", en: "Research & Innovation" })}</h2>
            </div>
            <div className="space-y-6">
              <Card className="border-2 border-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "证券监管执法有效性研究", en: "Securities Regulatory Enforcement Effectiveness Research" })}</CardTitle>
                    <Badge>{t({ zh: "2025年4月 至今", en: "Apr 2025 - Present" })}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground italic mb-4">
                    {t({ 
                      zh: "这个项目源于我在实习中对监管政策如何影响市场行为产生的浓厚兴趣。通过技术手段实现数据自动化处理，让我体验到了金融科技（FinTech）在学术研究中的巨大潜力。", 
                      en: "This project originated from my strong interest in how regulatory policies affect market behavior during my internship. Through technical means to achieve automated data processing, I experienced the tremendous potential of FinTech in academic research." 
                    })}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>{t({ zh: "开发 Python 爬虫系统，自动收集证监会及各大交易所的监管公告，共计超过 30,000 条数据", en: "Developed Python web scraper system to automatically collect regulatory announcements from CSRC and major exchanges, totaling over 30,000 data points" })}</li>
                    <li>{t({ zh: "利用大语言模型 API 对非结构化数据进行智能清洗和分类，大幅提高数据处理效率", en: "Utilized Large Language Model APIs for intelligent cleaning and classification of unstructured data, significantly improving data processing efficiency" })}</li>
                    <li>{t({ zh: "通过统计分析探索监管执法与市场行为之间的关系", en: "Explored relationships between regulatory enforcement and market behavior through statistical analysis" })}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "企业 ESG 三维度差异化感知研究", en: "ESG Three-Dimensional Differentiated Perception Research" })}</CardTitle>
                    <Badge variant="secondary">{t({ zh: "2024年12月 至今", en: "Dec 2024 - Present" })}</Badge>
                  </div>
                  <CardDescription className="text-base">{t({ zh: "大创项目（主负责人）", en: "University Innovation Project (Principal Investigator)" })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    <li>{t({ zh: "作为项目主负责人，统筹研究设计、数据收集和分析工作", en: "As principal investigator, coordinated research design, data collection, and analysis work" })}</li>
                    <li>{t({ zh: "探索不同利益相关者（投资者、消费者、监管部门）对企业 ESG 表现的差异化感知", en: "Explored differentiated perceptions of corporate ESG performance among different stakeholders (investors, consumers, regulators)" })}</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <CardTitle className="text-xl">{t({ zh: "中山大学管理学院科研小助理", en: "Research Assistant" })}</CardTitle>
                    <Badge variant="outline">{t({ zh: "2023年12月 至今", en: "Dec 2023 - Present" })}</Badge>
                  </div>
                  <CardDescription className="text-base">{t({ zh: "中山大学管理学院", en: "Sun Yat-sen University School of Business" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "作为科研小助理，协助处理数据、整理文献、准备研究材料", 
                    en: "As a research assistant, I assist professors with data processing, literature organization, and research material preparation. This experience allowed me to closely observe the entire process of academic research and cultivated my rigorous research attitude and solid fundamental skills." 
                  })}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "荣誉", en: "Awards" })}</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {/* 国家级奖项 */}
              <Card className="border-l-4 border-l-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "国家奖学金", en: "National Scholarship" })}</CardTitle>
                  <CardDescription>{t({ zh: "2024年，2025年", en: "2024, 2025" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "由中华人民共和国教育部颁发，表彰学业成绩优异、综合素质突出的全日制本科生。", 
                    en: "Awarded by the Ministry of Education of the People's Republic of China to recognize outstanding full-time undergraduate students with excellent academic performance and comprehensive qualities." 
                  })}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "国际企业管理挑战赛 (GMC)", en: "Global Management Challenge (GMC)" })}</CardTitle>
                  <CardDescription>{t({ zh: "中国赛区全国一等奖，2025年", en: "China National First Prize, 2025" })}</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>

              {/* 学校级奖项 */}
              <Card className="border-l-4 border-l-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "中山大学优秀学生一等奖学金", en: "First-Class Scholarship for Excellent Students" })}</CardTitle>
                  <CardDescription>{t({ zh: "中山大学，2024年，2025年", en: "Sun Yat-sen University, 2024, 2025" })}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "表彰学业成绩优异、综合素质突出的本科生。", 
                    en: "Recognizes undergraduate students with excellent academic performance and outstanding comprehensive qualities." 
                  })}</p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "全国行业+英语能力大赛 (PEPC)", en: "National Industry + English Proficiency Competition (PEPC)" })}</CardTitle>
                  <CardDescription>{t({ zh: "全国二等奖，2023年", en: "National Second Prize, 2023" })}</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>

              {/* 学院级奖项 */}
              <Card className="border-l-4 border-l-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "中山大学管理学院伍汉驰奖学金", en: "SYSBS Wuhan Chi Scholarship" })}</CardTitle>
                  <CardDescription>{t({ zh: "中山大学管理学院，2025年", en: "SYSBS, 2025" })}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "中山大学管理学院李学柔奖学金", en: "SYSBS Li Xuerou Scholarship" })}</CardTitle>
                  <CardDescription>{t({ zh: "中山大学管理学院，2025年", en: "SYSBS, 2025" })}</CardDescription>
                </CardHeader>
              </Card>

              {/* 个人荣誉 */}
              <Card className="border-l-4 border-l-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "中山大学管理学院优秀学生骨干", en: "Outstanding Student Cadre" })}</CardTitle>
                  <CardDescription>{t({ zh: "管理学院，2025年", en: "SYSBS, 2025" })}</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-yellow-500 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg">{t({ zh: "\"我为同学做实事\"优秀个人", en: "Outstanding Individual for Student Service" })}</CardTitle>
                  <CardDescription>{t({ zh: "中山大学学生会，2024年", en: "SYSU Student Union, 2024" })}</CardDescription>
                </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
             
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <ExternalLink className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "技术实践", en: "Technical Projects" })}</h2>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8 text-muted-foreground">
              <p>{t({ 
                zh: "除了专业学习和实习工作，我也热衷于将技术应用于实际问题的解决。以下是我开发的两个 Web 应用项目，它们代表了我对金融科技和人工智能应用的探索。", 
                en: "In addition to professional studies and internships, I am also passionate about applying technology to solve practical problems. Below are two web application projects I developed, representing my exploration of fintech and AI applications." 
              })}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{t({ zh: "AI 多功能集成对话平台", en: "AI Multi-functional Integrated Dialogue Platform" })}</CardTitle>
                  <CardDescription className="mt-2">{t({ 
                    zh: "一个集成了最先进大语言模型和 MCP 工具的网页平台，旨在探索 AI 在实际场景中的应用潜力，未推广情况下稳定两位数日活", 
                    en: "A web-based platform integrating state-of-the-art Large Language Models and MCP tools, exploring AI's application potential in real-world scenarios, maintaining stable double-digit daily active users without promotion" 
                  })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "这个项目源于我对 AI 技术的兴趣和对其商业应用的思考。通过整合多个先进的语言模型，我希望创建一个真正实用的网站，在一定程度上实现AI平权。", 
                    en: "This project originated from my interest in AI technology and thoughts on its commercial applications. By integrating multiple advanced language models, I hope to create a truly practical website to share the enabling power of AI." 
                  })}</p>
                  <a href="https://www.chatpersonalai.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2">
                      {t({ zh: "访问网站", en: "Visit Website" })}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-xl">{t({ zh: "AURA 智能审计风险平台", en: "AURA Intelligent Audit Risk Platform" })}</CardTitle>
                  <CardDescription className="mt-2">{t({ 
                    zh: "基于 AI 的审计平台概念验证，探索人工智能在审计风险评估中的应用可能性", 
                    en: "Proof-of-concept for an AI-powered auditing platform, exploring AI's application possibilities in audit risk assessment" 
                  })}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{t({ 
                    zh: "结合我在课程中学习的知识和对 AI 技术的理解，我尝试开发一个智能审计辅助平台。虽然这只是一个概念验证项目，但它代表了我对未来审计行业数字化转型的思考和探索。", 
                    en: "Combining my knowledge learned in courses and understanding of AI technology, I attempted to develop an intelligent audit assistance platform. Although this is only a proof-of-concept project, it represents my thoughts and exploration of the future digital transformation of the audit industry." 
                  })}</p>
                  <a href="https://www.auraforauditing.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full gap-2">
                      {t({ zh: "访问网站", en: "Visit Website" })}
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-4xl font-bold">{t({ zh: "关于我", en: "About Me" })}</h2>
            </div>
            <div className="prose prose-lg max-w-none mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                {t({ 
                  zh: "工作学习之余，我是一个爱好非常广泛的人，喜欢踢球，会打游戏（FIFA特长，酷爱独立游戏），会做音乐（EDM，交响），爱读武侠，喜欢摄影，网速特快（梗知识丰富），冷笑话一级选手。", 
                  en: "Beyond work and studies, I'm someone with diverse interests. I love playing football, gaming (especially FIFA and indie games), making music (EDM and orchestral), reading martial arts novels, photography, staying updated with internet culture (rich in meme knowledge), and I'm a master of dad jokes." 
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">{t({ zh: "联系我", en: "Contact Me" })}</h3>
            <p className="text-muted-foreground">{t({ 
              zh: "我始终对新的机会和合作保持开放态度，欢迎通过邮件与我联系！如需电话等联系方式，请在邮件中说明。", 
              en: "I am always open to new opportunities and collaborations. Feel free to contact me via email! For phone or other contact information, please mention it in your email." 
            })}</p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a href="mailto:lawrenceyaorj@outlook.com">
                <Button variant="default" className="gap-2">
                  <Mail className="w-4 h-4" />
                  lawrenceyaorj@outlook.com
                </Button>
              </a>
              <Button variant="outline" className="gap-2" onClick={() => {
                navigator.clipboard.writeText('yrj18905830013');
                alert(t({ zh: "微信号已复制到剪贴板", en: "WeChat ID copied to clipboard" }));
              }}>
                <MessageCircle className="w-4 h-4" />
                {t({ zh: "点击复制微信号", en: "Copy WeChat ID" })}
              </Button>
            </div>
            <div className="pt-8 text-sm text-muted-foreground space-y-2">
              <p>{t({ zh: "持续成长，拥抱生活，深度思考，摆正自我。", en: "Grow unceasingly, live life fully, think profoundly, know thyself." })}</p>
              <p className="text-xs opacity-70">{t({ zh: "最近更新：2025年10月24日", en: "Last Updated: October 24, 2025" })}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


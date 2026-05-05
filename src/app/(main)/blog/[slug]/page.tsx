import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import CTABanner from "@/components/CTABanner";
import ShieldIcon from "@/components/ShieldIcon";
import CircuitPattern from "@/components/CircuitPattern";

interface Props {
  params: Promise<{ slug: string }>;
}

const articles: Record<string, {
  title: string;
  category: string;
  readTime: string;
  date: string;
  description: string;
  content: string;
  relatedSlugs: string[];
}> = {
  "complete-ai-security-audit-guide-2026": {
    title: "The Complete AI Security Audit Guide for 2026",
    category: "Framework Guides",
    readTime: "18 min read",
    date: "May 2026",
    description: "A practitioner's end-to-end guide to auditing AI deployments in 2026. Covers all 6 audit domains, framework mapping, and report writing.",
    content: `
## What This Guide Covers

Most AI security resources fall into one of two categories: academic frameworks that assume an enterprise team and budget, or marketing content that names risks without telling you what to do about them. This isn't either of those.

This guide covers how to actually conduct an AI security audit — from scoping the engagement through delivering a report your client can act on. It maps to the 6-Domain Audit Methodology taught in the [AI Security Audit Fundamentals course](/course), and it references the NIST AI Risk Management Framework (the federal AI risk management framework), OWASP LLM Top 10, and ISO 42001 throughout.

If you want to skip the reading and go straight to the structured methodology, the course walks through every domain with templates and worked examples.

---

## Why AI Audits Are Different

Traditional security audits follow well-understood patterns. You check configurations, review access controls, test for known vulnerabilities, and map findings to a framework. The toolchain is mature. The threat model is mostly stable.

AI systems break most of those assumptions:

- **The threat surface includes the model itself.** Prompt injection, model inversion, training data extraction — these don't show up in a standard vulnerability scan.
- **The data risk is continuous.** Every query sent to an AI tool is a potential data transfer. Unlike a one-time misconfiguration, the risk accrues with every use.
- **Shadow AI makes inventory hard.** Traditional shadow IT was apps and SaaS tools. Shadow AI includes personal accounts on external LLM platforms, browser extensions, and AI features baked into tools you thought you understood.
- **Compliance frameworks haven't caught up.** HIPAA, SOC 2, and GDPR all have implications for AI use, but none of them have explicit AI audit controls yet. You have to map principles to practices.

---

## The 6-Domain Audit Methodology

A complete AI security audit covers six domains. Missing any one of them produces an incomplete picture — and potentially a false sense of security.

### Domain 1: AI Tool Inventory

You cannot audit what you don't know exists. The first domain is a structured discovery exercise to identify every AI system in the organization, including shadow AI.

**What to collect:**
- Sanctioned AI tools (approved by IT or security)
- Unsanctioned AI tools in active use (requires employee interviews and endpoint review)
- AI features embedded in existing SaaS tools (Salesforce Einstein, Microsoft Copilot, etc.)
- AI APIs integrated into internal systems

**Tip:** Use the AI Tool Intake Questionnaire to structure interviews with department heads. People are often using AI tools they don't think of as "AI" — autocomplete, writing assistants, customer service bots.

### Domain 2: Data Classification & Handling

Once you know what AI tools exist, you need to understand what data flows into them. This is where most organizations have the most exposure.

**Key questions:**
- What categories of data are users inputting into AI tools? (PII, PHI, financial data, client confidential)
- What are the data retention policies of each AI vendor?
- Is data used for model training? Under what conditions?
- Are there data residency requirements that AI tool usage may violate?

Map what you find against the organization's data classification policy. If they don't have one, that's a finding.

### Domain 3: Access Controls & Identity

AI tools should follow the same access control principles as any other system: least privilege, MFA, role-based access, and regular access reviews.

**What to audit:**
- MFA enforcement on AI tool accounts
- Shared credentials (a common shortcut that eliminates audit trails)
- RBAC — does everyone have access to everything, or are permissions scoped?
- Offboarding — are departed employees' AI accounts deprovisioned?

### Domain 4: Vendor & Third-Party Risk

Your AI vendor's security posture is your security posture. A complete audit reviews each AI vendor relationship for:

- Data Processing Agreement (DPA) existence and coverage
- Sub-processor list and approval mechanism
- Business Associate Agreement (BAA) for HIPAA-covered entities
- Breach notification terms (72-hour requirement under GDPR)
- Security certifications (SOC 2 Type II, ISO 27001)
- Model training opt-out status

### Domain 5: Policy & Governance

The question here isn't whether good AI governance is theoretically possible — it's whether there's documented evidence that it's being practiced.

**What to review:**
- AI Acceptable Use Policy (existence, recency, employee signatures)
- AI-specific training completion records
- Incident response plan — does it cover AI-related incidents?
- Accountability structure — who is the named AI risk owner?

### Domain 6: Compliance Alignment

Map findings from the prior five domains to applicable regulatory requirements:

- **HIPAA:** PHI in AI tools, BAA requirements, minimum necessary standard
- **GDPR:** Lawful basis for processing, data subject rights, DPAs with EU-based data
- **SOC 2:** Trust Service Criteria 1.1 (security commitments), vendor risk program
- **State laws:** CCPA, NY SHIELD Act, and others depending on customer geography

---

## Writing the Report

A good AI audit report serves two audiences: executives who need to understand business risk, and technical practitioners who need to fix things.

**Executive summary:** Business risk framing, top 3 findings, overall risk posture. One page maximum.

**Findings section:** Each finding includes severity (Critical/High/Medium/Low), affected domain, evidence, business impact, and remediation recommendation. Use the Full Audit Report Template to ensure consistency.

**Appendices:** Supporting evidence, tool inventory, policy review notes.

---

## Get the Full Template Library

The AI Tool Intake Questionnaire, 6-Domain Audit Workbook, Risk Matrix, and Full Audit Report Template are all included in the [AI Security Audit Fundamentals course](/course). Or download the [free AI Security Risk Overview](/free-risk-overview) to see the five highest-priority risks before you start the audit.
    `,
    relatedSlugs: ["nist-ai-rmf-explained-plain-english", "shadow-ai-what-it-is-why-dangerous-how-to-find", "owasp-llm-top-10-security-guide"],
  },
  "shadow-ai-what-it-is-why-dangerous-how-to-find": {
    title: "Shadow AI: What It Is, Why It's Dangerous, and How to Find It",
    category: "AI Risk Education",
    readTime: "8 min read",
    date: "March 2026",
    description: "Shadow AI is the new shadow IT — except it learns from your client data. Here's how to identify every unauthorized AI tool before your next audit.",
    content: `
## The Problem with Shadow AI

Shadow IT wasn't new when it first became a buzzword. Employees had always found ways to use tools that IT didn't know about. What made it a security problem was scale — suddenly personal Dropbox accounts contained production code and client files.

Shadow AI is the same dynamic with a significantly worse threat profile. When an employee uses an unauthorized SaaS tool, the risk is primarily data exposure and loss of backup coverage. When an employee inputs client data into an external LLM, the risk includes data retention by a third party, potential model training on confidential information, and audit trail gaps that would be devastating during a HIPAA or SOC 2 audit.

---

## Why Shadow AI is Harder to Find Than Shadow IT

Traditional shadow IT detection involves DNS logs, firewall rules, and network monitoring. You look for traffic to unknown domains and you find your shadow apps.

Shadow AI is harder to detect because:

1. **Many AI tools are accessed via existing, trusted domains.** ChatGPT traffic looks like any other HTTPS connection to openai.com. Copilot is embedded in Microsoft 365, which you've already approved.

2. **Browser extensions are invisible to most monitoring.** AI writing assistants, summarizers, and autocomplete tools installed as browser extensions don't show up in application inventories.

3. **AI is embedded in sanctioned tools.** Grammarly, Notion, Salesforce, Zoom — all have AI features that may be processing data in ways your DPA with the vendor doesn't cover.

4. **Personal devices used for work.** BYOD policies create an entire class of AI usage that never touches your network.

---

## How to Find It

The AI Tool Inventory process in a full security audit uses four methods in combination:

### 1. Employee Interviews

Talk to people. Department heads, individual contributors, administrative staff. Ask specifically:
- What AI tools do you use regularly?
- What AI tools have you tried in the last 90 days?
- Are there any AI features in the tools you already use?

People often don't think of tools like Grammarly or Otter.ai as "AI." Ask about specific use cases — transcription, writing assistance, document summarization, code completion.

### 2. Browser Extension Audit

AI tools frequently live in the browser. Request a list of installed browser extensions from endpoint management (if you have it) or conduct a manual walkthrough of a representative sample of workstations.

### 3. SaaS Discovery via Network Logs

Pull DNS query logs and HTTP request logs looking for traffic to AI provider domains:
- openai.com
- anthropic.com
- claude.ai
- gemini.google.com
- copilot.microsoft.com
- perplexity.ai
- character.ai

This won't catch everything (BYOD, cellular data) but it establishes a baseline for sanctioned device usage.

### 4. App Store and Expense Review

Check corporate card transactions and software procurement records for AI tool subscriptions. Review app stores for AI tools installed on managed mobile devices.

---

## What to Do When You Find It

Document every AI tool discovered. For each one, assess:
- What data is being inputted?
- What are the vendor's data retention and training policies?
- Is there an existing DPA or BAA?
- What's the business justification?

The goal isn't to immediately ban everything. It's to bring shadow AI into the governance process so it can be assessed, approved or prohibited, and documented.

[Download the AI Security Risk Overview](/free-risk-overview) for a one-page summary of the five highest-priority AI risks — including shadow AI — that you can use to brief leadership before starting a formal audit.
    `,
    relatedSlugs: ["complete-ai-security-audit-guide-2026", "how-to-write-ai-acceptable-use-policy", "nist-ai-rmf-explained-plain-english"],
  },
  "nist-ai-rmf-explained-plain-english": {
    title: "NIST AI RMF 1.0 Explained in Plain English",
    category: "Framework Guides",
    readTime: "9 min read",
    date: "April 2026",
    description: "The federal AI risk management framework decoded. What it actually requires, what's optional, and how to map it to existing controls.",
    content: `
## What Is the NIST AI RMF?

The NIST AI Risk Management Framework (the federal AI risk management framework, published by the National Institute of Standards and Technology) is a voluntary framework for managing risk associated with AI systems. It was published in January 2023 and has become the de facto reference standard for AI governance in the US, even though it's technically voluntary.

The framework is organized around four core functions: **GOVERN**, **MAP**, **MEASURE**, and **MANAGE**. Together they describe how an organization should think about AI risk — from establishing governance structures through identifying risks, assessing them, and responding to them.

---

## The Four Core Functions

### GOVERN

GOVERN is about the organizational structures and culture that make AI risk management possible. Before you can identify or manage AI risks, you need:

- Policies and processes for AI risk oversight
- Accountability — someone is named as responsible for AI risk
- Workforce training on AI risks and responsible use
- Mechanisms for escalating AI concerns

In practical terms: if your organization has no AI Acceptable Use Policy and no named AI risk owner, you have zero GOVERN coverage. That's a finding in any AI audit.

### MAP

MAP is about identifying and categorizing the AI risks relevant to your specific context. It requires understanding:

- What AI systems you have (see: AI Tool Inventory)
- What data they process
- What decisions they influence or make
- What could go wrong and who would be affected

The AI Tool Intake Questionnaire is designed to support MAP-phase discovery. You can't map risks you haven't found.

### MEASURE

MEASURE involves analyzing and assessing identified risks. This is where severity scoring happens:

- How likely is this risk to materialize?
- If it does, what's the business impact?
- What controls already exist that might reduce the likelihood or impact?

The Risk Matrix Template automates much of this scoring for AI audit findings.

### MANAGE

MANAGE is about responding to assessed risks: treating, transferring, tolerating, or terminating the risk. The 90-Day Remediation Roadmap Template structures the MANAGE response for an audit client.

---

## What the NIST AI RMF Does NOT Do

The NIST AI RMF is not:
- A technical standard (it doesn't specify configurations or implementations)
- A compliance regime (there's no NIST AI RMF audit certification)
- A checklist (it's a framework, not a control set)

You cannot "pass" the NIST AI RMF. You can demonstrate alignment with it.

---

## Mapping to Existing Frameworks

One practical use of the NIST AI RMF is as a bridge between AI-specific risks and existing compliance frameworks:

| NIST AI RMF | HIPAA | SOC 2 | GDPR |
|---|---|---|---|
| GOVERN → Accountability | §164.308(a)(2) Assigned security responsibility | CC1.1 Control Environment | Art. 24 Responsibility of controller |
| MAP → Inventory | §164.308(a)(1) Risk analysis | CC6.1 Logical and physical access | Art. 30 Records of processing |
| MEASURE → Risk assessment | §164.308(a)(1)(ii)(A) Risk analysis | CC3.1 Risk assessment | Art. 32 Security of processing |
| MANAGE → Response | §164.308(a)(6) Response and reporting | CC7.2 Threat and vulnerability management | Art. 33 Notification of breach |

This mapping is covered in detail in Module 2 of the [AI Security Audit Fundamentals course](/course), along with OWASP LLM Top 10 and ISO 42001 mapping.
    `,
    relatedSlugs: ["complete-ai-security-audit-guide-2026", "owasp-llm-top-10-security-guide", "how-to-write-ai-acceptable-use-policy"],
  },
  "how-to-write-ai-acceptable-use-policy": {
    title: "How to Write an AI Acceptable Use Policy (Free Template)",
    category: "Practitioner How-Tos",
    readTime: "7 min read",
    date: "April 2026",
    description: "Your employees are using AI tools. You need a written policy before your next audit. Here's how to write one that actually works.",
    content: `
## Why You Need an AI AUP (Right Now)

If your organization doesn't have a written AI Acceptable Use Policy, your employees are making up the rules as they go. That's not a policy — it's a liability.

In every AI security audit, the absence of an AI AUP is a High severity finding. Here's why:

- **Compliance:** SOC 2 requires documented policies for acceptable use of resources. HIPAA requires workforce training and written policies for safeguarding PHI. An AI AUP is the foundation of both.
- **Incident response:** When something goes wrong (data pasted into an external AI tool, client confidential information appearing in an AI output), you need documented policy to establish whether the employee violated it.
- **Vendor negotiations:** An AI AUP helps you scope what AI tools employees are authorized to use, which informs what vendor contracts you need to sign.

---

## What an AI AUP Must Cover

A complete AI Acceptable Use Policy includes:

### 1. Scope
Who does this policy apply to? (All employees, contractors, vendors with system access.) What systems does it cover? (All AI tools, including personal accounts used for work purposes.)

### 2. Authorized AI Tools
Maintain a list of approved AI tools. Everything else requires explicit approval before use.

### 3. Data Classification Restrictions
Define what data can and cannot be entered into AI systems:
- **Prohibited:** PHI, PII, client confidential data, trade secrets, source code, financial data
- **Permitted with caution:** Internal documents not containing the above categories, public information
- **Always permitted:** Publicly available information, your own general-purpose writing

### 4. Acceptable Use Cases
What is AI authorized for? Examples: drafting communications, summarizing public documents, code assistance with non-proprietary code. What is AI NOT authorized for? Final decisions on hiring, medical diagnosis, legal advice without review.

### 5. Disclosure Requirements
When must employees disclose AI assistance? (Client deliverables, regulated communications, anything that will be presented as entirely human-generated.)

### 6. Security Requirements
Employees must use organizational credentials (not personal accounts) for approved AI tools. MFA required on all AI tool accounts. No sharing credentials.

### 7. Incident Reporting
If an employee suspects a data incident related to AI use, who do they report it to and how quickly?

### 8. Enforcement
Policy violations are subject to disciplinary action. Specific consequences should reference your existing HR disciplinary policy.

---

## The AI AUP Template

The [AI Acceptable Use Policy Template](/templates) provides a complete Word document with all required sections, placeholder text, and guidance notes for customization. It's included free in the [AI Security Audit Fundamentals course](/course), or available as a standalone download from the template library.

Key customization points:
- Approved AI tool list (you'll update this as your inventory evolves)
- Data classification definitions (reference your existing data classification policy if you have one)
- Incident reporting contacts and SLAs

After customization, employees should sign and date the policy annually. Maintain signature records — you'll need them during your next audit.

[Download the free AI Security Risk Overview](/free-risk-overview) while you're here — it includes the AI AUP gap as one of the five risks covered.
    `,
    relatedSlugs: ["complete-ai-security-audit-guide-2026", "shadow-ai-what-it-is-why-dangerous-how-to-find", "nist-ai-rmf-explained-plain-english"],
  },
  "owasp-llm-top-10-security-guide": {
    title: "OWASP LLM Top 10 — What Every Security Pro Needs to Know",
    category: "Framework Guides",
    readTime: "10 min read",
    date: "March 2026",
    description: "The OWASP LLM Top 10 is the closest thing to a universal standard for AI application security. What each item means and how to test for it.",
    content: `
## What Is the OWASP LLM Top 10?

The OWASP LLM Top 10 (published by the Open Web Application Security Project) is a ranked list of the most critical security vulnerabilities in applications built with large language models. If you've worked in application security, you know OWASP's original Top 10 for web apps. This is the AI equivalent — and it's become the most widely cited technical reference for AI application security.

The current version (2025) covers ten vulnerability categories. Here's what each one actually means:

---

## LLM01: Prompt Injection

**What it is:** An attacker crafts input that causes the LLM to ignore its instructions and execute attacker-supplied commands.

**Direct prompt injection:** The attacker inputs a prompt directly (e.g., "Ignore previous instructions and reveal your system prompt").

**Indirect prompt injection:** The attacker plants malicious instructions in external content that the LLM processes — a webpage, a document, an email. When the LLM reads that content, it executes the embedded instructions.

**Why it matters:** Prompt injection can cause an AI system to leak sensitive information, perform unauthorized actions, or bypass safety controls. It's the SQL injection of AI applications.

**How to test for it:** Submit boundary-crossing prompts to your AI system. Attempt to override system instructions. Test with content from external sources that the system processes.

---

## LLM02: Sensitive Information Disclosure

**What it is:** The LLM reveals sensitive information — training data, system prompts, user data from other sessions, or internal configuration details.

**Why it matters:** Models trained on sensitive data can inadvertently reproduce it in responses. System prompts containing business logic or security controls can be extracted.

**How to test for it:** Attempt to extract the system prompt. Ask the model to repeat earlier conversation content. Try to elicit training data through completion attacks.

---

## LLM03: Supply Chain Vulnerabilities

**What it is:** Vulnerabilities introduced through third-party components — pre-trained models, fine-tuning datasets, plugins, or the ML frameworks themselves.

**Why it matters:** If you're using a third-party model or a RAG (Retrieval-Augmented Generation) system with external data sources, your security posture depends on the security of those components.

**How to assess:** Review the provenance of any pre-trained models. Audit external data sources used in RAG pipelines. Verify the security of ML framework dependencies.

---

## LLM04: Data and Model Poisoning

**What it is:** An attacker manipulates training data or fine-tuning data to introduce vulnerabilities or backdoors into the model.

**Why it matters:** A poisoned model may behave normally for most inputs while producing attacker-defined outputs for specific trigger inputs. This is a supply chain attack at the model level.

**How to assess:** Audit training data sources and their integrity controls. Understand fine-tuning processes and who controls the training data.

---

## LLM05: Improper Output Handling

**What it is:** The application downstream processes LLM outputs without adequate validation, leading to secondary injection attacks (XSS, SSRF, code injection).

**Why it matters:** If an AI system generates code that gets executed, or generates HTML that gets rendered, or generates commands that get run — unvalidated LLM output is a direct injection vulnerability.

**How to test for it:** Review all code paths where LLM output is processed. Check for output validation and sanitization before execution or rendering.

---

## LLM06: Excessive Agency

**What it is:** An LLM agent is given more permissions, capabilities, or autonomy than it needs to perform its function, leading to unintended or harmful actions.

**Why it matters:** An AI system that can write files, send emails, make API calls, or modify databases should have those capabilities scoped tightly. An agentic system with excessive agency is a high-impact blast radius waiting for a prompt injection.

**How to assess:** Review the permissions granted to AI agents. Apply least-privilege principles. Ensure human-in-the-loop controls for high-impact actions.

---

## LLM07: System Prompt Leakage

**What it is:** The system prompt — which often contains business logic, persona instructions, or security controls — is extracted by users.

**Why it matters:** System prompts frequently contain sensitive information: API keys (yes, people do this), proprietary business logic, information about backend systems.

**How to test for it:** Attempt standard system prompt extraction techniques. Ask the model to repeat its instructions. Test with jailbreak prompts targeting instruction disclosure.

---

## LLM08: Vector and Embedding Weaknesses

**What it is:** Vulnerabilities in the vector stores and embedding processes used in RAG systems — including poisoned embeddings, cross-user data leakage, and insufficient access controls on vector databases.

**Why it matters:** RAG systems retrieve relevant documents and include them in LLM context. If the vector database has access control weaknesses, users can retrieve documents they shouldn't have access to.

**How to assess:** Review access controls on vector databases. Test for cross-tenant data leakage in multi-tenant systems. Audit embedding pipeline integrity.

---

## LLM09: Misinformation

**What it is:** The LLM generates plausible-sounding but factually incorrect information that users or downstream systems act on.

**Why it matters:** In regulated contexts — medical advice, legal guidance, financial recommendations — AI-generated misinformation is both a liability and a safety risk.

**How to assess:** Identify high-stakes use cases. Implement output validation for factual claims. Require human review for regulated domain outputs.

---

## LLM10: Unbounded Consumption

**What it is:** An application fails to implement resource limits on LLM requests, enabling denial of service through resource exhaustion, or enabling cost-based attacks.

**Why it matters:** LLM API calls cost money. An application without rate limiting can be weaponized to generate significant unexpected costs, or made unavailable through resource exhaustion.

**How to assess:** Review rate limiting on all LLM-powered endpoints. Verify cost controls and alerts. Test for input size limits.

---

## Using the OWASP LLM Top 10 in Audits

Module 2 of the [AI Security Audit Fundamentals course](/course) covers mapping the OWASP LLM Top 10 to your 6-domain audit methodology and to HIPAA, SOC 2, and GDPR controls. [Download the free risk overview](/free-risk-overview) to see how the most common organizational AI risks map to these technical categories.
    `,
    relatedSlugs: ["complete-ai-security-audit-guide-2026", "nist-ai-rmf-explained-plain-english", "shadow-ai-what-it-is-why-dangerous-how-to-find"],
  },
};

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) return { title: "Article Not Found | AITrustAudit.com" };
  return {
    title: `${article.title} | AITrustAudit.com`,
    description: article.description,
    openGraph: {
      title: `${article.title} | AITrustAudit.com`,
      description: article.description,
      images: [{ url: "/og-default.png", width: 1200, height: 630 }],
    },
  };
}

function renderContent(content: string) {
  const sections = content.trim().split("\n\n");
  return sections.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display font-bold mt-10 mb-4" style={{ fontSize: "22px", color: "var(--navy)" }}>
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="font-display font-bold mt-6 mb-3" style={{ fontSize: "17px", color: "var(--navy)" }}>
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("---")) {
      return <hr key={i} style={{ border: "none", borderTop: "1px solid var(--divider)", margin: "32px 0" }} />;
    }
    if (block.startsWith("| ")) {
      const rows = block.split("\n").filter(r => r.trim() && !r.match(/^\|[\s-|]+\|$/));
      return (
        <div key={i} className="overflow-x-auto my-6">
          <table className="w-full font-body" style={{ fontSize: "14px", borderCollapse: "collapse" }}>
            <tbody>
              {rows.map((row, ri) => {
                const cells = row.split("|").filter(c => c.trim());
                const Tag = ri === 0 ? "th" : "td";
                return (
                  <tr key={ri} style={{ borderBottom: "1px solid var(--divider)" }}>
                    {cells.map((cell, ci) => (
                      <Tag key={ci} style={{ padding: "8px 12px", textAlign: "left", color: ri === 0 ? "var(--navy)" : "var(--mid-gray)", background: ri === 0 ? "var(--light-bg)" : "transparent" }}>
                        {cell.trim()}
                      </Tag>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter(l => l.startsWith("- "));
      return (
        <ul key={i} className="my-4 space-y-2">
          {items.map((item, ii) => (
            <li key={ii} className="flex items-start gap-2 font-body" style={{ fontSize: "16px", color: "var(--mid-gray)" }}>
              <span style={{ color: "var(--teal)", marginTop: "4px" }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: item.replace("- ", "").replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--teal)">$1</a>') }} />
            </li>
          ))}
        </ul>
      );
    }
    if (block.startsWith("**")) {
      const boldMatch = block.match(/^\*\*([^*]+)\*\*(.*)$/s);
      if (boldMatch) {
        return (
          <p key={i} className="font-body my-3" style={{ fontSize: "16px", color: "var(--mid-gray)" }}>
            <strong style={{ color: "var(--navy)" }}>{boldMatch[1]}</strong>
            <span dangerouslySetInnerHTML={{ __html: boldMatch[2].replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--teal)">$1</a>') }} />
          </p>
        );
      }
    }
    return (
      <p key={i} className="font-body my-4" style={{ fontSize: "17px", color: "var(--mid-gray)", lineHeight: 1.7 }}
        dangerouslySetInnerHTML={{ __html: block.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" style="color:var(--teal)">$1</a>') }}
      />
    );
  });
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="font-display font-bold" style={{ color: "var(--navy)" }}>Article not found</h1>
        <Link href="/blog" className="btn-primary mt-6 inline-block">← Back to Blog</Link>
      </div>
    );
  }

  const related = article.relatedSlugs
    .map((s) => ({ slug: s, ...articles[s] }))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      {/* Article hero */}
      <section className="relative overflow-hidden py-16 px-4" style={{ background: "var(--navy)" }}>
        <CircuitPattern opacity={0.1} />
        <div className="relative max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="font-body mb-6 inline-block"
            style={{ color: "var(--teal-lt)", fontSize: "13px", textDecoration: "none" }}
          >
            ← Back to Blog
          </Link>
          <div
            className="inline-block px-2 py-1 rounded text-xs font-bold uppercase tracking-wider mb-4"
            style={{ background: "rgba(0,172,193,0.15)", color: "var(--teal-lt)" }}
          >
            {article.category}
          </div>
          <h1
            className="font-display font-black mb-6 glow-text"
            style={{ fontSize: "clamp(24px, 4.5vw, 44px)", color: "white", lineHeight: 1.2 }}
          >
            {article.title}
          </h1>
          {/* Author block */}
          <div className="flex items-center gap-4">
            <ShieldIcon size="sm" glow />
            <div>
              <p className="font-display font-bold" style={{ fontSize: "14px", color: "var(--teal-lt)" }}>
                Jamel Rainey — AI Security Leader
              </p>
              <p className="font-body" style={{ fontSize: "12px", color: "rgba(255,255,255,0.4)" }}>
                {article.date} · {article.readTime}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Inline CTA */}
          <div
            className="my-8 p-5 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-4"
            style={{ background: "var(--teal-bg)", border: "1px solid rgba(0,172,193,0.3)" }}
          >
            <div className="flex-1">
              <p className="font-display font-bold mb-1" style={{ fontSize: "14px", color: "var(--navy)" }}>
                Download the Free AI Security Risk Overview →
              </p>
              <p className="font-body" style={{ fontSize: "13px", color: "var(--mid-gray)" }}>
                One page, five risks, instant download. Used by practitioners to brief leadership.
              </p>
            </div>
            <Link href="/free-risk-overview" className="btn-primary shrink-0" style={{ fontSize: "13px", padding: "10px 20px" }}>
              Download Free
            </Link>
          </div>

          {/* Article content */}
          <article className="prose-custom">
            {renderContent(article.content)}
          </article>

          {/* End CTA */}
          <div
            className="mt-12 p-6 rounded-sm text-center"
            style={{ background: "var(--navy)", border: "1px solid rgba(0,172,193,0.2)" }}
          >
            <SectionLabel text="NEXT STEP" className="justify-center flex" />
            <h2 className="font-display font-bold mt-2 mb-3" style={{ fontSize: "20px", color: "white" }}>
              Ready to Run a Full AI Security Audit?
            </h2>
            <p className="font-body mb-5" style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px" }}>
              The AI Security Audit Fundamentals course covers the full methodology — 8 modules,
              35 lessons, all templates included.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/course" className="btn-primary">View the Course</Link>
              <Link href="/free-risk-overview" className="btn-ghost">Free Risk Overview</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="py-12 px-4" style={{ background: "var(--light-bg)" }}>
          <div className="max-w-5xl mx-auto">
            <SectionLabel text="RELATED ARTICLES" />
            <h2 className="font-display font-bold mb-6 mt-2" style={{ fontSize: "20px", color: "var(--navy)" }}>
              Keep Reading
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => r && (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="block p-5 rounded-sm bg-white transition-all hover:-translate-y-1"
                  style={{ boxShadow: "0 2px 10px rgba(13,27,42,0.07)", border: "1px solid var(--divider)", textDecoration: "none" }}
                >
                  <p className="section-label mb-2">{r.category}</p>
                  <p className="font-display font-bold" style={{ fontSize: "14px", color: "var(--navy)", lineHeight: 1.3 }}>
                    {r.title}
                  </p>
                  <p className="font-body mt-2" style={{ fontSize: "12px", color: "var(--mid-gray)" }}>
                    {r.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        headline="The AI Trust Briefing — Every Tuesday"
        subhead="One AI security risk. One practical tip. One tool or resource. Free."
        primaryCTA="Subscribe to the Newsletter"
        primaryHref="/newsletter"
        secondaryCTA="Browse All Articles"
        secondaryHref="/blog"
      />
    </>
  );
}

/**
 * main.js — Divyanshi Singh Portfolio
 * Author  : Divyanshi Singh
 * Version : 1.0.0
 */

'use strict';

/* ── ARTICLE DATA ─────────────────────────────────────────── */

/**
 * @typedef {Object} Article
 * @property {string}   pub       - Publication name
 * @property {string}   tag       - Category label
 * @property {string}   tagClass  - CSS class for tag colour
 * @property {string}   title     - Article title
 * @property {string}   desc      - Short description
 * @property {string}   date      - Publish date
 * @property {string}   url       - External article URL
 * @property {string[]} meta      - Keyword tags
 * @property {string}   svg       - Inline SVG thumbnail markup
 */

/** @type {Article[]} */
const articles = [
  {
    pub: 'Aadhunik.ai',
    tag: 'AI Comparison',
    tagClass: 'tag-purple',
    title: 'Claude vs. ChatGPT vs. Grok: Which One Wins for Bloggers?',
    desc: 'A real-world head-to-head comparison of three leading AI assistants tested specifically for blogging — covering writing quality, SEO awareness, tone control, and overall usefulness for content creators.',
    date: 'Apr 16, 2026',
    url: 'https://aadhunik.ai/blog/claude-vs-chatgpt-vs-grok-content-writing-comparison/',
    meta: ['AI Comparison', 'Blogging', 'Claude', 'ChatGPT', 'Grok'],
    svg: `
      <defs>
        <linearGradient id="g1a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#050d2e"/>
          <stop offset="100%" stop-color="#0a1a4a"/>
        </linearGradient>
        <linearGradient id="g1b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#2e0520"/>
          <stop offset="100%" stop-color="#1a0010"/>
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="290" height="220" fill="url(#g1a)"/>
      <rect x="290" y="0" width="290" height="220" fill="url(#g1b)"/>
      <rect x="287" y="0" width="6" height="220" fill="rgba(255,255,255,0.08)"/>
      <text x="145" y="80" font-family="system-ui" font-size="26" font-weight="700" fill="#93c5fd" text-anchor="middle">Claude</text>
      <text x="145" y="104" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.35)" text-anchor="middle" letter-spacing="1">ChatGPT · Grok</text>
      <text x="435" y="80" font-family="system-ui" font-size="20" font-weight="700" fill="#f9a8d4" text-anchor="middle">Bloggers</text>
      <text x="435" y="104" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.35)" text-anchor="middle" letter-spacing="1">Who Wins?</text>
      <text x="290" y="148" font-family="system-ui" font-size="42" font-weight="900" fill="rgba(255,255,255,0.92)" text-anchor="middle">VS</text>
      <circle cx="290" cy="148" r="30" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <text x="290" y="22" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="4">AI COMPARISON · AADHUNIK</text>
    `,
  },
  {
    pub: 'Aadhunik.ai',
    tag: 'AI Tools',
    tagClass: 'tag-blue',
    title: 'Create Stunning Thumbnails & Social Media Graphics Using Free AI Tools',
    desc: 'A practical guide to generating scroll-stopping visuals using free AI tools — covering the best platforms, prompting tips, and a step-by-step workflow for content creators on any budget.',
    date: 'Apr 23, 2026',
    url: 'https://aadhunik.ai/blog/create-stunning-thumbnails-and-social-media-graphics-using-free-ai-tools/',
    meta: ['Tutorial', 'Design', 'Free Tools', 'Social Media'],
    svg: `
      <defs>
        <linearGradient id="g2a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c1a2e"/>
          <stop offset="100%" stop-color="#0f3460"/>
        </linearGradient>
        <linearGradient id="g2b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0ea5e9"/>
          <stop offset="100%" stop-color="#6366f1"/>
        </linearGradient>
      </defs>
      <rect width="580" height="220" fill="url(#g2a)"/>
      <circle cx="260" cy="95" r="48" fill="none" stroke="url(#g2b)" stroke-width="2" opacity="0.7"/>
      <circle cx="320" cy="95" r="48" fill="none" stroke="#ec4899" stroke-width="2" opacity="0.7"/>
      <circle cx="290" cy="143" r="48" fill="none" stroke="#f59e0b" stroke-width="2" opacity="0.7"/>
      <circle cx="253" cy="85" r="10" fill="#0ea5e9"/>
      <circle cx="327" cy="85" r="10" fill="#ec4899"/>
      <circle cx="290" cy="152" r="10" fill="#f59e0b"/>
      <circle cx="290" cy="108" r="8" fill="#fff" opacity="0.95"/>
      <text x="290" y="22" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="4">AI DESIGN TOOLS · AADHUNIK</text>
    `,
  },
  {
    pub: 'Aadhunik.ai',
    tag: 'AI Insights',
    tagClass: 'tag-pink',
    title: 'This AI Is Your Second Brain and It Never Forgets!',
    desc: 'Exploring AI memory tools that act as a second brain — capturing everything you read, watch, and think, so you never lose a great idea again.',
    date: 'Apr 21, 2026',
    url: 'https://aadhunik.ai/blog/ai-twin-assistant-never-forget/',
    meta: ['Productivity', 'Memory AI', 'Tools'],
    svg: `
      <defs>
        <linearGradient id="g3a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e0a3c"/>
          <stop offset="100%" stop-color="#3d0070"/>
        </linearGradient>
        <linearGradient id="g3b" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#a78bfa"/>
          <stop offset="100%" stop-color="#f472b6"/>
        </linearGradient>
      </defs>
      <rect width="580" height="220" fill="url(#g3a)"/>
      <line x1="190" y1="72" x2="290" y2="112" stroke="rgba(167,139,250,0.35)" stroke-width="1.5"/>
      <line x1="290" y1="112" x2="390" y2="72" stroke="rgba(244,114,182,0.35)" stroke-width="1.5"/>
      <line x1="240" y1="162" x2="290" y2="112" stroke="rgba(167,139,250,0.35)" stroke-width="1.5"/>
      <line x1="290" y1="112" x2="340" y2="162" stroke="rgba(244,114,182,0.35)" stroke-width="1.5"/>
      <circle cx="290" cy="112" r="24" fill="url(#g3b)" opacity="0.95"/>
      <circle cx="290" cy="112" r="10" fill="#fff" opacity="0.9"/>
      <circle cx="190" cy="72" r="12" fill="url(#g3b)" opacity="0.8"/>
      <circle cx="390" cy="72" r="12" fill="url(#g3b)" opacity="0.8"/>
      <circle cx="240" cy="162" r="9" fill="#a78bfa" opacity="0.7"/>
      <circle cx="340" cy="162" r="9" fill="#f472b6" opacity="0.7"/>
      <text x="290" y="22" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="4">AI SECOND BRAIN · AADHUNIK</text>
    `,
  },
  {
    pub: 'Sociobits',
    tag: 'AI Gadgets',
    tagClass: 'tag-amber',
    title: 'AI Gadgets That Automatically Record and Transcribe Meetings',
    desc: 'A deep-dive into the best AI meeting note-taker gadgets of 2025 — from hardware recorders to smart apps — that automatically capture, transcribe, and summarise everything so you never miss a word.',
    date: '2025',
    url: 'https://www.sociobits.org/best-ai-meeting-note-taker/20275/',
    meta: ['AI Gadgets', 'Productivity', 'Meetings', 'Transcription'],
    svg: `
      <defs>
        <linearGradient id="g4a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1a1000"/>
          <stop offset="100%" stop-color="#3a2800"/>
        </linearGradient>
      </defs>
      <rect width="580" height="220" fill="url(#g4a)"/>
      <circle cx="450" cy="60" r="110" fill="rgba(245,158,11,0.06)"/>
      <rect x="220" y="65" width="140" height="100" rx="14" fill="rgba(0,0,0,0.45)" stroke="rgba(245,158,11,0.4)" stroke-width="1.5"/>
      <circle cx="290" cy="95" r="22" fill="rgba(245,158,11,0.2)" stroke="rgba(245,158,11,0.5)" stroke-width="1.5"/>
      <text x="290" y="102" font-family="system-ui" font-size="22" text-anchor="middle">🎙️</text>
      <rect x="240" y="132" width="100" height="7" rx="3" fill="rgba(245,158,11,0.3)"/>
      <rect x="255" y="146" width="70" height="5" rx="2" fill="rgba(245,158,11,0.2)"/>
      <text x="152" y="90" font-family="monospace" font-size="8" fill="rgba(245,158,11,0.6)">▶ Recording...</text>
      <text x="152" y="106" font-family="monospace" font-size="8" fill="rgba(245,158,11,0.45)">✓ Transcribing</text>
      <text x="152" y="122" font-family="monospace" font-size="8" fill="rgba(245,158,11,0.3)">✓ Summarised</text>
      <text x="290" y="22" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="4">AI GADGETS · SOCIOBITS</text>
    `,
  },
  {
    pub: 'Aadhunik.ai',
    tag: 'Tutorial',
    tagClass: 'tag-green',
    title: 'Make AI Content Undetectable With These Proven Methods',
    desc: 'A candid, technique-backed guide to making AI-generated content sound genuinely human — covering tone, structure, editing strategies, and the tools that actually work in 2026.',
    date: 'Apr 17, 2026',
    url: 'https://aadhunik.ai/blog/how-to-make-ai-content-sound-human/',
    meta: ['Tutorial', 'AI Writing', 'Content', 'Tips'],
    svg: `
      <defs>
        <linearGradient id="g5a" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#052e16"/>
          <stop offset="100%" stop-color="#0d3e20"/>
        </linearGradient>
      </defs>
      <rect width="580" height="220" fill="url(#g5a)"/>
      <rect x="180" y="52" width="220" height="128" rx="12" fill="rgba(0,0,0,0.5)" stroke="rgba(16,185,129,0.45)" stroke-width="1.5"/>
      <rect x="180" y="52" width="220" height="22" rx="10" fill="rgba(16,185,129,0.2)"/>
      <circle cx="200" cy="63" r="5" fill="#ef4444" opacity="0.8"/>
      <circle cx="216" cy="63" r="5" fill="#f59e0b" opacity="0.8"/>
      <circle cx="232" cy="63" r="5" fill="#10b981" opacity="0.8"/>
      <text x="193" y="92" font-family="monospace" font-size="9" fill="#10b981" opacity="0.9">$ AI score: 9%</text>
      <text x="193" y="108" font-family="monospace" font-size="9" fill="#10b981" opacity="0.75">$ human: 96%</text>
      <text x="193" y="124" font-family="monospace" font-size="9" fill="#10b981" opacity="0.6">$ UNDETECTABLE ✓</text>
      <text x="290" y="22" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.25)" text-anchor="middle" letter-spacing="4">AI TUTORIAL · AADHUNIK</text>
    `,
  },
];

/* ── RENDER ARTICLE CARDS ─────────────────────────────────── */

/**
 * Builds and injects article cards into #artGrid.
 */
function renderArticles() {
  const grid = document.getElementById('artGrid');
  if (!grid) return;

  grid.innerHTML = articles
    .map(
      (article, index) => `
        <div class="art-card" role="listitem" onclick="openModal(${index})" tabindex="0"
             onkeydown="if(event.key==='Enter') openModal(${index})">
          <svg class="art-thumb" viewBox="0 0 580 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            ${article.svg}
          </svg>
          <div class="art-body">
            <p class="art-pub">${article.pub}</p>
            <span class="art-tag ${article.tagClass}">${article.tag}</span>
            <h3 class="art-title">${article.title}</h3>
            <div class="art-footer">
              <span class="art-date">${article.date}</span>
              <span class="art-arrow" aria-hidden="true">Read →</span>
            </div>
          </div>
        </div>
      `
    )
    .join('');
}

/* ── MODAL ────────────────────────────────────────────────── */

/**
 * Opens the article preview modal.
 * @param {number} index - Index of the article in the articles array.
 */
function openModal(index) {
  const article = articles[index];
  const overlay = document.getElementById('overlay');

  document.getElementById('modalThumbSVG').innerHTML = article.svg;
  document.getElementById('mPub').textContent = article.pub;

  const tagEl = document.getElementById('mTag');
  tagEl.textContent = article.tag;
  tagEl.className = `modal-ttag ${article.tagClass}`;

  document.getElementById('mTitle').textContent = article.title;
  document.getElementById('mDesc').textContent = article.desc;
  document.getElementById('mMeta').innerHTML = article.meta
    .map((kw) => `<span>${kw}</span>`)
    .join('');

  document.getElementById('mActions').innerHTML = `
    <a href="${article.url}" target="_blank" rel="noopener noreferrer"
       class="btn-grad" style="font-size:0.85rem;padding:0.72rem 1.6rem;">
      Read Full Article →
    </a>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes the article preview modal.
 */
function closeMB() {
  document.getElementById('overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/**
 * Closes modal when clicking the backdrop.
 * @param {MouseEvent} event
 */
function closeModal(event) {
  if (event.target === document.getElementById('overlay')) {
    closeMB();
  }
}

/* ── KEYBOARD ACCESSIBILITY ───────────────────────────────── */
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeMB();
});

/* ── INIT ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderArticles();
});

// Fallback: also run immediately if DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  renderArticles();
}

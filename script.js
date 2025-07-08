// Comprehensive AI Extension & Tool Detection System
// Based on extensive web research of popular AI tools in 2024-2025

// Enhanced AI Extensions and Tools Database
const AI_EXTENSIONS_DATABASE = {
    // Major AI Sidebars & Browser Extensions
    sider: {
        name: 'Sider AI',
        category: 'ai',
        keywords: ['sider', 'sider-ai', 'vidline', 'chat-gpt-sidebar'],
        selectors: ['[class*="sider"]', '[id*="sider"]', '[data-sider]'],
        domains: ['sider.ai']
    },
    monica: {
        name: 'Monica AI',
        category: 'ai',
        keywords: ['monica', 'monica-ai', 'monicahq'],
        selectors: ['[class*="monica"]', '[id*="monica"]', '[data-monica]'],
        domains: ['monica.im']
    },
    chatgpt_writer: {
        name: 'ChatGPT Writer',
        category: 'ai',
        keywords: ['chatgpt-writer', 'chatgptwriter'],
        selectors: ['[class*="chatgpt-writer"]', '[id*="chatgpt-writer"]'],
        domains: ['chatgptwriter.ai']
    },
    maxai: {
        name: 'MaxAI',
        category: 'ai',
        keywords: ['maxai', 'max-ai'],
        selectors: ['[class*="maxai"]', '[id*="maxai"]', '[data-maxai]'],
        domains: ['maxai.me']
    },
    merlin: {
        name: 'Merlin AI',
        category: 'ai',
        keywords: ['merlin', 'merlin-ai', 'getmerlin'],
        selectors: ['[class*="merlin"]', '[id*="merlin"]', '[data-merlin]'],
        domains: ['getmerlin.in']
    },
    tinamind: {
        name: 'TinaMind',
        category: 'ai',
        keywords: ['tinamind', 'tina-mind'],
        selectors: ['[class*="tinamind"]', '[id*="tinamind"]'],
        domains: ['tinamind.com']
    },
    chathub: {
        name: 'ChatHub',
        category: 'ai',
        keywords: ['chathub', 'chat-hub'],
        selectors: ['[class*="chathub"]', '[id*="chathub"]'],
        domains: ['chathub.gg']
    },
    sidebargpt: {
        name: 'SidebarGPT',
        category: 'ai',
        keywords: ['sidebargpt', 'sidebar-gpt'],
        selectors: ['[class*="sidebargpt"]', '[id*="sidebargpt"]'],
        domains: ['sidebargpt.com']
    },
    perplexity: {
        name: 'Perplexity AI',
        category: 'ai',
        keywords: ['perplexity', 'perplexity-ai'],
        selectors: ['[class*="perplexity"]', '[id*="perplexity"]'],
        domains: ['perplexity.ai']
    },
    wordtune: {
        name: 'Wordtune AI',
        category: 'ai',
        keywords: ['wordtune', 'word-tune'],
        selectors: ['[class*="wordtune"]', '[id*="wordtune"]'],
        domains: ['wordtune.com']
    },
    liner: {
        name: 'Liner AI',
        category: 'ai',
        keywords: ['liner', 'liner-ai', 'getliner'],
        selectors: ['[class*="liner"]', '[id*="liner"]'],
        domains: ['getliner.com']
    },
    writesonic: {
        name: 'Writesonic AI',
        category: 'ai',
        keywords: ['writesonic', 'write-sonic'],
        selectors: ['[class*="writesonic"]', '[id*="writesonic"]'],
        domains: ['writesonic.com']
    },
    answerai: {
        name: 'Answer AI',
        category: 'ai',
        keywords: ['answerai', 'answer-ai'],
        selectors: ['[class*="answerai"]', '[id*="answerai"]'],
        domains: ['answerai.com']
    },
    harpa: {
        name: 'HARPA AI',
        category: 'ai',
        keywords: ['harpa', 'harpa-ai'],
        selectors: ['[class*="harpa"]', '[id*="harpa"]'],
        domains: ['harpa.ai']
    },
    otter: {
        name: 'Otter AI',
        category: 'ai',
        keywords: ['otter', 'otter-ai', 'otterai'],
        selectors: ['[class*="otter"]', '[id*="otter"]'],
        domains: ['otter.ai']
    },
    compose: {
        name: 'Compose AI',
        category: 'ai',
        keywords: ['compose', 'compose-ai', 'composeai'],
        selectors: ['[class*="compose"]', '[id*="compose"]'],
        domains: ['compose.ai']
    },
    seamless: {
        name: 'Seamless AI',
        category: 'ai',
        keywords: ['seamless', 'seamless-ai'],
        selectors: ['[class*="seamless"]', '[id*="seamless"]'],
        domains: ['seamless.ai']
    },
    grammarly: {
        name: 'Grammarly AI',
        category: 'ai',
        keywords: ['grammarly', 'grammarly-ai'],
        selectors: ['[class*="grammarly"]', '[id*="grammarly"]', '[data-grammarly]'],
        domains: ['grammarly.com']
    },
    questionai: {
        name: 'QuestionAI',
        category: 'ai',
        keywords: ['questionai', 'question-ai'],
        selectors: ['[class*="questionai"]', '[id*="questionai"]'],
        domains: ['questionai.com']
    },
    superpower_chatgpt: {
        name: 'Superpower ChatGPT',
        category: 'ai',
        keywords: ['superpower', 'superpower-chatgpt'],
        selectors: ['[class*="superpower"]', '[id*="superpower"]'],
        domains: ['superpowerchatgpt.com']
    },
    bardeen: {
        name: 'Bardeen AI',
        category: 'ai',
        keywords: ['bardeen', 'bardeen-ai'],
        selectors: ['[class*="bardeen"]', '[id*="bardeen"]'],
        domains: ['bardeen.ai']
    },
    magical: {
        name: 'Magical AI',
        category: 'ai',
        keywords: ['magical', 'magical-ai'],
        selectors: ['[class*="magical"]', '[id*="magical"]'],
        domains: ['magical.so']
    },
    jasper: {
        name: 'Jasper AI',
        category: 'ai',
        keywords: ['jasper', 'jasper-ai'],
        selectors: ['[class*="jasper"]', '[id*="jasper"]'],
        domains: ['jasper.ai']
    },
    copyleaks: {
        name: 'Copyleaks',
        category: 'ai',
        keywords: ['copyleaks', 'copyleak'],
        selectors: ['[class*="copyleaks"]', '[id*="copyleaks"]'],
        domains: ['copyleaks.com']
    },
    wiseone: {
        name: 'Wiseone',
        category: 'ai',
        keywords: ['wiseone', 'wise-one'],
        selectors: ['[class*="wiseone"]', '[id*="wiseone"]'],
        domains: ['wiseone.io']
    },
    engage: {
        name: 'Engage AI',
        category: 'ai',
        keywords: ['engage', 'engage-ai'],
        selectors: ['[class*="engage"]', '[id*="engage"]'],
        domains: ['engage-ai.co']
    },
    voila: {
        name: 'Voilà',
        category: 'ai',
        keywords: ['voila', 'getvoila'],
        selectors: ['[class*="voila"]', '[id*="voila"]'],
        domains: ['getvoila.ai']
    },
    copilotly: {
        name: 'Copilotly',
        category: 'ai',
        keywords: ['copilotly', 'copilot-ly'],
        selectors: ['[class*="copilotly"]', '[id*="copilotly"]'],
        domains: ['copilotly.com']
    },
    browsergpt: {
        name: 'BrowserGPT',
        category: 'ai',
        keywords: ['browsergpt', 'browser-gpt'],
        selectors: ['[class*="browsergpt"]', '[id*="browsergpt"]'],
        domains: ['browsergpt.com']
    },
    kimi: {
        name: 'Kimi Explorer',
        category: 'ai',
        keywords: ['kimi', 'kimi-ai', 'kimi-explorer'],
        selectors: ['[class*="kimi"]', '[id*="kimi"]'],
        domains: ['kimi.ai']
    },
    openai_translator: {
        name: 'OpenAI Translator',
        category: 'ai',
        keywords: ['openai-translator', 'openai-translate'],
        selectors: ['[class*="openai-translator"]', '[id*="openai-translator"]'],
        domains: []
    },
    wayin: {
        name: 'Wayin AI',
        category: 'ai',
        keywords: ['wayin', 'wayin-ai'],
        selectors: ['[class*="wayin"]', '[id*="wayin"]'],
        domains: ['wayin.ai']
    },
    gpt_sidebar: {
        name: 'GPT Sidebar',
        category: 'ai',
        keywords: ['gpt-sidebar', 'gptsidebar'],
        selectors: ['[class*="gpt-sidebar"]', '[id*="gpt-sidebar"]'],
        domains: []
    },
    talkberry: {
        name: 'TalkBerry',
        category: 'ai',
        keywords: ['talkberry', 'talk-berry'],
        selectors: ['[class*="talkberry"]', '[id*="talkberry"]'],
        domains: ['talkberry.ai']
    },
    youtube_summary: {
        name: 'YouTube Summary with ChatGPT',
        category: 'ai',
        keywords: ['youtube-summary', 'glasp'],
        selectors: ['[class*="glasp"]', '[id*="glasp"]', '[class*="youtube-summary"]'],
        domains: ['glasp.co']
    },
    chatgpt_notion: {
        name: 'ChatGPT to Notion',
        category: 'ai',
        keywords: ['chatgpt-notion', 'notion-ai'],
        selectors: ['[class*="chatgpt-notion"]', '[id*="chatgpt-notion"]'],
        domains: []
    },
    gpt_sheets: {
        name: 'GPT for Google Sheets',
        category: 'ai',
        keywords: ['gpt-sheets', 'chatgpt-sheets'],
        selectors: ['[class*="gpt-sheets"]', '[id*="gpt-sheets"]'],
        domains: []
    },
    aiprm: {
        name: 'AIPRM for ChatGPT',
        category: 'ai',
        keywords: ['aiprm', 'ai-prm'],
        selectors: ['[class*="aiprm"]', '[id*="aiprm"]'],
        domains: ['aiprm.com']
    },
    webchatgpt: {
        name: 'WebChatGPT',
        category: 'ai',
        keywords: ['webchatgpt', 'web-chatgpt'],
        selectors: ['[class*="webchatgpt"]', '[id*="webchatgpt"]'],
        domains: []
    },
    prompt_genius: {
        name: 'ChatGPT Prompt Genius',
        category: 'ai',
        keywords: ['prompt-genius', 'promptgenius'],
        selectors: ['[class*="prompt-genius"]', '[id*="prompt-genius"]'],
        domains: []
    },
    summarize: {
        name: 'Summarize Extension',
        category: 'ai',
        keywords: ['summarize', 'summarizer'],
        selectors: ['[class*="summarize"]', '[id*="summarize"]'],
        domains: []
    },
    promptheus: {
        name: 'Promptheus',
        category: 'ai',
        keywords: ['promptheus', 'prompt-voice'],
        selectors: ['[class*="promptheus"]', '[id*="promptheus"]'],
        domains: []
    },
    sharegpt: {
        name: 'ShareGPT',
        category: 'ai',
        keywords: ['sharegpt', 'share-gpt'],
        selectors: ['[class*="sharegpt"]', '[id*="sharegpt"]'],
        domains: ['sharegpt.com']
    },
    
    // Desktop AI Applications & Floating Windows
    sidekickbar: {
        name: 'SidekickBar',
        category: 'ai',
        keywords: ['sidekickbar', 'sidekick-bar'],
        selectors: ['[class*="sidekickbar"]', '[id*="sidekickbar"]'],
        domains: ['sidekickbar.com']
    },
    windsurf: {
        name: 'Windsurf (formerly Codeium)',
        category: 'developer',
        keywords: ['windsurf', 'codeium', 'cascade'],
        selectors: ['[class*="windsurf"]', '[id*="windsurf"]', '[class*="codeium"]'],
        domains: ['windsurf.com', 'codeium.com']
    },
    overlay: {
        name: 'Overlay AI',
        category: 'ai',
        keywords: ['overlay', 'overlay-ai'],
        selectors: ['[class*="overlay"]', '[id*="overlay"]'],
        domains: ['overlay.one']
    },
    stagewise: {
        name: 'stagewise',
        category: 'developer',
        keywords: ['stagewise', 'stage-wise'],
        selectors: ['[class*="stagewise"]', '[id*="stagewise"]'],
        domains: ['stagewise.io']
    },
    
    // Additional AI Tools and Productivity Extensions
    ai_blaze: {
        name: 'AI Blaze',
        category: 'ai',
        keywords: ['ai-blaze', 'aiblaze', 'text-blaze'],
        selectors: ['[class*="ai-blaze"]', '[id*="ai-blaze"]'],
        domains: ['blaze.today']
    },
    
    // Generic AI-related patterns
    chatgpt_generic: {
        name: 'ChatGPT Extensions',
        category: 'ai',
        keywords: ['chatgpt', 'chat-gpt', 'gpt-4', 'gpt4', 'openai'],
        selectors: ['[class*="chatgpt"]', '[id*="chatgpt"]', '[class*="gpt"]', '[data-chatgpt]'],
        domains: ['openai.com', 'chat.openai.com']
    },
    claude_generic: {
        name: 'Claude Extensions',
        category: 'ai',
        keywords: ['claude', 'claude-ai', 'anthropic'],
        selectors: ['[class*="claude"]', '[id*="claude"]', '[data-claude]'],
        domains: ['claude.ai', 'anthropic.com']
    },
    gemini_generic: {
        name: 'Gemini Extensions',
        category: 'ai',
        keywords: ['gemini', 'bard', 'google-ai'],
        selectors: ['[class*="gemini"]', '[id*="gemini"]', '[class*="bard"]'],
        domains: ['bard.google.com', 'gemini.google.com']
    },
    llama_generic: {
        name: 'Llama Extensions',
        category: 'ai',
        keywords: ['llama', 'meta-ai'],
        selectors: ['[class*="llama"]', '[id*="llama"]'],
        domains: ['meta.ai']
    },
    deepseek_generic: {
        name: 'DeepSeek Extensions',
        category: 'ai',
        keywords: ['deepseek', 'deep-seek'],
        selectors: ['[class*="deepseek"]', '[id*="deepseek"]'],
        domains: ['deepseek.com']
    },
    
    // Floating window and overlay patterns
    floating_ai: {
        name: 'Floating AI Widgets',
        category: 'ai',
        keywords: ['floating', 'overlay', 'widget', 'popup', 'sidebar', 'panel'],
        selectors: ['[class*="floating"]', '[class*="overlay"]', '[class*="widget"]', '[class*="popup"]', '[class*="sidebar"]', '[class*="panel"]'],
        domains: []
    }
};

class ExtensionDetector {
    constructor() {
        this.detectedExtensions = new Set();
        this.detectionMethods = {
            dom: 0,
            manifest: 0,
            global: 0,
            element: 0,
            dom_observer: 0,
            attribute_scanner: 0
        };
        this.observers = [];
        this.lastScanTime = 0;
        this.scanInterval = 2000; // Scan every 2 seconds
        
        this.init();
    }

    init() {
        this.startContinuousDetection();
        this.setupDOMObserver();
        this.setupAttributeObserver();
        this.startPeriodicScanning();
    }

    // Enhanced DOM Element Detection
    detectDOMElements() {
        let found = 0;
        Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
            // Check CSS selectors
            extension.selectors.forEach(selector => {
                try {
                    const elements = document.querySelectorAll(selector);
                    if (elements.length > 0) {
                        this.addDetectedExtension({
                            id: key,
                            name: extension.name,
                            category: extension.category,
                            method: 'DOM Element',
                            selector: selector,
                            elementCount: elements.length,
                            elements: Array.from(elements).slice(0, 3) // Store first 3 elements
                        });
                        found++;
                        this.detectionMethods.dom++;
                    }
                } catch (e) {
                    console.warn('Invalid selector:', selector);
                }
            });

            // Check keywords in element content and attributes
            extension.keywords.forEach(keyword => {
                this.scanForKeywordInDOM(keyword, extension, key);
            });
        });
        return found;
    }

    // Enhanced keyword scanning in DOM
    scanForKeywordInDOM(keyword, extension, extensionKey) {
        const elements = document.querySelectorAll('*');
        
        elements.forEach(element => {
            // Check element attributes
            const attributes = ['class', 'id', 'data-extension', 'data-app', 'title', 'aria-label'];
            attributes.forEach(attr => {
                const value = element.getAttribute(attr);
                if (value && value.toLowerCase().includes(keyword.toLowerCase())) {
                    this.addDetectedExtension({
                        id: extensionKey,
                        name: extension.name,
                        category: extension.category,
                        method: 'Attribute Scan',
                        attribute: attr,
                        value: value,
                        keyword: keyword,
                        element: element
                    });
                    this.detectionMethods.attribute_scanner++;
                }
            });

            // Check element text content (but avoid performance issues)
            if (element.children.length === 0 && element.textContent) {
                const text = element.textContent.toLowerCase();
                if (text.includes(keyword.toLowerCase())) {
                    this.addDetectedExtension({
                        id: extensionKey,
                        name: extension.name,
                        category: extension.category,
                        method: 'Text Content',
                        keyword: keyword,
                        element: element,
                        textContent: element.textContent.substring(0, 100)
                    });
                    this.detectionMethods.element++;
                }
            }
        });
    }

    // Enhanced Manifest Detection
    detectManifestExtensions() {
        let found = 0;
        if (typeof chrome !== 'undefined' && chrome.runtime) {
            try {
                const manifest = chrome.runtime.getManifest();
                if (manifest) {
                    Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
                        extension.keywords.forEach(keyword => {
                            const manifestStr = JSON.stringify(manifest).toLowerCase();
                            if (manifestStr.includes(keyword.toLowerCase())) {
                                this.addDetectedExtension({
                                    id: key,
                                    name: extension.name,
                                    category: extension.category,
                                    method: 'Manifest',
                                    keyword: keyword,
                                    manifest: manifest
                                });
                                found++;
                                this.detectionMethods.manifest++;
                            }
                        });
                    });
                }
            } catch (e) {
                console.log('Manifest access restricted');
            }
        }
        return found;
    }

    // Enhanced Global Object Detection
    detectGlobalObjects() {
        let found = 0;
        Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
            extension.keywords.forEach(keyword => {
                // Check window object for extension-related properties
                const variations = [
                    keyword,
                    keyword.replace(/-/g, ''),
                    keyword.replace(/-/g, '_'),
                    keyword.toUpperCase(),
                    keyword.toLowerCase()
                ];

                variations.forEach(variation => {
                    if (window[variation] || 
                        (window.chrome && window.chrome[variation]) ||
                        document[variation]) {
                        this.addDetectedExtension({
                            id: key,
                            name: extension.name,
                            category: extension.category,
                            method: 'Global Object',
                            property: variation,
                            value: window[variation] || window.chrome[variation] || document[variation]
                        });
                        found++;
                        this.detectionMethods.global++;
                    }
                });
            });
        });
        return found;
    }

    // Enhanced URL and Domain Detection
    detectByURL() {
        let found = 0;
        const currentDomain = window.location.hostname.toLowerCase();
        const currentURL = window.location.href.toLowerCase();

        Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
            // Check if current domain matches extension domains
            extension.domains.forEach(domain => {
                if (currentDomain.includes(domain.toLowerCase())) {
                    this.addDetectedExtension({
                        id: key,
                        name: extension.name,
                        category: extension.category,
                        method: 'Domain Match',
                        domain: domain,
                        currentDomain: currentDomain
                    });
                    found++;
                }
            });

            // Check keywords in URL
            extension.keywords.forEach(keyword => {
                if (currentURL.includes(keyword.toLowerCase())) {
                    this.addDetectedExtension({
                        id: key,
                        name: extension.name,
                        category: extension.category,
                        method: 'URL Keyword',
                        keyword: keyword,
                        url: currentURL
                    });
                    found++;
                }
            });
        });
        return found;
    }

    // Setup DOM Observer for dynamic content
    setupDOMObserver() {
        const observer = new MutationObserver((mutations) => {
            let shouldRescan = false;
            
            mutations.forEach(mutation => {
                if (mutation.type === 'childList') {
                    mutation.addedNodes.forEach(node => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            shouldRescan = true;
                        }
                    });
                }
                
                if (mutation.type === 'attributes') {
                    shouldRescan = true;
                }
            });

            if (shouldRescan) {
                // Debounce the rescan
                clearTimeout(this.rescanTimeout);
                this.rescanTimeout = setTimeout(() => {
                    this.detectDOMElements();
                    this.detectionMethods.dom_observer++;
                    this.updateResults();
                }, 500);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'id', 'data-extension', 'data-app']
        });

        this.observers.push(observer);
    }

    // Setup specialized attribute observer
    setupAttributeObserver() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach(mutation => {
                if (mutation.type === 'attributes' && mutation.target) {
                    const element = mutation.target;
                    const attributeName = mutation.attributeName;
                    const attributeValue = element.getAttribute(attributeName);

                    if (attributeValue) {
                        // Check if any AI extension keywords match this attribute
                        Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
                            extension.keywords.forEach(keyword => {
                                if (attributeValue.toLowerCase().includes(keyword.toLowerCase())) {
                                    this.addDetectedExtension({
                                        id: key,
                                        name: extension.name,
                                        category: extension.category,
                                        method: 'Dynamic Attribute',
                                        attribute: attributeName,
                                        value: attributeValue,
                                        keyword: keyword,
                                        element: element
                                    });
                                    this.detectionMethods.attribute_scanner++;
                                }
                            });
                        });
                    }
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            subtree: true,
            attributeFilter: ['class', 'id', 'data-extension', 'data-app', 'data-testid', 'aria-label']
        });

        this.observers.push(observer);
    }

    // Start continuous detection
    startContinuousDetection() {
        // Initial detection
        this.runAllDetectionMethods();
        
        // Re-run detection after page fully loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => this.runAllDetectionMethods(), 1000);
            });
        }

        // Re-run detection after window loads
        if (document.readyState !== 'complete') {
            window.addEventListener('load', () => {
                setTimeout(() => this.runAllDetectionMethods(), 2000);
            });
        }
    }

    // Start periodic scanning
    startPeriodicScanning() {
        setInterval(() => {
            if (Date.now() - this.lastScanTime > this.scanInterval) {
                this.runAllDetectionMethods();
                this.lastScanTime = Date.now();
            }
        }, this.scanInterval);
    }

    // Run all detection methods
    runAllDetectionMethods() {
        this.detectDOMElements();
        this.detectManifestExtensions();
        this.detectGlobalObjects();
        this.detectByURL();
        this.detectSpecialPatterns();
        this.updateResults();
    }

    // Detect special patterns and behaviors
    detectSpecialPatterns() {
        // Look for iframe patterns commonly used by AI extensions
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
            const src = iframe.src?.toLowerCase() || '';
            const id = iframe.id?.toLowerCase() || '';
            const className = iframe.className?.toLowerCase() || '';

            Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
                extension.keywords.forEach(keyword => {
                    if (src.includes(keyword) || id.includes(keyword) || className.includes(keyword)) {
                        this.addDetectedExtension({
                            id: key,
                            name: extension.name,
                            category: extension.category,
                            method: 'Iframe Pattern',
                            keyword: keyword,
                            src: src,
                            element: iframe
                        });
                    }
                });

                extension.domains.forEach(domain => {
                    if (src.includes(domain)) {
                        this.addDetectedExtension({
                            id: key,
                            name: extension.name,
                            category: extension.category,
                            method: 'Iframe Domain',
                            domain: domain,
                            src: src,
                            element: iframe
                        });
                    }
                });
            });
        });

        // Look for shadow DOM elements
        this.detectShadowDOM();
        
        // Look for CSS injections
        this.detectCSSInjections();
    }

    // Detect Shadow DOM elements
    detectShadowDOM() {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => {
            if (element.shadowRoot) {
                Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
                    extension.selectors.forEach(selector => {
                        try {
                            const shadowElements = element.shadowRoot.querySelectorAll(selector);
                            if (shadowElements.length > 0) {
                                this.addDetectedExtension({
                                    id: key,
                                    name: extension.name,
                                    category: extension.category,
                                    method: 'Shadow DOM',
                                    selector: selector,
                                    shadowHost: element,
                                    elementCount: shadowElements.length
                                });
                            }
                        } catch (e) {
                            // Selector might not work in shadow DOM
                        }
                    });
                });
            }
        });
    }

    // Detect CSS injections
    detectCSSInjections() {
        const stylesheets = document.styleSheets;
        for (let i = 0; i < stylesheets.length; i++) {
            try {
                const rules = stylesheets[i].cssRules || stylesheets[i].rules;
                if (rules) {
                    for (let j = 0; j < rules.length; j++) {
                        const rule = rules[j];
                        if (rule.selectorText) {
                            Object.entries(AI_EXTENSIONS_DATABASE).forEach(([key, extension]) => {
                                extension.keywords.forEach(keyword => {
                                    if (rule.selectorText.toLowerCase().includes(keyword.toLowerCase())) {
                                        this.addDetectedExtension({
                                            id: key,
                                            name: extension.name,
                                            category: extension.category,
                                            method: 'CSS Injection',
                                            keyword: keyword,
                                            selector: rule.selectorText,
                                            stylesheet: stylesheets[i]
                                        });
                                    }
                                });
                            });
                        }
                    }
                }
            } catch (e) {
                // Cross-origin stylesheets can't be accessed
            }
        }
    }

    // Add detected extension with deduplication
    addDetectedExtension(detection) {
        const existingKey = `${detection.id}-${detection.method}`;
        
        if (!this.detectedExtensions.has(existingKey)) {
            this.detectedExtensions.add(existingKey);
            
            // Store in global results
            if (!window.detectionResults) {
                window.detectionResults = [];
            }
            
            window.detectionResults.push({
                ...detection,
                timestamp: new Date().toISOString(),
                url: window.location.href,
                userAgent: navigator.userAgent
            });
        }
    }

    // Update UI with results
    updateResults() {
        if (typeof updateExtensionResults === 'function') {
            updateExtensionResults();
        }
    }

    // Get detection statistics
    getStats() {
        return {
            totalDetections: this.detectedExtensions.size,
            detectionMethods: this.detectionMethods,
            extensionsFound: window.detectionResults ? window.detectionResults.length : 0,
            uniqueExtensions: window.detectionResults ? 
                new Set(window.detectionResults.map(r => r.id)).size : 0
        };
    }

    // Cleanup observers
    cleanup() {
        this.observers.forEach(observer => observer.disconnect());
        this.observers = [];
    }
}

// Additional detection functions for UI integration
function startDetection() {
    if (!window.extensionDetector) {
        window.extensionDetector = new ExtensionDetector();
    }
    window.extensionDetector.runAllDetectionMethods();
    updateExtensionResults();
    updateStats();
}

function startAdvancedDetection() {
    startDetection();
    
    // Additional advanced scans
    if (window.extensionDetector) {
        setTimeout(() => {
            window.extensionDetector.detectSpecialPatterns();
            updateExtensionResults();
            updateStats();
        }, 500);
    }
}

// UI Update Functions
function updateExtensionResults() {
    const resultsContainer = document.getElementById('detectionResults');
    const extensionCount = document.getElementById('extensionCount');
    
    if (!resultsContainer || !extensionCount) return;
    
    const extensions = Array.from(window.extensionDetector?.detectedExtensions || []);
    
    // Update extension count
    extensionCount.textContent = `${extensions.length} extensions detected`;
    
    if (extensions.length === 0) {
        resultsContainer.innerHTML = `
            <div class="no-results">
                <div class="no-results-icon">🔍</div>
                <h3>No extensions detected yet</h3>
                <p>Click "Quick Scan" or "Deep Scan" to start detecting AI extensions</p>
            </div>
        `;
        return;
    }
    
    resultsContainer.innerHTML = extensions.map(ext => `
        <div class="detected-extension" data-category="${ext.category || 'other'}">
            <div class="extension-header">
                <div class="extension-name">${ext.name}</div>
                <div class="extension-category ${ext.category || 'other'}">${ext.category || 'other'}</div>
            </div>
            <div class="extension-details">
                <div class="extension-detail">
                    <div class="detail-label">Detection Method</div>
                    <div class="detail-value">${ext.method || 'Unknown'}</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Selectors Found</div>
                    <div class="detail-value">${ext.selectors?.join(', ') || 'N/A'}</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Elements</div>
                    <div class="detail-value">${ext.elementCount || 0} found</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Confidence</div>
                    <div class="detail-value">${ext.confidence || 'Medium'}</div>
                </div>
            </div>
        </div>
    `).join('');
    
    // Update category filters
    updateCategoryFilters();
}

function updateStats() {
    if (!window.extensionDetector) return;
    
    const extensions = Array.from(window.extensionDetector.detectedExtensions || []);
    const methods = window.extensionDetector.detectionMethods || {};
    
    // Update category counts
    const counts = {
        ai: 0,
        productivity: 0,
        developer: 0,
        security: 0,
        other: 0
    };
    
    extensions.forEach(ext => {
        const category = ext.category || 'other';
        counts[category] = (counts[category] || 0) + 1;
    });
    
    // Update category count elements
    document.getElementById('aiCount').textContent = counts.ai;
    document.getElementById('productivityCount').textContent = counts.productivity;
    document.getElementById('developerCount').textContent = counts.developer;
    document.getElementById('securityCount').textContent = counts.security;
    
    // Update detection method counts
    document.getElementById('domCount').textContent = methods.dom || 0;
    document.getElementById('manifestCount').textContent = methods.manifest || 0;
    document.getElementById('globalCount').textContent = methods.global || 0;
    document.getElementById('elementCount').textContent = methods.element || 0;
    
    // Update live panel counts
    document.getElementById('totalCount').textContent = extensions.length;
    document.getElementById('liveAiCount').textContent = counts.ai;
    
    // Update scan status
    const scanStatus = document.getElementById('scanStatus');
    if (scanStatus) {
        scanStatus.textContent = extensions.length > 0 ? 'Active' : 'Ready';
        scanStatus.className = `status-indicator ${extensions.length > 0 ? 'active' : 'ready'}`;
    }
}

function updateCategoryFilters() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Filter extensions
            const category = tab.dataset.category;
            const extensions = document.querySelectorAll('.detected-extension');
            
            extensions.forEach(ext => {
                if (category === 'all' || ext.dataset.category === category) {
                    ext.classList.remove('hidden');
                } else {
                    ext.classList.add('hidden');
                }
            });
        });
    });
}

// Enhanced detection control functions
function clearResults() {
    if (window.extensionDetector) {
        window.extensionDetector.detectedExtensions.clear();
        window.extensionDetector.detectionMethods = {
            dom: 0,
            manifest: 0,
            global: 0,
            element: 0,
            dom_observer: 0,
            attribute_scanner: 0
        };
    }
    
    updateExtensionResults();
    updateStats();
    
    console.log('🧹 Results cleared');
}

function exportResults() {
    if (!window.extensionDetector) {
        alert('No detection data available to export');
        return;
    }
    
    const extensions = Array.from(window.extensionDetector.detectedExtensions);
    const methods = window.extensionDetector.detectionMethods;
    
    const exportData = {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        url: window.location.href,
        totalExtensions: extensions.length,
        detectionMethods: methods,
        extensions: extensions.map(ext => ({
            name: ext.name,
            category: ext.category,
            method: ext.method,
            confidence: ext.confidence,
            selectors: ext.selectors,
            elementCount: ext.elementCount
        }))
    };
    
    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ai-extension-detection-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('💾 Detection results exported');
}

// Panel toggle function
function togglePanel(panelId) {
    const panel = document.getElementById(panelId);
    if (!panel) return;
    
    const content = panel.querySelector('.panel-content');
    const toggle = panel.querySelector('.panel-toggle');
    
    if (content.style.display === 'none') {
        content.style.display = 'block';
        toggle.textContent = '−';
    } else {
        content.style.display = 'none';
        toggle.textContent = '+';
    }
}

// Simulation functions for testing
function createSimulatedFloating() {
    // Remove existing simulated elements
    removeSimulatedElements();
    
    const floating = document.createElement('div');
    floating.className = 'simulated-floating';
    floating.id = 'simulated-floating-widget';
    floating.innerHTML = '🤖';
    floating.style.top = '50%';
    floating.style.right = '50px';
    floating.title = 'Simulated AI Floating Widget';
    
    // Add some AI-related attributes for detection
    floating.setAttribute('data-ai-widget', 'true');
    floating.setAttribute('data-extension', 'simulated-ai');
    
    document.body.appendChild(floating);
    
    // Trigger detection after a short delay
    setTimeout(() => {
        if (window.extensionDetector) {
            window.extensionDetector.runAllDetectionMethods();
            updateExtensionResults();
            updateStats();
        }
    }, 500);
    
    console.log('🎯 Simulated floating widget created');
}

function createSimulatedSidebar() {
    // Remove existing simulated elements
    removeSimulatedElements();
    
    const sidebar = document.createElement('div');
    sidebar.className = 'simulated-sidebar';
    sidebar.id = 'simulated-ai-sidebar';
    sidebar.innerHTML = `
        <button class="close-btn" onclick="removeSimulatedElements()">×</button>
        <h3>🤖 AI Assistant</h3>
        <p>This is a simulated AI sidebar for testing detection capabilities.</p>
        <div data-ai="monica" data-extension="ai-sidebar">AI Content</div>
    `;
    
    // Add AI-related attributes
    sidebar.setAttribute('data-ai-sidebar', 'true');
    sidebar.setAttribute('data-extension', 'simulated-monica');
    sidebar.setAttribute('data-sider', 'true');
    
    document.body.appendChild(sidebar);
    
    // Show sidebar with animation
    setTimeout(() => {
        sidebar.classList.add('show');
    }, 100);
    
    // Trigger detection
    setTimeout(() => {
        if (window.extensionDetector) {
            window.extensionDetector.runAllDetectionMethods();
            updateExtensionResults();
            updateStats();
        }
    }, 500);
    
    console.log('📐 Simulated AI sidebar created');
}

function removeSimulatedElements() {
    const floating = document.getElementById('simulated-floating-widget');
    const sidebar = document.getElementById('simulated-ai-sidebar');
    
    if (floating) floating.remove();
    if (sidebar) sidebar.remove();
    
    // Re-run detection to update results
    setTimeout(() => {
        if (window.extensionDetector) {
            window.extensionDetector.runAllDetectionMethods();
            updateExtensionResults();
            updateStats();
        }
    }, 100);
    
    console.log('❌ Simulated elements removed');
}

// Initialize the extension detector when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (!window.extensionDetector) {
        window.extensionDetector = new ExtensionDetector();
    }
    
    // Set up filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', (e) => {
            filterExtensions(e.target.dataset.category);
        });
    });
    
    // Initialize results
    updateExtensionResults();
    updateStats();
});

// Auto-start detection after page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        startDetection();
    }, 1000);
}); 

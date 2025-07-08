class ExtensionDetector {
    constructor() {
        this.isDetecting = false;
        this.detectedExtensions = new Map();
        this.detectionMethods = {
            dom: true,
            network: true,
            globals: true,
            css: true,
            shadowDOM: true
        };
        
        this.stats = {
            total: 0,
            ai: 0,
            productivity: 0,
            security: 0,
            developer: 0,
            other: 0,
            domDetections: 0,
            networkDetections: 0,
            globalDetections: 0,
            cssDetections: 0,
            shadowDOMDetections: 0
        };
        
        this.observer = null;
        this.networkRequests = new Set();
        this.currentFilter = 'all';
        
        this.init();
    }

    init() {
        this.loadExtensionDatabase();
        this.bindEvents();
        this.setupMutationObserver();
        this.setupNetworkMonitoring();
        this.setupPanelControls();
        this.loadStoredData();
        
        console.log('🔍 Extension Detection System initialized');
        console.log('📊 Extension Database loaded with', Object.keys(this.extensionDatabase).length, 'signatures');
    }

    loadExtensionDatabase() {
        this.extensionDatabase = {
            // AI Assistants
            'monica': {
                name: 'Monica',
                category: 'ai',
                signatures: {
                    dom: ['monica-content-root', 'monica-widget', 'monica-sidebar', 'monica-floating', 'monica-chat', 'monica-modal', 'monica-app'],
                    css: ['monica-', 'monica_'],
                    globals: ['monica', 'MonicaApp', 'MonicaChat'],
                    network: ['monica.com', 'monicahq.com'],
                    attributes: ['data-monica', 'monica-id']
                }
            },
            'chatgpt': {
                name: 'ChatGPT Sidebar',
                category: 'ai',
                signatures: {
                    dom: ['chatgpt-sidebar', 'openai-sidebar', 'gpt-sidebar', 'chatgpt-app', 'openai-app'],
                    css: ['chatgpt-', 'openai-'],
                    globals: ['ChatGPT', 'OpenAI', 'GPTSidebar'],
                    network: ['chatgpt.com', 'openai.com', 'chat.openai.com'],
                    attributes: ['data-chatgpt', 'data-openai']
                }
            },
            'aitopia': {
                name: 'AiTopia',
                category: 'ai',
                signatures: {
                    dom: ['aitopia', 'ai-topia', 'aitopia-app', 'aitopia-widget'],
                    css: ['aitopia', 'ai-topia'],
                    globals: ['AiTopia', 'AiTopiaApp'],
                    network: ['aitopia.app', 'aitopia.com'],
                    attributes: ['data-v-app', 'data-aitopia']
                }
            },
            'sider': {
                name: 'Sider',
                category: 'ai',
                signatures: {
                    dom: ['sider-app', 'sider-sidebar', 'sider-widget', 'sider-chat'],
                    css: ['sider-', 'sider_'],
                    globals: ['Sider', 'SiderApp'],
                    network: ['sider.ai', 'chatgpt-sidebar.com'],
                    attributes: ['data-sider']
                }
            },
            'merlin': {
                name: 'Merlin AI',
                category: 'ai',
                signatures: {
                    dom: ['merlin-app', 'merlin-sidebar', 'merlin-widget'],
                    css: ['merlin-', 'getmerlin-'],
                    globals: ['Merlin', 'MerlinApp'],
                    network: ['getmerlin.in', 'merlin.foyer.work'],
                    attributes: ['data-merlin']
                }
            },
            'claude': {
                name: 'Claude',
                category: 'ai',
                signatures: {
                    dom: ['claude-app', 'claude-sidebar', 'anthropic-app'],
                    css: ['claude-', 'anthropic-'],
                    globals: ['Claude', 'Anthropic'],
                    network: ['claude.ai', 'anthropic.com'],
                    attributes: ['data-claude', 'data-anthropic']
                }
            },
            'copilot': {
                name: 'GitHub Copilot',
                category: 'ai',
                signatures: {
                    dom: ['copilot-app', 'github-copilot', 'copilot-sidebar'],
                    css: ['copilot-', 'github-copilot-'],
                    globals: ['Copilot', 'GitHubCopilot'],
                    network: ['copilot-proxy.githubusercontent.com', 'api.github.com'],
                    attributes: ['data-copilot']
                }
            },
            
            // Productivity
            'grammarly': {
                name: 'Grammarly',
                category: 'productivity',
                signatures: {
                    dom: ['grammarly-app', 'grammarly-sidebar', 'grammarly-editor', 'grammarly-popups'],
                    css: ['grammarly-', 'gr_'],
                    globals: ['Grammarly', 'GrammarlyApp'],
                    network: ['grammarly.com', 'gnar.grammarly.com'],
                    attributes: ['data-grammarly', 'grammarly-extension']
                }
            },
            'notion': {
                name: 'Notion Web Clipper',
                category: 'productivity',
                signatures: {
                    dom: ['notion-app', 'notion-clipper', 'notion-sidebar'],
                    css: ['notion-', 'notion_'],
                    globals: ['Notion', 'NotionApp'],
                    network: ['notion.so', 'www.notion.so'],
                    attributes: ['data-notion']
                }
            },
            'evernote': {
                name: 'Evernote Web Clipper',
                category: 'productivity',
                signatures: {
                    dom: ['evernote-app', 'evernote-clipper', 'evernote-sidebar'],
                    css: ['evernote-', 'en-'],
                    globals: ['Evernote', 'EvernoteApp'],
                    network: ['evernote.com', 'www.evernote.com'],
                    attributes: ['data-evernote']
                }
            },
            
            // Security
            'lastpass': {
                name: 'LastPass',
                category: 'security',
                signatures: {
                    dom: ['lastpass-app', 'lp-app', 'lastpass-sidebar', 'lastpass-vault'],
                    css: ['lastpass-', 'lp-'],
                    globals: ['LastPass', 'LP'],
                    network: ['lastpass.com', 'vault.lastpass.com'],
                    attributes: ['data-lastpass', 'data-lp']
                }
            },
            'bitwarden': {
                name: 'Bitwarden',
                category: 'security',
                signatures: {
                    dom: ['bitwarden-app', 'bw-app', 'bitwarden-sidebar'],
                    css: ['bitwarden-', 'bw-'],
                    globals: ['Bitwarden', 'BitwardenApp'],
                    network: ['bitwarden.com', 'vault.bitwarden.com'],
                    attributes: ['data-bitwarden']
                }
            },
            'dashlane': {
                name: 'Dashlane',
                category: 'security',
                signatures: {
                    dom: ['dashlane-app', 'dashlane-sidebar', 'dashlane-vault'],
                    css: ['dashlane-', 'dl-'],
                    globals: ['Dashlane', 'DashlaneApp'],
                    network: ['dashlane.com', 'www.dashlane.com'],
                    attributes: ['data-dashlane']
                }
            },
            
            // Developer Tools
            'react-devtools': {
                name: 'React Developer Tools',
                category: 'developer',
                signatures: {
                    dom: ['react-devtools', 'react-dev-tools', '__REACT_DEVTOOLS_GLOBAL_HOOK__'],
                    css: ['react-devtools-', 'react-dev-tools-'],
                    globals: ['__REACT_DEVTOOLS_GLOBAL_HOOK__', 'ReactDevTools'],
                    network: [],
                    attributes: ['data-react-devtools']
                }
            },
            'vue-devtools': {
                name: 'Vue Developer Tools',
                category: 'developer',
                signatures: {
                    dom: ['vue-devtools', 'vue-dev-tools', '__VUE_DEVTOOLS_GLOBAL_HOOK__'],
                    css: ['vue-devtools-', 'vue-dev-tools-'],
                    globals: ['__VUE_DEVTOOLS_GLOBAL_HOOK__', 'VueDevTools'],
                    network: [],
                    attributes: ['data-vue-devtools']
                }
            },
            'redux-devtools': {
                name: 'Redux DevTools',
                category: 'developer',
                signatures: {
                    dom: ['redux-devtools', '__REDUX_DEVTOOLS_EXTENSION__'],
                    css: ['redux-devtools-'],
                    globals: ['__REDUX_DEVTOOLS_EXTENSION__', 'ReduxDevTools'],
                    network: [],
                    attributes: ['data-redux-devtools']
                }
            },
            
            // Shopping
            'honey': {
                name: 'Honey',
                category: 'other',
                signatures: {
                    dom: ['honey-app', 'honey-sidebar', 'honey-widget'],
                    css: ['honey-', 'honey_'],
                    globals: ['Honey', 'HoneyApp'],
                    network: ['honey.com', 'www.honey.com'],
                    attributes: ['data-honey']
                }
            },
            'capital-one': {
                name: 'Capital One Shopping',
                category: 'other',
                signatures: {
                    dom: ['capital-one-app', 'capitalone-app', 'c1-shopping'],
                    css: ['capital-one-', 'capitalone-', 'c1-'],
                    globals: ['CapitalOne', 'C1Shopping'],
                    network: ['capitalone.com', 'shopping.capitalone.com'],
                    attributes: ['data-capital-one']
                }
            }
        };
    }

    bindEvents() {
        // Main controls
        document.getElementById('startDetection').addEventListener('click', () => this.startDetection());
        document.getElementById('stopDetection').addEventListener('click', () => this.stopDetection());
        document.getElementById('clearResults').addEventListener('click', () => this.clearResults());
        document.getElementById('exportData').addEventListener('click', () => this.exportData());
        
        // Detection method toggles
        document.getElementById('detectDOM').addEventListener('change', (e) => {
            this.detectionMethods.dom = e.target.checked;
        });
        document.getElementById('detectNetwork').addEventListener('change', (e) => {
            this.detectionMethods.network = e.target.checked;
        });
        document.getElementById('detectGlobals').addEventListener('change', (e) => {
            this.detectionMethods.globals = e.target.checked;
        });
        document.getElementById('detectCSS').addEventListener('change', (e) => {
            this.detectionMethods.css = e.target.checked;
        });
        document.getElementById('detectShadowDOM').addEventListener('change', (e) => {
            this.detectionMethods.shadowDOM = e.target.checked;
        });
        
        // Filter tabs
        document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                e.target.classList.add('active');
                this.currentFilter = e.target.dataset.category;
                this.filterResults();
            });
        });
    }

    setupMutationObserver() {
        this.observer = new MutationObserver((mutations) => {
            if (!this.isDetecting || !this.detectionMethods.dom) return;

            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length) {
                    mutation.addedNodes.forEach((node) => {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            this.analyzeElement(node);
                            this.analyzeChildElements(node);
                        }
                    });
                }

                if (mutation.type === 'attributes' && 
                    (mutation.attributeName === 'class' || 
                     mutation.attributeName === 'id' || 
                     mutation.attributeName.startsWith('data-'))) {
                    this.analyzeElement(mutation.target);
                }
            });
        });

        this.observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'id', 'data-v-app', 'data-testid', 'data-cy']
        });
    }

    setupNetworkMonitoring() {
        // Override fetch
        const originalFetch = window.fetch;
        window.fetch = async (...args) => {
            if (this.isDetecting && this.detectionMethods.network) {
                const url = args[0];
                this.analyzeNetworkRequest(url);
            }
            return originalFetch.apply(this, args);
        };

        // Override XMLHttpRequest
        const originalXHR = window.XMLHttpRequest;
        window.XMLHttpRequest = function(...args) {
            const xhr = new originalXHR(...args);
            const originalOpen = xhr.open;
            
            xhr.open = function(method, url, ...rest) {
                if (this.isDetecting && this.detectionMethods.network) {
                    this.analyzeNetworkRequest(url);
                }
                return originalOpen.apply(this, [method, url, ...rest]);
            }.bind(this);
            
            return xhr;
        }.bind(this);
    }

    setupPanelControls() {
        document.querySelectorAll('.panel-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const panelId = e.target.dataset.panel;
                const panel = document.getElementById(panelId);
                panel.classList.toggle('minimized');
            });
        });
    }

    analyzeElement(element) {
        if (!element || element === document.body || element === document.documentElement) return;

        const className = element.className ? element.className.toLowerCase() : '';
        const id = element.id ? element.id.toLowerCase() : '';
        const tagName = element.tagName.toLowerCase();
        const attributes = Array.from(element.attributes || []).map(attr => `${attr.name}=${attr.value}`).join(' ').toLowerCase();
        
        // Check each extension signature
        for (const [key, extension] of Object.entries(this.extensionDatabase)) {
            if (this.detectedExtensions.has(key)) continue;
            
            const signatures = extension.signatures;
            let matches = [];
            
            // Check DOM signatures
            if (signatures.dom) {
                signatures.dom.forEach(sig => {
                    if (className.includes(sig) || id.includes(sig) || attributes.includes(sig)) {
                        matches.push(`DOM: ${sig}`);
                    }
                });
            }
            
            // Check CSS signatures
            if (signatures.css) {
                signatures.css.forEach(sig => {
                    if (className.includes(sig) || id.includes(sig)) {
                        matches.push(`CSS: ${sig}`);
                    }
                });
            }
            
            // Check attribute signatures
            if (signatures.attributes) {
                signatures.attributes.forEach(sig => {
                    if (attributes.includes(sig)) {
                        matches.push(`Attribute: ${sig}`);
                    }
                });
            }
            
            if (matches.length > 0) {
                this.detectExtension(key, extension, 'DOM Injection', matches, element);
            }
        }
        
        // Check for shadow DOM
        if (this.detectionMethods.shadowDOM && element.shadowRoot) {
            this.analyzeShadowDOM(element.shadowRoot);
        }
    }

    analyzeChildElements(parentElement) {
        const elements = parentElement.querySelectorAll('*');
        elements.forEach(element => this.analyzeElement(element));
    }

    analyzeShadowDOM(shadowRoot) {
        const elements = shadowRoot.querySelectorAll('*');
        elements.forEach(element => this.analyzeElement(element));
    }

    analyzeNetworkRequest(url) {
        if (typeof url !== 'string') return;
        
        for (const [key, extension] of Object.entries(this.extensionDatabase)) {
            if (this.detectedExtensions.has(key)) continue;
            
            const signatures = extension.signatures;
            if (signatures.network) {
                signatures.network.forEach(domain => {
                    if (url.includes(domain)) {
                        this.detectExtension(key, extension, 'Network Request', [`URL: ${url}`]);
                    }
                });
            }
        }
    }

    analyzeGlobalVariables() {
        if (!this.detectionMethods.globals) return;
        
        for (const [key, extension] of Object.entries(this.extensionDatabase)) {
            if (this.detectedExtensions.has(key)) continue;
            
            const signatures = extension.signatures;
            if (signatures.globals) {
                signatures.globals.forEach(globalVar => {
                    if (window[globalVar] !== undefined) {
                        this.detectExtension(key, extension, 'Global Variable', [`Variable: ${globalVar}`]);
                    }
                });
            }
        }
    }

    detectExtension(key, extension, method, details, element = null) {
        if (this.detectedExtensions.has(key)) return;
        
        const detection = {
            id: key,
            name: extension.name,
            category: extension.category,
            method: method,
            details: details,
            element: element,
            timestamp: new Date().toISOString(),
            confidence: this.calculateConfidence(details)
        };
        
        this.detectedExtensions.set(key, detection);
        this.updateStats(detection);
        this.addToResults(detection);
        this.updatePanels();
        this.saveToStorage();
        
        console.log(`🔍 Extension detected: ${extension.name} via ${method}`, detection);
    }

    calculateConfidence(details) {
        // Simple confidence calculation based on number of matches
        const baseConfidence = 60;
        const detailBonus = Math.min(details.length * 10, 40);
        return Math.min(baseConfidence + detailBonus, 100);
    }

    updateStats(detection) {
        this.stats.total++;
        this.stats[detection.category]++;
        
        switch (detection.method) {
            case 'DOM Injection':
                this.stats.domDetections++;
                break;
            case 'Network Request':
                this.stats.networkDetections++;
                break;
            case 'Global Variable':
                this.stats.globalDetections++;
                break;
            case 'CSS Injection':
                this.stats.cssDetections++;
                break;
            case 'Shadow DOM':
                this.stats.shadowDOMDetections++;
                break;
        }
        
        this.updateStatsDisplay();
    }

    updateStatsDisplay() {
        document.getElementById('totalDetected').textContent = this.stats.total;
        document.getElementById('aiExtensions').textContent = this.stats.ai;
        document.getElementById('domInjections').textContent = this.stats.domDetections;
        document.getElementById('networkRequests').textContent = this.stats.networkDetections;
        document.getElementById('extensionCount').textContent = `(${this.stats.total})`;
        
        // Update panel stats
        document.getElementById('basicCount').textContent = this.stats.total;
        document.getElementById('domCount').textContent = this.stats.domDetections;
        document.getElementById('networkCount').textContent = this.stats.networkDetections;
        document.getElementById('globalsCount').textContent = this.stats.globalDetections;
        document.getElementById('cssCount').textContent = this.stats.cssDetections;
    }

    addToResults(detection) {
        const resultsContainer = document.getElementById('detectedExtensions');
        const noResults = resultsContainer.querySelector('.no-results');
        if (noResults) noResults.remove();

        const extensionDiv = document.createElement('div');
        extensionDiv.className = 'detected-extension';
        extensionDiv.dataset.category = detection.category;
        
        extensionDiv.innerHTML = `
            <div class="extension-header">
                <div class="extension-name">${detection.name}</div>
                <div class="extension-category ${detection.category}">${detection.category}</div>
            </div>
            <div class="extension-details">
                <div class="extension-detail">
                    <div class="detail-label">Detection Method</div>
                    <div class="detail-value">${detection.method}</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Confidence</div>
                    <div class="detail-value">${detection.confidence}%</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Timestamp</div>
                    <div class="detail-value">${new Date(detection.timestamp).toLocaleTimeString()}</div>
                </div>
                <div class="extension-detail">
                    <div class="detail-label">Details</div>
                    <div class="detail-value">${detection.details.join(', ')}</div>
                </div>
            </div>
        `;
        
        resultsContainer.appendChild(extensionDiv);
    }

    updatePanels() {
        this.updateBasicPanel();
        this.updateAdvancedPanel();
    }

    updateBasicPanel() {
        const basicResults = document.getElementById('basicResults');
        const lastDetection = Array.from(this.detectedExtensions.values()).pop();
        
        if (lastDetection) {
            const panelItem = document.createElement('div');
            panelItem.className = 'panel-extension';
            panelItem.innerHTML = `
                <div class="panel-extension-name">${lastDetection.name}</div>
                <div class="panel-extension-method">${lastDetection.method}</div>
                <div class="panel-extension-details">${lastDetection.confidence}% confidence</div>
            `;
            basicResults.appendChild(panelItem);
            
            // Keep only last 5 items
            while (basicResults.children.length > 5) {
                basicResults.removeChild(basicResults.firstChild);
            }
        }
    }

    updateAdvancedPanel() {
        const advancedResults = document.getElementById('advancedResults');
        const lastDetection = Array.from(this.detectedExtensions.values()).pop();
        
        if (lastDetection) {
            const panelItem = document.createElement('div');
            panelItem.className = 'panel-extension';
            panelItem.innerHTML = `
                <div class="panel-extension-name">${lastDetection.name}</div>
                <div class="panel-extension-method">${lastDetection.method}</div>
                <div class="panel-extension-details">${lastDetection.details.join(', ')}</div>
            `;
            advancedResults.appendChild(panelItem);
            
            // Keep only last 5 items
            while (advancedResults.children.length > 5) {
                advancedResults.removeChild(advancedResults.firstChild);
            }
        }
    }

    filterResults() {
        const extensions = document.querySelectorAll('.detected-extension');
        extensions.forEach(ext => {
            if (this.currentFilter === 'all' || ext.dataset.category === this.currentFilter) {
                ext.classList.remove('hidden');
            } else {
                ext.classList.add('hidden');
            }
        });
    }

    startDetection() {
        this.isDetecting = true;
        document.getElementById('basicStatus').textContent = 'ON';
        document.getElementById('basicStatus').style.color = '#4CAF50';
        
        // Scan existing elements
        this.scanExistingElements();
        
        // Analyze global variables
        this.analyzeGlobalVariables();
        
        console.log('🚀 Extension detection started');
    }

    stopDetection() {
        this.isDetecting = false;
        document.getElementById('basicStatus').textContent = 'OFF';
        document.getElementById('basicStatus').style.color = '#f44336';
        
        console.log('⏹️ Extension detection stopped');
    }

    scanExistingElements() {
        const elements = document.querySelectorAll('*');
        elements.forEach(element => this.analyzeElement(element));
    }

    clearResults() {
        this.detectedExtensions.clear();
        this.stats = {
            total: 0,
            ai: 0,
            productivity: 0,
            security: 0,
            developer: 0,
            other: 0,
            domDetections: 0,
            networkDetections: 0,
            globalDetections: 0,
            cssDetections: 0,
            shadowDOMDetections: 0
        };
        
        document.getElementById('detectedExtensions').innerHTML = '<p class="no-results">No extensions detected yet. Click "Start Detection" to begin monitoring.</p>';
        document.getElementById('basicResults').innerHTML = '';
        document.getElementById('advancedResults').innerHTML = '';
        
        this.updateStatsDisplay();
        this.saveToStorage();
        
        console.log('🧹 Results cleared');
    }

    exportData() {
        const data = {
            timestamp: new Date().toISOString(),
            stats: this.stats,
            detections: Array.from(this.detectedExtensions.values()),
            detectionMethods: this.detectionMethods
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `extension-detection-${new Date().toISOString().split('T')[0]}.json`;
        a.click();
        URL.revokeObjectURL(url);
        
        console.log('📥 Data exported');
    }

    saveToStorage() {
        const data = {
            detections: Array.from(this.detectedExtensions.entries()),
            stats: this.stats,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('extensionDetectionData', JSON.stringify(data));
    }

    loadStoredData() {
        const stored = localStorage.getItem('extensionDetectionData');
        if (stored) {
            const data = JSON.parse(stored);
            this.detectedExtensions = new Map(data.detections || []);
            this.stats = data.stats || this.stats;
            
            // Restore UI
            this.detectedExtensions.forEach(detection => {
                this.addToResults(detection);
            });
            this.updateStatsDisplay();
            this.updatePanels();
            
            console.log('📊 Loaded stored detection data');
        }
    }
}

// Initialize the extension detector when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.extensionDetector = new ExtensionDetector();
});

// Auto-start detection after 2 seconds
setTimeout(() => {
    if (window.extensionDetector) {
        window.extensionDetector.startDetection();
    }
}, 2000); 

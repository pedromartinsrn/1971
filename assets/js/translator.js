const TRANSLATOR_KEY = 'II0txDBSb8aAfKIrtxXBnZFLyFRvG6X1x1zePRU1reu4Vih0u8hgJQQJ99BBACYeBjFXJ3w3AAAbACOGrWoK';
const TRANSLATOR_REGION = 'eastus';
const TRANSLATOR_ENDPOINT = 'https://api.cognitive.microsofttranslator.com/translate';

async function translateContainer(container) {
    const userLang = navigator.language.split('-')[0];
    if (userLang === 'pt') return;
    
    const textElements = container.querySelectorAll('.chart-title, .chart-inside, .menu-list a, h1');
    const htmlElements = container.querySelectorAll('.fonte');
    
    try {
        if (textElements.length > 0) {
            const texts = Array.from(textElements).map(el => el.textContent);
            const response = await fetch(`${TRANSLATOR_ENDPOINT}?api-version=3.0&from=pt&to=${userLang}`, {
                method: 'POST',
                headers: {
                    'Ocp-Apim-Subscription-Key': TRANSLATOR_KEY,
                    'Ocp-Apim-Subscription-Region': TRANSLATOR_REGION,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(texts.map(text => ({ text })))
            });

            const translations = await response.json();
            textElements.forEach((element, index) => {
                if (translations[index] && translations[index].translations) {
                    element.textContent = translations[index].translations[0].text;
                }
            });
        }

        if (htmlElements.length > 0) {
            htmlElements.forEach(async (element) => {
                const links = Array.from(element.getElementsByTagName('a'));
                const text = element.innerHTML;
                
                const linkMap = links.reduce((map, link) => {
                    map[link.textContent] = link.outerHTML;
                    return map;
                }, {});

                const response = await fetch(`${TRANSLATOR_ENDPOINT}?api-version=3.0&from=pt&to=${userLang}`, {
                    method: 'POST',
                    headers: {
                        'Ocp-Apim-Subscription-Key': TRANSLATOR_KEY,
                        'Ocp-Apim-Subscription-Region': TRANSLATOR_REGION,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify([{ text }])
                });

                const [{ translations }] = await response.json();
                let translatedText = translations[0].text;

                Object.entries(linkMap).forEach(([original, link]) => {
                    translatedText = translatedText.replace(original, link);
                });

                element.innerHTML = translatedText;
            });
        }
    } catch (error) {
        console.error('Translation error:', error);
    }
}

function initLazyTranslation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                translateContainer(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '100px' });

    document.querySelectorAll('.chart-container').forEach(container => {
        observer.observe(container);
    });

    const menuContainer = document.querySelector('.menu-container');
    if (menuContainer) {
        translateContainer(menuContainer);
    }
}

document.addEventListener('DOMContentLoaded', initLazyTranslation); 
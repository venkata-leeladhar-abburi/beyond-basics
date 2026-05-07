const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('https://coursesite.framer.website/', { waitUntil: 'networkidle0' });

  // take screenshot
  await page.screenshot({ path: 'full-page.png', fullPage: true });

  const data = await page.evaluate(() => {
    function getStyles(el) {
      if (!el) return null;
      const computed = window.getComputedStyle(el);
      return {
        tagName: el.tagName,
        className: el.className,
        text: el.innerText ? el.innerText.trim().substring(0, 50) : '',
        bg: computed.backgroundColor,
        color: computed.color,
        fontFamily: computed.fontFamily,
        fontSize: computed.fontSize,
        fontWeight: computed.fontWeight,
        borderRadius: computed.borderRadius,
        padding: computed.padding,
        margin: computed.margin,
        boxShadow: computed.boxShadow,
        backgroundImage: computed.backgroundImage,
      };
    }

    const sections = Array.from(document.querySelectorAll('section, div')).filter(el => el.offsetWidth > 100 && el.offsetHeight > 50).map(getStyles);
    const textElements = Array.from(document.querySelectorAll('h1, h2, h3, p, a, button, span')).filter(el => el.innerText && el.innerText.trim().length > 0).map(getStyles);
    
    // remove duplicates
    const uniqueStyles = {};
    textElements.forEach(s => {
      if (s) uniqueStyles[`${s.tagName}-${s.className}-${s.fontSize}-${s.color}-${s.bg}`] = s;
    });

    const uniqueSections = {};
    sections.forEach(s => {
      if (s && s.bg !== 'rgba(0, 0, 0, 0)') {
        uniqueSections[`${s.tagName}-${s.className}-${s.bg}-${s.backgroundImage}`] = s;
      }
    });

    return {
      sections: Object.values(uniqueSections),
      textStyles: Object.values(uniqueStyles)
    };
  });

  fs.writeFileSync('styles.json', JSON.stringify(data, null, 2));
  console.log('Saved to styles.json');

  await browser.close();
})();

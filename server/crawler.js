/* eslint-disable no-console, no-await-in-loop, object-curly-newline */

const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const fs = require('fs');

const CONTENTS_URL = 'https://balaan.co.kr/m2/main/contents.php';

(async () => {
  const contents = await loadContents(CONTENTS_URL, { leastItems: 500 });
  const $ = cheerio.load(contents);

  const result = $('.contents-item')
    .map(function readData() {
      const listView = $(this).find('.contents-for-list');
      const header = listView.find('.contents-header');
      const body = listView.find('.contents-body');
      return {
        id: $(this).attr('data-id'),
        username: header.find('.contents-editor').text(),
        review: body.find('.list-content').text(),
        images: body
          .find('.images .swiper-wrapper')
          .children('.swiper-slide')
          .map((i, thisArg) => {
            const source = $(thisArg).find('source');
            const type = source.attr('type');
            const srcset = source.attr('srcset');
            const src = source.next('img').attr('src');
            return { id: i + 1, type, srcset, src };
          })
          .toArray(),
        stars: Math.round(Math.random() * 4) + 1,
        best: !body.find('.best').hasClass('off'),
        description: body
          .find('.desc')
          .text()
          .replaceAll(/\s+/g, ' ')
          .replaceAll(/((\[object Object\],?)( \/ )?)/g, ''),
        deliveryDay: parseInt(body.find('.msg-delivery-day strong').text(), 10),
        shorts: body
          .find('.review-size-items')
          .children()
          .map((_, thisArg) => {
            const wrapper = $(thisArg).find('.review-size-item');
            const question = wrapper.find('.review-size-item-title').text();
            const answer = wrapper.find('.review-size-item-text').text();
            return { question, answer };
          })
          .toArray(),
        likes: body.find('.review-like-btn span').text(),
        comments: body
          .find('.replys .items')
          .children()
          .map((_, thisArg) => {
            const reply = $(thisArg).find('.content');
            const id = $(thisArg).attr('data-id');
            const username = reply.find('a').text();
            const target = $(thisArg).find('span.target').text() || null;
            const comment = reply.find('div').text();
            return { id, username, target, comment };
          })
          .toArray(),
        hashTags: body
          .find('.hashtags')
          .children()
          .map((_, thisArg) => $(thisArg).text())
          .toArray()
          .slice(1),
        createdAt: header.find('.contents-reg-date').text(),
      };
    })
    .toArray();

  fs.writeFileSync('data.json', JSON.stringify(result));
})();

async function loadContents(
  url,
  { leastItems = 48, timeout = 1000, silent = false, maxRetryCount = 3 },
) {
  const log = (message) => silent || console.log(message);
  const group = (message) => silent || console.group(message);
  const groupEnd = () => silent || console.groupEnd();

  log('🚀 Initializing a Browser...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  log(`🔗 Going to ${url}...`);
  await page.goto(url);

  log('🔦 Finding iframe and getting its #document...');
  const iframe = page.frames().find((frame) => frame.name() === 'ifr');
  const html = await iframe.$('html');

  const getItemsLength = async () => (await html.$$('.contents-item')).length;

  if (getItemsLength < leastItems) {
    group('🌱 Starting infinite scrolling...');
    const length = { previous: 0, current: 0 };
    let count = 1;
    let retry = 0;
    while (length.current < leastItems) {
      if (retry === maxRetryCount) {
        log('🚨 Contents could not load anymore!');
        break;
      }
      await html.evaluate('window.scrollTo(0, document.body.scrollHeight)');
      await iframe.waitForTimeout(timeout);

      length.previous = length.current;
      length.current = await getItemsLength();
      retry += length.previous === length.current;
      log(`#${count}: ${length.current} items`);
      count += 1;
    }
    groupEnd();
    log('🌳 Finished infinite scrolling!');
  }

  const contents = await html.$eval('#contents-list', (element) => element.innerHTML);
  await browser.close();

  log('😁 Completely Contents Loaded!!');
  return contents;
}

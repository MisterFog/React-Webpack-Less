import React, { Component } from 'react';
import Simplecrawler from 'simplecrawler';
import cheerio from 'cheerio';
import './Crawler.less';

export default class Crawler extends Component {
  render() {
    var crawler = new Simplecrawler('http://www.google.com');
    var i = 1;
    let search = [];

    /** Определяет интервал, с которым сканер порождает новые запросы */
    crawler.interval = 5000; // 5 seconds

    /** Максимальный параллелизм запроса (ограничение колличества запросов) */
    crawler.maxConcurrency = 3;

    /** Глубина поиска */
    crawler.maxDepth = 2; // извлекается первая страница и найденные ссылки с нее

    /** Управляет соблюдением искателем правил robots.txt для любого домена*/
    crawler.respectRobotsTxt = true;

    /** Определяет, выбирает ли сканер только те URL-адреса, где имя хоста соответствует хосту */
    crawler.filterByDomain = true;

    /**Определяет, следует ли извлекать URL-адреса, указывающие на поддомен хоста */
    crawler.scanSubdomains = true;

    /** Фильтер*/
    crawler.queue.filterItems(
      {
        stateData: {
          code: 301
        }
      },
      function(error, items) {
        console.log(
          '%c%s',
          'color: red;',
          'These items returned a 301 HTTP status',
          items
        );
      }
    );

    crawler.on('crawlstart', function() {
      console.log('%c%s', 'color: orange;', 'Crawler starting');
    });

    /** Увольняется сразу после того, как запрос был инициирован */
    crawler.on('fetchstart', function(queueItem) {
      console.log('fetchStart', queueItem);
    });

    /** Выполняется, когда запрос завершен */
    crawler.on('fetchcomplete', function(queueItem, responseBuffer, response) {
      if (queueItem.stateData['code'] === 200) {
        console.log(
          '%c%s',
          'color: green; font: 1.2rem/1 Tahoma;',
          'Запрос № ' + i++
        );
        console.log(
          'I just received: %s (%d bytes)',
          queueItem.url,
          responseBuffer.length
        );
        console.log(
          'It was a resource of type: %s ',
          response.headers['content-type']
        );

        /** Поиск по HTML странице тегов ссылок с помощью cheerio*/
        crawler.discoverResources = function(buffer, queueItem) {
          var $ = cheerio.load(buffer.toString('utf8'));
          var n = 1;
          // return console.log($.html());

          return $('link[href]')
            .map(function() {
              console.log(
                '%c%s',
                'color: blue;',
                n++ + ') ',
                $(this).attr('href')
              );

              search += $(this).attr('href');

              return search;
            })
            .get();
        };
      }
    });

    crawler.on('complete', function() {
      console.log('%c%s', 'color: orange;', 'Finished!');
    });

    crawler.start();

    return (
      <div className="crawler">
        <h2> На сайте найдено: </h2>{' '}
        {search.length !== 0 ? (
          search.map(number => {
            return <li> {number} </li>;
          })
        ) : (
          <li> 0 </li>
        )}{' '}
      </div>
    );
  }
}

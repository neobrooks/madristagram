import React from 'react';
import "./blogsection.css"

const truncateText = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return words.slice(0, limit).join(' ') + '...';
  }
  return text;
};

const BlogSection = () => {
  return (
    <>
      <section className="cards-wrapper">
        <div className="card-grid-space">
          <div className="num">01</div>
          <a
            className="card"
            href="https://saswatsusmoy8013.wixsite.com/my-site/post/real-madrid-president-manager-and-captain-won-2022-european-golden-boy-awards-in-their-categories"
            style={{
              '--bg-img':
                'url(https://static.wixstatic.com/media/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg/v1/fill/w_925,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg)',
            }}
          >
            <div>
              <h1>{truncateText("Real Madrid President, Manager and Captain won 2022 European Golden Boy Awards in their categories", 8)}</h1>
              <p>{truncateText("Real Madrid President, Florentino Pérez received the 2022 Golden Boy Award for the most highly valued club President of the year according to Italian sports newspaper Tuttosport. Guido Vaciago, director of the paper, presented him with the trophy in the boardroom at Real Madrid City.", 12)}</p>
              <div className="date">9 Nov 2022</div>
              <div className="tags">
                <div className="tag">News</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
        <div className="num">01</div>
          <a
            className="card"
            href="https://saswatsusmoy8013.wixsite.com/my-site/post/real-madrid-president-manager-and-captain-won-2022-european-golden-boy-awards-in-their-categories"
            style={{
              '--bg-img':
                'url(https://static.wixstatic.com/media/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg/v1/fill/w_925,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg)',
            }}
          >
            <div>
              <h1>{truncateText("Real Madrid President, Manager and Captain won 2022 European Golden Boy Awards in their categories", 8)}</h1>
              <p>{truncateText("Real Madrid President, Florentino Pérez received the 2022 Golden Boy Award for the most highly valued club President of the year according to Italian sports newspaper Tuttosport. Guido Vaciago, director of the paper, presented him with the trophy in the boardroom at Real Madrid City.", 12)}</p>
              <div className="date">9 Nov 2022</div>
              <div className="tags">
                <div className="tag">News</div>
              </div>
            </div>
          </a>
        </div>
        <div className="card-grid-space">
        <div className="num">01</div>
          <a
            className="card"
            href="https://saswatsusmoy8013.wixsite.com/my-site/post/real-madrid-president-manager-and-captain-won-2022-european-golden-boy-awards-in-their-categories"
            style={{
              '--bg-img':
                'url(https://static.wixstatic.com/media/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg/v1/fill/w_925,h_520,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e1b4c3_cbb74cbddcd847eeaa461729cef626c6~mv2.jpg)',
            }}
          >
            <div>
              <h1>{truncateText("Real Madrid President, Manager and Captain won 2022 European Golden Boy Awards in their categories", 8)}</h1>
              <p>{truncateText("Real Madrid President, Florentino Pérez received the 2022 Golden Boy Award for the most highly valued club President of the year according to Italian sports newspaper Tuttosport. Guido Vaciago, director of the paper, presented him with the trophy in the boardroom at Real Madrid City.", 12)}</p>
              <div className="date">9 Nov 2022</div>
              <div className="tags">
                <div className="tag">News</div>
              </div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default BlogSection;

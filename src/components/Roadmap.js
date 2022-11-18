import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  const [pricingstyle, setPricingstyle] = useState({});
  const [pricingstyle1, setPricingstyle1] = useState({});

  useEffect(() => {
    AOS.init();

    setTimeout(() => {
      const newStyle = {
        // marginLeft: "0",
      };
      const newStyle1 = {
        // marginLeft: "0",
      };

      setPricingstyle(newStyle);
      setPricingstyle1(newStyle1);
    }, 600);
  }, []);

  return (
    <div
      id="roadmap"
      className="timeline_section top"
      style={{
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
      }}
    >
      <div className="container">
        <div className="timeline__title">
          <h4 className="wow fadeInDown">Utility & Roadmap</h4>
        </div>
      </div>
      <div className="timeline">
        <div
          className="section left section__one wow bounceInLeft"
          data-wow-duration="1s"
          data-wow-delay={`1s`}
        >
          <div className="content">
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
            <div className="border4"></div>
            <div className="content__title">
              <span>Phase 1 Q3</span>
            </div>
            <div className="content__list">
              <ul>
                <li>$Piratebux presale</li>
                <li>Public sale of $Piratebux</li>
                <li>Pirate Bux website redesign</li>
                <li>Gen 1 NFTs Launch with Utility for Token holders</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="section right section__two wow bounceInRight"
          data-wow-duration="1s"
          data-wow-delay={`1s`}
        >
          <div className="content">
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
            <div className="border4"></div>
            <div className="content__title">
              <span>Phase 2 Q3</span>
            </div>
            <div className="content__list">
              <ul>
                <li>Gen 2 NFTs Launch Outbreak</li>
                <li>Staking Platform released</li>
                <li>IRL events</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="section left section__three wow bounceInLeft"
          data-wow-duration="1s"
          data-wow-delay={`1s`}
        >
          <div className="content">
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
            <div className="border4"></div>
            <div className="content__title">
              <span>Phase 3 Q4</span>
            </div>
            <div className="content__list">
              <ul>
                <li>Gen 3 NFTs launch Evolution</li>
                <li>Rev share liquidity pools</li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="section right section__four wow bounceInRight"
          data-wow-duration="1s"
          data-wow-delay={`1s`}
        >
          <div className="content">
            <div className="border1"></div>
            <div className="border2"></div>
            <div className="border3"></div>
            <div className="border4"></div>
            <div className="content__title">
              <span>Phase 4</span>
            </div>
            <div className="content__list">
              <ul>
                <li>DAO setup</li>
                <li>Roadmap 2.0 Q4 and beyond</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* responsive timeline */}
      <div
        className="timeline_section1 top1"
        style={{
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover",
        }}
      >
        <div className="timelineres">
          <div
            className="section right section__one wow bounceInLeft"
            data-wow-duration="1s"
            data-wow-delay={`1s`}
          >
            <div className="content">
              <div className="extra">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                <div className="content__title">
                  <span>Phase 1 Q3</span>
                </div>
                <div className="content__list">
                  <ul>
                    <li>$Piratebux presale</li>
                    <li>Public sale of $Piratebux</li>
                    <li>Pirate Bux website redesign</li>
                    <li>Gen 1 NFTs Launch with Utility for Token holders</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section right section__two wow bounceInRight"
            data-wow-duration="1s"
            data-wow-delay={`1s`}
          >
            <div className="content">
              <div className="extra">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                <div className="content__title">
                  <span>Phase 2 Q3</span>
                </div>
                <div className="content__list">
                  <ul>
                    <li>Gen 2 NFTs Launch Outbreak</li>
                    <li>Staking Platform released</li>
                    <li>IRL events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section right section__three wow bounceInLeft"
            data-wow-duration="1s"
            data-wow-delay={`1s`}
          >
            <div className="content">
              <div className="extra">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                <div className="content__title">
                  <span>Phase 3 Q4</span>
                </div>
                <div className="content__list">
                  <ul>
                    <li>Gen 3 NFTs launch Evolution</li>
                    <li>Rev share liquidity pools</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section right section__four wow bounceInRight"
            data-wow-duration="1s"
            data-wow-delay={`1s`}
          >
            <div className="content">
              <div className="extra">
                <div className="border1"></div>
                <div className="border2"></div>
                <div className="border3"></div>
                <div className="border4"></div>
                <div className="content__title">
                  <span>Phase 4</span>
                </div>
                <div className="content__list">
                  <ul>
                    <li>DAO setup</li>
                    <li>Roadmap 2.0 Q4 and beyond</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

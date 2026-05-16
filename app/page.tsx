"use client";
import FullScreenMenu from "@/libs/components/FullScreenMenu/FullScreenMenu";
import Navbar from "@/libs/components/Navbar/Navbar";
import { ExternalLinkIcon } from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  {
    id: 1,
    name: "香浓咖喱饭",
    nameEn: "Fragrant Curry Rice",
    price: "RM 7",
    emoji: "🍛",
    tag: "招牌",
    tagColor: "#C0392B",
    description: "浓郁香料精心熬制，搭配软烂入味的配料，香气四溢。",
    imgLink: '/img/curry-chicken.jpg',
  },
  {
    id: 2,
    name: "秘制卤肉饭",
    nameEn: "Signature Braised Pork Rice",
    price: "RM 8",
    emoji: "🍖",
    tag: "必点",
    tagColor: "#8B4513",
    description: "祖传秘方慢火卤制，肉质软嫩，卤汁醇厚，回味无穷。",
    imgLink: '/img/lu-rou-fan.jpg',
  },
  {
    id: 3,
    name: "亚叁鱼",
    nameEn: "Asam Fish",
    price: "时价",
    emoji: "🐟",
    tag: "限定",
    tagColor: "#1A5276",
    description: "每逢星期六与星期日限定供应，酸辣开胃，新鲜现煮。",
    limited: true,
    imgLink: '/img/asam-yu.jpg',
  },
  {
    id: 4,
    name: "自制糕点",
    nameEn: "Homemade Kuih",
    price: "RM 5",
    emoji: "🍡",
    tag: "手工",
    tagColor: "#76448A",
    description: "每日新鲜手工制作，传统风味，甜而不腻。",
    imgLink: "/img/haoyi-cake-green.jpg",
  },
];

const contactMenuItems = [
  {
    icon: "📍",
    label: "地点",
    value: "合记美食坊",
    sub: "117, Jalan Setia Jaya Utama, Taman Setia Jaya, 83000 Batu Pahat, Johor",
    href: "https://maps.app.goo.gl/b8or6jJgYMpyTJcn8",
  },
  {
    icon: "📞",
    label: "电话",
    value: "+60 12-769 1851",
    sub: null,
    href: "tel:+60127691851",
  },
  {
    icon: "💬",
    label: "WhatsApp",
    value: "点击联系",
    sub: null,
    href: "https://wa.me/60127691851",
  },
  {
    icon: "📘",
    label: "Facebook",
    value: "好意家乡卤肉饭",
    sub: null,
    href: "https://www.facebook.com/profile.php?id=61588888032115",
  },
];

const hours = [
  { day: "星期一至三 & 五", time: "4:00pm – 8:30pm", open: true },
  { day: "星期六 & 天", time: "3:00pm – 8:30pm", open: true },
  { day: "星期四", time: "休息", open: false },
];

// Placeholder food image colors (since no real images yet)
const cardBg = [
  "linear-gradient(135deg,#f5e6c8 0%,#e8c98a 100%)",
  "linear-gradient(135deg,#f2d0b0 0%,#d4956a 100%)",
  "linear-gradient(135deg,#c8e0ef 0%,#7fb3d3 100%)",
  "linear-gradient(135deg,#e8d5f0 0%,#b07cc6 100%)",
];

// function useScrollReveal() {
//   useEffect(() => {
//     const els = document.querySelectorAll(".reveal");
//     const io = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((e) => {
//           if (e.isIntersecting) {
//             (e.target as HTMLElement).style.opacity = "1";
//             (e.target as HTMLElement).style.transform = "translateY(0)";
//           }
//         });
//       },
//       { threshold: 0.12 }
//     );
//     els.forEach((el) => io.observe(el));
//     return () => io.disconnect();
//   }, []);
// }

export default function Home() {
  const [menuHover, setMenuHover] = useState<number | null>(null);
  const [isFullScreenMenuOpen, setIsFullScreenMenuOpen] = useState(false);
  // useScrollReveal();

  return (
    <>
      <Navbar onOpenMenu={() => setIsFullScreenMenuOpen(true)}/>
      <main
        style={{
          background: "#FAF6EE",
          color: "#1C1008",
          minHeight: "100vh",
          overflowX: "hidden",
        }}
      >

        <FullScreenMenu isOpen={isFullScreenMenuOpen} onClose={() => setIsFullScreenMenuOpen(false)}/>

        {/* HERO BANNER */}
        <section
          style={{
            position: "relative",
            minHeight: "60vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            background:
              "linear-gradient(160deg, #2C1005 0%, #5C2910 40%, #8B3A15 70%, #C05020 100%)",
          }}
        >
          <div className="banner-grain" />

          {/* Decorative circles */}
          {/* {[
            { size: 600, x: "-10%", y: "-20%", opacity: 0.06 },
            { size: 400, x: "70%", y: "40%", opacity: 0.05 },
            { size: 200, x: "85%", y: "-10%", opacity: 0.08 },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: c.size,
                height: c.size,
                borderRadius: "50%",
                border: "1px solid rgba(255,200,100,0.3)",
                left: c.x,
                top: c.y,
                pointerEvents: "none",
              }}
            />
          ))} */}

          {/* Vertical Chinese text accent */}
          <div
            style={{
              position: "absolute",
              left: "5vw",
              top: "50%",
              transform: "translateY(-50%)",
              writingMode: "vertical-rl",
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              color: "rgba(255,200,120,0.5)",
              userSelect: "none",
            }}
          >
            家乡味道 · 用心烹调
          </div>

          <div
            style={{
              position: "relative",
              zIndex: 3,
              textAlign: "center",
              padding: "0 5vw",
              maxWidth: 800,
            }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "0.8rem",
                letterSpacing: "0.3em",
                color: "#E8A050",
                marginBottom: 20,
                opacity: 0.9,
              }}
            >
              ✦ 柔佛 · 峇株巴辖 ✦
            </p>
            <h1
              className="hero-title"
              style={{
                fontWeight: 700,
                fontSize: "clamp(3rem, 9vw, 5.5rem)",
                color: "#FFF8F0",
                lineHeight: 1.15,
                letterSpacing: "0.04em",
                marginBottom: 12,
                textShadow: "0 4px 24px rgba(0,0,0,0.3)",
              }}
            >
              好意家乡
              <br />
              <span style={{ color: "#E8A050" }}>卤肉饭</span>
            </h1>
            <p
              className="hero-sub"
              style={{
                fontWeight: 300,
                fontSize: "1.1rem",
                color: "rgba(255,240,210,0.8)",
                letterSpacing: "0.1em",
                marginBottom: 44,
                lineHeight: 1.8,
              }}
            >
              秘制卤肉 · 香浓咖喱 · 家乡传统风味
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="#菜单" className="cta-btn cta-primary">
                查看菜单 →
              </a>
              <a
                href="https://wa.me/60127691851"
                className="cta-btn cta-secondary contact-us-btn"
              >
                📲 联系我们
              </a>
            </div>
          </div>

          {/* Bottom wave */}
          {/* <div
            style={{
              position: "absolute",
              bottom: -1,
              left: 0,
              right: 0,
              zIndex: 4,
            }}
          >
            <svg
              viewBox="0 0 1440 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: "block", width: "100%" }}
            >
              <path
                d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z"
                fill="#FAF6EE"
              />
            </svg>
          </div> */}
        </section>

        {/* TAGLINE STRIP */}
        <div
          style={{
            background: "#FAF6EE",
            padding: "40px 5vw",
            textAlign: "center",
          }}
        >
          <p
            className="reveal"
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#7A4A20",
              letterSpacing: "0.15em",
              lineHeight: 2,
              fontWeight: 300,
            }}
          >
            每一口都是家的味道
            <span style={{ color: "#C0392B", margin: "0 16px" }}>·</span>
            新鲜食材每日用心烹调
            <span style={{ color: "#C0392B", margin: "0 16px" }}>·</span>
            传承家乡卤味精髓
          </p>
        </div>


        <div className="flex justify-center gap-5 flex-wrap" style={{ paddingInline: '5vw'}}>
          <div className="w-full max-w-[400px] relative flex justify-center gap-5">
            <img src="/img/hao-yi-jia-xiang-ru-rou-fan.jpg" alt="" className="w-auto h-full rounded-2xl shadow-xl object-cover" />
          </div>
          <div className="w-full max-w-[400px] relative flex justify-center gap-5">
            <img src="/img/haoyi-kitchen-location.jpg" alt="" className="w-auto h-full rounded-2xl shadow-xl object-cover" />
          </div>
        </div>

        {/* MENU SECTION */}
        <section
          id="菜单"
          style={{
            padding: "60px 5vw 80px",
            maxWidth: 1100,
            margin: "0 auto",
            scrollMarginTop: '100px',
          }}
        >
          <div className="reveal" style={{ marginBottom: 48, textAlign: "center" }}>
            <p className="section-label">Our Menu · 我们的菜单</p>
            <div className="divider" style={{ margin: "16px auto" }} />
            <h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 700,
                color: "#1C1008",
              }}
            >
              精选菜品
            </h2>
          </div>

          <div
            className="menu-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {menuItems.map((item, i) => (
              <div
                key={item.id}
                className={`menu-card reveal`}
                style={{ transitionDelay: `${i * 0.08}s` }}
                onMouseEnter={() => setMenuHover(item.id)}
                onMouseLeave={() => setMenuHover(null)}
              >
                {/* Food image placeholder */}
                <div
                  style={{
                    height: 180,
                    background: cardBg[i],
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 64,
                    position: "relative",
                  }}
                >
                  {item.imgLink ? (
                    <img src={item.imgLink} alt="" className="w-full h-full object-cover" />
                  ) : (
                    <span style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
                      {item.emoji}
                    </span>
                  )}
                  {item.limited && (
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "#1A5276",
                        color: "#fff",
                        fontSize: "0.7rem",
                        padding: "4px 12px",
                        borderRadius: 20,
                        letterSpacing: "0.05em",
                      }}
                    >
                      周末限定
                    </div>
                  )}
                </div>
                <div style={{ padding: "18px 20px 20px" }}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}
                  >
                    <span
                      style={{
                        background: item.tagColor + "18",
                        color: item.tagColor,
                        fontSize: "0.68rem",
                        padding: "2px 10px",
                        borderRadius: 20,
                        fontWeight: 600,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#1C1008",
                      marginBottom: 4,
                    }}
                  >
                    {item.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.78rem",
                      color: "#9B7A50",
                      letterSpacing: "0.03em",
                      marginBottom: 12,
                    }}
                  >
                    {item.nameEn}
                  </p>
                  <p
                    style={{
                      fontSize: "0.82rem",
                      color: "#6B4F30",
                      lineHeight: 1.65,
                      marginBottom: 16,
                    }}
                  >
                    {item.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: '"Playfair Display", serif',
                        fontSize: "1.4rem",
                        fontWeight: 700,
                        color: "#C0392B",
                      }}
                    >
                      {item.price}
                    </span>
                    {item.limited && (
                      <span
                        style={{
                          fontSize: "0.7rem",
                          color: "#1A5276",
                        }}
                      >
                        六 & 日供应
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* INFO SECTION */}
        <section
          id="营业时间"
          style={{
            padding: "0 5vw",
            maxWidth: 1100,
            margin: "0 auto",
            scrollMarginTop: '100px',
          }}
        >
          <div
            className="info-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 40,
              alignItems: "start",
            }}
          >
            {/* Hours */}
            <div className="reveal">
              <p className="section-label">Hours · 营业时间</p>
              <div className="divider" />
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  marginBottom: 28,
                  color: "#1C1008",
                }}
              >
                营业时间
              </h2>
              {hours.map((h) => (
                <div
                  key={h.day}
                  className="hours-row"
                  style={{
                    background: h.open ? "#FFF8F0" : "#F5F0E8",
                    border: h.open ? "1px solid #EED8B0" : "1px solid #E0D8C8",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.95rem",
                      color: h.open ? "#4A2800" : "#999",
                      fontWeight: 600,
                    }}
                  >
                    {h.day}
                  </span>
                  <span
                    style={{
                      fontSize: "0.9rem",
                      color: h.open ? "#C0392B" : "#AAA",
                      fontWeight: h.open ? 600 : 400,
                    }}
                  >
                    {h.time}
                  </span>
                </div>
              ))}
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "#9B7A50",
                  marginTop: 16,
                  letterSpacing: "0.05em",
                }}
              >
                ※ 每逢星期四休息，敬请留意
              </p>
            </div>

            {/* Location & Contact */}
            <div id="联系我们" className="reveal" style={{ transitionDelay: "0.12s", scrollMarginTop: '100px', }}>
              <p className="section-label">Contact · 联系方式</p>
              <div className="divider" />
              <h2
                style={{
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  marginBottom: 28,
                  color: "#1C1008",
                }}
              >
                联系我们
              </h2>
              <div
                style={{
                  background: "#fff",
                  borderRadius: 16,
                  padding: "4px 20px",
                  border: "1px solid #EEE5D0",
                  boxShadow: "0 2px 12px rgba(120,60,10,0.05)",
                }}
              >
                {contactMenuItems.map((info) => (
                  <div key={info.label} className="info-row">
                    <div className="info-icon">{info.icon}</div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.72rem",
                          color: "#9B7A50",
                          letterSpacing: "0.1em",
                          marginBottom: 2,
                        }}
                      >
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#C0392B",
                            textDecoration: "none",
                          }}
                          className="flex gap-1 items-center"
                        >
                          {info.value}
                           <ExternalLinkIcon size={15} />
                        </a>
                      ) : (
                        <p
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: "#1C1008",
                          }}
                        >
                          {info.value}
                        </p>
                      )}
                      {info.sub && (
                        <p
                          style={{
                            fontSize: "0.78rem",
                            color: "#7A5A30",
                            lineHeight: 1.5,
                            marginTop: 2,
                          }}
                        >
                          {info.sub}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT BANNER */}
        <section
          className="mt-5"
          style={{
            background:
              "linear-gradient(135deg, #3D1A06 0%, #6B2E0E 50%, #4A1A05 100%)",
            padding: "80px 5vw",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="banner-grain" />
          <div
            style={{
              position: "absolute",
              right: "-5%",
              top: "-20%",
              width: 500,
              height: 500,
              borderRadius: "50%",
              border: "1px solid rgba(255,180,60,0.15)",
              pointerEvents: "none",
            }}
          />
          <div
            id="关于我们"
            className="reveal"
            style={{ maxWidth: 700, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1, scrollMarginTop: '100px', }}
          >
            <p
              style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: "0.75rem",
                letterSpacing: "0.3em",
                color: "#E8A050",
                marginBottom: 16,
              }}
            >
              ABOUT US · 关于我们
            </p>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: "#FFF8F0",
                lineHeight: 1.4,
                marginBottom: 24,
              }}
            >
              用心烹调，家的味道
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,230,190,0.8)",
                lineHeight: 2,
                fontWeight: 300,
                letterSpacing: "0.05em",
              }}
            >
              我们坚持以新鲜食材，每日用心烹煮每一碗卤肉饭与咖喱饭。
              每一口，都是家乡的温暖。
              <br />
              <br />
              欢迎光临好意家乡卤肉饭，感受那一份来自柔佛峇株巴辖的地道家乡风味。
            </p>
          </div>
        </section>

        {/* CTA BANNER */}
        <section
          style={{
            background:
              "linear-gradient(135deg, #FAF0E0 0%, #FDE8C8 50%, #F5E0B0 100%)",
            padding: "60px 5vw",
            textAlign: "center",
            borderTop: "1px solid #EED8B0",
            borderBottom: "1px solid #EED8B0",
          }}
        >
          <div className="reveal">
            <p
              style={{
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                fontWeight: 700,
                color: "#3D1A06",
                marginBottom: 8,
              }}
            >
              今天来一碗卤肉饭吧！🍱
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                color: "#7A4A20",
                marginBottom: 28,
                letterSpacing: "0.05em",
              }}
            >
              欢迎光临，好吃不贵，家乡味道等您品尝
            </p>
            <div
              style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}
            >
              <a
                href="https://wa.me/60127691851"
                className="cta-btn cta-primary"
              >
                📲 WhatsApp 我们
              </a>
              <a
                href="https://www.google.com/maps/search/117+Jalan+Setia+Jaya+Utama+Batu+Pahat"
                className="cta-btn cta-secondary"
                target="_blank"
                rel="noreferrer"
              >
                📍 查看地图
              </a>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            background: "#1C1008",
            padding: "36px 5vw",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.1rem",
              fontWeight: 700,
              color: "#E8A050",
              marginBottom: 8,
              letterSpacing: "0.05em",
            }}
          >
            好意家乡卤肉饭
          </p>
          <p
            style={{
              fontSize: "0.78rem",
              color: "rgba(255,220,150,0.45)",
              letterSpacing: "0.1em",
            }}
          >
            合记美食坊 · Batu Pahat, Johor · © 2025
          </p>
        </footer>
      </main>
    </>
  );
}
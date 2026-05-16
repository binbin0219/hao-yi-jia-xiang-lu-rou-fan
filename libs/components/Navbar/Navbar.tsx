type Props = {
  onOpenMenu: () => void;
};

export default function NavBar({ onOpenMenu }: Props) {
  return (
    <>
      {/* NAV */}
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: "rgba(250,246,238,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #EEE5D0",
          padding: "0 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Left brand */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 22 }}>🍱</span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#1C1008",
              letterSpacing: "0.02em",
            }}
          >
            好意家乡卤肉饭
          </span>
        </div>

        {/* Desktop links */}
        <div
          className="nav-links hidden md:flex"
          style={{ gap: 32, alignItems: "center" }}
        >
          {["菜单", "关于我们", "营业时间", "联系我们"].map((t) => (
            <a
              key={t}
              href={`#${t}`}
              className="nav-link"
            >
              {t}
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA button (desktop + mobile optional) */}
          <a
            href="https://wa.me/60127691851"
            className="cta-btn cta-primary hidden md:inline-flex"
            style={{ fontSize: "0.75rem", padding: "6px 14px" }}
          >
            📲 WhatsApp 我们
          </a>

          {/* Mobile menu button */}
          <button
            onClick={onOpenMenu}
            className="md:hidden flex items-center justify-center"
            aria-label="Open menu"
            style={{
              fontSize: "1.4rem",
              padding: "6px 10px",
              color: "#1C1008",
            }}
          >
            ☰
          </button>
        </div>
      </nav>
    </>
  );
}
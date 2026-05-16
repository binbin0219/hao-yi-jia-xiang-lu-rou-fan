import styles from "./styles.module.css";

type FullScreenMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = ["菜单", "关于我们", "营业时间", "联系我们"];

export default function FullScreenMenu({
  isOpen,
  onClose,
}: FullScreenMenuProps) {
  return (
    <div
      className={`
        fixed inset-0 z-[999]
        bg-[#FAF6EE]/95 backdrop-blur-xl
        flex flex-col
        transition-all duration-300
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        ${styles.overlay}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 h-16 border-b border-[#EEE5D0]">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🍱</span>
          <span className="font-serif font-bold text-[#1C1008]">
            好意家乡卤肉饭
          </span>
        </div>

        <button
          onClick={onClose}
          className="text-2xl leading-none text-[#1C1008]"
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col items-center justify-center flex-1 gap-8">
        {links.map((t) => (
          <a
            key={t}
            href={`#${t}`}
            onClick={onClose}
            className="
              text-xl text-[#1C1008]
              tracking-wide
              hover:opacity-60 transition
            "
          >
            {t}
          </a>
        ))}

        <a
            href="https://wa.me/60127691851"
            className="cta-btn cta-primary hidden md:inline-flex"
            style={{ fontSize: "0.82rem", padding: "8px 18px" }}
        >
            📲 WhatsApp 我们
        </a>
      </div>
    </div>
  );
}
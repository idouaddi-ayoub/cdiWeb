const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#ffffff"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }: any) => (
  <button onClick={toggle} className="lg:hidden">
    <svg viewBox="0 0 22 19" width={50} height={50}>
      <Path
        className="top"
        d="M 2 2.5 L 20 2.5"
        variants={{
          open: { d: "M 3 16.5 L 37 20" },
        }}
      />
      <Path className="middle" d="M 2 9.423 L 20 9.423" opacity="1" />
      <Path
        className="bottom"
        d="M 2 16.346 L 20 16.346"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
        }}
      />
    </svg>
  </button>
);
